// md5:30b1068e7fa26893e8248e9f08c96853 true
/** Static class for managing geographical data, locales, countries, and timezones. @keywords geo, locale, country, timezone */
export declare class Geo {
    /** Returns a request-isolated instance of GeoInstance. @keywords geo instance, context */
    static getObject(): GeoInstance;
    /** Returns information about the current country and language. @keywords current geo, locale info */
    static get(): GeoItemFull;
    /** Returns the 2-letter code of the current country. @keywords country code, iso */
    static getCountry(): string;
    /** Returns the 2-letter code of the current language. @keywords language code, iso */
    static getLanguage(): string;
    /** Returns the combined locale string in standard format (e.g., 'en-US'). @keywords locale string, standard */
    static getStandard(): string;
    /** Returns the first day of the week code for the current locale. @keywords first day, week, calendar */
    static getFirstDay(): string;
    /** Returns the current location string. @keywords location string */
    static getLocation(): string;
    /** Returns the country code extracted from the location string. @keywords location country */
    static getLocationCountry(): string;
    /** Returns the language code extracted from the location string. @keywords location language */
    static getLocationLanguage(): string;
    /** Returns fully processed geo data updated with the current language. @keywords geo item, processed */
    static getItem(): GeoItemFull;
    /** Returns the complete list of available countries and regions. @keywords geo list, countries */
    static getList(): GeoItem[];
    /** Returns geo data by country or language code from global database. @keywords get by code, lookup */
    static getByCode(code?: string): GeoItemFull;
    /** Returns exact geo data matching a full locale string (e.g., 'en-US'). @keywords exact locale, full code */
    static getByCodeFull(code: string): GeoItem | undefined;
    /** Returns geo data for a specific country code. @keywords get by country */
    static getByCountry(country: string): GeoItem | undefined;
    /** Returns geo data for a specific language code. @keywords get by language */
    static getByLanguage(language: string): GeoItem | undefined;
    /** Returns the timezone offset in minutes for the current context. @keywords timezone offset, minutes */
    static getTimezone(): number;
    /** Returns the formatted timezone string (e.g., '+00:00'). @keywords timezone format, utc offset */
    static getTimezoneFormat(): string;
    /** Finds or determines geo data for a given code (alias for getByCode). @keywords find geo, lookup */
    static find(code: string): GeoItemFull;
    /** Returns a standard concatenated locale string for a geo item. @keywords to standard, format locale */
    static toStandard(item: GeoItem): string;
    /** Sets the current geographical location and updates instance state. @keywords set location, locale */
    static set(code: string, save?: boolean): void;
    /** Sets a custom timezone offset in minutes. @keywords set timezone */
    static setTimezone(timezone: number): void;
    /** Sets the default country code or resolver function. @keywords default country, fallback */
    static setValueDefault(code?: string | (() => string)): void;
    /** Adds or updates country geo data and merges with existing records. @keywords add country, update geo */
    static add(country: string, item: Partial<GeoItem>): GeoInstance;
    /** Adds or updates multiple countries in the geo list. @keywords add list, batch update */
    static addList(list: Record<string, Partial<GeoItem>>): GeoInstance;
}