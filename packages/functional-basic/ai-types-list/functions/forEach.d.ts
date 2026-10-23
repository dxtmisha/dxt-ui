// md5:de9d2f391e1bc732e0bc1da3377aec2b true
/** Supported collection types for iteration. @keywords collection iterable */
export type ForEachData<T> = readonly T[] | Record<string, T> | Map<unknown, T> | Set<T>;
/** Resolves key type based on collection structure. @keywords key type inference */
export type ForEachKey<D> = D extends readonly unknown[] ? number : D extends Set<infer S> ? S : D extends Map<infer K, unknown> ? K : string;
/** Iterates over an array and returns mapped callback results. @keywords forEach array iterate map */
export declare function forEach<T, R>(data: readonly T[], callback: (item: T, index: number, collection: readonly T[]) => R, saveUndefined?: boolean): R[];
/** Iterates over a Set and returns mapped callback results. @keywords forEach set iterate map */
export declare function forEach<T, R>(data: Set<T>, callback: (item: T, key: T, collection: Set<T>) => R, saveUndefined?: boolean): R[];
/** Iterates over a Map and returns mapped callback results. @keywords forEach map iterate */
export declare function forEach<K, V, R>(data: Map<K, V>, callback: (item: V, key: K, collection: Map<K, V>) => R, saveUndefined?: boolean): R[];
/** Iterates over an object record and returns mapped callback results. @keywords forEach record object iterate */
export declare function forEach<T, R, D extends Record<string, unknown> = Record<string, T>>(data: D & Record<string, T>, callback: (item: T, key: string, collection: D) => R, saveUndefined?: boolean): R[];
/** Iterates over a collection and returns mapped callback results. @keywords forEach collection iterate */
export declare function forEach<T, R, D extends ForEachData<T> = ForEachData<T>, K = ForEachKey<D>>(data: D & ForEachData<T>, callback: (item: T, key: K, collection: D) => R, saveUndefined?: boolean): R[];