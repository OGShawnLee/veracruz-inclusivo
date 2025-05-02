import auth from '$lib/auth';
import { AccountSchema } from '@features/auth/schema';
import { AuthDAO } from '@features/auth/controller';
import { setError, superValidate as validate } from 'sveltekit-superforms/server';
import { valibot } from 'sveltekit-superforms/adapters';
import { error, fail, redirect } from '@sveltejs/kit';

export async function load() {
  return {
    form: await validate(valibot(AccountSchema))
  };
}

export const actions = {
  async default(event) {
    const form = await validate(event, valibot(AccountSchema));

    if (form.valid === false) {
      return fail(400, form);
    }

    const { error: err } = await AuthDAO.createUser({
      email: form.data.email,
      name: form.data.name,
      password: await auth.createHashedPassword(form.data.password)
    });
    
    if (err) {
      if (err.code === '23505') {
        form.data.password = '';
        return setError(form, 'email', 'Ya existe un usuario con ese correo electrónico.');
      }

      throw error(500, 'No ha sido posible registrar su usuario, intente más tarde.');
    }

    throw redirect(303, '/auth/sign-in');
  }
};
