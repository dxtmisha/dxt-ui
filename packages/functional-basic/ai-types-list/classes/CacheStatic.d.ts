// md5:e3ae1cb4af43abe428dc71cb20be7b97 true
/** Static cache class using ServerStorage. @keywords cache static storage */
export declare class CacheStatic {
	/** Retrieves the Cache instance. @keywords get item storage */
	protected static getItem(): Cache;
	/** Returns cached value or computes it via callback. @keywords get cache value */
	static get<T>(name: string, callback: () => T, comparison?: any[]): T;
	/** Asynchronously returns cached value or computes it via callback. @keywords get async cache */
	static getAsync<T>(name: string, callback: () => T, comparison?: any[]): Promise<T>;
}