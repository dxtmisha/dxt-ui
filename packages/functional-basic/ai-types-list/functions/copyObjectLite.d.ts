// md5:540acbc8c5f580030da48ec58ab4a663 true
/** Creates a shallow copy of an object with optional additional properties. @keywords copy, clone, shallow copy, object lite, merge */
export declare function copyObjectLite<T = Record<PropertyKey, unknown>, R = T>(value?: T | null, source?: Record<PropertyKey, unknown> | null): R;