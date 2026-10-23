// md5:25e213798f7f181d3a1b68a4f0269f8c true
/** Creates a new object composed of the picked keys from the source object. @keywords pick, subset, filter keys, extract */
export declare function getObjectByKeys<T extends Record<string, unknown>, K extends keyof T>(data: T, keys: K[]): Pick<T, K>;