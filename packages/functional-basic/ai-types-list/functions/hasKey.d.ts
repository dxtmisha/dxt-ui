// md5:1d44f6775e4cd30287cfc1ff3abbc719 true
/** Checks if an object has the specified own property. @keywords hasKey, hasOwnProperty, object, key, property check */
export declare function hasKey<K extends PropertyKey = PropertyKey, T extends object = Record<K, unknown>>(object: unknown, key: K): object is T & Record<K, unknown>;