// md5:dd764d0fc196f5f40bf4a0e7ce835878 true
/** Preserved object type or empty-object fallback type. */
export type ObjectOrNoneReturn<T> = [T] extends [never] ? Record<string, unknown> : T extends readonly unknown[] | FunctionAnyType<never, unknown> | (abstract new (...parameters: never[]) => unknown) ? Record<string, unknown> : T extends object ? T & Record<string, unknown> : Record<string, unknown>;
/** Returns a non-array object unchanged, or a new empty object fallback. @keywords object, fallback, sanitize, default */
export declare function getObjectOrNone<T>(value?: T): ObjectOrNoneReturn<T>;