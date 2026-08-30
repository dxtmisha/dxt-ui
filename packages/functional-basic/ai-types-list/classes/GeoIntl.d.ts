// md5:365bf67642d1ddaeddd3d17c886f6762 true
/** Internationalization and localization utility providing language-sensitive formatting and comparison. @keywords intl localization i18n formatter */
export declare class GeoIntl {
    /** Checks if an instance exists for the specified country or locale code. @keywords localization check locale */
    static isItem(code?: string): boolean;
    /** Resolves and returns the standard location/locale code. @keywords locale location standard code */
    static getLocation(code?: string): string;
    /** Returns a cached or new GeoIntl instance for the specified locale code. @keywords singleton instance factory */
    static getInstance(code?: string): GeoIntl;
    /** Creates a new GeoIntl instance for internationalization formatting. @keywords intl constructor init */
    constructor(code?: string, errorCenter?: ErrorCenterInstance);
    /** Gets the current country and language locale code. @keywords locale location code */
    getLocation(): string;
    /** Returns the first day of the week for the current locale. @keywords first day week calendar */
    getFirstDay(): string;
    /** Formats display names for languages, regions, scripts, or currencies. @keywords display names translation region */
    display(value?: string, typeOptions?: Intl.DisplayNamesOptions['type'] | Intl.DisplayNamesOptions): string;
    /** Gets the localized display name of a language. @keywords language name locale */
    languageName(value?: string, style?: Intl.RelativeTimeFormatStyle): string;
    /** Gets the localized display name of a country or region. @keywords country name region */
    countryName(value?: string, style?: Intl.RelativeTimeFormatStyle): string;
    /** Formats a full person name according to locale conventions. @keywords person full name formatting */
    fullName(last: string, first: string, surname?: string, short?: boolean): string;
    /** Formats numbers, strings, or bigints with localized numeric formatting. @keywords number format numeric */
    number(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Gets the localized decimal separator symbol. @keywords decimal separator point */
    decimal(): string;
    /** Formats numbers as localized currency strings. @keywords currency money format */
    currency(value: NumberOrString, currencyOptions?: string | Intl.NumberFormatOptions, numberOnly?: boolean): string;
    /** Returns the currency symbol or code for a given currency. @keywords currency symbol sign */
    currencySymbol(currency: string, currencyDisplay?: keyof Intl.NumberFormatOptionsCurrencyDisplayRegistry): string;
    /** Formats a number with localized measurement units. @keywords unit measure format */
    unit(value: NumberOrString, unitOptions?: string | Intl.NumberFormatOptions): string;
    /** Formats digital file sizes into localized unit strings. @keywords file size byte format */
    sizeFile(value: NumberOrString, unitOptions?: 'byte' | 'kilobyte' | 'megabyte' | 'gigabyte' | 'terabyte' | 'petabyte' | Intl.NumberFormatOptions): string;
    /** Formats a ratio value (e.g. 0.5) as a localized percentage. @keywords percent percentage format */
    percent(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats a 0-100 numeric value as a localized percentage. @keywords percentage percent 100 */
    percentBy100(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats pluralized words matching locale rules (format: one|two|few|many|other|zero). @keywords plural pluralization words */
    plural(value: NumberOrString, words: string, options?: Intl.PluralRulesOptions, optionsNumber?: Intl.NumberFormatOptions): string;
    /** Formats date and time values according to locale rules. @keywords date time format */
    date(value: NumberOrStringOrDate, type?: GeoDate, styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions, hour24?: boolean): string;
    /** Formats language-sensitive relative time strings (e.g. 'yesterday', 'in 2 days'). @keywords relative time format ago */
    relative(value: NumberOrStringOrDate, styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions, todayValue?: Date): string;
    /** Formats relative time with a day limit, falling back to absolute date formatting. @keywords relative limit fallback time */
    relativeLimit(value: NumberOrStringOrDate, limit: number, todayValue?: Date, relativeOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions, dateOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions, type?: GeoDate, hour24?: boolean): string;
    /** Formats an explicit numeric difference and time unit into relative time. @keywords relative by value time unit */
    relativeByValue(value: NumberOrString, unit: Intl.RelativeTimeFormatUnit, styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions): string;
    /** Gets the localized month name for a given date. @keywords month name calendar */
    month(value?: NumberOrStringOrDate, style?: Intl.DateTimeFormatOptions['month']): string;
    /** Returns an array of localized month names (1-12). @keywords months list options select */
    months(style?: Intl.DateTimeFormatOptions['month']): ItemValue<number | undefined>[];
    /** Gets the localized weekday name for a given date. @keywords weekday name day */
    weekday(value?: NumberOrStringOrDate, style?: Intl.DateTimeFormatOptions['weekday']): string;
    /** Returns an array of localized weekday names (0-6). @keywords weekdays list options select */
    weekdays(style?: Intl.DateTimeFormatOptions['weekday']): ItemValue<number | undefined>[];
    /** Formats the time portion of a date according to locale conventions. @keywords time format clock */
    time(value: NumberOrStringOrDate): string;
    /** Sorts string items or objects locale-sensitively using Intl.Collator. @keywords sort collator locale */
    sort<T>(data: T[], compareFn?: (a: T, b: T) => [string, string]): T[];
}