// md5:63a2f30942fc2b334ef2cff61d6b74fb true
/** Manages a single cached value with dependency array tracking. @keywords cache, memoize, dependency, memo */
export declare class CacheItem<T> {
    /** Creates a CacheItem instance with computation callback. @keywords cache, init, constructor */
    constructor(callback: () => T);
    /** Returns the cached value, recomputing if comparison dependencies change. @keywords cache, get, memoize */
    getCache(comparison: any[]): T;
    /** Returns the previous cached value prior to the last recalculation. @keywords cache, previous, history */
    getCacheOld(): T | undefined;
    /** Asynchronously returns the cached value, recomputing if dependencies change. @keywords async, cache, memoize */
    getCacheAsync(comparison: any[]): Promise<T>;
}