// md5:4ec694864f452b749e232c7ea51b7949 true
/** In-memory cache storing computed values by key. @warning Obsolete and should not be used. @keywords in-memory cache, memoize, key-value */
export declare class Cache {
    /** Retrieves or computes and caches a synchronous value by key with optional dependency invalidation. @keywords cache get, memoize, sync cache */
    get<T>(name: string, callback: () => T, comparison?: unknown[]): T;
    /** Asynchronously retrieves or computes and caches a value by key with optional dependency invalidation. @keywords async cache, memoize promise, async get */
    getAsync<T>(name: string, callback: () => T, comparison?: unknown[]): Promise<T>;
}