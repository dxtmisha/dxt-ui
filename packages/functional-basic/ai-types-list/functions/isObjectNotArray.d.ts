// md5:7f357974246117999d139681c56559c3 true
/** Checks if the value is an object and not an array. @keywords isObjectNotArray, object, not array, record, type guard */
export declare function isObjectNotArray<T>(value: T): value is Exclude<Extract<T, ObjectItem>, unknown[] | undefined | null>;