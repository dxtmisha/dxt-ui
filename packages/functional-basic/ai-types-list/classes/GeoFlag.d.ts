// md5:ad4bf45729414552f6fcfd8c43b0622d true
export declare const GEO_FLAG_ICON_NAME = "f";
/** Handles flags, country names, languages, and geographic metadata. @keywords geo, flag, country, language, locale */
export declare class GeoFlag {
    /** Mapping of country codes to flag icon names. @keywords flags, country codes, icon map */
    static flags: Record<string, string>;
    /** Initializes GeoFlag with an optional country/language code. @keywords geo flag, constructor, locale */
    constructor(code?: string);
    /** Retrieves country information and flag data by country code. @keywords country, flag, metadata */
    get(code?: string): GeoFlagItem | undefined;
    /** Retrieves language information and associated flag by code. @keywords language, flag, metadata */
    getLanguage(code?: string): GeoFlagItem | undefined;
    /** Returns the active country code. @keywords get code, country code, locale */
    getCode(): string;
    /** Returns the flag icon identifier for a given country code. @keywords flag icon, icon id */
    getFlag(code?: string): string | undefined;
    /** Retrieves a list of countries for specified codes or all available countries. @keywords country list, countries */
    getList(codes?: string[], sort?: boolean): GeoFlagItem[];
    /** Retrieves a list of languages for specified codes or all available languages. @keywords language list, languages */
    getListLanguage(codes?: string[], sort?: boolean): GeoFlagItem[];
    /** Retrieves a list of countries with names in their native languages. @keywords national countries, native names */
    getNational(codes?: string[], sort?: boolean): GeoFlagNational[];
    /** Retrieves a list of languages with their native names. @keywords national languages, native names */
    getNationalLanguage(codes?: string[], sort?: boolean): GeoFlagNational[];
    /** Updates the current country/language code. @keywords set code, update locale */
    setCode(code: string): this;
}