// md5:8169ce4dda9ae640fa4591ca9e483547 true
/** Checks if a value is an object. @keywords isObject object type check */
export declare function isObject<T>(value: T): value is Extract<T, Record<any, any>>;