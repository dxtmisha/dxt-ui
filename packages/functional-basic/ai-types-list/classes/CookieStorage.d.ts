// md5:1d18986ebaabeb642fb271c40102ee88 true
export type CookieSameSite = 'strict' | 'lax' | 'none';
/** Resolved return type for `CookieStorage.get` based on default value type. @keywords cookie, return type, inference */
export type CookieStorageGet<T, D = undefined> = [
    D
] extends [
    undefined
] ? (T | undefined) : unknown extends T ? (D extends () => infer R ? R : D) : T;
export type CookieOptions = {
    age?: number;
    sameSite?: CookieSameSite;
    path?: string;
    domain?: string;
    secure?: boolean;
    httpOnly?: boolean;
    partitioned?: boolean;
    arguments?: string[] | Record<string, unknown>;
};
/** Manages cookie storage with custom listeners across DOM and SSR environments. @keywords cookie, storage, browser, ssr, persistence */
export declare class CookieStorage {
    /** Retrieves a cookie value or fallback default value. @keywords cookie, get, read, retrieve */
    static get<T = unknown, D extends T | (() => T) | undefined = undefined>(name: string, defaultValue?: D, options?: CookieOptions): CookieStorageGet<T, D>;
    /** Saves or updates a cookie value with options. @keywords cookie, set, write, store */
    static set<T = unknown>(name: string, value: T | (() => T), options?: CookieOptions): T;
    /** Deletes a cookie by name. @keywords cookie, remove, delete, clear */
    static remove(name: string, options?: CookieOptions): void;
    /** Refreshes internal cookie cache from active cookie storage. @keywords cookie, update, refresh, sync */
    static update(): void;
    /** Clears in-memory cookie cache and registered listeners. @keywords cookie, reset, clear, memory */
    static reset(): void;
    /** Initializes storage with custom SSR/DOM listeners and hooks. @remarks Omitting listeners defaults to internal cache or `document.cookie` in browser environments. @keywords cookie, init, setup, ssr, listener */
    static init(getListener?: (key: string) => unknown, getListenerRaw?: () => string, setListener?: (key: string, value: string, cookie: string, options?: CookieOptions) => void): void;
}