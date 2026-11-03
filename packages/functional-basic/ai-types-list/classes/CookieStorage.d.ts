// md5:b76ed6468f0adc3bee68ee6d191f3254 true
export type CookieSameSite = 'strict' | 'lax' | 'none';
/** Resolves return type of CookieStorage.get based on fallback value. @keywords cookie return type */
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
/** Manages cookies with support for DOM, SSR, and custom storage listeners. @keywords cookie storage ssr browser */
export declare class CookieStorage {
    /** Retrieves a cookie value or returns the default fallback. @keywords cookie get read storage */
    static get<T = unknown, D extends T | (() => T) | undefined = undefined>(name: string, defaultValue?: D, options?: CookieOptions): CookieStorageGet<T, D>;
    /** Writes a cookie value with optional attributes. @keywords cookie set save write */
    static set<T = unknown>(name: string, value: T | (() => T), options?: CookieOptions): T;
    /** Deletes a cookie from storage. @keywords cookie remove delete */
    static remove(name: string, options?: CookieOptions): void;
    /** Synchronizes and updates cache from current cookie sources. @keywords cookie update refresh sync */
    static update(): void;
    /** Clears in-memory items and resets listeners to default state. @keywords cookie reset clear */
    static reset(): void;
    /**
     * Initializes storage listeners and hooks for custom or SSR runtimes.
     * @remarks When omitted, DOM runtime defaults to `document.cookie`, while non-DOM/SSR falls back to in-memory caching.
     * @keywords cookie init setup listeners ssr
     */
    static init(getListener?: (key: string) => unknown, getListenerRaw?: () => string, setListener?: (key: string, value: string, cookie: string, options?: CookieOptions) => void): void;
}