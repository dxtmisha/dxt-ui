// md5:dbd2592734acf69c9aba18e8447b5a15 true
export declare const UI_GEO_COOKIE_KEY = "ui-geo-code";

/** Base class for managing geographic, locale, and timezone data. @keywords geo, location, timezone, locale */
export declare class GeoInstance {
    /** Initializes location and geographic data. @keywords constructor, geo, init */
    constructor();
    /** Gets information about the current country. @keywords current, country, geo */
    get(): GeoItemFull;
    /** Gets the current country code. @keywords country, code */
    getCountry(): string;
    /** Gets the current language code. @keywords language, code */
    getLanguage(): string;
    /** Gets standard location string formatted as language-country. @keywords standard, format, locale */
    getStandard(): string;
    /** Gets the first day of the week for the current country. @keywords first_day, week */
    getFirstDay(): string;
    /** Gets the current location code string. @keywords location */
    getLocation(): string;
    /** Gets the country code parsed from the location. @keywords location, country */
    getLocationCountry(): string;
    /** Gets the language code parsed from the location. @keywords location, language */
    getLocationLanguage(): string;
    /** Gets processed geo item data including the current language. @keywords item, geo */
    getItem(): GeoItemFull;
    /** Gets the full list of available country geo items. @keywords list, countries */
    getList(): GeoItem[];
    /** Gets country data by country or locale code. @keywords by_code, lookup */
    getByCode(code?: string): GeoItemFull;
    /** Gets full geo data by language-country code combination. @keywords code_full */
    getByCodeFull(code: string): GeoItem | undefined;
    /** Gets full geo data by country code. @keywords country */
    getByCountry(country: string): GeoItem | undefined;
    /** Gets full geo data by language code. @keywords language */
    getByLanguage(language: string): GeoItem | undefined;
    /** Gets the current timezone offset in minutes. @keywords timezone, offset */
    getTimezone(): number;
    /** Gets the formatted timezone offset string (e.g., '+03:00'). @keywords timezone, format */
    getTimezoneFormat(): string;
    /** Finds country data by code or name. @keywords find, search */
    find(code: string): GeoItemFull;
    /** Converts a geo item to standard language-country format. @keywords standard, format */
    toStandard(item: GeoItem, language?: string): string;
    /** Updates the current location code. @param save Whether to persist to storage @keywords set, location */
    set(code: string, save?: boolean): void;
    /** Updates the default timezone offset. @keywords timezone, offset */
    setTimezone(timezone: number): void;
    /** Sets the default country code or provider. @keywords default, fallback */
    setValueDefault(code?: string | (() => string)): void;
    /** Adds or merges country geo data. @keywords add, merge */
    add(country: string, item: Partial<GeoItem>): this;
    /** Adds or updates multiple countries. @keywords add_list, batch */
    addList(list: Record<string, Partial<GeoItem>>): this;
}