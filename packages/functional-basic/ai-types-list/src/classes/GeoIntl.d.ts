// md5:365bf67642d1ddaeddd3d17c886f6762 true
/** Internationalization manager providing language-sensitive formatting, date/time handling, and localization utilities. @keywords intl localization i18n formatting */
export declare class GeoIntl {
  /** Checks if a locale configuration exists for the specified country or language code. @keywords locale country check */
  static isItem(code?: string): boolean;
  /** Resolves and returns the normalized location or locale code. @keywords location locale code */
  static getLocation(code?: string): string;
  /** Returns a singleton or cached GeoIntl instance for the specified code. @keywords instance factory */
  static getInstance(code?: string): GeoIntl;
  /** Initializes a GeoIntl instance with optional locale code and error center handler. @keywords constructor init */
  constructor(code?: string, errorCenter?: ErrorCenterInstance);
  /** Returns the resolved country and language code. @keywords location locale */
  getLocation(): string;
  /** Returns the standard first day of the week for the active locale. @keywords first day week */
  getFirstDay(): string;
  /** Formats display names for languages, regions, scripts, or currencies. @keywords display name intl */
  display(value?: string, typeOptions?: Intl.DisplayNamesOptions['type'] | Intl.DisplayNamesOptions): string;
  /** Returns the localized display name of a language code. @keywords language name */
  languageName(value?: string, style?: Intl.RelativeTimeFormatStyle): string;
  /** Returns the localized display name of a region or country code. @keywords country region name */
  countryName(value?: string, style?: Intl.RelativeTimeFormatStyle): string;
  /** Formats a full personal name according to locale-specific conventions. @keywords full name person format */
  fullName(last: string, first: string, surname?: string, short?: boolean): string;
  /** Formats a number according to locale formatting rules. @keywords number format */
  number(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
  /** Returns the localized decimal separator symbol. @keywords decimal separator dot */
  decimal(): string;
  /** Formats a number as a localized currency string. @keywords currency format money */
  currency(value: NumberOrString, currencyOptions?: string | Intl.NumberFormatOptions, numberOnly?: boolean): string;
  /** Resolves the currency symbol or currency code for the specified currency. @keywords currency symbol */
  currencySymbol(currency: string, currencyDisplay?: keyof Intl.NumberFormatOptionsCurrencyDisplayRegistry): string;
  /** Formats a value with a specific measurement unit. @keywords unit measurement format */
  unit(value: NumberOrString, unitOptions?: string | Intl.NumberFormatOptions): string;
  /** Formats a numeric value into a human-readable digital file size string. @keywords file size bytes format */
  sizeFile(value: NumberOrString, unitOptions?: 'byte' | 'kilobyte' | 'megabyte' | 'gigabyte' | 'terabyte' | 'petabyte' | Intl.NumberFormatOptions): string;
  /** Formats a decimal fraction value as a percentage. @keywords percent percentage */
  percent(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
  /** Formats a base-100 value as a percentage. @keywords percent percentage 100 */
  percentBy100(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
  /** Selects plural word forms based on locale pluralization rules. @param words Pipe-delimited string in `one|two|few|many|other|zero` order @keywords plural rules pluralization */
  plural(value: NumberOrString, words: string, options?: Intl.PluralRulesOptions, optionsNumber?: Intl.NumberFormatOptions): string;
  /** Formats a date and time value using locale-sensitive options. @keywords date time format */
  date(value: NumberOrStringOrDate, type?: GeoDate, styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions, hour24?: boolean): string;
  /** Formats relative time elapsed or remaining against the current date. @keywords relative time ago */
  relative(value: NumberOrStringOrDate, styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions, todayValue?: Date): string;
  /** Formats relative time, falling back to absolute date formatting when exceeding a day limit threshold. @keywords relative limit date fallback */
  relativeLimit(value: NumberOrStringOrDate, limit: number, todayValue?: Date, relativeOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions, dateOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions, type?: GeoDate, hour24?: boolean): string;
  /** Formats relative time given an explicit value and time unit. @keywords relative time unit */
  relativeByValue(value: NumberOrString, unit: Intl.RelativeTimeFormatUnit, styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions): string;
  /** Returns the localized name of a month. @keywords month name */
  month(value?: NumberOrStringOrDate, style?: Intl.DateTimeFormatOptions['month']): string;
  /** Returns an array of localized month names and values. @keywords months list options */
  months(style?: Intl.DateTimeFormatOptions['month']): ItemValue<number | undefined>[];
  /** Returns the localized name of a day of the week. @keywords weekday day name */
  weekday(value?: NumberOrStringOrDate, style?: Intl.DateTimeFormatOptions['weekday']): string;
  /** Returns an array of localized weekday names and values. @keywords weekdays list options */
  weekdays(style?: Intl.DateTimeFormatOptions['weekday']): ItemValue<number | undefined>[];
  /** Formats the time portion of a date value. @keywords time clock */
  time(value: NumberOrStringOrDate): string;
  /** Sorts an array of elements using locale-aware collation rules. @keywords sort collation collator */
  sort<T>(data: T[], compareFn?: (a: T, b: T) => [string, string]): T[];
}