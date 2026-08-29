// md5:f3a9a9a523e6d0c2a38f3e53ffbaa669 true
/** Static class providing access to URL hash data management. @keywords url hash, state, router */
export declare class Hash {
    /** Gets the request-isolated HashInstance. @keywords hash instance, singleton */
    static getItem(): HashInstance;
    /** Retrieves a value from the URL hash with an optional default. @keywords get hash, read url param */
    static get<T>(name: string, defaultValue?: T | (() => T)): T;
    /** Sets or updates a value in the URL hash. @keywords set hash, update url */
    static set<T>(name: string, callback: T | (() => T)): void;
    /** Adds a listener for changes to a specific hash property. @keywords watch hash, listener, observer */
    static addWatch<T>(name: string, callback: (value: T) => void): void;
    /** Removes a listener for changes to a specific hash property. @keywords unwatch hash, remove listener */
    static removeWatch<T>(name: string, callback: (value: T) => void): void;
    /** Reloads hash variables from the current URL string. @keywords reload hash, refresh state */
    static reload(): void;
}