// md5:30b1068e7fa26893e8248e9f08c96853 true
/** Static utility class for managing geographical data, locale, country, and time zone. @keywords geo, locale, country, timezone */
export declare class Geo {
    /** Returns a request-isolated instance of GeoInstance. @keywords geo, instance, isolate */
    static getObject(): GeoInstance;
    /** Returns information about the current country and language. @keywords current, geo, locale */
    static get(): GeoItemFull;
    /** Returns the 2-letter code of the current country. @keywords country, code, iso */
    static getCountry(): string;
    /** Returns the 2-letter code of the current language. @keywords language, code, iso */
    static getLanguage(): string;
    /** Returns the combined locale string in standard format (e.g., 'en-US'). @keywords locale, standard, format */
    static getStandard(): string;
    /** Returns the code for the first day of the week for the current locale. @keywords first-day, week, calendar */
    static getFirstDay(): string;
    /** Returns the current location string. @keywords location, current */
    static getLocation(): string;
    /** Returns the country code extracted from the location string. @keywords location, country, code */
    static getLocationCountry(): string;
    /** Returns the language code extracted from the location string. @keywords location, language, code */
    static getLocationLanguage(): string;
    /** Returns fully processed geo data updated with the current language. @keywords geo, item, processed */
    static getItem(): GeoItemFull;
    /** Returns the complete list of available countries and regions. @keywords list, countries, regions */
    static getList(): GeoItem[];
    /** Returns geo data by country or language code from the global database. @keywords search, code, lookup */
    static getByCode(code?: string): GeoItemFull;
    /** Returns exact geo data by searching for full locale match (e.g., 'en-US'). @keywords full, locale, lookup */
    static getByCodeFull(code: string): GeoItem | undefined;
    /** Returns geo data for a specific country by its code. @keywords country, lookup */
    static getByCountry(country: string): GeoItem | undefined;
    /** Returns geo data for a specific language by its code. @keywords language, lookup */
    static getByLanguage(language: string): GeoItem | undefined;
    /** Returns the time zone offset in minutes for the current context. @keywords timezone, offset, minutes */
    static getTimezone(): number;
    /** Returns the formatted time zone string (e.g., '+00:00') for the current context. @keywords timezone, format, offset */
    static getTimezoneFormat(): string;
    /** Finds or determines the geo data for a given code (alias for getByCode). @keywords find, search, geo */
    static find(code: string): GeoItemFull;
    /** Returns a standard concatenated string for a geo item (e.g., 'en-US'). @keywords standard, format, locale */
    static toStandard(item: GeoItem): string;
    /** Sets the current geographical location and updates instance state. @keywords set, location, state */
    static set(code: string, save?: boolean): void;
    /** Sets a custom time zone offset in minutes for the current context. @keywords set, timezone, offset */
    static setTimezone(timezone: number): void;
    /** Sets the default value or resolver function for the country code. @keywords default, country, fallback */
    static setValueDefault(code?: string | (() => string)): void;
    /** Adds or updates country geo data and merges with existing entries. @keywords add, country, merge */
    static add(country: string, item: Partial<GeoItem>): GeoInstance;
    /** Adds or updates multiple countries in the geo list. @keywords add, batch, list */
    static addList(list: Record<string, Partial<GeoItem>>): GeoInstance;
}