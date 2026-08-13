// md5:f3a9a9a523e6d0c2a38f3e53ffbaa669 true
/** Static class for working with URL hash data. @keywords hash, url, parameters, state */
export declare class Hash {
    /** Returns HashInstance item. @keywords get, instance, item */
    static getItem(): HashInstance;
    /** Gets value by name from hash. @keywords get, read, value */
    static get<T>(name: string, defaultValue?: T | (() => T)): T;
    /** Sets value by name in hash. @keywords set, write, update */
    static set<T>(name: string, callback: T | (() => T)): void;
    /** Adds watch callback for hash property. @keywords watch, event, listener, add */
    static addWatch<T>(name: string, callback: (value: T) => void): void;
    /** Removes watch callback for hash property. @keywords watch, event, listener, remove */
    static removeWatch<T>(name: string, callback: (value: T) => void): void;
    /** Reloads hash state. @keywords reload, refresh, update */
    static reload(): void;
}