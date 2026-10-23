// md5:ee3a2104327779cbaaec173be53a0c70 true
/** Retrieves a nested value from an object by its path. @keywords get by path, object path, nested property, deep get */
export declare function getItemByPath<T extends Record<string, unknown>, R = string>(item: T, path: string): R | undefined;