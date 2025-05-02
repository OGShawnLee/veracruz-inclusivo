import auth from '$lib/auth';
import { SignInSchema } from '@features/auth/schema';
import { AuthDAO } from '@features/auth/controller';
import { setError, superValidate as validate } from 'sveltekit-superforms/server';
import { valibot } from 'sveltekit-superforms/adapters';
import { error, fail, redirect } from '@sveltejs/kit';

export async function load() {
  return {
    form: await validate(valibot(SignInSchema))
  };
}

export const actions = {
  async default(event) {
    const form = await validate(event, valibot(SignInSchema));

    if (form.valid === false) {
      return fail(400, form);
    }

    const { data, error: err } = await AuthDAO.findUserByEmail(form.data.email);

    if (err) {
      throw error(400, 'No ha sido posible registrar su usuario, intente más tarde.');
    }

    if (data) {
      if (await auth.hasPasswordMatch(form.data.password, data.password)) {
        auth.signIn(event.cookies, { id: data.email, email: data.email });
        throw redirect(303, '/services');
      }

      form.data.password = '';
      return setError(form, 'password', 'Las credenciales son incorrectas.');
    }

    form.data.password = '';
    return setError(form, 'email', 'No existe un usuario con ese correo electrónico.');
  }
};
