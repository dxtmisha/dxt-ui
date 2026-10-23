// md5:861cb8ab3016d494b853cc12e5fe1d29 true
type ServerStorageItem = {
    value: unknown;
    hydration: boolean;
};
type ServerStorageList = Record<string, ServerStorageItem>;
/** Manages isolated data storage during server-side rendering (SSR). @keywords ssr server storage request isolation */
export declare class ServerStorage {
    /** Retrieves a stored value or initializes it using the default value factory. @keywords get retrieve cache default */
    static get<T = unknown>(key: string, defaultValue?: () => T, hydration?: boolean): T;
    /** Stores a value produced by a factory function. @keywords set save store cache */
    static set<T = unknown>(key: string, value: () => T, hydration?: boolean, storageList?: ServerStorageList): T;
    /** Checks if a key exists in the storage. @keywords has exists contains key */
    static has(key: string): boolean;
    /** Configures whether error messages should be suppressed. @keywords error status visibility hide */
    static setErrorStatus(hide: boolean): void;
    /** Removes a specific item from storage by key. @keywords remove delete clear key */
    static remove(key: string): void;
    /** Clears all stored values from the current storage context. @keywords reset clear purge */
    static reset(): void;
    /** Initializes storage with a context resolver for request isolation. @keywords init initialize context ssr */
    static init(listener: () => Record<string, unknown> | undefined): typeof ServerStorage;
    /** Serializes storage state into a script tag string for client hydration. @keywords toString hydration serialize script */
    static toString(): string;
}
export {};