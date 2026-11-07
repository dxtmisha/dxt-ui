// md5:26bcd7164a2d4e01d5510e789415bd3b true
export type ObjectOrNoneReturn<T> = [Exclude<T, undefined | null>] extends [never] ? Record<string, unknown> : Exclude<T, undefined | null> & Record<string, unknown>;
/** Returns the provided object or an empty object fallback. @keywords object, fallback, default, empty, record */
export declare function getObjectOrNone<T>(value?: T): ObjectOrNoneReturn<T>;