// md5:57bae7c384f0cee11ee34f04133bbcae true
/** Manages API response caching. @keywords api cache storage */
export declare class ApiCache {
    /** Initializes storage with custom listeners and options. @keywords init listeners */
    static init(getListener: (key: string) => Promise<ApiCacheItem | undefined>, setListener: (key: string, value: ApiCacheItem) => Promise<boolean>, removeListener: (key: string) => Promise<boolean>, cacheStepAgeClearOld?: number): void;
    /** Resets the cache by clearing memory items and listeners. @keywords reset cache */
    static reset(): void;
    /** Gets data from cache by key. @keywords get cache */
    static get<T>(key: string): Promise<T | undefined>;
    /** Gets data from cache using fetch options. @keywords fetch cache */
    static getByFetch<T>(fetch: ApiFetch): Promise<T | undefined>;
    /** Saves data to cache by key. @keywords set cache */
    static set<T>(key: string, value: T, age?: number): Promise<void>;
    /** Saves data to cache using fetch options. @keywords set fetch cache */
    static setByFetch<T>(fetch: ApiFetch, value: T): Promise<void>;
    /** Removes data from cache by key. @keywords remove cache */
    static remove(key: string): Promise<void>;
}