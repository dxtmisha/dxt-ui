// md5:d33e34bced06742e5c25cd04c7bd8b8d true
/** Cookie management utility. @keywords cookie, storage, browser */
export declare class Cookie<T> {
    /** Gets a Cookie instance by name. @keywords cookie, getInstance, singleton */
    static getInstance<T>(name: string): Cookie<T>;
    /** Creates a new Cookie instance. @keywords cookie, constructor */
    constructor(name: string);
    /** Gets cookie data or initializes with default value if absent. @keywords cookie, get, read */
    get(defaultValue?: T | string | (() => (T | string)), options?: CookieOptions): string | T | undefined;
    /** Updates the cookie value. @keywords cookie, set, write */
    set(value?: T | string | (() => (T | string)), options?: CookieOptions): void;
    /** Deletes the cookie. @keywords cookie, remove, delete */
    remove(): void;
}