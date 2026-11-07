// md5:d7daadc0d4a83622117314d485038b04 true
/** Retrieves a nested value from an object by its path string. @keywords get by path, nested property, object path, deep get */
export declare function getItemByPath<T extends Record<string, unknown>, R = string>(item: T | null | undefined, path: string): R | undefined;