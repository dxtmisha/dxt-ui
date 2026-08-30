// md5:e3ae1cb4af43abe428dc71cb20be7b97 true
/** Static cache utility using ServerStorage for persistent application-wide caching. @warning Obsolete. @keywords cache static server storage memoize */
export declare class CacheStatic {
    /** Gets a cached value by key, or computes and caches the result using the callback. @keywords cache memoize get */
    static get<T>(name: string, callback: () => T, comparison?: any[]): T;
    /** Asynchronously gets a cached value by key, or computes and caches the result using the callback. @keywords async cache memoize getAsync */
    static getAsync<T>(name: string, callback: () => T, comparison?: any[]): Promise<T>;
}