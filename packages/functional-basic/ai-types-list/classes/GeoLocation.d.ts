// md5:dd25d76ca502f82d279898543dd78220 true
/** Cookie key for storing the geo location code. @keywords cookie, geo, key */
export declare const UI_GEO_COOKIE_KEY = "ui-geo-code";
/** Manages and resolves the current location code, storage persistence, and DOM fallbacks. @keywords geo, location, locale, storage */
export declare class GeoLocation {
    /** Initializes location state from storage, cookies, DOM, or defaults. @keywords constructor, init, geo */
    constructor(valueDefault?: string | (() => string | undefined) | undefined);
    /** Gets the current location code string. @keywords get, location, code */
    get(): string;
    /** Updates the current location code with optional storage and cookie persistence. @keywords set, update, persist */
    set(code?: string, save?: boolean): this;
    /** Gets the country code extracted from the current location. @keywords country, code */
    getCountry(): string;
    /** Gets the language code extracted from the current location. @keywords language, locale */
    getLanguage(): string;
    /** Sets the default location code value or dynamic resolver. @keywords default, fallback */
    setValueDefault(code?: string | (() => string | undefined)): this;
}