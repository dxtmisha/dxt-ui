// md5:d33e34bced06742e5c25cd04c7bd8b8d true
/** Class for managing browser cookies. @keywords cookie, browser, storage */
export declare class Cookie<T> {
    /** Returns an instance of the class by the specified cookie name. @keywords getInstance, factory */
    static getInstance<T>(name: string): Cookie<T>;
    /** Creates a Cookie instance for the specified key name. */
    constructor(name: string);
    /** Retrieves the cookie value or initializes it with defaultValue if missing. @keywords get, read */
    get(defaultValue?: T | string | (() => (T | string)), options?: CookieOptions): string | T | undefined;
    /** Sets or updates the cookie value. @keywords set, write, update */
    set(value?: T | string | (() => (T | string)), options?: CookieOptions): void;
    /** Deletes the cookie. @keywords remove, delete, clear */
    remove(): void;
}