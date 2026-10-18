// md5:05ad337b9a3645fcf6aa40c0676c69ed true
/** Retrieves a nested value from an object by its string path. @keywords object path, get nested property, deep get, path accessor */
export declare function getItemByPath<T extends Record<string, any>, R = string>(item: T, path: string): R | undefined;