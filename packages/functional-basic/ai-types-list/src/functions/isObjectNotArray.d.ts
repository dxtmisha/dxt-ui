// md5:0f439e41e0df8b917949cbd021ca899a true
/** Checks if a value is an object and not an array. @keywords isObjectNotArray, isObject, non-array, object check, type guard */
export declare function isObjectNotArray<T>(value: T): value is Exclude<Extract<T, Record<any, any>>, any[] | undefined | null>;