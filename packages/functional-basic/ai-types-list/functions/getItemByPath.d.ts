// md5:3777175fcca98571b89ff89e0e09f5e4 true
/**
 * Returns data by path.
 * @keywords get item by path, object path resolver
 */
export declare function getItemByPath<T extends Record<string, any>, R = string>(item: T, path: string): R | undefined;