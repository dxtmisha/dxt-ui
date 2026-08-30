// md5:ec7d8d6f69e63fa3a3564e249eeaa263 true
/** Handles caching of API responses. @keywords api cache, response caching, cache storage */
export declare class ApiCache {
    /** Initializes cache storage mechanism and cleanup settings. @keywords init, cache storage, listeners */
    static init(getListener: (key: string) => Promise<ApiCacheItem | undefined>, setListener: (key: string, value: ApiCacheItem) => Promise<boolean>, removeListener: (key: string) => Promise<boolean>, cacheStepAgeClearOld?: number): void;
    /** Resets the cache by clearing in-memory items and resetting listeners. @keywords reset, clear cache */
    static reset(): void;
    /** Retrieves cached data by key. @keywords get, fetch cache, cache item */
    static get<T>(key: string): Promise<T | undefined>;
    /** Retrieves cached data based on fetch request configuration. @keywords get by fetch, api request cache */
    static getByFetch<T>(fetch: ApiFetch): Promise<T | undefined>;
    /** Stores data in the cache with optional TTL. @keywords set, save cache, store item */
    static set<T>(key: string, value: T, age?: number): Promise<void>;
    /** Stores data in cache using fetch request configuration. @keywords set by fetch, cache api response */
    static setByFetch<T>(fetch: ApiFetch, value: T): Promise<void>;
    /** Deletes an item from the cache by key. @keywords remove, delete cache, invalidate */
    static remove(key: string): Promise<void>;
}