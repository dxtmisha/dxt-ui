// md5:3777175fcca98571b89ff89e0e09f5e4 true
/** Retrieves a nested property value from an object by its path string. @keywords get item by path, nested property, path access */
export declare function getItemByPath<T extends Record<string, any>, R = string>(item: T, path: string): R | undefined;