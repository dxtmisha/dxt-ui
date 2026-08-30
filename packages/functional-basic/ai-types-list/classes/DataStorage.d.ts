// md5:5f564da41884cba134b95c6bf368cd58 true
/** Storage wrapper for localStorage and sessionStorage with prefix, TTL expiration, and SSR isolation. @keywords storage, localStorage, sessionStorage, cache, ssr */
export declare class DataStorage<T> {
    /** Sets global key prefix for storage items. @keywords prefix, key, storage */
    static setPrefix(newPrefix: string): void;
    /** Initializes storage instance for a named key. @keywords storage, constructor, session */
    constructor(name: string, isSession?: boolean, errorCenter?: ErrorCenterInstance);
    /** Retrieves stored item value or fallback default value with optional cache expiration. @keywords get, retrieve, cache, ttl */
    get(defaultValue?: T | (() => T), cache?: number): T | undefined;
    /** Sets or updates stored item value. @keywords set, save, update, store */
    set(value?: T | (() => T)): T | undefined;
    /** Removes item from storage. @keywords remove, delete, clear */
    remove(): this;
    /** Synchronizes data from underlying storage. @keywords update, sync, refresh */
    update(): this;
}