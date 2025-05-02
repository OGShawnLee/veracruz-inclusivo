import type { ServiceData } from '@features/service/schema';
import { ServiceDAO } from '@features/service/controller';
import { error } from '@sveltejs/kit';

export async function load(event) {
	const { data, error: err } = await ServiceDAO.getMany(10);

	if (err) {
		error(500, 'Error fetching services');
	}

	return { services: data as ServiceData[] };
}
