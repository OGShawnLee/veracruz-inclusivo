import type { CurrentUser } from "@features/auth/schema";
import { createGlobalState } from "$lib";

export const CurrentUserState = createGlobalState<CurrentUser | null>("current-user");