import type { ServiceData } from '@features/service/schema';
import { SearchSchema } from '@features/search/schema';
import { ServiceController } from '@features/service/controller';
import { superValidate as validate } from 'sveltekit-superforms/server';
import { valibot } from 'sveltekit-superforms/adapters';
import { error } from '@sveltejs/kit';

export async function load(event) {
	const form = await validate(event.url.searchParams, valibot(SearchSchema));

	if (form.valid) {
		const { data, error: err } = await ServiceController.searchMany({
			query: form.data.query,
			limit: 10,
			region: form.data.region === 'ALL' ? undefined : form.data.region,
			category: form.data.category === 'ALL' ? undefined : form.data.category
		});

		if (err) {
			error(500, 'Error fetching services');
		}

		return { form, services: data as ServiceData[] };
	}

	error(400, 'Invalid Search Query');
}
