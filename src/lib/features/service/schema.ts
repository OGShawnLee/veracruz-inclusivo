import type { InferOutput } from "valibot";
import { length, maxLength, minLength, object, pipe, string, transform, trim } from "valibot";

function reduceSpacing(input: string) {
  return input.replace(/\s+/g, " ");
}

export const NAME_MAX_LENGTH = 256;
export const NAME_MIN_LENGTH = 16;
export const DESCRIPTION_MAX_LENGTH = 512;
export const DESCRIPTION_MIN_LENGTH = 16;
export const ASSOCIATE_NAME_MAX_LENGTH = 256;
export const ASSOCIATE_NAME_MIN_LENGTH = 16;
export const PHONE_LENGTH = 10;

export const ServiceSchema = object({
  name: pipe(
    string("Nombre debe ser una cadena de texto."),
    trim(),
    transform(reduceSpacing),
    minLength(NAME_MIN_LENGTH, "Nombre debe tener al menos 16 caracteres."),
    maxLength(NAME_MAX_LENGTH, "Nombre debe tener menos de 256 caracteres."),
  ),
  description: pipe(
    string("Descripción debe ser una cadena de texto."),
    trim(),
    transform(reduceSpacing),
    minLength(DESCRIPTION_MIN_LENGTH, "Descripción debe tener al menos 16 caracteres."),
    maxLength(DESCRIPTION_MAX_LENGTH, "Descripción debe tener menos de 512 caracteres."),
  ),
  associate_full_name: pipe(
    string("Nombre del asociado debe ser una cadena de texto."),
    trim(),
    transform(reduceSpacing),
    minLength(ASSOCIATE_NAME_MIN_LENGTH, "Nombre del asociado debe tener al menos 16 caracteres."),
    maxLength(ASSOCIATE_NAME_MAX_LENGTH, "Nombre del asociado debe tener menos de 256 caracteres."),
  ),
  phone_number: pipe(
    string("Teléfono debe ser una cadena de texto."),
    trim(),
    transform(reduceSpacing),
    length(PHONE_LENGTH, "Teléfono debe tener 10 caracteres."),
  ),
});

export type ServiceData = InferOutput<typeof ServiceSchema>;