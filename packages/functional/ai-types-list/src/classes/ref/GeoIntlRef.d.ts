// md5:9c0b0b31b7e280751cc53fecb49a50fb true
import { type ComputedRef } from 'vue';
import { type GeoDate, type ItemValue, type NumberOrString, type NumberOrStringOrDate } from '@dxtmisha/functional-basic';

/**
 * Reactive class for locale-sensitive formatting of numbers, dates, and units.
 * @remarks Avoid using this class if reactive updates are not required. Use `GeoIntl` from `@dxtmisha/functional-basic` instead.
 * @keywords intl, localization, reactive, formatting
 */
export declare class GeoIntlRef {
    /** Creates a reactive internationalization instance. @keywords intl, locale, constructor */
    constructor(code?: RefOrNormal<string>);
    /** Translates language, region, or script display names. @keywords intl, display-name, locale-names */
    display(value?: RefOrNormal<string>, typeOptions?: Intl.DisplayNamesOptions['type'] | Intl.DisplayNamesOptions): ComputedRef<string>;
    /** Returns the display name of a language code. @keywords language, locale-name */
    languageName(value?: RefOrNormal<string>, style?: Intl.RelativeTimeFormatStyle): ComputedRef<string>;
    /** Returns the display name of a country or region code. @keywords country, region, locale-name */
    countryName(value?: RefOrNormal<string>, style?: Intl.RelativeTimeFormatStyle): ComputedRef<string>;
    /** Formats numbers according to locale and formatting options. @keywords number-format, locale-number */
    number(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Returns the decimal separator symbol for the current locale. @keywords decimal-separator, decimal-symbol */
    decimal(): ComputedRef<string>;
    /** Formats numbers as currency strings. @keywords currency, money, format */
    currency(value: RefOrNormal<NumberOrString>, currencyOptions?: RefOrNormal<string | Intl.NumberFormatOptions>, numberOnly?: boolean): ComputedRef<string>;
    /** Returns the currency symbol or code for a specified currency. @keywords currency-symbol, money */
    currencySymbol(currency: RefOrNormal<string>, currencyDisplay?: keyof Intl.NumberFormatOptionsCurrencyDisplayRegistry): ComputedRef<string>;
    /** Formats numbers with measurement units. @keywords unit, measurement, format */
    unit(value: RefOrNormal<NumberOrString>, unitOptions?: string | Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats byte sizes into human-readable digital storage units. @keywords file-size, bytes, storage-unit */
    sizeFile(value: RefOrNormal<NumberOrString>, unitOptions?: 'byte' | 'kilobyte' | 'megabyte' | 'gigabyte' | 'terabyte' | 'petabyte' | Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats a fraction as a percentage value. @keywords percent, percentage, format */
    percent(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats a 0-100 value as a percentage. @keywords percent, percentage, unit */
    percentBy100(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats pluralized words matching locale pluralization rules. @keywords plural, pluralization, words */
    plural(value: RefOrNormal<NumberOrString>, words: string, options?: Intl.PluralRulesOptions, optionsNumber?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats date and time according to locale rules. @keywords date, time, datetime-format */
    date(value: RefOrNormal<NumberOrStringOrDate>, type?: GeoDate, styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions, hour24?: boolean): ComputedRef<string>;
    /** Formats relative time from a date. @keywords relative-time, time-ago */
    relative(value: RefOrNormal<NumberOrStringOrDate>, styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions, todayValue?: Date): ComputedRef<string>;
    /** Formats relative time with a fallback date limit. @keywords relative-time, time-limit, format */
    relativeLimit(value: RefOrNormal<NumberOrStringOrDate>, limit: number, todayValue?: Date, relativeOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions, dateOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions, type?: GeoDate, hour24?: boolean): ComputedRef<string>;
    /** Formats relative time by a specific numeric value and time unit. @keywords relative-time, time-unit */
    relativeByValue(value: RefOrNormal<NumberOrString>, unit: Intl.RelativeTimeFormatUnit, styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions): ComputedRef<string>;
    /** Returns the formatted month name for a date. @keywords month, month-name, calendar */
    month(value?: RefOrNormal<NumberOrStringOrDate>, style?: Intl.DateTimeFormatOptions['month']): ComputedRef<string>;
    /** Returns an array of localized month names and values. @keywords months-list, month-options */
    months(style?: Intl.DateTimeFormatOptions['month']): ComputedRef<ItemValue<number | undefined>[]>;
    /** Returns the formatted weekday name for a date. @keywords weekday, day-name, calendar */
    weekday(value?: RefOrNormal<NumberOrStringOrDate>, style?: Intl.DateTimeFormatOptions['weekday']): ComputedRef<string>;
    /** Returns an array of localized weekday names and values. @keywords weekdays-list, weekday-options */
    weekdays(style?: Intl.DateTimeFormatOptions['weekday']): ComputedRef<ItemValue<number | undefined>[]>;
    /** Formats a date into a localized time string. @keywords time, time-format, clock */
    time(value: RefOrNormal<NumberOrStringOrDate>): ComputedRef<string>;
    /** Sorts array elements using locale-sensitive string comparison. @keywords sort, locale-compare, collation */
    sort<T>(data: RefOrNormal<T[]>, compareFn?: (a: T, b: T) => [string, string]): ComputedRef<T[]>;
}