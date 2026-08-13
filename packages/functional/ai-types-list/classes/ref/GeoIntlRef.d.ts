// md5:fdee07ca97d00c0634ac84de93e12fe2 true
import { ComputedRef } from 'vue';
import { GeoDate, ItemValue, NumberOrString, NumberOrStringOrDate } from '@dxtmisha/functional-basic';

/**
 * Reactive class for managing the formatting of numbers and dates.
 * @keywords geo intl format reactive number date localize
 */
export declare class GeoIntlRef {
    /**
     * Constructor for GeoIntlRef.
     * @keywords constructor initialize geo intl ref
     */
    constructor(code?: RefOrNormal<string>);

    /**
     * Format display names for language, region, and script.
     * @keywords display name language region script intl
     */
    display(value?: RefOrNormal<string>, typeOptions?: Intl.DisplayNamesOptions['type'] | Intl.DisplayNamesOptions): ComputedRef<string>;

    /**
     * Get display names of language.
     * @keywords language name translate intl
     */
    languageName(value?: RefOrNormal<string>, style?: Intl.RelativeTimeFormatStyle): ComputedRef<string>;

    /**
     * Get display names of region.
     * @keywords country region name intl
     */
    countryName(value?: RefOrNormal<string>, style?: Intl.RelativeTimeFormatStyle): ComputedRef<string>;

    /**
     * Format a number value.
     * @keywords number format intl digit
     */
    number(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;

    /**
     * Get the decimal point symbol.
     * @keywords decimal point symbol separator
     */
    decimal(): ComputedRef<string>;

    /**
     * Format a currency value.
     * @keywords currency format money price intl
     */
    currency(value: RefOrNormal<NumberOrString>, currencyOptions?: RefOrNormal<string | Intl.NumberFormatOptions>, numberOnly?: boolean): ComputedRef<string>;

    /**
     * Get the currency symbol or code.
     * @keywords currency symbol code intl
     */
    currencySymbol(currency: RefOrNormal<string>, currencyDisplay?: keyof Intl.NumberFormatOptionsCurrencyDisplayRegistry): ComputedRef<string>;

    /**
     * Format a unit value.
     * @keywords unit format measurement intl
     */
    unit(value: RefOrNormal<NumberOrString>, unitOptions?: string | Intl.NumberFormatOptions): ComputedRef<string>;

    /**
     * Format a file size value.
     * @keywords size file bytes megabytes intl
     */
    sizeFile(value: RefOrNormal<NumberOrString>, unitOptions?: 'byte' | 'kilobyte' | 'megabyte' | 'gigabyte' | 'terabyte' | 'petabyte' | Intl.NumberFormatOptions): ComputedRef<string>;

    /**
     * Format a number as a percentage.
     * @keywords percent percentage format intl
     */
    percent(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;

    /**
     * Format a number as a percentage by 100.
     * @keywords percent 100 format intl
     */
    percentBy100(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;

    /**
     * Format text based on plural rules and language words.
     * @keywords plural rules words format intl
     */
    plural(value: RefOrNormal<NumberOrString>, words: string, options?: Intl.PluralRulesOptions, optionsNumber?: Intl.NumberFormatOptions): ComputedRef<string>;

    /**
     * Format a date and time value.
     * @keywords date time format intl calendar
     */
    date(value: RefOrNormal<NumberOrStringOrDate>, type?: GeoDate, styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions, hour24?: boolean): ComputedRef<string>;

    /**
     * Format relative time.
     * @keywords relative time ago format intl
     */
    relative(value: RefOrNormal<NumberOrStringOrDate>, styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions, todayValue?: Date): ComputedRef<string>;

    /**
     * Format relative time with a limit falling back to standard date.
     * @keywords relative time limit format intl
     */
    relativeLimit(value: RefOrNormal<NumberOrStringOrDate>, limit: number, todayValue?: Date, relativeOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions, dateOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions, type?: GeoDate, hour24?: boolean): ComputedRef<string>;

    /**
     * Format relative time by specific unit and value.
     * @keywords relative value unit time format intl
     */
    relativeByValue(value: RefOrNormal<NumberOrString>, unit: Intl.RelativeTimeFormatUnit, styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions): ComputedRef<string>;

    /**
     * Get the name of a month.
     * @keywords month name date format intl
     */
    month(value?: RefOrNormal<NumberOrStringOrDate>, style?: Intl.DateTimeFormatOptions['month']): ComputedRef<string>;

    /**
     * Get an array of all months.
     * @keywords months list array intl
     */
    months(style?: Intl.DateTimeFormatOptions['month']): ComputedRef<ItemValue<number | undefined>[]>;

    /**
     * Get the name of a weekday.
     * @keywords weekday name date format intl
     */
    weekday(value?: RefOrNormal<NumberOrStringOrDate>, style?: Intl.DateTimeFormatOptions['weekday']): ComputedRef<string>;

    /**
     * Get an array of all weekdays.
     * @keywords weekdays list array intl
     */
    weekdays(style?: Intl.DateTimeFormatOptions['weekday']): ComputedRef<ItemValue<number | undefined>[]>;

    /**
     * Format time.
     * @keywords time format intl
     */
    time(value: RefOrNormal<NumberOrStringOrDate>): ComputedRef<string>;

    /**
     * Sort an array of items taking into account locale specifics.
     * @keywords sort locale array intl
     */
    sort<T>(data: RefOrNormal<T[]>, compareFn?: (a: T, b: T) => [string, string]): ComputedRef<T[]>;
}