// md5:a46b50b9405dfc4b87fa7936d2286b9e true
/** In-memory key-value cache with dependency-based invalidation. @keywords cache, memoize, storage, in-memory */
export declare class Cache {
    /** Retrieves or computes a cached value by key with optional invalidation dependencies. @keywords cache get, memoize, compute */
    get<T>(name: string, callback: () => T, comparison?: any[]): T;
    /** Asynchronously retrieves or computes a cached value by key with optional invalidation dependencies. @keywords async cache, memoize promise, async storage */
    getAsync<T>(name: string, callback: () => T, comparison?: any[]): Promise<T>;
}