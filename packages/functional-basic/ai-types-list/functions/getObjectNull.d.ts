// md5:54b52efd97b57ddd684b4c56f23cf545 true
/** Creates an object without a prototype (Object.create(null)), optionally copying own enumerable properties from data. @keywords object null prototype dictionary record clean map */
export declare function getObjectNull<T = unknown>(data?: Record<string, T> | null): Record<string, T>;