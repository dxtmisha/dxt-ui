// md5:f3a9a9a523e6d0c2a38f3e53ffbaa669 true
/** Static interface for managing URL hash state via HashInstance. @keywords url hash, router state, hash params */
export declare class Hash {
    /** Returns a request-isolated HashInstance. @keywords instance, singleton, context */
    static getItem(): HashInstance;
    /** Retrieves a value from the URL hash. @keywords hash get, read url param */
    static get<T>(name: string, defaultValue?: T | (() => T)): T;
    /** Sets or updates a value in the URL hash. @keywords hash set, update url param */
    static set<T>(name: string, callback: T | (() => T)): void;
    /** Subscribes a listener callback to changes for a specific hash variable. @keywords watch, subscribe, listener, observe */
    static addWatch<T>(name: string, callback: (value: T) => void): void;
    /** Unsubscribes a listener callback from hash variable changes. @keywords unwatch, unsubscribe, remove listener */
    static removeWatch<T>(name: string, callback: (value: T) => void): void;
    /** Reloads and synchronizes hash variables from the current URL string. @keywords reload, refresh, sync url */
    static reload(): void;
}