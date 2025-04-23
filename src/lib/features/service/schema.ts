import type { InferOutput } from 'valibot';
import {
	length,
	picklist,
	maxLength,
	minLength,
	object,
	pipe,
	string,
	transform,
	trim
} from 'valibot';

function reduceSpacing(input: string) {
	return input.replace(/\s+/g, ' ');
}

export const NAME_MAX_LENGTH = 256;
export const NAME_MIN_LENGTH = 16;
export const DESCRIPTION_MAX_LENGTH = 512;
export const DESCRIPTION_MIN_LENGTH = 16;
export const ASSOCIATE_NAME_MAX_LENGTH = 256;
export const ASSOCIATE_NAME_MIN_LENGTH = 16;
export const PHONE_LENGTH = 10;

export type ServiceCategory =
	| 'GASTRONOMY'
	| 'EDUCATION'
	| 'ENTERNTAINMENT'
	| 'BEAUTY-N-SELF-CARE'
	| 'HEALTH-N-WELL-BEING'
	| 'SMALL-COMMERCE'
	| 'SPORTS';

export const ServiceCategoryEnumeration: Record<ServiceCategory, string> = {
	GASTRONOMY: 'Gastronomía',
	EDUCATION: 'Educación',
	ENTERNTAINMENT: 'Entretenimiento',
	'BEAUTY-N-SELF-CARE': 'Belleza y Cuidado Personal',
	'HEALTH-N-WELL-BEING': 'Salud y Bienestar',
	'SMALL-COMMERCE': 'Comercio Minorista',
	SPORTS: 'Deportes'
};

export type ServiceRegion = 'NORTH' | 'CENTRE' | 'SOUTH';

export const ServiceRegionEnumeration: Record<ServiceRegion, string> = {
	NORTH: 'Norte',
	CENTRE: 'Centro',
	SOUTH: 'Sur'
};

export const ServiceSchema = object({
	name: pipe(
		string('Nombre debe ser una cadena de texto.'),
		trim(),
		transform(reduceSpacing),
		minLength(NAME_MIN_LENGTH, 'Nombre debe tener al menos 16 caracteres.'),
		maxLength(NAME_MAX_LENGTH, 'Nombre debe tener menos de 256 caracteres.')
	),
	description: pipe(
		string('Descripción debe ser una cadena de texto.'),
		trim(),
		transform(reduceSpacing),
		minLength(DESCRIPTION_MIN_LENGTH, 'Descripción debe tener al menos 16 caracteres.'),
		maxLength(DESCRIPTION_MAX_LENGTH, 'Descripción debe tener menos de 512 caracteres.')
	),
	associate_full_name: pipe(
		string('Nombre del asociado debe ser una cadena de texto.'),
		trim(),
		transform(reduceSpacing),
		minLength(ASSOCIATE_NAME_MIN_LENGTH, 'Nombre del asociado debe tener al menos 16 caracteres.'),
		maxLength(ASSOCIATE_NAME_MAX_LENGTH, 'Nombre del asociado debe tener menos de 256 caracteres.')
	),
	phone_number: pipe(
		string('Teléfono debe ser una cadena de texto.'),
		trim(),
		transform(reduceSpacing),
		length(PHONE_LENGTH, 'Teléfono debe tener 10 caracteres.')
	),
	category: picklist(
		Object.keys(ServiceCategoryEnumeration) as ServiceCategory[],
		'Categoría debe ser una de las opciones disponibles.'
	),
	region: picklist(
		Object.keys(ServiceRegionEnumeration) as ServiceRegion[],
		'Región debe ser una de las opciones disponibles.'
	)
});

export type ServiceData = InferOutput<typeof ServiceSchema>;
