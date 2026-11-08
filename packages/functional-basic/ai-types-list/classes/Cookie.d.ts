// md5:b092be4ae1114d0ce9d666435041ae69 true
/** Resolved return type for Cookie.get with fallback handling. @keywords cookie, return type */
export type CookieGet<T, D = undefined> = [
    D
] extends [
    undefined
] ? (T | undefined) : unknown extends T ? (D extends () => infer R ? R : D) : (T | (D extends () => infer R ? R : D));
/** Manages browser cookies with read, write, and delete operations. @keywords cookie, storage, browser */
export declare class Cookie<T = unknown> {
    /** Creates a Cookie instance for the specified cookie name. @keywords cookie, constructor */
    constructor(name: string);
    /** Retrieves the cookie value, optionally setting a default value if missing. @keywords cookie, get, read */
    get<D extends T | string | (() => (T | string)) | undefined = undefined>(defaultValue?: D, options?: CookieOptions): CookieGet<T, D>;
    /** Updates the cookie value and configuration options. @keywords cookie, set, write */
    set(value?: T | string | (() => (T | string)), options?: CookieOptions): void;
    /** Returns a cached or new Cookie instance by cookie name. @keywords cookie, getInstance, singleton */
    static getInstance<T = unknown>(name: string): Cookie<T>;
    /** Removes the cookie by expiring it. @keywords cookie, remove, delete */
    remove(options?: CookieOptions): void;
}