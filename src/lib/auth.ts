import type { AuthData, CurrentUser } from "@features/auth/schema";
import AuthClient from "./mini-auth";
import JWT from "jsonwebtoken";
import { AuthSchema } from "@features/auth/schema";
import { ACCESS_COOKIE, ACCESS_TOKEN, ACCESS_TOKEN_EXPIRES_IN } from "$env/static/private";
import { AuthDAO } from "@features/auth/controller";
import { safeParse } from "valibot";

export default new AuthClient<AuthData, CurrentUser>({
  env: {
    ACCESS_TOKEN,
    ACCESS_TOKEN_EXPIRES_IN: ACCESS_TOKEN_EXPIRES_IN as JWT.SignOptions["expiresIn"],
    ACCESS_COOKIE_NAME: ACCESS_COOKIE,
  },
  async findCurrentUserFromDB(payload) {
    const { data } = await AuthDAO.findUserByEmail(payload.email);
    return {
      email: data.email as string,
      name: data.name as string
    };
  },
  isPayload(cookie): cookie is AuthData {
    return safeParse(AuthSchema, cookie).success;
  },
  protectedRoutes: ["/dashboard"],
  signInRoute: "/auth/sign-in",
  signUpRoute: "/auth/sign-up",
});