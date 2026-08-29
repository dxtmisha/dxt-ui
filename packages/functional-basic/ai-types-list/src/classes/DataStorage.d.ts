// md5:5f564da41884cba134b95c6bf368cd58 true
/** Wrapper for localStorage and sessionStorage with prefixing, expiration, and SSR isolation. @keywords storage, localstorage, sessionstorage, cache, persistence */
export declare class DataStorage<T> {
    /** Sets global storage key prefix. @keywords storage prefix, namespace */
    static setPrefix(newPrefix: string): void;
    /** Initializes a storage item instance. @keywords storage constructor, session, cache */
    constructor(name: string, isSession?: boolean, errorCenter?: ErrorCenterInstance);
    /** Retrieves data from storage with optional fallback and cache validation. @keywords storage get, fetch, read, cache */
    get(defaultValue?: T | (() => T), cache?: number): T | undefined;
    /** Writes or updates data in storage. @keywords storage set, write, store */
    set(value?: T | (() => T)): T | undefined;
    /** Removes data from storage. @keywords storage remove, delete, clear */
    remove(): this;
    /** Synchronizes data from storage. @keywords storage update, sync, refresh */
    update(): this;
}