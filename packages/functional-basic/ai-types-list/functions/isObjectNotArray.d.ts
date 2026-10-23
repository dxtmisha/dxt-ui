// md5:995bb1292594e3a85be8212817887ab8 true
/** Checks if a value is an object and not an array. @keywords isObjectNotArray, is object, not array, type guard */
export declare function isObjectNotArray<T>(value: T): value is Exclude<Extract<T, ObjectItem>, unknown[] | undefined | null>;