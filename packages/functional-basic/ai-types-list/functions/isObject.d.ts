// md5:2cf226f30f4e2269b5e07821928cdde9 true
/** Checks if a value is an object. @keywords isObject, object, type guard, predicate */
export declare function isObject<T>(value: T): value is Extract<T, ObjectItem>;