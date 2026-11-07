// md5:09a9cbd7fd7aa6b7532e9761c4e3ebd9 true
/**
 * Internationalization API providing locale-sensitive formatting for numbers, dates, currencies, and names.
 * @remarks
 * `GeoIntl` caches a single instance per standard location. `new GeoIntl(code)` and `GeoIntl.getInstance(code)` return the cached instance.
 * `errorCenter` applies only during initial instance creation. In SSR, `errorCenter` defaults to undefined.
 * @keywords intl, i18n, localization, format, locale
 */
export declare class GeoIntl {
    /** Creates or retrieves a cached GeoIntl instance for the specified location code. @keywords constructor, init, locale */
    constructor(code?: string, errorCenter?: ErrorCenterInstance);
    /** Checks if a cached instance exists for the specified country or locale code. @keywords exists, cached, check */
    static isItem(code?: string): boolean;
    /** Returns the cached GeoIntl instance according to the specified country code. @keywords singleton, get instance, locale */
    static getInstance(code?: string): GeoIntl;
    /** Resolves and returns the normalized standard location code. @keywords locale code, normalize, location */
    static getLocation(code?: string): string;
    /** Returns the first day of the week for the locale. @keywords first day, week, calendar */
    getFirstDay(): string;
    /** Returns the standard location code of this instance. @keywords location, locale, country code */
    getLocation(): string;
    /** Sets the error center instance for handling formatting errors. @warning In SSR, do not pass a request-scoped center. @keywords error center, error handler */
    setErrorCenter(errorCenter?: ErrorCenterInstance): this;
    /** Sets the maximum number of cached location and instance entries before clearing. @keywords cache limit, max items */
    static setMaxItems(max?: number): void;
    /** Translates language, region, and script display names. @keywords display name, region, script, translation */
    display(value?: string, typeOptions?: Intl.DisplayNamesOptions['type'] | Intl.DisplayNamesOptions): string;
    /** Returns the localized display name for a language code. @keywords language name, locale, display */
    languageName(value?: string, style?: Intl.RelativeTimeFormatStyle): string;
    /** Returns the localized display name for a region code. @keywords country name, region, display */
    countryName(value?: string, style?: Intl.RelativeTimeFormatStyle): string;
    /** Formats a full personal name according to locale rules. @keywords full name, person, formatting */
    fullName(last: string, first: string, surname?: string, short?: boolean): string;
    /** Formats a numeric value into a locale-sensitive number string. @keywords number format, decimal, digits */
    number(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Returns the decimal point symbol for the current locale. @keywords decimal separator, point, delimiter */
    decimal(): string;
    /** Formats a numeric value as a currency string. @keywords currency, money, price, format */
    currency(value: NumberOrString, currencyOptions?: string | Intl.NumberFormatOptions, numberOnly?: boolean): string;
    /** Returns the currency symbol or ISO code for the specified currency. @keywords currency symbol, sign, ISO */
    currencySymbol(currency: string, currencyDisplay?: keyof Intl.NumberFormatOptionsCurrencyDisplayRegistry): string;
    /** Formats a numeric value with a measurement unit. @keywords unit, measurement, dimension */
    unit(value: NumberOrString, unitOptions?: string | Intl.NumberFormatOptions): string;
    /** Formats a file size with binary digital units. @keywords file size, bytes, storage */
    sizeFile(value: NumberOrString, unitOptions?: 'byte' | 'kilobyte' | 'megabyte' | 'gigabyte' | 'terabyte' | 'petabyte' | Intl.NumberFormatOptions): string;
    /** Formats a decimal fraction as a percentage. @keywords percent, percentage, ratio */
    percent(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats a 0-100 number as a percentage. @keywords percent, percentage, by 100 */
    percentBy100(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Applies plural-sensitive formatting rules based on a pipe-delimited word list. @keywords plural, pluralization, rules */
    plural(value: NumberOrString, words: string, options?: Intl.PluralRulesOptions, optionsNumber?: Intl.NumberFormatOptions): string;
    /** Formats a date or time according to locale rules. @keywords date format, time format, datetime */
    date(value: NumberOrStringOrDate, type?: GeoDate, styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions, hour24?: boolean): string;
    /** Formats relative time from a given reference date. @keywords relative time, time ago, from now */
    relative(value: NumberOrStringOrDate, styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions, todayValue?: Date): string;
    /** Formats relative time with a fallback to standard date format if exceeding day limit. @keywords relative limit, threshold, fallback */
    relativeLimit(value: NumberOrStringOrDate, limit: number, todayValue?: Date, relativeOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions, dateOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions, type?: GeoDate, hour24?: boolean): string;
    /** Formats an elapsed value with a specified relative time unit. @keywords relative value, unit, elapsed */
    relativeByValue(value: NumberOrString, unit: Intl.RelativeTimeFormatUnit, styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions): string;
    /** Returns the localized month name for a date. @keywords month name, month, calendar */
    month(value?: NumberOrStringOrDate, style?: Intl.DateTimeFormatOptions['month']): string;
    /** Returns a list of all 12 localized months. @keywords months list, month items, calendar */
    months(style?: Intl.DateTimeFormatOptions['month']): ItemValue<number | undefined>[];
    /** Returns the localized weekday name for a date. @keywords weekday, day name, calendar */
    weekday(value?: NumberOrStringOrDate, style?: Intl.DateTimeFormatOptions['weekday']): string;
    /** Returns a list of all 7 localized weekdays. @keywords weekdays list, day items, calendar */
    weekdays(style?: Intl.DateTimeFormatOptions['weekday']): ItemValue<number | undefined>[];
    /** Formats the time portion of a date. @keywords time, clock, hours, minutes */
    time(value: NumberOrStringOrDate): string;
    /** Returns the hour cycle format ('12' or '24') for the locale. @keywords hour format, 12 hour, 24 hour */
    hoursType(): GeoHours;
    /** Sorts an array of items using locale-sensitive string collation. @keywords sort, collation, alphabetical */
    sort<T>(data: T[], compareFn?: (itemA: T, itemB: T) => [
        string,
        string
    ]): T[];
}