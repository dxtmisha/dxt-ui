// md5:59d72b901ef4f143e9488deb98be00ba true
/** Filter object by keys @keywords getObjectByKeys pick keys */
export declare function getObjectByKeys<T extends Record<string, any>, K extends keyof T>(data: T, keys: K[]): Pick<T, K>;