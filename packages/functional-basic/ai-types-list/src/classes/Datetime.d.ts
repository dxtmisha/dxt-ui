// md5:cc2377e836eff8d33aee1078abc6ef04 true
/**
 * Class for manipulating, navigating, and formatting dates and times.
 * @remarks Creating a `Datetime` instance without a specific date (using the current time) for SSR rendering may lead to hydration mismatches.
 * @keywords date, datetime, time, calendar, format, timezone
 */
export declare class Datetime {
    /** Creates a new Datetime instance. @keywords constructor, init */
    constructor(date?: NumberOrStringOrDate, type?: GeoDate, code?: string);
    /** Gets the GeoIntl internationalization and formatting helper. @keywords intl, localization */
    getIntl(): GeoIntl;
    /** Gets the underlying native Date object. @keywords date, native */
    getDate(): Date;
    /** Gets the configured date output format type. @keywords type, format */
    getType(): GeoDate;
    /** Gets the hour display format type. @keywords hours, format */
    getHoursType(): GeoHours;
    /** Checks whether 24-hour time format is enabled. @keywords 24hour, clock */
    getHour24(): boolean;
    /** Gets the time zone offset relative to UTC in minutes. @keywords timezone, offset, utc */
    getTimeZoneOffset(): number;
    /** Gets the time zone identifier string. @keywords timezone, zone */
    getTimeZone(style?: GeoTimeZoneStyle): string;
    /** Gets the code representing the first day of the week. @keywords firstday, weekday, week */
    getFirstDayCode(): GeoFirstDay;
    /** Gets the full year according to local time. @keywords year */
    getYear(): number;
    /** Gets the 1-based month (1-12) according to local time. @keywords month */
    getMonth(): number;
    /** Gets the day of the month (1-31) according to local time. @keywords day, date */
    getDay(): number;
    /** Gets the hour (0-23) according to local time. @keywords hour, time */
    getHour(): number;
    /** Gets the minutes (0-59) according to local time. @keywords minute, time */
    getMinute(): number;
    /** Gets the seconds (0-59) according to local time. @keywords second, time */
    getSecond(): number;
    /** Gets the number of days in the current month (28-31). @keywords maxDay, daysInMonth */
    getMaxDay(): number;
    /** Formats the date according to locale and format options. @keywords format, locale, string */
    locale(type?: GeoDate, styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions): string;
    /** Formats the year according to locale. @keywords year, format */
    localeYear(style?: Intl.DateTimeFormatOptions['year']): string;
    /** Formats the month according to locale. @keywords month, format */
    localeMonth(style?: Intl.DateTimeFormatOptions['month']): string;
    /** Formats the day according to locale. @keywords day, format */
    localeDay(style?: Intl.DateTimeFormatOptions['day']): string;
    /** Formats the hour according to locale. @keywords hour, format */
    localeHour(style?: Intl.DateTimeFormatOptions['hour']): string;
    /** Formats the minute according to locale. @keywords minute, format */
    localeMinute(style?: Intl.DateTimeFormatOptions['minute']): string;
    /** Formats the second according to locale. @keywords second, format */
    localeSecond(style?: Intl.DateTimeFormatOptions['second']): string;
    /** Formats the date to an ISO-standard string representation. @keywords standard, iso */
    standard(timeZone?: boolean): string;
    /** Sets a new date value. @keywords setDate, date */
    setDate(value: NumberOrStringOrDate): this;
    /** Sets the date output format type. @keywords setType, format */
    setType(value: GeoDate): this;
    /** Sets whether to use 24-hour time format. @keywords setHour24, 24hour */
    setHour24(value: boolean): this;
    /** Sets the country and language locale code. @keywords setCode, locale */
    setCode(code: string): this;
    /** Registers a callback invoked when date state changes. @keywords watch, listener */
    setWatch(watch: (date: Date, type: GeoDate, hour24: boolean) => void): this;
    /** Sets the year according to local time. @keywords setYear, year */
    setYear(value: number): this;
    /** Sets the 1-based month (1-12) according to local time. @keywords setMonth, month */
    setMonth(value: number): this;
    /** Sets the day of the month according to local time. @keywords setDay, day */
    setDay(value: number): this;
    /** Sets the hours according to local time. @keywords setHour, hour */
    setHour(value: number): this;
    /** Sets the minutes according to local time. @keywords setMinute, minute */
    setMinute(value: number): this;
    /** Sets the seconds according to local time. @keywords setSecond, second */
    setSecond(value: number): this;
    /** Offsets the date by a specified number of years. @keywords moveByYear, addYear */
    moveByYear(value: number): this;
    /** Offsets the date by a specified number of months. @keywords moveByMonth, addMonth */
    moveByMonth(value: number): this;
    /** Offsets the date by a specified number of days. @keywords moveByDay, addDay */
    moveByDay(value: number): this;
    /** Offsets the date by a specified number of hours. @keywords moveByHour, addHour */
    moveByHour(value: number): this;
    /** Offsets the date by a specified number of minutes. @keywords moveByMinute, addMinute */
    moveByMinute(value: number): this;
    /** Offsets the date by a specified number of seconds. @keywords moveBySecond, addSecond */
    moveBySecond(value: number): this;
    /** Sets the month to January. @keywords moveMonthFirst, january */
    moveMonthFirst(): this;
    /** Sets the month to December. @keywords moveMonthLast, december */
    moveMonthLast(): this;
    /** Advances the date to the first day of the next month. @keywords moveMonthNext, nextMonth */
    moveMonthNext(): this;
    /** Shifts the date to the first day of the previous month. @keywords moveMonthPrevious, prevMonth */
    moveMonthPrevious(): this;
    /** Moves the date to the first day of the current week. @keywords moveWeekdayFirst, weekStart */
    moveWeekdayFirst(): this;
    /** Moves the date to the last day of the current week. @keywords moveWeekdayLast, weekEnd */
    moveWeekdayLast(): this;
    /** Moves the date to the first day of the first week of the month. @keywords moveWeekdayFirstByMonth */
    moveWeekdayFirstByMonth(): this;
    /** Moves the date to the first day of the first full week of the following month. @keywords moveWeekdayLastByMonth */
    moveWeekdayLastByMonth(): this;
    /** Advances the date to the following week. @keywords moveWeekdayNext, nextWeek */
    moveWeekdayNext(): this;
    /** Shifts the date to the preceding week. @keywords moveWeekdayPrevious, prevWeek */
    moveWeekdayPrevious(): this;
    /** Moves the date to the first day of the current month. @keywords moveDayFirst, monthStart */
    moveDayFirst(): this;
    /** Moves the date to the last day of the current month. @keywords moveDayLast, monthEnd */
    moveDayLast(): this;
    /** Advances the date to the next day. @keywords moveDayNext, tomorrow */
    moveDayNext(): this;
    /** Shifts the date to the previous day. @keywords moveDayPrevious, yesterday */
    moveDayPrevious(): this;
    /** Creates a cloned native Date object. @keywords clone, date */
    clone(): Date;
    /** Creates an identical clone of this Datetime instance. @keywords cloneClass, clone */
    cloneClass(): Datetime;
    /** Clones this instance and sets the month to January. @keywords cloneMonthFirst */
    cloneMonthFirst(): Datetime;
    /** Clones this instance and sets the month to December. @keywords cloneMonthLast */
    cloneMonthLast(): Datetime;
    /** Clones this instance and advances one month forward. @keywords cloneMonthNext */
    cloneMonthNext(): Datetime;
    /** Clones this instance and moves one month backward. @keywords cloneMonthPrevious */
    cloneMonthPrevious(): Datetime;
    /** Clones this instance and sets the date to the first day of the week. @keywords cloneWeekdayFirst */
    cloneWeekdayFirst(): Datetime;
    /** Clones this instance and sets the date to the last day of the week. @keywords cloneWeekdayLast */
    cloneWeekdayLast(): Datetime;
    /** Clones this instance and sets the date to the first day of the first week of the month. @keywords cloneWeekdayFirstByMonth */
    cloneWeekdayFirstByMonth(): Datetime;
    /** Clones this instance and sets the date to the last day of the last week of the month. @keywords cloneWeekdayLastByMonth */
    cloneWeekdayLastByMonth(): Datetime;
    /** Clones this instance and advances one week forward. @keywords cloneWeekdayNext */
    cloneWeekdayNext(): Datetime;
    /** Clones this instance and shifts one week backward. @keywords cloneWeekdayPrevious */
    cloneWeekdayPrevious(): Datetime;
    /** Clones this instance and moves to the first day of the month. @keywords cloneDayFirst */
    cloneDayFirst(): Datetime;
    /** Clones this instance and moves to the last day of the month. @keywords cloneDayLast */
    cloneDayLast(): Datetime;
    /** Clones this instance and advances one day forward. @keywords cloneDayNext */
    cloneDayNext(): Datetime;
    /** Clones this instance and shifts one day backward. @keywords cloneDayPrevious */
    cloneDayPrevious(): Datetime;
}