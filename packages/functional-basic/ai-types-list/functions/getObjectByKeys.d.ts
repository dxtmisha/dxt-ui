// md5:59d72b901ef4f143e9488deb98be00ba true
/** Creates a new object containing only the specified keys from the source object. @keywords pick, filter keys, subset, extract properties */
export declare function getObjectByKeys<T extends Record<string, any>, K extends keyof T>(data: T, keys: K[]): Pick<T, K>;