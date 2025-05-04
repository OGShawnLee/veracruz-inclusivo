import type { AuthData, CurrentUser } from "@features/auth/schema";
import AuthClient from "./mini-auth";
import JWT from "jsonwebtoken";
import { AuthSchema } from "@features/auth/schema";
import { ACCESS_COOKIE, ACCESS_TOKEN, ACCESS_TOKEN_EXPIRES_IN, REFRESH_COOKIE, REFRESH_TOKEN, REFRESH_TOKEN_EXPIRES_IN } from "$env/static/private";
import { AuthDAO } from "@features/auth/controller";
import { safeParse } from "valibot";

export default new AuthClient<AuthData, CurrentUser>({
  env: {
    ACCESS_TOKEN,
    ACCESS_TOKEN_EXPIRES_IN: ACCESS_TOKEN_EXPIRES_IN as JWT.SignOptions["expiresIn"],
    ACCESS_COOKIE_NAME: ACCESS_COOKIE,
    REFRESH_TOKEN,
    REFRESH_TOKEN_EXPIRES_IN: REFRESH_TOKEN_EXPIRES_IN as JWT.SignOptions["expiresIn"],
    REFRESH_COOKIE_NAME: REFRESH_COOKIE,
  },
  async findCurrentUserFromDB(payload) {
    const { data } = await AuthDAO.findUserByEmail(payload.email);
    return {
      email: data.email as string,
      name: data.name as string
    };
  },
  async getRefreshTokenFromDB(payload) {
    const { data } = await AuthDAO.findUserByEmail(payload.email);
    return data.refresh_token_version as number;
  },
  getRefreshedAuthState(payload) {
    return { id: payload.id, email: payload.email };
  },
  async incrementRefreshTokenVersion(payload) {
    const { error } = await AuthDAO.incrementRefreshTokenVersion(payload.email);
    
    if (error) {
      throw new Error("Can't Increment Refresh Token Version");
    }
  },
  isPayload(cookie): cookie is AuthData {
    return safeParse(AuthSchema, cookie).success;
  },
  protectedRoutes: ["/dashboard"],
  signInRoute: "/auth/sign-in",
  signUpRoute: "/auth/sign-up",
});