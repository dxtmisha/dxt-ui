// md5:3f251242ad4d24b9eb0b0e9152d1444e true
type ServerStorageItem = {
    value: any;
    hydration: boolean;
};
type ServerStorageList = Record<string, ServerStorageItem>;
/** @keywords ServerStorage, SSR, storage, isolation */
export declare class ServerStorage {
    /** @keywords init, context, listener */
    static init(listener: () => Record<string, any> | undefined): typeof ServerStorage;
    /** @keywords reset, clear */
    static reset(): void;
    /** @keywords has, check, key */
    static has(key: string): boolean;
    /** @keywords get, retrieve, value */
    static get<T = any>(key: string, defaultValue?: () => T, hydration?: boolean): T;
    /** @keywords set, save, store */
    static set<T = any>(key: string, value: () => T, hydration?: boolean, storageList?: ServerStorageList): T;
    /** @keywords error, status, hide */
    static setErrorStatus(hide: boolean): void;
    /** @keywords remove, delete */
    static remove(key: string): void;
    /** @keywords toString, hydration, html */
    static toString(): string;
}
export {};