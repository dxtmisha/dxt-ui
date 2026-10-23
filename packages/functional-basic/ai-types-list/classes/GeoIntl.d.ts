// md5:14979f62a08b8a5c572b411dac78eea5 true
/** Internationalization and localization utility wrapper for ECMAScript Intl API. @keywords intl, i18n, l10n, localization, format */
export declare class GeoIntl {
    /** Creates a GeoIntl instance for a given country or locale code. @keywords constructor, locale, init */
    constructor(code?: string, errorCenter?: ErrorCenterInstance);
    /** Checks whether an instance exists for the specified country or locale code. @keywords exists, cache, check */
    static isItem(code?: string): boolean;
    /** Returns a cached or new GeoIntl instance for the specified code. @keywords singleton, instance, factory */
    static getInstance(code?: string): GeoIntl;
    /** Returns the standard location code for a given country/locale. @keywords location, locale, code */
    static getLocation(code?: string): string;
    /** Returns the first day of the week for the locale. @keywords first day, week, start day */
    getFirstDay(): string;
    /** Returns the current country and language locale code. @keywords location, locale, code */
    getLocation(): string;
    /** Translates language, region, or script display names. @keywords display, translate, intl */
    display(value?: string, typeOptions?: Intl.DisplayNamesOptions['type'] | Intl.DisplayNamesOptions): string;
    /** Returns localized display name of a language code. @keywords language, display name */
    languageName(value?: string, style?: Intl.RelativeTimeFormatStyle): string;
    /** Returns localized display name of a region or country code. @keywords country, region, name */
    countryName(value?: string, style?: Intl.RelativeTimeFormatStyle): string;
    /** Returns a formatted full name according to locale rules. @keywords fullName, person, format */
    fullName(last: string, first: string, surname?: string, short?: boolean): string;
    /** Formats a number, bigint, or string value according to locale rules. @keywords number, format, digits */
    number(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Returns the decimal point separator symbol for the locale. @keywords decimal, point, separator */
    decimal(): string;
    /** Formats a numerical value as currency. @keywords currency, money, format */
    currency(value: NumberOrString, currencyOptions?: string | Intl.NumberFormatOptions, numberOnly?: boolean): string;
    /** Returns the currency symbol or currency code. @keywords currencySymbol, currency, sign */
    currencySymbol(currency: string, currencyDisplay?: keyof Intl.NumberFormatOptionsCurrencyDisplayRegistry): string;
    /** Formats a value with a specific measurement unit. @keywords unit, measurement, format */
    unit(value: NumberOrString, unitOptions?: string | Intl.NumberFormatOptions): string;
    /** Returns a localized formatted file size string. @keywords sizeFile, bytes, file size */
    sizeFile(value: NumberOrString, unitOptions?: 'byte' | 'kilobyte' | 'megabyte' | 'gigabyte' | 'terabyte' | 'petabyte' | Intl.NumberFormatOptions): string;
    /** Formats a number as a percentage. @keywords percent, percentage, ratio */
    percent(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats a fraction (0-1) as a percentage (0-100%). @keywords percentBy100, percentage, ratio */
    percentBy100(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Applies plural-sensitive formatting and returns the appropriate word form. @keywords plural, rules, grammar */
    plural(value: NumberOrString, words: string, options?: Intl.PluralRulesOptions, optionsNumber?: Intl.NumberFormatOptions): string;
    /** Formats date and time according to locale rules. @keywords date, time, format */
    date(value: NumberOrStringOrDate, type?: GeoDate, styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions, hour24?: boolean): string;
    /** Formats relative time from a given date. @keywords relative, time, ago */
    relative(value: NumberOrStringOrDate, styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions, todayValue?: Date): string;
    /** Formats relative time within a limit, otherwise falls back to standard date format. @keywords relativeLimit, relative, limit */
    relativeLimit(value: NumberOrStringOrDate, limit: number, todayValue?: Date, relativeOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions, dateOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions, type?: GeoDate, hour24?: boolean): string;
    /** Formats elapsed relative time for an explicit time unit. @keywords relativeByValue, relative, elapsed */
    relativeByValue(value: NumberOrString, unit: Intl.RelativeTimeFormatUnit, styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions): string;
    /** Returns the localized month name for a given date. @keywords month, name */
    month(value?: NumberOrStringOrDate, style?: Intl.DateTimeFormatOptions['month']): string;
    /** Returns a localized list of all months. @keywords months, list, select */
    months(style?: Intl.DateTimeFormatOptions['month']): ItemValue<number | undefined>[];
    /** Returns the localized day-of-week name for a given date. @keywords weekday, day, name */
    weekday(value?: NumberOrStringOrDate, style?: Intl.DateTimeFormatOptions['weekday']): string;
    /** Returns a localized list of all days of the week. @keywords weekdays, list, select */
    weekdays(style?: Intl.DateTimeFormatOptions['weekday']): ItemValue<number | undefined>[];
    /** Formats the time portion of a date. @keywords time, clock, format */
    time(value: NumberOrStringOrDate): string;
    /** Sorts an array of items using locale-sensitive string comparison. @keywords sort, collator, compare */
    sort<T>(data: T[], compareFn?: (itemA: T, itemB: T) => [
        string,
        string
    ]): T[];
}