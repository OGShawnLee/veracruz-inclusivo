import auth from "$lib/auth";
import { redirect } from "@sveltejs/kit";

export function load() {
  redirect(303, "/");
}

export const actions = {
  default(event) {
    auth.signOut(event.cookies);
    redirect(303, auth.signInRoute);
  }
}
