// md5:042aca1a3526a9111a5580a7657d21a3 true
/** Computes the intersection of two objects based on their keys. @keywords intersect, intersection, keys, pick, compare */
export declare function intersectKey<T extends Record<PropertyKey, unknown>, C extends Record<PropertyKey, unknown>>(data?: T | null, comparison?: C | null): Pick<T, Extract<keyof T, keyof C>>;