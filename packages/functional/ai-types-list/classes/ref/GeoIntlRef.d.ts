// md5:fa925ebcb61edec35ea5662509968034 true
import { type ComputedRef } from 'vue';
import { type GeoDate, type ItemValue, type NumberOrString, type NumberOrStringOrDate } from '@dxtmisha/functional-basic';
/** Reactive Intl facade providing computed formatting for numbers, dates, currency, and locale-aware sorting. @keywords intl, localization, reactive, i18n, formatting */
export declare class GeoIntlRef {
    /** Initializes GeoIntlRef with an optional locale or country code ref. @keywords constructor, locale */
    constructor(code?: RefOrNormal<string>);
    /** Returns a reactive localized display name for the specified Intl type. @keywords display name, localization */
    display(value?: RefOrNormal<string>, typeOptions?: Intl.DisplayNamesOptions['type'] | Intl.DisplayNamesOptions): ComputedRef<string>;
    /** Returns a reactive localized language name. @keywords language, display name */
    languageName(value?: RefOrNormal<string>, style?: Intl.RelativeTimeFormatStyle): ComputedRef<string>;
    /** Returns a reactive localized region or country name. @keywords country, region, display name */
    countryName(value?: RefOrNormal<string>, style?: Intl.RelativeTimeFormatStyle): ComputedRef<string>;
    /** Formats a numeric value using locale number formatting rules. @keywords number format, decimal */
    number(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Returns the decimal separator for the active locale. @keywords decimal separator, delimiter */
    decimal(): ComputedRef<string>;
    /** Formats a monetary value with currency options or currency code. @keywords currency, money, format */
    currency(value: RefOrNormal<NumberOrString>, currencyOptions?: RefOrNormal<string | Intl.NumberFormatOptions>, numberOnly?: boolean): ComputedRef<string>;
    /** Returns the currency symbol or representation for the specified currency code. @keywords currency symbol */
    currencySymbol(currency: RefOrNormal<string>, currencyDisplay?: keyof Intl.NumberFormatOptionsCurrencyDisplayRegistry): ComputedRef<string>;
    /** Formats a numeric value with a measurement unit. @keywords unit, measurement */
    unit(value: RefOrNormal<NumberOrString>, unitOptions?: string | Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats a file size value, automatically promoting byte units. @keywords file size, bytes */
    sizeFile(value: RefOrNormal<NumberOrString>, unitOptions?: 'byte' | 'kilobyte' | 'megabyte' | 'gigabyte' | 'terabyte' | 'petabyte' | Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats a decimal ratio as a percentage. @keywords percent, percentage */
    percent(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Divides a number by 100 and formats it as a percentage. @keywords percent, ratio */
    percentBy100(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats a pluralized string based on numeric count and pipe-separated forms. @keywords pluralization, plural, count */
    plural(value: RefOrNormal<NumberOrString>, words: string, options?: Intl.PluralRulesOptions, optionsNumber?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats a date using Geo date format presets and Intl options. @keywords date, format, time */
    date(value: RefOrNormal<NumberOrStringOrDate>, type?: GeoDate, styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions, hour24?: boolean): ComputedRef<string>;
    /** Formats a date relative to the reference date. @keywords relative time, ago */
    relative(value: RefOrNormal<NumberOrStringOrDate>, styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions, todayValue?: Date): ComputedRef<string>;
    /** Formats relative time within a day limit; falls back to standard date formatting. @keywords relative time, date limit */
    relativeLimit(value: RefOrNormal<NumberOrStringOrDate>, limit: number, todayValue?: Date, relativeOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions, dateOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions, type?: GeoDate, hour24?: boolean): ComputedRef<string>;
    /** Formats a signed numeric value using a relative time unit. @keywords relative time, duration */
    relativeByValue(value: RefOrNormal<NumberOrString>, unit: Intl.RelativeTimeFormatUnit, styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions): ComputedRef<string>;
    /** Returns the localized month name for the given date. @keywords month, date */
    month(value?: RefOrNormal<NumberOrStringOrDate>, style?: Intl.DateTimeFormatOptions['month']): ComputedRef<string>;
    /** Returns a list of month options numbered 1–12 with a placeholder item. @keywords months, calendar */
    months(style?: Intl.DateTimeFormatOptions['month']): ComputedRef<ItemValue<number | undefined>[]>;
    /** Returns the localized weekday name for the given date. @keywords weekday, day name */
    weekday(value?: RefOrNormal<NumberOrStringOrDate>, style?: Intl.DateTimeFormatOptions['weekday']): ComputedRef<string>;
    /** Returns a list of weekday options in locale order with a placeholder item. @keywords weekdays, calendar */
    weekdays(style?: Intl.DateTimeFormatOptions['weekday']): ComputedRef<ItemValue<number | undefined>[]>;
    /** Formats a date value as local time. @keywords time, clock */
    time(value: RefOrNormal<NumberOrStringOrDate>): ComputedRef<string>;
    /** Returns a sorted array copy using locale collation. @keywords sort, collator, localeCompare */
    sort<T>(data: RefOrNormal<T[]>, compareFn?: (a: T, b: T) => [string, string]): ComputedRef<T[]>;
}