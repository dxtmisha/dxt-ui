// md5:c9571bd32412a82c734ce1c322554b51 true
/** Class for managing browser cookies. @keywords cookie, storage, browser */
export declare class Cookie<T> {
    /** Creates a new Cookie manager instance for the specified cookie name. @keywords cookie, constructor */
    constructor(name: string);
    /** Retrieves or creates an instance for the specified cookie name. @keywords cookie, getInstance, factory */
    static getInstance<T>(name: string): Cookie<T>;
    /** Retrieves cookie data or initializes with default value if absent. @keywords get, read, cookie */
    get(defaultValue?: T | string | (() => (T | string)), options?: CookieOptions): T | string | undefined;
    /** Updates or sets cookie data. @keywords set, write, update, cookie */
    set(value?: T | string | (() => (T | string)), options?: CookieOptions): void;
    /** Deletes the cookie. @keywords delete, remove, cookie */
    remove(): void;
}