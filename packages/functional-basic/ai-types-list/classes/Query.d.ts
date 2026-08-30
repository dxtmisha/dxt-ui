// md5:1d19e84f768094b43e50014c7ce2dd16 true
/** Static facade for managing URL query parameters. @keywords url, query params, search params, routing */
export declare class Query {
    /** Returns a request-isolated QueryInstance. @keywords instance, query instance, singleton */
    static getItem(): QueryInstance;
    /** Retrieves a parameter value from the query string with an optional default. @keywords get query, query parameter, read url */
    static get<T>(name: string, defaultValue?: T | (() => T)): T;
    /** Sets or updates a parameter in the URL query string. @keywords set query, update query, write url */
    static set<T>(name: string, callback: T | (() => T)): void;
    /** Subscribes a listener to changes for a specific query parameter. @keywords watch, query listener, observer, event */
    static addWatch<T>(name: string, callback: (value: T) => void): void;
    /** Unsubscribes a listener from changes for a specific query parameter. @keywords unwatch, remove listener, unsubscribe */
    static removeWatch<T>(name: string, callback: (value: T) => void): void;
    /** Synchronizes query state with the current URL search string. @keywords reload query, sync url, refresh query */
    static reload(): void;
}