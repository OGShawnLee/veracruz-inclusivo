import { getKeysOf } from "$lib";
import type { ServiceCategory, ServiceRegion } from "@features/service/schema";
import { object, nullable, picklist, pipe, string, minLength, maxLength } from "valibot";

export const SearchCategoryEnumeration: Record<ServiceCategory | 'ALL', string> = {
  ALL: "Cualquier Categoría",
  GASTRONOMY: "Gastronomía",
  EDUCATION: "Educación",
  ENTERTAINMENT: "Entretenimiento",
  "BEAUTY-N-SELF-CARE": "Belleza y Cuidado Personal",
  "HEALTH-N-WELL-BEING": "Salud y Bienestar",
  "SMALL-COMMERCE": "Comercio Minorista",
  SPORTS: "Deportes",
};
export const SearchRegionEnumeration: Record<ServiceRegion | 'ALL', string> = {
  ALL: "Cualquier Región",
  NORTH: "Norte",
  CENTRE: "Centro",
  SOUTH: "Sur",
};

export const SearchSchema = object({
  query: nullable(
    pipe(
      string("La búsqueda debe ser una cadena de texto."),
      minLength(3, "La búsqueda debe tener al menos 3 caracteres."),
      maxLength(256, "La búsqueda debe tener menos de 256 caracteres.")
    ) 
  ),
  category: nullable(
    pipe(
      picklist(
        getKeysOf(SearchCategoryEnumeration),
        "La categoría debe ser una de las siguientes: Gastronomía, Educación, Entretenimiento, Belleza y Cuidado Personal, Salud y Bienestar, Comercio Minorista, Deportes."
      )
    )
  ),
  region: nullable(
    picklist(
      getKeysOf(SearchRegionEnumeration),
      "La región debe ser una de las siguientes: Norte, Centro, Sur."
    )
  ),
});