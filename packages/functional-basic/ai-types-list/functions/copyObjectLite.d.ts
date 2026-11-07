// md5:9d6722328d4579dc5b1973ed075bc070 true
/** Creates a shallow copy of own enumerable properties without changing the prototype. @keywords shallow copy, clone, object, copyObjectLite */
export declare function copyObjectLite<T = Record<PropertyKey, unknown>, R = T>(value?: T | null, source?: Record<PropertyKey, unknown> | null): R;