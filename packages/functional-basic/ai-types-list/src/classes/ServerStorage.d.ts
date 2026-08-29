// md5:3f251242ad4d24b9eb0b0e9152d1444e true
type ServerStorageItem = {
    value: any;
    hydration: boolean;
};
type ServerStorageList = Record<string, ServerStorageItem>;
/** Manages SSR data storage and request context isolation. @keywords ssr, storage, context, hydration */
export declare class ServerStorage {
    /** Initializes the storage with a request context listener. @keywords init, listener, context */
    static init(listener: () => Record<string, any> | undefined): typeof ServerStorage;
    /** Resets the storage state. @keywords reset, clear */
    static reset(): void;
    /** Checks if a key exists in storage. @keywords has, exists, check */
    static has(key: string): boolean;
    /** Retrieves or initializes a value from storage. @keywords get, retrieve, fetch */
    static get<T = any>(key: string, defaultValue?: () => T, hydration?: boolean): T;
    /** Stores a value factory result in storage. @keywords set, save, store */
    static set<T = any>(key: string, value: () => T, hydration?: boolean, storageList?: ServerStorageList): T;
    /** Sets whether missing storage error messages are hidden. @keywords error, status, logging */
    static setErrorStatus(hide: boolean): void;
    /** Removes a value from storage by key. @keywords remove, delete */
    static remove(key: string): void;
    /** Serializes storage data into a script tag for client hydration. @keywords toString, hydration, serialize */
    static toString(): string;
}
export {};