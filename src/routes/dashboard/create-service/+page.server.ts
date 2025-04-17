import { ServiceSchema } from "@features/service/schema";
import { ServiceController } from "@features/service/controller";
import { superValidate as validate } from "sveltekit-superforms/server";
import { valibot } from "sveltekit-superforms/adapters";
import { fail } from "@sveltejs/kit";

export async function load() {
  return {
    form: await validate(valibot(ServiceSchema))
  }
}

export const actions = {
  async default(event) {
    const form = await validate(event, valibot(ServiceSchema));

    if (form.valid) {
      const result = await ServiceController.createOne(form.data);
    }

    return fail(400, form);
  }
}