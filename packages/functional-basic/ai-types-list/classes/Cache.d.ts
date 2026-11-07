// md5:cd5a5417ae696da6f3dd25bd991c6c47 true
/** Simple in-memory cache storing computed values by key. @warning Obsolete and should not be used. @keywords cache, memoize, storage */
export declare class Cache {
    /** Returns or computes and stores a cached value with optional invalidation dependencies. @keywords cache, get, memoize */
    get<T>(name: string, callback: () => T, comparison?: unknown[]): T;
    /** Asynchronously returns or computes and stores a cached value with optional invalidation dependencies. @keywords cache, async, memoize, promise */
    getAsync<T>(name: string, callback: () => T, comparison?: unknown[]): Promise<T>;
}