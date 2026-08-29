// md5:1d19e84f768094b43e50014c7ce2dd16 true
/** Static manager for URL query parameters delegating to QueryInstance. @keywords url query params search router state */
export declare class Query {
    /** Gets the request-isolated QueryInstance. @keywords instance context query */
    static getItem(): QueryInstance;
    /** Retrieves a value from query parameters with an optional fallback. @keywords query get param read */
    static get<T>(name: string, defaultValue?: T | (() => T)): T;
    /** Updates or sets a query parameter value. @keywords query set param write update */
    static set<T>(name: string, callback: T | (() => T)): void;
    /** Listens for changes to a specific query parameter. @keywords query watch observe subscribe listener */
    static addWatch<T>(name: string, callback: (value: T) => void): void;
    /** Removes an event listener for a query parameter. @keywords query unwatch unsubscribe remove listener */
    static removeWatch<T>(name: string, callback: (value: T) => void): void;
    /** Re-parses and updates query variables from the current URL string. @keywords query reload refresh sync */
    static reload(): void;
}