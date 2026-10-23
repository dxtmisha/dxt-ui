// md5:7a6431a445b3ed317c8e467eacbbdff2 true
/** Manages cookie access and blocking status. @keywords cookie, block, access, permissions */
export declare class CookieBlock {
    /** Retrieves current cookie blocking status. @keywords cookie, block, status, check */
    static get(): boolean;
    /** Sets cookie blocking status. @keywords cookie, block, status, toggle */
    static set(value: boolean): void;
    /** Gets request-isolated CookieBlockInstance. @keywords cookie, block, instance, request */
    static getItem(): CookieBlockInstance;
}