// md5:3f251242ad4d24b9eb0b0e9152d1444e true
type ServerStorageItem = {
    value: any;
    hydration: boolean;
};
type ServerStorageList = Record<string, ServerStorageItem>;
/** Manages isolated data storage during SSR across parallel requests. @keywords ssr, storage, isolation, context */
export declare class ServerStorage {
    /** Initializes storage with a request context listener function. @keywords init, context, ssr */
    static init(listener: () => Record<string, any> | undefined): typeof ServerStorage;
    /** Resets the storage state. @keywords reset, clear */
    static reset(): void;
    /** Checks if a value exists in storage by key. @keywords has, exists, key */
    static has(key: string): boolean;
    /** Retrieves a value or creates it using a factory function with optional hydration. @keywords get, hydration, cache */
    static get<T = any>(key: string, defaultValue?: () => T, hydration?: boolean): T;
    /** Stores a value from a factory function with optional hydration. @keywords set, store, hydration */
    static set<T = any>(key: string, value: () => T, hydration?: boolean, storageList?: ServerStorageList): T;
    /** Sets whether error messages should be hidden or shown. @keywords error, status, logging */
    static setErrorStatus(hide: boolean): void;
    /** Removes a value from storage by key. @keywords remove, delete */
    static remove(key: string): void;
    /** Serializes the hydration storage into an executable script tag string. @keywords hydration, serialize, toString */
    static toString(): string;
}
export {};