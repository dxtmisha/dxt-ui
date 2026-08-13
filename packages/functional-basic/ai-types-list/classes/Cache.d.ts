// md5:a46b50b9405dfc4b87fa7936d2286b9e true
/** Simple in-memory cache class for computed values @keywords cache, memory, compute */
export declare class Cache {
    /** Gets cached value or computes and stores it @keywords get, cache, value */
    get<T>(name: string, callback: () => T, comparison?: any[]): T;
    /** Asynchronously gets cached value or computes and stores it @keywords get, async, cache */
    getAsync<T>(name: string, callback: () => T, comparison?: any[]): Promise<T>;
}