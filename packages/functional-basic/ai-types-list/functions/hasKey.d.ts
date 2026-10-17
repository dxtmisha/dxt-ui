/** Checks whether the specified property is an own property of the object or function. @keywords hasKey, hasOwnProperty, hasOwn, own property, key, object */
export declare function hasKey<K extends PropertyKey, T extends object = Record<K, unknown>>(object: unknown, key: K): object is T & Record<K, unknown>;
