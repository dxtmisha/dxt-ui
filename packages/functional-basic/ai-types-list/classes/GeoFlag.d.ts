// md5:d576d6ea7eb370b0926c073463b9ece0 true
/** Prefix for flag icon names. @keywords flag, icon, prefix */
export declare const GEO_FLAG_ICON_NAME = "f";
/** Geographic flags and information utility for country names, languages, and icons. @keywords geo, flag, country, language, icon */
export declare class GeoFlag {
    /** Mapping of country codes to flag icon names. @keywords flags, country codes, icon map */
    static flags: Record<string, string>;
    /** Initializes the GeoFlag instance with an optional country/language code. @keywords constructor, geo flag */
    constructor(code?: string);
    /** Returns country and flag information for the specified code. @keywords country, flag, info */
    get(code?: string): GeoFlagItem | undefined;
    /** Returns the current country code. @keywords country code, get code */
    getCode(): string;
    /** Returns the flag icon identifier for the specified country code. @keywords flag, icon, identifier */
    getFlag(code?: string): string | undefined;
    /** Returns language and flag information for the specified country code. @keywords language, flag, info */
    getLanguage(code?: string): GeoFlagItem | undefined;
    /** Returns a list of countries based on provided codes, optionally sorted. @keywords country list, countries */
    getList(codes?: string[], sort?: boolean): GeoFlagItem[];
    /** Returns a list of languages based on provided codes, optionally sorted. @keywords language list, languages */
    getListLanguage(codes?: string[], sort?: boolean): GeoFlagItem[];
    /** Returns a list of countries formatted with their national names. @keywords national countries, native names */
    getNational(codes?: string[], sort?: boolean): GeoFlagNational[];
    /** Returns a list of languages formatted with their national names. @keywords national languages, native names */
    getNationalLanguage(codes?: string[], sort?: boolean): GeoFlagNational[];
    /** Sets the current country and language code. @keywords set code, locale */
    setCode(code: string): this;
}