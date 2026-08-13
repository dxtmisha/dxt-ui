// md5:63a2f30942fc2b334ef2cff61d6b74fb true
/** Manages cached value with dependency tracking @keywords cache, item, memory, memoize */
export declare class CacheItem<T> {
    /** Creates a CacheItem instance @keywords constructor, create */
    constructor(callback: () => T);
    /** Gets cached value, recomputing if dependencies change @keywords get, cache, memoize */
    getCache(comparison: any[]): T;
    /** Gets previous cached value before last update @keywords get, cache, old, previous */
    getCacheOld(): T | undefined;
    /** Asynchronously gets cached value, recomputing if dependencies change @keywords get, cache, async */
    getCacheAsync(comparison: any[]): Promise<T>;
}