// md5:ff4f53746bd78e0b5469f50522883f3b true
/** Manages cookie access and blocking status. @keywords cookie, block, access, status */
export declare class CookieBlock {
    /** Gets a request-isolated CookieBlockInstance. @keywords cookie, block, instance */
    static getItem(): CookieBlockInstance;
    /** Gets the current cookie block status. @keywords cookie, block, status, check */
    static get(): boolean;
    /** Sets the cookie block status. @keywords cookie, block, status, toggle */
    static set(value: boolean): void;
}