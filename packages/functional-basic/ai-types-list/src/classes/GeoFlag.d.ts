// md5:ad4bf45729414552f6fcfd8c43b0622d true
export declare const GEO_FLAG_ICON_NAME = "f";
/** Geographic and flag information provider for country names, languages, and icons. @keywords geo, flag, country, language, locale */
export declare class GeoFlag {
    /** Initializes the GeoFlag instance with an optional country/language code. @keywords constructor, geo, locale */
    constructor(code?: string);
    /** Retrieves country and flag information. @keywords country, flag, info */
    get(code?: string): GeoFlagItem | undefined;
    /** Retrieves language and flag information. @keywords language, flag, info */
    getLanguage(code?: string): GeoFlagItem | undefined;
    /** Gets the current country code. @keywords country, code */
    getCode(): string;
    /** Gets the flag icon identifier. @keywords flag, icon, id */
    getFlag(code?: string): string | undefined;
    /** Retrieves a list of countries for the specified codes or all available countries. @keywords countries, list */
    getList(codes?: string[], sort?: boolean): GeoFlagItem[];
    /** Retrieves a list of languages for the specified codes or all available languages. @keywords languages, list */
    getListLanguage(codes?: string[], sort?: boolean): GeoFlagItem[];
    /** Retrieves a list of countries with names in their national languages. @keywords countries, national, localized */
    getNational(codes?: string[], sort?: boolean): GeoFlagNational[];
    /** Retrieves a list of languages with their native names. @keywords languages, national, native */
    getNationalLanguage(codes?: string[], sort?: boolean): GeoFlagNational[];
    /** Sets the current country and language code. @keywords setCode, locale */
    setCode(code: string): this;
}