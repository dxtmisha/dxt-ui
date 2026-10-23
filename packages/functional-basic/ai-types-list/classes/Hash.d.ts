// md5:1e556e5e65ef71a12904afd7193b7706 true
/** Static class managing data stored in the URL hash via HashInstance delegation. @keywords hash url state navigation routing */
export declare class Hash {
    /** Returns a request-isolated HashInstance instance. @keywords hash instance isolate get */
    static getItem(): HashInstance;
    /** Retrieves a stored value by name from the URL hash with an optional default. @keywords get hash value read query */
    static get<T>(name: string, defaultValue?: T | (() => T)): T;
    /** Sets or updates a value in the URL hash. @keywords set hash value update write */
    static set<T>(name: string, callback: T | (() => T)): void;
    /** Subscribes a listener callback to changes for a specific hash variable. @keywords watch listener subscribe observe change */
    static addWatch<T>(name: string, callback: (value: T) => void): void;
    /** Unsubscribes a listener callback from changes for a specific hash variable. @keywords unwatch unsubscribe remove listener */
    static removeWatch<T>(name: string, callback: (value: T) => void): void;
    /** Synchronizes hash variables by reparsing the current URL string. @keywords reload sync refresh parse */
    static reload(): void;
    /** Resets the instance, clears state, and removes all active listeners. @keywords reset destroy clear teardown */
    static reset(): void;
}