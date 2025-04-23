export function concatClassName(className: string, additional: string) {
	return additional ? className + ' ' + additional : className;
}

export function getKeysOf<T extends object>(obj: T): (keyof T)[] {
	return Object.keys(obj) as (keyof T)[];
}
