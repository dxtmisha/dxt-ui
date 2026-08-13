// md5:7d9c98d51015f677e11c4f03cb0a0924 true
/** Computes eternity property on demand with caching @keywords computed eternity cache async */
export declare function computedEternity<T>(getter: () => Promise<T> | T, initialState?: (() => T) | T): Ref<T, T>;