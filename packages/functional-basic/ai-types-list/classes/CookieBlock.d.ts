// md5:74ec25921ff20dcc1a19ae743d876d7e true
/** Manages cookie access and blocking status. @keywords cookie, access, block, consent */
export declare class CookieBlock {
    /** Gets the current cookie block status. @keywords get, cookie, block, status */
    static get(): boolean;
    /** Sets the cookie block status. @keywords set, cookie, block, status */
    static set(value?: boolean): void;
    /** Returns a request-isolated CookieBlockInstance. @keywords cookie, block, instance, request */
    static getItem(): CookieBlockInstance;
}