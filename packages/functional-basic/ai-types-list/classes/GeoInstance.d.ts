// md5:dbd2592734acf69c9aba18e8447b5a15 true
/** Cookie key for storing the geo code. @keywords cookie, geo_key */
export declare const UI_GEO_COOKIE_KEY = "ui-geo-code";
/** Base class for managing geographic data, location, language, and timezone settings. @keywords geo, location, language, timezone */
export declare class GeoInstance {
    /** Initializes the geographic instance and resolves default location data. @keywords constructor, geo, init */
    constructor();
    /** Retrieves full geographic data for the current country. @keywords current, country, geo */
    get(): GeoItemFull;
    /** Retrieves the current country code. @keywords country, code */
    getCountry(): string;
    /** Retrieves the current language code. @keywords language, code */
    getLanguage(): string;
    /** Retrieves the standardized locale string (language-country). @keywords standard, locale, language, country */
    getStandard(): string;
    /** Retrieves the first day of the week for the current country. @keywords first_day, week, calendar */
    getFirstDay(): string;
    /** Retrieves the current raw location string. @keywords location */
    getLocation(): string;
    /** Extracts the country code from the current location. @keywords location, country */
    getLocationCountry(): string;
    /** Extracts the language code from the current location. @keywords location, language */
    getLocationLanguage(): string;
    /** Retrieves processed geographic item data including active language. @keywords item, language, geo */
    getItem(): GeoItemFull;
    /** Retrieves the complete list of available country geo records. @keywords list, countries */
    getList(): GeoItem[];
    /** Retrieves full geographic data by locale, country, or language code. @keywords by_code, search, locale */
    getByCode(code?: string): GeoItemFull;
    /** Retrieves geographic data matching an exact language-country standard code. @keywords by_code_full, lookup */
    getByCodeFull(code: string): GeoItem | undefined;
    /** Retrieves geographic data by country code. @keywords by_country, lookup */
    getByCountry(country: string): GeoItem | undefined;
    /** Retrieves geographic data by language code. @keywords by_language, lookup */
    getByLanguage(language: string): GeoItem | undefined;
    /** Retrieves the current timezone offset in minutes. @keywords timezone, offset, minutes */
    getTimezone(): number;
    /** Retrieves the formatted timezone offset string (e.g. '+03:00'). @keywords timezone, format */
    getTimezoneFormat(): string;
    /** Finds country geo data by code or name. @keywords find, search, country */
    find(code: string): GeoItemFull;
    /** Formats a geo item into a standard locale string. @keywords to_standard, format, locale */
    toStandard(item: GeoItem, language?: string): string;
    /** Sets the active location code and optionally persists it to storage. @keywords set, location, save */
    set(code: string, save?: boolean): void;
    /** Sets the default timezone offset in minutes. @keywords set_timezone, offset */
    setTimezone(timezone: number): void;
    /** Sets the default country code or dynamic resolver. @keywords default_value, country */
    setValueDefault(code?: string | (() => string)): void;
    /** Adds or merges geographic data for a specific country code. @keywords add, country, merge */
    add(country: string, item: Partial<GeoItem>): this;
    /** Adds or merges multiple country geographic records. @keywords add_list, countries, batch */
    addList(list: Record<string, Partial<GeoItem>>): this;
}