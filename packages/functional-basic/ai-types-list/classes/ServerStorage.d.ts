// md5:bffbaa104bc3e991453cca44bf7a24b5 true
export type ServerStorageItem = {
    value: unknown;
    hydration: boolean;
};
export type ServerStorageList = Record<string, ServerStorageItem>;
/** Manages request-isolated data storage and client hydration during SSR. @keywords ssr, storage, hydration, context */
export declare class ServerStorage {
    /** Checks whether a key exists in storage. @keywords has, exists, check */
    static has(key: string): boolean;
    /** Retrieves a value from storage or initializes it with a fallback. @keywords get, read, default, hydration */
    static get<T = unknown>(key: string, defaultValue?: (() => T) | T, hydration?: boolean): T;
    /** Saves a value to storage with optional client hydration flag. @keywords set, store, write, hydration */
    static set<T = unknown>(key: string, value: (() => T) | T, hydration?: boolean, storageList?: ServerStorageList): T;
    /** Sets the visibility of error messages. @keywords error, status, logging */
    static setErrorStatus(hide: boolean): void;
    /** Removes a key and its value from storage. @keywords remove, delete, purge */
    static remove(key: string): void;
    /** Resets the storage state. @keywords reset, clear, flush */
    static reset(): void;
    /** Initializes storage with a per-request context provider. @keywords init, setup, context, listener */
    static init(listener: () => Record<string, unknown> | undefined): typeof ServerStorage;
    /** Serializes hydratable storage state into a script string. @keywords toString, serialize, hydration, script */
    static toString(): string;
}