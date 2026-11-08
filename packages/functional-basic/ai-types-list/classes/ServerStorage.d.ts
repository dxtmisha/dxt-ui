// md5:883c5bd37b08d18d509d0d6e473f7853 true
export type ServerStorageItem = {
    value: unknown;
    hydration: boolean;
};
export type ServerStorageList = Record<string, ServerStorageItem>;
/** Manages isolated data storage during SSR across parallel requests. @keywords ssr, storage, state, isolation */
export declare class ServerStorage {
    /** Retrieves or initializes a value by key from SSR storage. @keywords get, read, ssr, hydration */
    static get<T = unknown>(key: string, defaultValue?: (() => T) | T, hydration?: boolean, reportContextError?: boolean): T;
    /** Saves or computes a value in SSR storage. @keywords set, write, store, hydration */
    static set<T = unknown>(key: string, value: (() => T) | T, hydration?: boolean, storageList?: ServerStorageList): T;
    /** Checks whether a key exists in SSR storage. @keywords has, exists, check */
    static has(key: string): boolean;
    /** Toggles visibility of SSR context error messages. @keywords error, status, logger */
    static setErrorStatus(hide: boolean): void;
    /** Removes an item by key from storage. @keywords remove, delete */
    static remove(key: string): void;
    /** Clears all stored values in the current context. @keywords reset, clear */
    static reset(): void;
    /** Initializes storage with a request context provider function. @keywords init, context, ssr */
    static init(listener: () => Record<string, unknown> | undefined): typeof ServerStorage;
    /** Serializes hydratable storage items into an HTML script tag. @keywords toString, hydration, serialize, ssr */
    static toString(): string;
}