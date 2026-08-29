// md5:a46b50b9405dfc4b87fa7936d2286b9e true
/** In-memory key-value cache with dependency-based invalidation. @warning Obsolete and not recommended for new code. @keywords cache, memoize, in-memory */
export declare class Cache {
    /** Retrieves or computes a cached value by key with optional array-based invalidation dependencies. @keywords cache, get, memoize */
    get<T>(name: string, callback: () => T, comparison?: any[]): T;
    /** Asynchronously retrieves or computes a cached value by key with optional array-based invalidation dependencies. @keywords cache, async, memoize */
    getAsync<T>(name: string, callback: () => T, comparison?: any[]): Promise<T>;
}