// md5:75e80646466539187f71a3ed767382f9 true
/** Static class providing centralized interface for managing locale, country, and time zone data. @keywords geo, locale, country, timezone */
export declare class Geo {
    /** Returns current country and language data. @keywords current, geo, country, language */
    static get(): GeoItemFull;
    /** Sets current geographical location and updates instance state. @keywords set, location, locale */
    static set(code?: string, save?: boolean): void;
    /** Resolves geo data by country or language code from global database. @keywords lookup, code, country, language */
    static getByCode(code?: string): GeoItemFull;
    /** Resolves exact geo data by matching full locale string (e.g., 'en-US'). @keywords lookup, exact, full, locale */
    static getByCodeFull(code?: string): GeoItem | undefined;
    /** Resolves geo data for specific country code. @keywords country, code, lookup */
    static getByCountry(country?: string): GeoItem | undefined;
    /** Resolves geo data for specific language code. @keywords language, code, lookup */
    static getByLanguage(language?: string): GeoItem | undefined;
    /** Returns 2-letter code of current country. @keywords country, code, current */
    static getCountry(): string;
    /** Returns code for first day of the week for current locale. @keywords firstDay, week, locale */
    static getFirstDay(): string;
    /** Returns fully processed geo data updated with current language. @note Deprecated: use get() @keywords item, current, language */
    static getItem(): GeoItemFull;
    /** Returns 2-letter code of current language. @keywords language, code, current */
    static getLanguage(): string;
    /** Returns complete list of available countries and regions. @keywords list, countries, regions */
    static getList(): GeoItem[];
    /** Returns current location string. @keywords location, current */
    static getLocation(): string;
    /** Returns country code extracted from current location string. @keywords location, country, code */
    static getLocationLanguage(): string;
    /** Returns language code extracted from current location string. @keywords location, language, code */
    static getLocationCountry(): string;
    /** Returns request-isolated instance of GeoInstance. @keywords instance, isolated, request */
    static getObject(): GeoInstance;
    /** Returns combined locale string in standard format (e.g., 'en-US'). @keywords standard, locale, format */
    static getStandard(): string;
    /** Returns timezone offset in minutes for current context. @keywords timezone, offset, minutes */
    static getTimezone(): number;
    /** Returns formatted timezone string (e.g., '+00:00') for current context. @keywords timezone, format, offset */
    static getTimezoneFormat(): string;
    /** Sets custom timezone offset in minutes for current context. @keywords timezone, set, offset */
    static setTimezone(timezone: number): void;
    /** Sets default value or resolver for country code. @keywords default, country, code */
    static setValueDefault(code?: string | (() => string | undefined)): void;
    /** Adds or updates country geo data and merges with existing records. @keywords add, country, update */
    static add(country: string, item?: Partial<GeoItem>): GeoInstance;
    /** Adds or updates multiple countries in geo list. @keywords add, batch, countries, list */
    static addList(list?: Record<string, Partial<GeoItem>>): GeoInstance;
    /** Resolves geo data for given code. Alias for getByCode. @note Deprecated: use getByCode() @keywords find, lookup, code */
    static find(code?: string): GeoItemFull;
    /** Formats geo item into standard concatenated locale string (e.g., 'en-US'). @keywords standard, locale, format */
    static toStandard(item?: GeoItem, language?: string, raw?: boolean): string;
}