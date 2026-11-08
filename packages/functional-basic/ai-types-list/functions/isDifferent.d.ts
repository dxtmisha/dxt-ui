// md5:cca44a5f5729581f85dd1687b19752da true
/** Shallowly compares own enumerable string keys using Object.is for values; nested items are compared by reference. @keywords shallow compare, object diff, equality check, Object.is */
export declare function isDifferent<T = unknown>(value?: ObjectItem<T> | readonly T[] | null, old?: ObjectItem<T> | readonly T[] | null): boolean;