// md5:ee392507563283538819c9f89777119d true
/** Cookie options definition @keywords cookie_options, options */
export type CookieOptions = {
    /** Max age in seconds @keywords max_age, age */
    age?: number;
    /** SameSite policy @keywords same_site, policy */
    sameSite?: 'Strict' | 'Lax' | 'None';
    /** Cookie path @keywords path */
    path?: string;
    /** Cookie domain @keywords domain */
    domain?: string;
    /** Secure flag @keywords secure */
    secure?: boolean;
    /** HttpOnly flag @keywords httponly */
    httpOnly?: boolean;
    /** Partitioned flag @keywords partitioned */
    partitioned?: boolean;
    /** Additional cookie arguments @keywords arguments */
    arguments?: Record<string, any> | string[];
};

/** Class for working with cookies @keywords cookie, storage, browser */
export declare class Cookie<T> {
    /** Cookie value @keywords value */
    value: string | T | undefined;
    /** Cookie options @keywords options */
    options: CookieOptions;
    /** Cookie name @keywords name */
    name: string;
    /** Returns an instance of the class according to the specified cookie name @keywords get_instance, cookie */
    static getInstance<T>(name: string): Cookie<T>;
    /** Creates a cookie instance @keywords constructor, cookie */
    constructor(name: string);
    /** Gets cookie data or sets default value if undefined @keywords get, cookie */
    get(defaultValue?: T | string | (() => (T | string)), options?: CookieOptions): string | T | undefined;
    /** Sets cookie value and options @keywords set, cookie */
    set(value?: T | string | (() => (T | string)), options?: CookieOptions): void;
    /** Removes the cookie @keywords remove, delete, cookie */
    remove(): void;
    /** Updates the cookie with current value and options @keywords update, cookie */
    update(): void;
}