// md5:da36dd0a724eeae834ae91c142493c25 true
/** Checks if an object has the specified own property. @keywords hasKey, hasOwnProperty, property check, type guard */
export declare function hasKey<K extends PropertyKey, T extends object = Record<K, unknown>>(object: unknown, key: K): object is T & Record<K, unknown>;