// md5:3f513613cfcc5ebce0989288c4a80551 true
/** Static manager for geographical data, locale, country, and time zone. @keywords geo, locale, country, timezone */
export declare class Geo {
    /** Returns information about the current country and language. @keywords current, country, language, geo */
    static get(): GeoItemFull;
    /** Sets the current geographical location and updates instance state. @keywords set, location, locale */
    static set(code: string, save?: boolean): void;
    /** Resolves geo data by country or language code from the global database. @keywords lookup, code, country, language */
    static getByCode(code?: string): GeoItemFull;
    /** Finds exact geo data matching a full locale string. @keywords match, locale, full */
    static getByCodeFull(code: string): GeoItem | undefined;
    /** Retrieves geo data for a specific country code. @keywords country, lookup */
    static getByCountry(country: string): GeoItem | undefined;
    /** Retrieves geo data for a specific language code. @keywords language, lookup */
    static getByLanguage(language: string): GeoItem | undefined;
    /** Returns the 2-letter code of the current country. @keywords country, code, iso */
    static getCountry(): string;
    /** Returns the first day of the week for the current locale. @keywords firstDay, week, calendar */
    static getFirstDay(): string;
    /** Returns fully processed geo data updated with the current language. @keywords item, full, locale */
    static getItem(): GeoItemFull;
    /** Returns the 2-letter code of the current language. @keywords language, code, iso */
    static getLanguage(): string;
    /** Returns the list of all available countries and regions. @keywords list, countries, regions */
    static getList(): GeoItem[];
    /** Returns the current location string identifier. @keywords location, current */
    static getLocation(): string;
    /** Returns the country code extracted from the location string. @keywords location, country, extract */
    static getLocationCountry(): string;
    /** Returns the language code extracted from the location string. @keywords location, language, extract */
    static getLocationLanguage(): string;
    /** Returns a request-isolated instance of GeoInstance. @keywords instance, isolated, context */
    static getObject(): GeoInstance;
    /** Returns the combined standard locale string (e.g. 'en-US'). @keywords standard, locale, format */
    static getStandard(): string;
    /** Returns the timezone offset in minutes for the current context. @keywords timezone, offset, minutes */
    static getTimezone(): number;
    /** Returns the formatted timezone string (e.g. '+00:00'). @keywords timezone, format, offset */
    static getTimezoneFormat(): string;
    /** Sets a custom timezone offset in minutes for the current context. @keywords timezone, set, offset */
    static setTimezone(timezone: number): void;
    /** Sets the default country code or provider function. @keywords default, country, fallback */
    static setValueDefault(code?: string | (() => string)): void;
    /** Adds or updates country geo data and merges with existing records. @keywords add, country, update, merge */
    static add(country: string, item: Partial<GeoItem>): GeoInstance;
    /** Adds or updates multiple country entries in the geo registry. @keywords addList, bulk, countries */
    static addList(list: Record<string, Partial<GeoItem>>): GeoInstance;
    /** Resolves geo data for a given code (alias for getByCode). @keywords find, search, code */
    static find(code: string): GeoItemFull;
    /** Generates a standard formatted locale string from a geo item. @keywords standard, format, locale */
    static toStandard(item: GeoItem): string;
}