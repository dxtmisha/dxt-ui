// md5:4b4ab9f76cf65fd0f9bb80b46c02348c true
/**
 * Class for working with dates, time, and internationalized calendar calculations.
 * @remarks Creating a `Datetime` instance without a specific date (using the current time) for rendering in SSR may lead to hydration mismatches because the time or time zone on the server may differ from the time on the client.
 * @keywords datetime, date, calendar, time, timezone, intl
 */
export declare class Datetime {
    /** Initializes a Datetime instance with date, format type, and locale. @keywords init, constructor */
    constructor(date?: NumberOrStringOrDate, type?: GeoDate, code?: string);
    /** Returns the GeoIntl internationalization helper instance. @keywords intl, localization, format */
    getIntl(): GeoIntl;
    /** Returns the underlying native Date instance. @keywords date, native */
    getDate(): Date;
    /** Returns the date output format type. @keywords type, format */
    getType(): GeoDate;
    /** Returns the hour display format type. @keywords hours, format */
    getHoursType(): GeoHours;
    /** Checks whether the 24-hour time format is enabled. @keywords 24-hour, time format */
    getHour24(): boolean;
    /** Returns the country and language locale code. @keywords locale, language, country, code */
    getCode(): string;
    /** Returns the time zone offset in minutes relative to UTC. @keywords timezone, offset, utc */
    getTimeZoneOffset(): number;
    /** Returns the formatted time zone string. @keywords timezone, tz */
    getTimeZone(style?: GeoTimeZoneStyle): string;
    /** Returns the first day of the week code for the current locale. @keywords first day, week, weekday */
    getFirstDayCode(): GeoFirstDay;
    /** Returns the full year according to local time. @keywords year, local time */
    getYear(): number;
    /** Returns the 1-based month (1-12) according to local time. @keywords month */
    getMonth(): number;
    /** Returns the day of the month (1-31) according to local time. @keywords day, day of month */
    getDay(): number;
    /** Returns the day of the week (0-6) according to local time. @keywords weekday, day of week */
    getWeekday(): number;
    /** Returns the hour (0-23) according to local time. @keywords hour, time */
    getHour(): number;
    /** Returns the minutes (0-59) according to local time. @keywords minute, time */
    getMinute(): number;
    /** Returns the seconds (0-59) according to local time. @keywords second, time */
    getSecond(): number;
    /** Returns the total number of days in the current month (28-31). @keywords max day, days in month */
    getMaxDay(): number;
    /** Sets the date value completely. @keywords set date */
    setDate(value?: NumberOrStringOrDate): this;
    /** Sets the date format output type. @keywords set type, format */
    setType(value: GeoDate): this;
    /** Configures whether to use the 24-hour time format. @keywords 24-hour, format */
    setHour24(value: boolean): this;
    /** Updates the locale code and triggers watcher notification. @keywords set locale, code */
    setCode(code?: string): this;
    /** Registers a callback invoked whenever date values update. @keywords watch, listener, callback */
    setWatch(watch?: (date: Date, type: GeoDate, hour24: boolean) => void): this;
    /** Sets the full year in local time, clamping day to avoid month overflow. @keywords set year */
    setYear(value: number): this;
    /** Sets the 1-based month (1-12) in local time, clamping day to avoid overflow. @keywords set month */
    setMonth(value: number): this;
    /** Sets the day of the month in local time. @keywords set day */
    setDay(value: number): this;
    /** Sets the hour in local time. @keywords set hour */
    setHour(value: number): this;
    /** Sets the minutes in local time. @keywords set minute */
    setMinute(value: number): this;
    /** Sets the seconds in local time. @keywords set second */
    setSecond(value: number): this;
    /** Formats date and time according to locale and format options. @keywords locale, format, intl */
    locale(type?: GeoDate, styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions): string;
    /** Formats the year according to locale options. @keywords format year, locale */
    localeYear(style?: Intl.DateTimeFormatOptions['year']): string;
    /** Formats the month according to locale options. @keywords format month, locale */
    localeMonth(style?: Intl.DateTimeFormatOptions['month']): string;
    /** Formats the day according to locale options. @keywords format day, locale */
    localeDay(style?: Intl.DateTimeFormatOptions['day']): string;
    /** Formats the hour according to locale options. @keywords format hour, locale */
    localeHour(style?: Intl.DateTimeFormatOptions['hour']): string;
    /** Formats the minute according to locale options. @keywords format minute, locale */
    localeMinute(style?: Intl.DateTimeFormatOptions['minute']): string;
    /** Formats the second according to locale options. @keywords format second, locale */
    localeSecond(style?: Intl.DateTimeFormatOptions['second']): string;
    /** Outputs date in standard format with optional timezone offset. @keywords standard, iso, format */
    standard(timeZone?: boolean): string;
    /** Shifts the date by a given number of years. @keywords move year, shift, offset */
    moveByYear(value: number): this;
    /** Shifts the date by a given number of months. @keywords move month, shift, offset */
    moveByMonth(value: number): this;
    /** Shifts the date by a given number of days. @keywords move day, shift, offset */
    moveByDay(value: number): this;
    /** Shifts the date by a given number of hours. @keywords move hour, shift, offset */
    moveByHour(value: number): this;
    /** Shifts the date by a given number of minutes. @keywords move minute, shift, offset */
    moveByMinute(value: number): this;
    /** Shifts the date by a given number of seconds. @keywords move second, shift, offset */
    moveBySecond(value: number): this;
    /** Sets the month to January. @keywords january, first month */
    moveMonthFirst(): this;
    /** Sets the month to December. @keywords december, last month */
    moveMonthLast(): this;
    /** Moves date to the first day of the next month. @keywords next month */
    moveMonthNext(): this;
    /** Moves date to the first day of the previous month. @keywords previous month */
    moveMonthPrevious(): this;
    /** Moves date to the first day of the current week. @keywords first day, week */
    moveWeekdayFirst(): this;
    /** Moves date to the last day of the current week. @keywords last day, week */
    moveWeekdayLast(): this;
    /** Moves date to the first day of the first week of the month. @keywords first week, calendar grid */
    moveWeekdayFirstByMonth(): this;
    /** Moves date to the last day of the last week of the month. @keywords last week, calendar grid */
    moveWeekdayLastByMonth(): this;
    /** Shifts date to the next week. @keywords next week */
    moveWeekdayNext(): this;
    /** Shifts date to the previous week. @keywords previous week */
    moveWeekdayPrevious(): this;
    /** Moves date to the first day of the month. @keywords start of month, day first */
    moveDayFirst(): this;
    /** Moves date to the last day of the month. @keywords end of month, day last */
    moveDayLast(): this;
    /** Shifts date forward by one day. @keywords next day, tomorrow */
    moveDayNext(): this;
    /** Shifts date backward by one day. @keywords previous day, yesterday */
    moveDayPrevious(): this;
    /** Clones date as a native Date instance. @keywords clone date */
    clone(): Date;
    /** Clones the Datetime instance. @keywords clone datetime */
    cloneClass(): Datetime;
    /** Clones Datetime instance and sets month to January. @keywords clone, january */
    cloneMonthFirst(): Datetime;
    /** Clones Datetime instance and sets month to December. @keywords clone, december */
    cloneMonthLast(): Datetime;
    /** Clones Datetime instance and shifts one month ahead. @keywords clone, next month */
    cloneMonthNext(): Datetime;
    /** Clones Datetime instance and shifts one month back. @keywords clone, previous month */
    cloneMonthPrevious(): Datetime;
    /** Clones Datetime instance set to the first day of the week. @keywords clone, start of week */
    cloneWeekdayFirst(): Datetime;
    /** Clones Datetime instance set to the last day of the week. @keywords clone, end of week */
    cloneWeekdayLast(): Datetime;
    /** Clones Datetime instance set to the first day of the first week of the month. @keywords clone, calendar start */
    cloneWeekdayFirstByMonth(): Datetime;
    /** Clones Datetime instance set to the last day of the last week of the month. @keywords clone, calendar end */
    cloneWeekdayLastByMonth(): Datetime;
    /** Clones Datetime instance shifted one week ahead. @keywords clone, next week */
    cloneWeekdayNext(): Datetime;
    /** Clones Datetime instance shifted one week back. @keywords clone, previous week */
    cloneWeekdayPrevious(): Datetime;
    /** Clones Datetime instance set to the first day of the month. @keywords clone, start of month */
    cloneDayFirst(): Datetime;
    /** Clones Datetime instance set to the last day of the month. @keywords clone, end of month */
    cloneDayLast(): Datetime;
    /** Clones Datetime instance shifted one day ahead. @keywords clone, next day */
    cloneDayNext(): Datetime;
    /** Clones Datetime instance shifted one day back. @keywords clone, previous day */
    cloneDayPrevious(): Datetime;
}