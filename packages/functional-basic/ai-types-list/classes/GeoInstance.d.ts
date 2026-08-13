// md5:a107efed028350ffeb54555cc29a6cb2 true
export declare const UI_GEO_COOKIE_KEY = "ui-geo-code";
/**
 * Base class for working with geographic data.
 * @keywords geo location country language timezone
 */
export declare class GeoInstance {
    /**
     * Initializes the location and related data.
     * @keywords constructor geo instance
     */
    constructor();
    /**
     * Getting information about the current country.
     * @keywords get geo item
     */
    get(): GeoItemFull;
    /**
     * Getting the current country code.
     * @keywords get country code
     */
    getCountry(): string;
    /**
     * Getting the current language code.
     * @keywords get language code
     */
    getLanguage(): string;
    /**
     * Getting the full format according to the standard (language-country).
     * @keywords get standard string
     */
    getStandard(): string;
    /**
     * Getting the first day of the week for the current country.
     * @keywords get first day week
     */
    getFirstDay(): string;
    /**
     * Getting the current location string.
     * @keywords get location string
     */
    getLocation(): string;
    /**
     * Getting the country code from the location.
     * @keywords get location country
     */
    getLocationCountry(): string;
    /**
     * Getting the language code from the location.
     * @keywords get location language
     */
    getLocationLanguage(): string;
    /**
     * Getting processed data including the current language.
     * @keywords get geo item full
     */
    getItem(): GeoItemFull;
    /**
     * Returns the full list of available countries.
     * @keywords get list countries
     */
    getList(): GeoItem[];
    /**
     * Returns data about the country by its code.
     * @keywords get by code geo
     */
    getByCode(code?: string): GeoItemFull;
    /**
     * Returns full data by language and country combination.
     * @keywords get by code full
     */
    getByCodeFull(code: string): GeoItem | undefined;
    /**
     * Returns full data by country code.
     * @keywords get by country
     */
    getByCountry(country: string): GeoItem | undefined;
    /**
     * Returns full data by language code.
     * @keywords get by language
     */
    getByLanguage(language: string): GeoItem | undefined;
    /**
     * Returns the current time zone offset in minutes.
     * @keywords get timezone offset
     */
    getTimezone(): number;
    /**
     * Returns the current time zone offset in a formatted string.
     * @keywords get timezone format
     */
    getTimezoneFormat(): string;
    /**
     * Finds the country data by its code or name.
     * @keywords find geo
     */
    find(code: string): GeoItemFull;
    /**
     * Converts a geo item to its standard string representation.
     * @keywords to standard geo
     */
    toStandard(item: GeoItem, language?: string): string;
    /**
     * Updates the current location and related data.
     * @keywords set geo location
     */
    set(code: string, save?: boolean): void;
    /**
     * Updates the default time zone offset.
     * @keywords set timezone
     */
    setTimezone(timezone: number): void;
    /**
     * Sets the default value for the country code.
     * @keywords set value default
     */
    setValueDefault(code?: string | (() => string)): void;
}