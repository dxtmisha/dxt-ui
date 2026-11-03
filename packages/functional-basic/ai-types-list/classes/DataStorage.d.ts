// md5:5923b3ef5d6303d46259132dd81d5825 true
/** Resolution type for DataStorage.get return value with fallback handling. @keywords storage, return type */
export type DataStorageGet<T, D = undefined> = [
    D
] extends [
    undefined
] ? (T | undefined) : unknown extends T ? (D extends () => infer R ? R : D) : T;
/** Manages localStorage and sessionStorage with prefixing, expiration caching, and SSR request isolation. @keywords storage, localStorage, sessionStorage, cache, ssr */
export declare class DataStorage<T = unknown> {
    /** Initializes storage instance with key name, storage target, and error handler. @keywords storage, constructor, session */
    constructor(name: string, isSession?: boolean, errorCenter?: ErrorCenterInstance);
    /** Retrieves item from storage with optional default fallback and cache TTL in seconds. @keywords storage, get, read, cache */
    get<D extends T | (() => T) | undefined = undefined>(defaultValue?: D, cache?: number): DataStorageGet<T, D>;
    /** Writes value or generator result to storage. @keywords storage, set, write */
    set(value?: T | (() => T)): T | undefined;
    /** Returns fully-qualified storage key including prefix. @keywords storage, key, index, prefix */
    getIndex(): string;
    /** Sets process-wide key prefix for bootstrapping. @note Applies globally to entire runtime process in SSR. @keywords storage, prefix, config */
    static setPrefix(newPrefix: string): void;
    /** Deletes item from storage. @keywords storage, remove, delete, clear */
    remove(): this;
    /** Synchronizes and refreshes data from storage. @keywords storage, sync, update, refresh */
    update(): this;
}