// md5:f2a560a26a17a7d16ba79d69346b883c true
/** Class for managing localStorage and sessionStorage with prefix, expiration, and SSR isolation support. @keywords storage local session cache */
export declare class DataStorage<T> {
    /** Sets a custom prefix for storage keys. @keywords prefix key */
    static setPrefix(newPrefix: string): void;
    /** Initializes a storage instance. @keywords constructor storage */
    constructor(name: string, isSession?: boolean, errorCenter?: ErrorCenterInstance);
    /** Retrieves value from storage with optional cache duration and default fallback. @keywords get read storage */
    get(defaultValue?: T | (() => T), cache?: number): T | undefined;
    /** Sets a value in storage. @keywords set write storage */
    set(value?: T | (() => T)): T | undefined;
    /** Removes the item from storage. @keywords remove delete storage */
    remove(): this;
    /** Updates or reloads storage data. @keywords update refresh storage */
    update(): this;
}