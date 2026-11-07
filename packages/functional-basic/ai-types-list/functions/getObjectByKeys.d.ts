// md5:b201286d598a82dfa0783b19c042ffea true
/** Creates a new object composed of the specified keys from the source object. @keywords pick, object subset, select keys, filter object */
export declare function getObjectByKeys<T extends Record<string, unknown>, K extends keyof T>(data?: T | null, keys?: readonly K[] | null): Pick<T, K>;