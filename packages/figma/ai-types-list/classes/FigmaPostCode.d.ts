// md5:0c090ef64d50bec4a4d412b7a526a1f6 true
/** Manages unique verification code for message communication between Figma plugin and UI. @keywords figma message verification post code */
export declare class FigmaPostCode {
    /** Checks if the provided code matches the current post code. @keywords verify match validate */
    static is(code: string): boolean;
    /** Returns the current post code. @keywords get current code */
    static get(): string;
    /** Sets a new post code once. @note Can only be called once. @keywords set post code init */
    static set(code: string): void;
}