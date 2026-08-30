// md5:63a2f30942fc2b334ef2cff61d6b74fb true
/** Manages a single cached value with dependency tracking for invalidation. @keywords cache memoize dependency invalidation */
export declare class CacheItem<T> {
    /** Creates a CacheItem with a value computation callback. @keywords cache construct */
    constructor(callback: () => T);
    /** Returns cached value, recomputing if dependency array changes. @keywords get cache memoize */
    getCache(comparison: any[]): T;
    /** Returns previous cached value before last recalculation. @keywords previous cache history */
    getCacheOld(): T | undefined;
    /** Asynchronously returns cached value, recomputing if dependency array changes. @keywords async cache memoize */
    getCacheAsync(comparison: any[]): Promise<T>;
}