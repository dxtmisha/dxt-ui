// md5:e6a8689adf0d05a83c54330f083082d8 true
/** Returns the last array element, own enumerable object property value, undefined for empty collections, or the input value unchanged. @keywords last, tail, element, item, array, object */
export declare function getLast<T = undefined>(value?: T | readonly T[] | Record<PropertyKey, T>): T;