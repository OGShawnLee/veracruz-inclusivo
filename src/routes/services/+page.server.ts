import type { ServiceData } from '@features/service/schema';
import { SearchSchema } from '@features/search/schema';
import { ServiceDAO } from '@features/service/controller';
import { superValidate as validate } from 'sveltekit-superforms/server';
import { valibot } from 'sveltekit-superforms/adapters';
import { error } from '@sveltejs/kit';

export async function load(event) {
	const form = await validate(event.url.searchParams, valibot(SearchSchema));

	const limit = 12;
	if (form.valid) {
		const { data, count = 0, error: err } = await ServiceDAO.searchMany({
			query: form.data.query,
			limit: limit,
			region: form.data.region === 'ALL' ? undefined : form.data.region,
			category: form.data.category === 'ALL' ? undefined : form.data.category,
			page: form.data.page
		});

		if (err) {
			error(500, 'Error fetching services');
		}

		return { 
			count: count as number, 
			form, 
			perPage: limit, 
			services: data as ServiceData[], 
			totalPages: Math.ceil(count as number / limit) 
		};
	}

	return { count: 0, form, perPage: limit, services: [], totalPages: 0 };
}
