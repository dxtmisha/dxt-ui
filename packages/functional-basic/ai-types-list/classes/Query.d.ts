// md5:87b50001dff98af3ff5f2ba865b498b2 true
/** Static utility providing centralized access to URL query parameters delegating to QueryInstance. @keywords query, search-params, url */
export declare class Query {
    /** Returns a request-isolated instance of QueryInstance. @keywords query-instance, get-item, context */
    static getItem(): QueryInstance;
    /** Retrieves a parameter value from the URL query with an optional default value or getter. @keywords get, query-param, read */
    static get<T>(name: string, defaultValue?: T | (() => T)): T;
    /** Sets or updates a parameter value in the URL query. @keywords set, query-param, update, write */
    static set<T>(name: string, callback: T | (() => T)): void;
    /** Registers a listener callback for changes to a specific query parameter. @keywords add-watch, listener, observe, query-change */
    static addWatch<T>(name: string, callback: (value: T) => void): void;
    /** Unregisters an existing change listener callback for a query parameter. @keywords remove-watch, unwatch, unsubscribe */
    static removeWatch<T>(name: string, callback: (value: T) => void): void;
    /** Re-parses and updates query variables from the current URL string. @keywords reload, refresh, sync-url */
    static reload(): void;
    /** Resets the instance and removes all attached listeners. @keywords reset, destroy, cleanup, clear */
}