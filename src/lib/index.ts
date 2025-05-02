import type { Ref } from "./hooks.svelte";
import { getContext, setContext } from "svelte";
import { ref } from "./hooks.svelte";

export type Result<T, E = unknown> = 
	{ data: T, failed: false, error: null } | 
	{ data: null, failed: true, error: E };

export function concatClassName(className: string, additional: string) {
	return additional ? className + ' ' + additional : className;
}

export function createGlobalState<State>(name: string) {
	return {
		mount(value: State) {
			const state = ref(value);
			return setContext(name, state);
		},
		getContext() {
			return getContext(name) as Ref<State>;
		}
	};
}

export function getKeysOf<T extends object>(obj: T): (keyof T)[] {
	return Object.keys(obj) as (keyof T)[];
}

export function isEmpty(value: string) {
	return value.trim().length === 0;
}

export function isNullish(value: unknown): value is null | undefined {
	return value === null || value === undefined;
}

export async function useAwait<T, E = unknown>(fn: () => Promise<T>): Promise<Result<T, E>> {
	try {
		const data = await fn();
		return { data, error: null, failed: false };
	} catch (error) {
		return { data: null, error: error as E, failed: true };
	}
}

export function useCatch<T, E = unknown>(fn: () => T): Result<T, E> {
	try {
		const data = fn();
		return { data, error: null, failed: false };
	} catch (error) {
		return { data: null, error: error as E, failed: true };
	}
}