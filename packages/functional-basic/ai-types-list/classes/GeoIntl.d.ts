// md5:2df2a4eb22039e743d7b0f985c7bc650 true
/** Intl internationalization and localization helper class. @keywords geo, intl, format, locale */
export declare class GeoIntl {
    /** Checks if an instance exists for the specified country code. @keywords geo, intl, check */
    static isItem(code?: string): boolean;
    /** Returns the standard location code. @keywords geo, intl, location */
    static getLocation(code?: string): string;
    /** Returns an instance of the class for the specified country code. @keywords geo, intl, instance */
    static getInstance(code?: string): GeoIntl;
    constructor(code?: string, errorCenter?: ErrorCenterInstance);
    /** Returns the location code. @keywords intl, location */
    getLocation(): string;
    /** Returns the first day of the week. @keywords intl, first_day, calendar */
    getFirstDay(): string;
    /** Translates language, region, and script display names. @keywords intl, display, name */
    display(value?: string, typeOptions?: Intl.DisplayNamesOptions['type'] | Intl.DisplayNamesOptions): string;
    /** Get display names of language. @keywords intl, language, name */
    languageName(value?: string, style?: Intl.RelativeTimeFormatStyle): string;
    /** Get display names of region. @keywords intl, country, region, name */
    countryName(value?: string, style?: Intl.RelativeTimeFormatStyle): string;
    /** Returns a string containing the full name in a specific format. @keywords intl, full_name, person */
    fullName(last: string, first: string, surname?: string, short?: boolean): string;
    /** Formats a number using locale options. @keywords intl, number, format */
    number(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Returns the decimal point symbol. @keywords intl, decimal, symbol */
    decimal(): string;
    /** Formats a currency value. @keywords intl, currency, money */
    currency(value: NumberOrString, currencyOptions?: string | Intl.NumberFormatOptions, numberOnly?: boolean): string;
    /** Returns the currency symbol or code. @keywords intl, currency, symbol */
    currencySymbol(currency: string, currencyDisplay?: keyof Intl.NumberFormatOptionsCurrencyDisplayRegistry): string;
    /** Formats a unit value. @keywords intl, unit, format */
    unit(value: NumberOrString, unitOptions?: string | Intl.NumberFormatOptions): string;
    /** Formats a file size value. @keywords intl, file_size, unit */
    sizeFile(value: NumberOrString, unitOptions?: 'byte' | 'kilobyte' | 'megabyte' | 'gigabyte' | 'terabyte' | 'petabyte' | Intl.NumberFormatOptions): string;
    /** Formats a number as a percentage. @keywords intl, percent, number */
    percent(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats a number as a percentage by 100. @keywords intl, percent, number */
    percentBy100(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats text with plural rules and language specifics. @keywords intl, plural, rules */
    plural(value: NumberOrString, words: string, options?: Intl.PluralRulesOptions, optionsNumber?: Intl.NumberFormatOptions): string;
    /** Formats date and time. @keywords intl, date, time, format */
    date(value: NumberOrStringOrDate, type?: GeoDate, styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions, hour24?: boolean): string;
    /** Formats relative time. @keywords intl, relative, time */
    relative(value: NumberOrStringOrDate, styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions, todayValue?: Date): string;
    /** Formats relative time with a limit fallback to standard date. @keywords intl, relative, limit, date */
    relativeLimit(value: NumberOrStringOrDate, limit: number, todayValue?: Date, relativeOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions, dateOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions, type?: GeoDate, hour24?: boolean): string;
    /** Formats relative time by numerical value and unit. @keywords intl, relative, value, unit */
    relativeByValue(value: NumberOrString, unit: Intl.RelativeTimeFormatUnit, styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions): string;
    /** Returns the formatted name of a month. @keywords intl, month, name */
    month(value?: NumberOrStringOrDate, style?: Intl.DateTimeFormatOptions['month']): string;
    /** Returns an array of months. @keywords intl, months, list */
    months(style?: Intl.DateTimeFormatOptions['month']): ItemValue<number | undefined>[];
    /** Returns the formatted name of a weekday. @keywords intl, weekday, name */
    weekday(value?: NumberOrStringOrDate, style?: Intl.DateTimeFormatOptions['weekday']): string;
    /** Returns an array of weekdays. @keywords intl, weekdays, list */
    weekdays(style?: Intl.DateTimeFormatOptions['weekday']): ItemValue<number | undefined>[];
    /** Formats time. @keywords intl, time, format */
    time(value: NumberOrStringOrDate): string;
    /** Sorts an array of items considering locale rules. @keywords intl, sort, collator */
    sort<T>(data: T[], compareFn?: (a: T, b: T) => [string, string]): T[];
}