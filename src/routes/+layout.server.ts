import auth from "$lib/auth";

export async function load(event) {
  const currentUser = await auth.findCurrentUserFromDB(event.cookies);
  return { currentUser: currentUser.failed ? null : currentUser.data };
}