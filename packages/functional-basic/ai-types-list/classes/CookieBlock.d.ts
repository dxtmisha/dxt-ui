// md5:ff4f53746bd78e0b5469f50522883f3b true
/** Manages cookie access block status. @keywords cookie, block, access */
export declare class CookieBlock {
    /** Returns a request-isolated CookieBlockInstance. @keywords cookie, instance, isolated */
    static getItem(): CookieBlockInstance;
    /** Retrieves the current cookie block status. @keywords cookie, block, status, get */
    static get(): boolean;
    /** Sets the cookie block status. @keywords cookie, block, status, set */
    static set(value: boolean): void;
}