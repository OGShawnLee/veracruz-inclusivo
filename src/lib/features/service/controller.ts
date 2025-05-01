import type { ServiceData } from './schema';
import { db } from '$lib/db';

type Nullish<T> = T | null | undefined;

interface FilterSearch {
	query?: Nullish<string>;
	limit?: Nullish<number>;
	region?: Nullish<string>;
	category?: Nullish<string>;
	page?: Nullish<number>;
}

export namespace ServiceController {
	export function createOne(data: ServiceData) {
		return db.from('service').insert(data).select('id');
	}

	export function getOne(id: number) {
		return db.from('service').select('*').eq('id', id).single();
	}

	export function getMany(limit = 10) {
		return db.from('service').select('*').order('created_at', { ascending: false }).limit(limit);
	}

	export function searchMany(filter: FilterSearch) {
		const limit = filter.limit ?? 10;

		let request = db
			.from('service')
			.select('*', { count: 'exact' })
			.order('created_at', { ascending: false })
			.limit(limit);

		if (filter.page) {
			const offset = (filter.page - 1) * limit;
			request = request.range(offset, offset + limit - 1);
		}

		if (filter.category) {
			request = request.filter('category', 'eq', filter.category);
		}

		if (filter.query) {
			request = request.textSearch('full_text_search', filter.query, {
				type: 'phrase',
				config: 'spanish'
			});
		}

		if (filter.region) {
			request = request.filter('region', 'eq', filter.region);
		}

		return request;
	}

	export function updateOne(id: number, data: Partial<ServiceData>) {
		return db
			.from('service')
			.update({
				name: data.name,
				description: data.description,
				associate_full_name: data.associate_full_name,
				phone_number: data.phone_number,
				category: data.category,
				region: data.region
			})
			.eq('id', id)
			.select('id');
	}
}
