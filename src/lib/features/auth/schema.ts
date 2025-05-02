import type { InferOutput } from "valibot";
import { custom, email, maxLength, minLength, object, pipe, string, trim } from "valibot";

export interface CurrentUser {
  email: string;
  name: string;
}

export const NAME_MAX_LENGTH = 128;
export const NAME_MIN_LENGTH = 12;
export const PASSWORD_MAX_LENGTH = 128;
export const PASSWORD_MIN_LENGTH = 8;
export const EMAIL_MAX_LENGTH = 128;
export const EMAIL_MIN_LENGTH = 6;

const STRONG_PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const EMAIL_SCHEMA = pipe(
  string("El correo electrónico debe ser una cadena de texto."),
  trim(),
  minLength(EMAIL_MIN_LENGTH, "El correo electrónico debe tener al menos 6 caracteres."),
  maxLength(EMAIL_MAX_LENGTH, "El correo electrónico debe tener menos de 128 caracteres."),
  email("El correo electrónico no es válido.")
);
const PASSWORD_SCHEMA = pipe(
  string("La contraseña debe ser una cadena de texto."),
  trim(),
  minLength(PASSWORD_MIN_LENGTH, "La contraseña debe tener al menos 8 caracteres."),
  maxLength(PASSWORD_MAX_LENGTH, "La contraseña debe tener menos de 128 caracteres."),
  custom((input) => {
    return typeof input === "string" && STRONG_PASSWORD_REGEX.test(input);
  }, "La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.")
);

export const AccountSchema = object({
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
  name: pipe(
    string("El nombre debe ser una cadena de texto."),
    trim(),
    minLength(NAME_MIN_LENGTH, "El nombre debe tener al menos 12 caracteres."),
    maxLength(NAME_MAX_LENGTH, "El nombre debe tener menos de 128 caracteres.")
  )
});

export type AccountData = InferOutput<typeof AccountSchema>;

export const SignInSchema = object({
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA
});

export type SignInData = InferOutput<typeof SignInSchema>;

export const AuthSchema = object({
  id: EMAIL_SCHEMA,
  email: EMAIL_SCHEMA
});

export type AuthData = InferOutput<typeof AuthSchema>;