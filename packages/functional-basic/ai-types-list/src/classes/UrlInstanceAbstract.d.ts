// md5:724c9a1bd32fe32a6d1571b203242926 true
/** Base abstract class for managing URL-based states. @keywords url, state, query, hash */
export declare abstract class UrlInstanceAbstract {
    /** Retrieves a URL state variable value. @keywords get, url param, state */
    get<T>(name: string, defaultValue?: T | (() => T)): T;
    /** Sets or updates a URL state variable value. @keywords set, update, url param */
    set<T>(name: string, callback: T | (() => T)): this;
    /** Registers a watcher callback triggered when the specified URL variable changes. @keywords watch, listener, observe */
    addWatch<T>(name: string, callback: (value: T) => void): this;
    /** Unregisters a watcher callback for the specified URL variable. @keywords unwatch, remove listener */
    removeWatch<T>(name: string, callback: (value: T) => void): this;
    /** Reloads state variables directly from the current URL string. @keywords reload, refresh, sync */
    reload(): this;
}