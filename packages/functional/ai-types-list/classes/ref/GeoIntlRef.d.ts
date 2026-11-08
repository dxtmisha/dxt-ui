// md5:83bf477c866c13e284a2273c48e9df41 true
import { type ComputedRef } from 'vue';
import { type GeoDate, type ItemValue, type NumberOrString, type NumberOrStringOrDate } from '@dxtmisha/functional-basic';
/** Reactive GeoIntl facade for numbers, currency, dates, names, and locale-aware sorting. @keywords reactive, intl, localization, internationalization, i18n, formatting */
export declare class GeoIntlRef {
    /** Initializes GeoIntlRef with an optional reactive or static locale, country, or language code. @keywords init, locale, language, country */
    constructor(code?: RefOrNormal<string | undefined>);
    /** Returns a computed localized display name for the specified Intl type or options. @keywords display, name, intl, region, language */
    display(value?: RefOrNormal<string | undefined>, typeOptions?: Intl.DisplayNamesOptions['type'] | Intl.DisplayNamesOptions): ComputedRef<string>;
    /** Returns a computed localized language name. @keywords language, name, locale */
    languageName(value?: RefOrNormal<string | undefined>, style?: Intl.RelativeTimeFormatStyle): ComputedRef<string>;
    /** Returns a computed localized country or region name. @keywords country, region, name */
    countryName(value?: RefOrNormal<string | undefined>, style?: Intl.RelativeTimeFormatStyle): ComputedRef<string>;
    /** Formats a numeric value or numeric string using locale rules and number options. @keywords number, format, digits, numeric */
    number(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Returns the locale-specific decimal separator. @keywords decimal, separator, delimiter */
    decimal(): ComputedRef<string>;
    /** Formats money using currency options or code, with optional currency symbol suppression. @keywords currency, money, price, format */
    currency(value: RefOrNormal<NumberOrString>, currencyOptions?: RefOrNormal<string | Intl.NumberFormatOptions | undefined>, numberOnly?: boolean): ComputedRef<string>;
    /** Returns the localized currency symbol or representation for the given currency code. @keywords currency, symbol, sign */
    currencySymbol(currency: RefOrNormal<string>, currencyDisplay?: keyof Intl.NumberFormatOptionsCurrencyDisplayRegistry): ComputedRef<string>;
    /** Formats a numeric value with a localized unit. @keywords unit, measurement, format */
    unit(value: RefOrNormal<NumberOrString>, unitOptions?: string | Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats a file size, auto-promoting byte units when exceeding 1024. @keywords file, size, bytes, kilobytes, megabytes, format */
    sizeFile(value: RefOrNormal<NumberOrString>, unitOptions?: 'byte' | 'kilobyte' | 'megabyte' | 'gigabyte' | 'terabyte' | 'petabyte' | Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats a decimal ratio as a percentage. @keywords percent, percentage, ratio, format */
    percent(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Divides a number by 100 and formats it as a percentage. @keywords percent, ratio, divide, format */
    percentBy100(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats a count with pipe-separated plural word forms using locale plural rules. @keywords plural, pluralization, words, count */
    plural(value: RefOrNormal<NumberOrString>, words: string, options?: Intl.PluralRulesOptions, optionsNumber?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats a date with Geo format types, datetime options, and optional 24-hour clock. @keywords date, datetime, calendar, format */
    date(value: RefOrNormal<NumberOrStringOrDate>, type?: GeoDate, styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions, hour24?: boolean): ComputedRef<string>;
    /** Formats a date relative to a reference date using automatic unit selection. @keywords relative, time, ago, date */
    relative(value: RefOrNormal<NumberOrStringOrDate>, styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions, todayValue?: Date): ComputedRef<string>;
    /** Uses relative date formatting within a limit day range and standard date formatting outside. @keywords relative, limit, threshold, date */
    relativeLimit(value: RefOrNormal<NumberOrStringOrDate>, limit: number, todayValue?: Date, relativeOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions, dateOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions, type?: GeoDate, hour24?: boolean): ComputedRef<string>;
    /** Formats a signed numeric interval using a specific relative-time unit. @keywords relative, interval, unit, duration */
    relativeByValue(value: RefOrNormal<NumberOrString>, unit: Intl.RelativeTimeFormatUnit, styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions): ComputedRef<string>;
    /** Returns the localized month name for the given date. @keywords month, name, calendar */
    month(value?: RefOrNormal<NumberOrStringOrDate | undefined>, style?: Intl.DateTimeFormatOptions['month']): ComputedRef<string>;
    /** Returns an array of 12 localized month names with a placeholder entry. @keywords months, list, calendar, options */
    months(style?: Intl.DateTimeFormatOptions['month']): ComputedRef<ItemValue<number | undefined>[]>;
    /** Returns the localized weekday name for the given date. @keywords weekday, day, calendar */
    weekday(value?: RefOrNormal<NumberOrStringOrDate | undefined>, style?: Intl.DateTimeFormatOptions['weekday']): ComputedRef<string>;
    /** Returns an array of localized weekday entries in locale order with a placeholder entry. @keywords weekdays, list, calendar, options */
    weekdays(style?: Intl.DateTimeFormatOptions['weekday']): ComputedRef<ItemValue<number | undefined>[]>;
    /** Formats the given date or timestamp as localized time. @keywords time, clock, format */
    time(value: RefOrNormal<NumberOrStringOrDate>): ComputedRef<string>;
    /** Returns a computed sorted copy of an array using locale collation rules. @keywords sort, collator, collation, order */
    sort<T>(data: RefOrNormal<T[]>, compareFn?: (a: T, b: T) => [string, string]): ComputedRef<T[]>;
}