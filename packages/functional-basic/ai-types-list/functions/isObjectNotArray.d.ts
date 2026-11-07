// md5:dce3f6b4481feb397fe762bb884b0c75 true
/** Checks if a value is an object and not an array. @keywords isObjectNotArray, object check, not array, type guard */
export declare function isObjectNotArray<T>(value: T): value is unknown extends T ? T & ObjectItem<unknown> : Exclude<Extract<T, ObjectItem>, readonly unknown[] | undefined | null>;