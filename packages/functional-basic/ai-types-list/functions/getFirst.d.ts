// md5:530821367823e9a4f540b3bd0629724b true
/** Returns the first array element, first own enumerable object value, or the value itself if not a collection. @keywords first, head, array, object, collection */
export declare function getFirst<T = undefined>(value?: T | readonly T[] | Record<PropertyKey, T>): T;