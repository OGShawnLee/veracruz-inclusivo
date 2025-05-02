import { ServiceSchema } from '@features/service/schema';
import { ServiceDAO } from '@features/service/controller';
import { superValidate as validate } from 'sveltekit-superforms/server';
import { valibot } from 'sveltekit-superforms/adapters';
import { error, fail } from '@sveltejs/kit';

function isValidID(id: string) {
	return /^\d+$/.test(id);
}

export async function load(event) {
	if (event.params.id == undefined) {
		return {
			id: undefined,
			form: await validate(valibot(ServiceSchema))
		};
	}

	if (isValidID(event.params.id)) {
		const { data, error: err } = await ServiceDAO.getOne(Number(event.params.id));

		if (err) {
			error(400, 'Unable to fetch service.');
		}

		return {
			id: Number(event.params.id),
			form: await validate(data, valibot(ServiceSchema))
		};
	}

	error(400, 'Invalid ID.');
}

export const actions = {
	async default(event) {
		const form = await validate(event, valibot(ServiceSchema));

		if (form.valid === false) {
			return fail(400, form);
		}

		if (event.params.id === undefined) {
			await ServiceDAO.createOne(form.data);
			return;
		}

		if (isValidID(event.params.id)) {
			await ServiceDAO.updateOne(Number(event.params.id), form.data);
			return;
		}

		return fail(400, form);
	}
};
