// md5:1d19e84f768094b43e50014c7ce2dd16 true
/** Static class for working with URL query parameters. @keywords query, url, parameters, search */
export declare class Query {
    /** Returns the QueryInstance item. @keywords query, instance, storage */
    static getItem(): QueryInstance;
    /** Gets data from query parameters. @keywords query, get, read */
    static get<T>(name: string, defaultValue?: T | (() => T)): T;
    /** Sets data in query parameters. @keywords query, set, update */
    static set<T>(name: string, callback: T | (() => T)): void;
    /** Adds a change watcher for query parameters. @keywords query, watch, event */
    static addWatch<T>(name: string, callback: (value: T) => void): void;
    /** Removes a change watcher. @keywords query, unwatch, remove */
    static removeWatch<T>(name: string, callback: (value: T) => void): void;
    /** Reloads query data from URL. @keywords query, reload, refresh */
    static reload(): void;
}