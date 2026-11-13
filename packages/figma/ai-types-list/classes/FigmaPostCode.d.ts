// md5:b17a2a8a7193cb85cd0571fd503b296b true
/** Manages the unique verification code for messages between Figma plugin and UI. @keywords figma, verification, post code, messaging */
export declare class FigmaPostCode {
    /** Checks if the provided code matches the current post code. @keywords verify, validate, match, post code */
    static is(code?: string): boolean;
    /** Retrieves the current post code. @keywords get, retrieve, post code */
    static get(): string;
    /** Sets a new post code; can only be invoked once. @keywords set, assign, post code */
    static set(code: string): void;
}