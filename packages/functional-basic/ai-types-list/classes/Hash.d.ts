// md5:131e263f6350d7d9d1f05e58a0ff3cf3 true
/** Static class providing centralized URL hash data management delegating to HashInstance. @keywords hash, url, state */
export declare class Hash {
    /** Retrieves a stored value from the URL hash. @keywords hash, get, read, state */
    static get<T>(name: string, defaultValue?: T | (() => T)): T;
    /** Returns the request-isolated HashInstance. @keywords instance, context, hashInstance */
    static getItem(): HashInstance;
    /** Updates or sets a variable in the URL hash. @keywords hash, set, write, update */
    static set<T>(name: string, callback: T | (() => T)): void;
    /** Subscribes a listener callback to changes of a specific hash variable. @keywords watch, observe, listener, subscribe */
    static addWatch<T>(name: string, callback: (value: T) => void): void;
    /** Unsubscribes a listener callback from changes of a specific hash variable. @keywords unwatch, removeListener, unsubscribe */
    static removeWatch<T>(name: string, callback: (value: T) => void): void;
    /** Destroys the active instance and resets storage. @keywords reset, destroy, clear */
    static reset(): void;
    /** Reloads and synchronizes hash variables from the current URL string. @keywords reload, sync, refresh, url */
    static reload(): void;
}