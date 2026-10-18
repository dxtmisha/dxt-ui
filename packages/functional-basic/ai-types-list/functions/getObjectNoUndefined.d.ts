// md5:8dfb6ba80afc6c04bfe3786274a11fe2 true
/** Removes elements matching the exception value from an array and returns an indexed object. @keywords filter, omit, clean, undefined, array to object */
export declare function getObjectNoUndefined<V>(data: readonly V[], exception?: unknown): Record<number, V>;
/** Removes properties matching the exception value from an object. @keywords filter, omit, clean, undefined, compact */
export declare function getObjectNoUndefined<T extends Record<PropertyKey, unknown>>(data: T, exception?: unknown): T;