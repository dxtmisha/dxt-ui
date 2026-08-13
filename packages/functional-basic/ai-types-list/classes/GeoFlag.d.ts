// md5:8630ec81002531ad4b05a6431a18da24 true
export declare const GEO_FLAG_ICON_NAME = "f";
/** GeoFlag helper for country codes and flag icons. @keywords geo, flag, country, language */
export declare class GeoFlag {
    /** @keywords constructor */
    constructor(code?: string);
    /** Gets country item and flag. @keywords get, flag, country */
    get(code?: string): GeoFlagItem | undefined;
    /** Gets language item and flag. @keywords get, language, flag */
    getLanguage(code?: string): GeoFlagItem | undefined;
    /** Gets current flag code. @keywords get, code */
    getCode(): string;
    /** Gets flag icon name. @keywords get, flag, icon */
    getFlag(code?: string): string | undefined;
    /** Gets country list. @keywords get, list, country */
    getList(codes?: string[], sort?: boolean): GeoFlagItem[];
    /** Gets language list. @keywords get, list, language */
    getListLanguage(codes?: string[], sort?: boolean): GeoFlagItem[];
    /** Gets national country list. @keywords get, national, country */
    getNational(codes?: string[], sort?: boolean): GeoFlagNational[];
    /** Gets national language list. @keywords get, national, language */
    getNationalLanguage(codes?: string[], sort?: boolean): GeoFlagNational[];
    /** Sets current code. @keywords set, code */
    setCode(code: string): this;
    /** Gets GeoIntl instance. @keywords get, location, intl */
    protected getLocation(): GeoIntl;
    /** Gets codes array. @keywords get, codes */
    protected getCodes(codes?: string[]): string[];
    /** Gets language name. @keywords get, language, name */
    protected getLanguageName(data: GeoItemFull): string;
    /** Gets country name. @keywords get, country, name */
    protected getCountry(data: GeoItemFull): string;
}