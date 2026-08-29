// md5:e3ae1cb4af43abe428dc71cb20be7b97 true
/** Static cache class using ServerStorage for persistent caching. @keywords cache, static cache, server storage, memoize */
export declare class CacheStatic {
    /** Gets a cached value by key or computes and stores it via callback. @keywords cache, memoize, get */
    static get<T>(name: string, callback: () => T, comparison?: any[]): T;
    /** Asynchronously gets a cached value by key or computes and stores it via callback. @keywords async cache, memoize, getAsync */
    static getAsync<T>(name: string, callback: () => T, comparison?: any[]): Promise<T>;
}