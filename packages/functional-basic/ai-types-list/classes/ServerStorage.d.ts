// md5:218f8a8d2ccc23b6ff56ad7497540d21 true
export type ServerStorageItem = {
    value: unknown;
    hydration: boolean;
};
export type ServerStorageList = Record<string, ServerStorageItem>;
/** SSR data storage manager ensuring data isolation across parallel requests. @keywords ssr storage request context isolation */
export declare class ServerStorage {
    /** Checks whether a key exists in storage. @keywords storage has exists contains key */
    static has(key: string): boolean;
    /** Retrieves a value from storage or populates it with a default fallback. @keywords storage get retrieve defaultValue fallback */
    static get<T = unknown>(key: string, defaultValue?: (() => T) | T, hydration?: boolean, reportContextError?: boolean): T;
    /** Saves a value or factory result into storage. @keywords storage set save store write */
    static set<T = unknown>(key: string, value: (() => T) | T, hydration?: boolean, storageList?: ServerStorageList): T;
    /** Configures whether context error messages are hidden or displayed. @keywords error status reporting silence */
    static setErrorStatus(hide: boolean): void;
    /** Removes an item from storage by key. @keywords storage remove delete unset */
    static remove(key: string): void;
    /** Resets and clears the current storage state. @keywords storage reset clear wipe */
    static reset(): void;
    /** Initializes storage with a context provider listener. @keywords init setup context listener */
    static init(listener: () => Record<string, unknown> | undefined): typeof ServerStorage;
    /** Serializes hydration data into an HTML script element string. @keywords serialization hydration toString script */
    static toString(): string;
}