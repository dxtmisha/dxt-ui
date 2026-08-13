// md5:ff4f53746bd78e0b5469f50522883f3b true
/** Class for changing cookie access status. @keywords cookie, block, status */
export declare class CookieBlock {
    /** Returns a request-isolated instance of CookieBlockInstance. @keywords instance, get, item */
    static getItem(): CookieBlockInstance;
    /** Obtaining status. @keywords get, status, blocked */
    static get(): boolean;
    /** Changing status. @keywords set, status, block */
    static set(value: boolean): void;
}