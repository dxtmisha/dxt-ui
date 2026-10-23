// md5:c8faeea2a4c38a1a5a073b1d42a5b3d2 true
/** Storage manager for localStorage and sessionStorage with prefix, TTL expiration, and SSR isolation support. @keywords localstorage, sessionstorage, storage, cache, ssr */
export declare class DataStorage<T> {
    /** Initializes storage key, storage type, and optional error handler. @keywords constructor, init, storage */
    constructor(name: string, isSession?: boolean, errorCenter?: ErrorCenterInstance);
    /** Retrieves stored value with optional fallback and cache expiration in seconds. @keywords get, read, retrieve, cache */
    get(defaultValue?: T | (() => T), cache?: number): T | undefined;
    /** Updates stored value using a direct value or resolver function. @keywords set, write, update, store */
    set(value?: T | (() => T)): T | undefined;
    /** Configures global storage key prefix. @keywords setPrefix, prefix, namespace */
    static setPrefix(newPrefix: string): void;
    /** Removes stored item from storage. @keywords remove, delete, clear */
    remove(): this;
    /** Synchronizes data from storage into instance. @keywords update, sync, refresh */
    update(): this;
}