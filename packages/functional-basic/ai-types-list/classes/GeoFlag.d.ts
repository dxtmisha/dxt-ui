// md5:5de4d42226dac5de0b23dc0038a61e85 true
export declare const GEO_FLAG_ICON_NAME = "f";
/** Country, language, and flag icon geographic utility. @keywords geo flag country language locale icon */
export declare class GeoFlag {
    /** Country code to flag icon name mapping. @keywords flag icons mapping */
    static flags: Record<string, string>;
    /** Creates a GeoFlag instance with an optional country/language code. @keywords constructor init */
    constructor(code?: string);
    /** Retrieves country and flag details. @keywords get country flag */
    get(code?: string): GeoFlagItem | undefined;
    /** Retrieves language and flag details. @keywords get language flag */
    getLanguage(code?: string): GeoFlagItem | undefined;
    /** Returns the active country code. @keywords country code get */
    getCode(): string;
    /** Returns the flag icon identifier for a country code. @keywords flag icon code */
    getFlag(code?: string): string | undefined;
    /** Returns country list, optionally filtered and sorted. @keywords list countries sort */
    getList(codes?: string[], sort?: boolean): GeoFlagItem[];
    /** Returns language list, optionally filtered and sorted. @keywords list languages sort */
    getListLanguage(codes?: string[], sort?: boolean): GeoFlagItem[];
    /** Returns country list with names in native languages. @keywords national countries native */
    getNational(codes?: string[], sort?: boolean): GeoFlagNational[];
    /** Returns language list with names in native languages. @keywords national languages native */
    getNationalLanguage(codes?: string[], sort?: boolean): GeoFlagNational[];
    /** Updates the active locale or country code. @keywords set code locale */
    setCode(code: string): this;
}