import BCrypt from "bcrypt";
import JWT from "jsonwebtoken";
import type { Cookies, Handle } from "@sveltejs/kit";
import type { Result } from "$lib";
import { redirect } from "@sveltejs/kit";
import { isEmpty, isNullish, useAwait, useCatch } from "$lib";

export interface AuthClientConfiguration<P, U> {
  env: {
    ACCESS_TOKEN: string;
    ACCESS_TOKEN_EXPIRES_IN: JWT.SignOptions["expiresIn"];
    ACCESS_COOKIE_NAME: string;
  },
  findCurrentUserFromDB(payload: P): Promise<U | null>;
  isPayload(cookie: unknown): cookie is P;
  protectedRoutes: string[];
  signInRoute: string;
  signUpRoute: string;
}

export default class AuthClient<AuthState extends { id: string }, User extends object> {
  private ACCESS_TOKEN: AuthClientConfiguration<AuthState, User>["env"]["ACCESS_TOKEN"];
  private ACCESS_TOKEN_EXPIRES_IN: AuthClientConfiguration<AuthState, User>["env"]["ACCESS_TOKEN_EXPIRES_IN"];
  private ACCESS_COOKIE_NAME: AuthClientConfiguration<AuthState, User>["env"]["ACCESS_COOKIE_NAME"];
  private isPayload: AuthClientConfiguration<AuthState, User>["isPayload"];
  public readonly signInRoute: AuthClientConfiguration<AuthState, User>["signInRoute"];
  public readonly signUpRoute: AuthClientConfiguration<AuthState, User>["signUpRoute"];
  private protectedRoutes: AuthClientConfiguration<AuthState, User>["protectedRoutes"];
  private initialFindCurrentUser: AuthClientConfiguration<AuthState, User>["findCurrentUserFromDB"];

  public constructor(configuration: AuthClientConfiguration<AuthState, User>) {
    this.ACCESS_TOKEN = configuration.env.ACCESS_TOKEN;
    this.ACCESS_TOKEN_EXPIRES_IN = configuration.env.ACCESS_TOKEN_EXPIRES_IN;
    this.ACCESS_COOKIE_NAME = configuration.env.ACCESS_COOKIE_NAME;
    this.isPayload = configuration.isPayload;
    this.signInRoute = configuration.signInRoute;
    this.signUpRoute = configuration.signUpRoute;
    this.protectedRoutes = configuration.protectedRoutes;
    this.initialFindCurrentUser = configuration.findCurrentUserFromDB;
  }

  private createAccessCookie(payload: AuthState) {
    return JWT.sign(payload, this.ACCESS_TOKEN, { expiresIn: this.ACCESS_TOKEN_EXPIRES_IN });
  }

  public createHandleFunction(): Handle {
    const self = this;
    return function handle(input) {
      const payload = self.findAuthStateFromCookies(input.event.cookies);
      const route = input.event.route.id;

      if (isNullish(payload)) {
        if (route && self.isInProtectedRoute(route)) {
          throw redirect(302, self.signInRoute);
        }
      }

      if (payload && (route === self.signInRoute || route === self.signUpRoute)) {
        throw redirect(302, "/");
      }

      return input.resolve(input.event);
    }
  }

  public createHashedPassword(password: string): Promise<string> {
    return BCrypt.hash(password, 8);
  }

  private deleteAuthCookies(cookies: Cookies): void {
    cookies.set(this.ACCESS_COOKIE_NAME, "", {
      expires: new Date(Date.now() - 3600),
      httpOnly: true,
      path: "/"
    });
  }

  public findAuthStateFromCookies(cookies: Cookies): AuthState | null {
    const initialCookie = cookies.get(this.ACCESS_COOKIE_NAME);

    if (isNullish(initialCookie) || isEmpty(initialCookie)) {
      return null;
    }

    const { data } = useCatch(() => JWT.verify(initialCookie, this.ACCESS_TOKEN));

    if (this.isPayload(data)) {
      return data;
    }

    this.deleteAuthCookies(cookies);
    return null;
  }

  public findCurrentUserFromDB(cookies: Cookies): Promise<Result<User | null>> {
    return useAwait(async () => {
      const payload = this.findAuthStateFromCookies(cookies);

      if (payload) {
        return this.initialFindCurrentUser(payload);
      }

      return null;
    });
  }

  public getAuthFromCookies(cookies: Cookies): AuthState {
    const payload = this.findAuthStateFromCookies(cookies);

    if (payload) {
      return payload;
    }

    throw redirect(302, this.signInRoute);
  }

  public hasPasswordMatch(password: string, hashedPassword: string): Promise<boolean> {
    return BCrypt.compare(password, hashedPassword);
  }

  private isInProtectedRoute(route: string): boolean {
    return this.protectedRoutes.some((it) => route.includes(it));
  }

  private setAccessCookie(cookies: Cookies, payload: AuthState): void {
    cookies.set(this.ACCESS_COOKIE_NAME, this.createAccessCookie(payload), {
      httpOnly: true,
      secure: true,
      path: "/"
    });
  }

  public signIn(cookies: Cookies, payload: AuthState): void {
    this.setAccessCookie(cookies, payload);
  }

  public signOut(cookies: Cookies): void {
    this.deleteAuthCookies(cookies);
  }
}