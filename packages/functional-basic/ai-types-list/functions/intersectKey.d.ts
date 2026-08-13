// md5:3d036ef3a43557cb07dd69b17c4eea70 true
/** Computes the intersection of object keys. @keywords intersect key object */
export declare function intersectKey<T, KT extends keyof T, C, KC extends keyof C>(data?: T, comparison?: C): Record<KT & KC, T[KT]>;