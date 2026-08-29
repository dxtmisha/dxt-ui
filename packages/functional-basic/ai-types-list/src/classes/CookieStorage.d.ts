// md5:33d98f75fd15920a1f6df5a5ee33b8a5 true
export type CookieSameSite = 'strict' | 'lax';

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

/** Storage manager for client-side and SSR cookies. @keywords cookie, storage, ssr, persistence */
export declare class CookieStorage {
    /** Initializes cookie storage with custom accessor listeners. @keywords init, listener, setup */
    static init(getListener?: (key: string) => any | undefined, getListenerRaw?: () => string, setListener?: (key: string, value: any, cookie: string, options?: CookieOptions) => void): void;
    /** Resets in-memory storage items and unbinds listeners. @keywords reset, clear */
    static reset(): void;
    /** Retrieves a cookie value by name or returns fallback default. @keywords get, read, retrieve */
    static get<T>(name: string, defaultValue?: T | (() => T)): T | undefined;
    /** Stores a cookie value with specified configuration options. @keywords set, write, save */
    static set<T>(name: string, value: T | (() => T), options?: CookieOptions): T;
    /** Removes a cookie by name. @keywords remove, delete */
    static remove(name: string): void;
    /** Refreshes and updates in-memory store from active cookies. @keywords update, sync, refresh */
    static update(): void;
}