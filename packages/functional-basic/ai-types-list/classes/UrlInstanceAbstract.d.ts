// md5:724c9a1bd32fe32a6d1571b203242926 true
/** Abstract base class managing URL-based state storage and synchronization. @keywords url, hash, query, state */
export declare abstract class UrlInstanceAbstract {
    /** Retrieves stored URL state value or falls back to a default value or factory. @keywords get, url state, read */
    get<T>(name: string, defaultValue?: T | (() => T)): T;
    /** Updates URL state variable with a value or transformation callback. @keywords set, update, url state */
    set<T>(name: string, callback: T | (() => T)): this;
    /** Subscribes a listener callback to variable change events. @keywords watch, observe, listener, subscribe */
    addWatch<T>(name: string, callback: (value: T) => void): this;
    /** Unsubscribes a listener callback from variable change events. @keywords unwatch, unsubscribe, listener */
    removeWatch<T>(name: string, callback: (value: T) => void): this;
    /** Reloads and syncs state variables directly from the current URL. @keywords reload, sync, refresh */
    reload(): this;
}