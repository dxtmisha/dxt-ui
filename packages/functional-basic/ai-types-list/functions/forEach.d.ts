// md5:4a81a0401ceca05f6e2009bb363f9de8 true
export type ForEachData<T = any> = readonly T[] | Record<PropertyKey, T> | Map<unknown, T> | Set<T> | object;
export type ForEachItem<D> = D extends readonly (infer T)[] ? T : D extends Set<infer S> ? S : D extends Map<unknown, infer V> ? V : D extends object ? D[keyof D] : unknown;
export type ForEachKey<D> = D extends readonly unknown[] ? number : D extends Set<infer S> ? S : D extends Map<infer K, unknown> ? K : string;
export type ForEachReturn<R, S extends boolean = false> = (S extends true ? R : Exclude<R, undefined>)[];
/** Iterates over collection items (Array, Object, Map, Set) executing a callback and returning mapped results, omitting undefined unless specified. @keywords foreach, iterate, map, collection, array, object, set */
export declare function forEach<T = any, R = any, D extends ForEachData<T> = ForEachData<T>, K = ForEachKey<D>, S extends boolean = false>(data: D, callback: (item: D extends object ? ForEachItem<D> : T, key: K, collection: D) => R, saveUndefined?: S): ForEachReturn<R, S>;