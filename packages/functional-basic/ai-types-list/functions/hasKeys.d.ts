// md5:2180ce383cd07219d364b8c72c63a83e true
/** Checks whether an object has at least one own property. @keywords hasKeys, object, keys, own properties, not empty */
export declare function hasKeys<T extends object = Record<PropertyKey, unknown>>(object: unknown): object is T;