// md5:deb52ed858d5d9567ba967e81c237da1 true
/** Checks if an target object has own enumerable string-keyed properties. @keywords hasKeys, object, keys, ownProperties, enumerable */
export declare function hasKeys<T extends object = Record<PropertyKey, unknown>>(object: unknown): object is T;