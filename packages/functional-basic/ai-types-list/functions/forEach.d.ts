// md5:e4bc652661ed398cf0cd889bfa3b2eb2 true
/** Collection types supported for iteration. @keywords collection, iterable, data */
export type ForEachData<T> = readonly T[] | Record<string, T> | Map<any, T> | Set<T>;
/** Resolves the key type based on collection structure. @keywords key, collection, type resolver */
export type ForEachKey<D> = D extends readonly unknown[] ? number : D extends Set<infer S> ? S : D extends Map<infer K, unknown> ? K : string;
/** Iterates over an array, returning mapped results. @keywords forEach, iterate, array, map */
export declare function forEach<T, R>(data: readonly T[], callback: (item: T, index: number, collection: readonly T[]) => R, saveUndefined?: boolean): R[];
/** Iterates over a Set, returning mapped results. @keywords forEach, iterate, set, map */
export declare function forEach<T, R>(data: Set<T>, callback: (item: T, key: T, collection: Set<T>) => R, saveUndefined?: boolean): R[];
/** Iterates over a Map, returning mapped results. @keywords forEach, iterate, map, dictionary */
export declare function forEach<K, V, R>(data: Map<K, V>, callback: (item: V, key: K, collection: Map<K, V>) => R, saveUndefined?: boolean): R[];
/** Iterates over an object, returning mapped results. @keywords forEach, iterate, object, record */
export declare function forEach<T, R, D extends Record<string, any> = Record<string, T>>(data: D & Record<string, T>, callback: (item: T, key: string, collection: D) => R, saveUndefined?: boolean): R[];
/** Iterates over any supported collection, returning mapped results. @keywords forEach, iterate, collection, map */
export declare function forEach<T, R, D extends ForEachData<T> = ForEachData<T>, K = ForEachKey<D>>(data: D & ForEachData<T>, callback: (item: T, key: K, collection: D) => R, saveUndefined?: boolean): R[];