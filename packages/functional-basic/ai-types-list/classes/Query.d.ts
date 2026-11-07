// md5:1a00d60d3c92ea8496de337539f809ce true
/** Static interface for managing URL query parameters via QueryInstance. @keywords query, url, searchParams, queryInstance */
export declare class Query {
    /** Retrieves a value by name from URL query parameters. @keywords get, query, parameter, url */
    static get<T>(name: string, defaultValue?: T | (() => T)): T;
    /** Returns the request-isolated QueryInstance instance. @keywords getItem, queryInstance, instance */
    static getItem(): QueryInstance;
    /** Updates or sets a value in URL query parameters. @keywords set, query, update, parameter */
    static set<T>(name: string, callback: T | (() => T)): void;
    /** Registers a listener for changes to a specific query parameter. @keywords addWatch, watch, listener, observe */
    static addWatch<T>(name: string, callback: (value: T) => void): void;
    /** Removes a change listener from a specific query parameter. @keywords removeWatch, unwatch, unsubscribe */
    static removeWatch<T>(name: string, callback: (value: T) => void): void;
    /** Destroys and clears the active QueryInstance from storage. @keywords reset, destroy, clear */
    static reset(): void;
    /** Reloads and re-parses query parameters from the current URL. @keywords reload, refresh, sync */
    static reload(): void;
}