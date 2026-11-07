// md5:a6fd1532875bf2d63b7fb95dbcb0c527 true
/** Static class for managing geographical data, locales, countries, and time zones. @keywords geo, locale, country, timezone */
export declare class Geo {
    /** Returns information about the current country and language. @keywords current, locale, geo */
    static get(): GeoItemFull;
    /** Sets the current geographical location and updates instance state. @keywords set, location, country, locale */
    static set(code?: string, save?: boolean): void;
    /** Retrieves geo data by country or language code from the global database. @keywords country_code, language_code, lookup */
    static getByCode(code?: string): GeoItemFull;
    /** Retrieves exact geo data by matching a full locale string (e.g., 'en-US'). @keywords full_locale, match, lookup */
    static getByCodeFull(code?: string): GeoItem | undefined;
    /** Retrieves geo data for a specific country by its code. @keywords country, code, lookup */
    static getByCountry(country?: string): GeoItem | undefined;
    /** Retrieves geo data for a specific language by its code. @keywords language, code, lookup */
    static getByLanguage(language?: string): GeoItem | undefined;
    /** Returns the 2-letter code of the current country. @keywords country_code, iso2 */
    static getCountry(): string;
    /** Returns the code for the first day of the week for the current locale. @keywords first_day, week, start */
    static getFirstDay(): string;
    /** Returns fully processed geo data updated with current language. Deprecated: use get(). @keywords geo_item, full */
    static getItem(): GeoItemFull;
    /** Returns the 2-letter code of the current language. @keywords language_code, iso */
    static getLanguage(): string;
    /** Returns the complete list of available countries and regions. @keywords country_list, regions, database */
    static getList(): GeoItem[];
    /** Returns the current location string. @keywords location, current */
    static getLocation(): string;
    /** Returns the country code extracted from the location string. @keywords location, country_code */
    static getLocationLanguage(): string;
    /** Returns the language code extracted from the location string. @keywords location, language_code */
    static getLocationLanguage(): string;
    /** Returns a request-isolated instance of GeoInstance. @keywords geo_instance, request_isolated */
    static getObject(): GeoInstance;
    /** Returns the combined locale string in standard format (e.g., 'en-US'). @keywords locale, standard_format, bcp47 */
    static getStandard(): string;
    /** Returns the time zone offset in minutes for the current context. @keywords timezone, offset, minutes */
    static getTimezone(): number;
    /** Returns the formatted time zone string (e.g., '+00:00') for the current context. @keywords timezone, formatted, offset */
    static getTimezoneFormat(configuredOnly?: boolean): string;
    /** Sets a custom time zone offset in minutes for the current context. @keywords set_timezone, offset */
    static setTimezone(timezone: number): void;
    /** Sets the default value or resolver for the country code. @keywords default_country, fallback */
    static setValueDefault(code?: string | (() => string | undefined)): void;
    /** Adds or updates country geo data, merging with existing entries. @keywords add_country, update, geo_data */
    static add(country: string, item?: Partial<GeoItem>): GeoInstance;
    /** Adds or updates multiple countries in the geo list. @keywords add_list, bulk_update, countries */
    static addList(list?: Record<string, Partial<GeoItem>>): GeoInstance;
    /** Finds or determines geo data for a given code. Deprecated: use getByCode(). @keywords find, lookup, code */
    static find(code?: string): GeoItemFull;
    /** Returns a standard concatenated locale string for a geo item (e.g., 'en-US'). @keywords standard_string, format_locale */
    static toStandard(item?: GeoItem, language?: string, raw?: boolean): string;
}