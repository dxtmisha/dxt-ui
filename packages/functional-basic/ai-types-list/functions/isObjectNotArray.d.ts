// md5:0f439e41e0df8b917949cbd021ca899a true
/** Checks if value is an object and not an array. @keywords isObjectNotArray object check */
export declare function isObjectNotArray<T>(value: T): value is Exclude<Extract<T, Record<any, any>>, any[] | undefined | null>;