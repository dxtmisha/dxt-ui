// md5:ec7d8d6f69e63fa3a3564e249eeaa263 true
/** API response caching manager. @keywords api, cache, storage, cache manager */
export declare class ApiCache {
    /** Initializes cache storage with custom listeners and cleanup threshold. @keywords init, listener, storage, setup */
    static init(getListener: (key: string) => Promise<ApiCacheItem | undefined>, setListener: (key: string, value: ApiCacheItem) => Promise<boolean>, removeListener: (key: string) => Promise<boolean>, cacheStepAgeClearOld?: number): void;
    /** Resets cache by clearing all items and listeners. @keywords reset, clear, flush */
    static reset(): void;
    /** Retrieves cached data by key. @keywords get, read, lookup */
    static get<T>(key: string): Promise<T | undefined>;
    /** Retrieves cached data using fetch options configuration. @keywords getByFetch, fetch cache */
    static getByFetch<T>(fetch: ApiFetch): Promise<T | undefined>;
    /** Saves data to cache with an optional TTL in seconds. @keywords set, save, store, ttl */
    static set<T>(key: string, value: T, age?: number): Promise<void>;
    /** Saves data to cache using fetch options configuration. @keywords setByFetch, save fetch */
    static setByFetch<T>(fetch: ApiFetch, value: T): Promise<void>;
    /** Removes cached item by key. @keywords remove, delete, invalidate */
    static remove(key: string): Promise<void>;
}