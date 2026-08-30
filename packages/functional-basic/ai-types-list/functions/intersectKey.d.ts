// md5:3d036ef3a43557cb07dd69b17c4eea70 true
/** Computes the key-based intersection between two objects. @keywords intersect, intersection, key comparison, object keys */
export declare function intersectKey<T, KT extends keyof T, C, KC extends keyof C>(data?: T, comparison?: C): Record<KT & KC, T[KT]>;