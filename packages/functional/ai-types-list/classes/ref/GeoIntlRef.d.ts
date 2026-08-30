// md5:9c0b0b31b7e280751cc53fecb49a50fb true
import { type ComputedRef } from 'vue';
import { type GeoDate, type ItemValue, type NumberOrString, type NumberOrStringOrDate } from '@dxtmisha/functional-basic';
/**
 * Reactive internationalization formatter for numbers, dates, currencies, and units.
 * @remarks Use standard `GeoIntl` if reactivity is not required.
 * @keywords i18n, intl, reactive, localization, format
 */
export declare class GeoIntlRef {
    /** Initializes reactive GeoIntl instance with locale code. @keywords constructor, locale */
    constructor(code?: RefOrNormal<string>);
    /** Translates language, region, and script display names reactively. @keywords displayNames, translation, locale */
    display(value?: RefOrNormal<string>, typeOptions?: Intl.DisplayNamesOptions['type'] | Intl.DisplayNamesOptions): ComputedRef<string>;
    /** Returns reactive display name of a language. @keywords language, displayNames, locale */
    languageName(value?: RefOrNormal<string>, style?: Intl.RelativeTimeFormatStyle): ComputedRef<string>;
    /** Returns reactive display name of a region or country. @keywords country, region, displayNames, locale */
    countryName(value?: RefOrNormal<string>, style?: Intl.RelativeTimeFormatStyle): ComputedRef<string>;
    /** Formats number reactively using locale rules. @keywords numberFormat, format, locale */
    number(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Returns decimal point symbol for current locale. @keywords decimal, separator, symbol */
    decimal(): ComputedRef<string>;
    /** Formats currency amount reactively. @keywords currency, money, format */
    currency(value: RefOrNormal<NumberOrString>, currencyOptions?: RefOrNormal<string | Intl.NumberFormatOptions>, numberOnly?: boolean): ComputedRef<string>;
    /** Returns currency symbol or code for specified currency. @keywords currencySymbol, currencyCode */
    currencySymbol(currency: RefOrNormal<string>, currencyDisplay?: keyof Intl.NumberFormatOptionsCurrencyDisplayRegistry): ComputedRef<string>;
    /** Formats value with measurement unit reactively. @keywords unit, measurement, format */
    unit(value: RefOrNormal<NumberOrString>, unitOptions?: string | Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats file size in bytes reactively. @keywords fileSize, bytes, format */
    sizeFile(value: RefOrNormal<NumberOrString>, unitOptions?: 'byte' | 'kilobyte' | 'megabyte' | 'gigabyte' | 'terabyte' | 'petabyte' | Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats number as percentage reactively. @keywords percent, percentage, format */
    percent(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats number multiplied by 100 as percentage reactively. @keywords percent, percentage, format */
    percentBy100(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats string applying locale-sensitive pluralization rules. @param words Format: "one|two|few|many|other|zero" @keywords plural, pluralRules */
    plural(value: RefOrNormal<NumberOrString>, words: string, options?: Intl.PluralRulesOptions, optionsNumber?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats date and time reactively. @keywords date, dateTime, format */
    date(value: RefOrNormal<NumberOrStringOrDate>, type?: GeoDate, styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions, hour24?: boolean): ComputedRef<string>;
    /** Formats relative time reactively. @keywords relativeTime, timeAgo, format */
    relative(value: RefOrNormal<NumberOrStringOrDate>, styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions, todayValue?: Date): ComputedRef<string>;
    /** Formats relative time with fallback limit to standard date format. @keywords relativeLimit, relativeTime, fallback */
    relativeLimit(value: RefOrNormal<NumberOrStringOrDate>, limit: number, todayValue?: Date, relativeOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions, dateOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions, type?: GeoDate, hour24?: boolean): ComputedRef<string>;
    /** Formats relative time from a numerical value and unit. @keywords relativeByValue, relativeTime, unit */
    relativeByValue(value: RefOrNormal<NumberOrString>, unit: Intl.RelativeTimeFormatUnit, styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions): ComputedRef<string>;
    /** Returns month name reactively. @keywords month, monthName */
    month(value?: RefOrNormal<NumberOrStringOrDate>, style?: Intl.DateTimeFormatOptions['month']): ComputedRef<string>;
    /** Returns list of all localized month names. @keywords months, monthList */
    months(style?: Intl.DateTimeFormatOptions['month']): ComputedRef<ItemValue<number | undefined>[]>;
    /** Returns weekday name reactively. @keywords weekday, dayName */
    weekday(value?: RefOrNormal<NumberOrStringOrDate>, style?: Intl.DateTimeFormatOptions['weekday']): ComputedRef<string>;
    /** Returns list of all localized weekday names. @keywords weekdays, weekdayList */
    weekdays(style?: Intl.DateTimeFormatOptions['weekday']): ComputedRef<ItemValue<number | undefined>[]>;
    /** Formats time reactively. @keywords time, timeFormat */
    time(value: RefOrNormal<NumberOrStringOrDate>): ComputedRef<string>;
    /** Sorts array elements taking into account locale collation rules. @keywords sort, collation, localeCompare */
    sort<T>(data: RefOrNormal<T[]>, compareFn?: (a: T, b: T) => [string, string]): ComputedRef<T[]>;
}