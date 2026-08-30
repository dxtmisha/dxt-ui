// md5:33d98f75fd15920a1f6df5a5ee33b8a5 true
export type CookieSameSite = 'strict' | 'lax';

/** Options for setting and configuring cookies. @keywords cookie, options, samesite, secure */
export type CookieOptions = {
    age?: number;
    sameSite?: CookieSameSite;
    path?: string;
    domain?: string;
    secure?: boolean;
    httpOnly?: boolean;
    partitioned?: boolean;
    arguments?: string[] | Record<string, string | number | boolean>;
};

/** Manages cookie storage with custom listeners across DOM and SSR environments. @keywords cookie, storage, ssr, browser, persistence */
export declare class CookieStorage {
    /** Initializes cookie storage with custom getter and setter listeners. @keywords init, listener, ssr */
    static init(getListener?: (key: string) => any | undefined, getListenerRaw?: () => string, setListener?: (key: string, value: any, cookie: string, options?: CookieOptions) => void): void;
    /** Resets the storage by clearing all in-memory items and resetting listeners. @keywords reset, clear */
    static reset(): void;
    /** Retrieves a typed cookie value from storage or returns a default fallback. @keywords get, read, retrieve */
    static get<T>(name: string, defaultValue?: T | (() => T)): T | undefined;
    /** Saves a value to cookie storage with configurable options. @keywords set, write, store */
    static set<T>(name: string, value: T | (() => T), options?: CookieOptions): T;
    /** Removes a cookie by name from storage. @keywords remove, delete, clear */
    static remove(name: string): void;
    /** Synchronizes and updates in-memory storage cache from current cookies. @keywords update, sync, refresh */
    static update(): void;
}