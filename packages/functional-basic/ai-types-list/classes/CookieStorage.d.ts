// md5:61edbc09cf709625350fc93762da2b2e true
export type CookieSameSite = 'strict' | 'lax';

/** Cookie configuration options @keywords cookie, options, settings */
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

/** Universal cookie storage manager supporting custom listeners for DOM and SSR environments @keywords cookie, storage, ssr, persistence */
export declare class CookieStorage {
    /** Retrieves data from cookie storage with optional fallback @keywords cookie, get, read */
    static get<T>(name: string, defaultValue?: T | (() => T)): T | undefined;
    /** Stores a value in cookies with configurable options @keywords cookie, set, write, save */
    static set<T>(name: string, value: T | (() => T), options?: CookieOptions): T;
    /** Removes a cookie by name from storage @keywords cookie, remove, delete */
    static remove(name: string): void;
    /** Synchronizes and updates data from current cookies @keywords cookie, update, sync, refresh */
    static update(): void;
    /** Clears all in-memory items and resets registered listeners @keywords cookie, reset, clear */
    static reset(): void;
    /** Initializes storage listeners for custom cookie retrieval and persistence @keywords cookie, init, setup, listeners */
    static init(getListener?: (key: string) => unknown, getListenerRaw?: () => string, setListener?: (key: string, value: string, cookie: string, options?: CookieOptions) => void): void;
}