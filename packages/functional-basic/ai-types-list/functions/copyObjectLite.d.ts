// md5:ff3d0b817d08153e9c2c306da9b351e8 true
/** Creates a simple copy of an object with optional additional properties. @keywords copy, clone, shallow copy, object clone */
export declare function copyObjectLite<T, R = T>(value: T, source?: Record<PropertyKey, unknown> | null): R;