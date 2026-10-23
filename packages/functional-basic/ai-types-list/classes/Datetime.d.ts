// md5:903c825fc3643aedb6b09e96f4f4d35f true
/**
 * Date manipulation and localization utility class.
 *
 * @remarks
 * Creating a `Datetime` instance without a specific date (using the current time)
 * for rendering in SSR may lead to hydration mismatches because the time or time zone
 * on the server may differ from the time on the client.
 * @keywords datetime, date, calendar, timezone, localization, intl
 */
export declare class Datetime {
    /** Constructs a Datetime instance. @keywords constructor, init */
    constructor(date?: NumberOrStringOrDate, type?: GeoDate, code?: string);
    /** Gets the GeoIntl localization formatting instance. @keywords intl, localization */
    getIntl(): GeoIntl;
    /** Gets the underlying native Date object. @keywords date, native */
    getDate(): Date;
    /** Gets the configured output date type format. @keywords type, format */
    getType(): GeoDate;
    /** Gets the hour display format type. @keywords hours, format */
    getHoursType(): GeoHours;
    /** Checks whether 24-hour time format is enabled. @keywords hour24, format, time */
    getHour24(): boolean;
    /** Returns time zone offset in minutes relative to UTC. @keywords timezone, offset, utc */
    getTimeZoneOffset(): number;
    /** Gets the time zone representation string. @keywords timezone, tz */
    getTimeZone(style?: GeoTimeZoneStyle): string;
    /** Gets the code for the first day of the week. @keywords firstDay, weekday */
    getFirstDayCode(): GeoFirstDay;
    /** Gets the full year in local time. @keywords year, local */
    getYear(): number;
    /** Gets the 1-based month (1-12) in local time. @keywords month, local */
    getMonth(): number;
    /** Gets the day of the month (1-31) in local time. @keywords day, date, local */
    getDay(): number;
    /** Gets the hour (0-23) in local time. @keywords hour, local */
    getHour(): number;
    /** Gets the minute (0-59) in local time. @keywords minute, local */
    getMinute(): number;
    /** Gets the second (0-59) in local time. @keywords second, local */
    getSecond(): number;
    /** Gets the total number of days (28-31) in the current month. @keywords maxDay, daysInMonth */
    getMaxDay(): number;
    /** Replaces the current date value. @keywords setDate, update */
    setDate(value: NumberOrStringOrDate): this;
    /** Sets the output date type format. @keywords setType, format */
    setType(value: GeoDate): this;
    /** Sets whether to use 24-hour time format. @keywords setHour24, format */
    setHour24(value: boolean): this;
    /** Sets the locale/country code. @keywords setCode, locale */
    setCode(code: string): this;
    /** Registers a change listener callback. @keywords watch, observer, listener */
    setWatch(watch: (date: Date, type: GeoDate, hour24: boolean) => void): this;
    /** Sets the full year in local time. @keywords setYear, year */
    setYear(value: number): this;
    /** Sets the 1-based month (1-12) in local time. @keywords setMonth, month */
    setMonth(value: number): this;
    /** Sets the day of the month (1-31) in local time. @keywords setDay, day */
    setDay(value: number): this;
    /** Sets the hour (0-23) in local time. @keywords setHour, hour */
    setHour(value: number): this;
    /** Sets the minute (0-59) in local time. @keywords setMinute, minute */
    setMinute(value: number): this;
    /** Sets the second (0-59) in local time. @keywords setSecond, second */
    setSecond(value: number): this;
    /** Formats date and time according to locale and format options. @keywords locale, format, string */
    locale(type?: GeoDate, styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions): string;
    /** Formats the year according to locale. @keywords localeYear, year, format */
    localeYear(style?: Intl.DateTimeFormatOptions['year']): string;
    /** Formats the month according to locale. @keywords localeMonth, month, format */
    localeMonth(style?: Intl.DateTimeFormatOptions['month']): string;
    /** Formats the day according to locale. @keywords localeDay, day, format */
    localeDay(style?: Intl.DateTimeFormatOptions['day']): string;
    /** Formats the hour according to locale. @keywords localeHour, hour, format */
    localeHour(style?: Intl.DateTimeFormatOptions['hour']): string;
    /** Formats the minute according to locale. @keywords localeMinute, minute, format */
    localeMinute(style?: Intl.DateTimeFormatOptions['minute']): string;
    /** Formats the second according to locale. @keywords localeSecond, second, format */
    localeSecond(style?: Intl.DateTimeFormatOptions['second']): string;
    /** Formats date to a standard ISO-like string. @keywords standard, iso, format */
    standard(timeZone?: boolean): string;
    /** Shifts the date by a specified number of years. @keywords moveByYear, addYears */
    moveByYear(value: number): this;
    /** Shifts the date by a specified number of months. @keywords moveByMonth, addMonths */
    moveByMonth(value: number): this;
    /** Shifts the date by a specified number of days. @keywords moveByDay, addDays */
    moveByDay(value: number): this;
    /** Shifts the date by a specified number of hours. @keywords moveByHour, addHours */
    moveByHour(value: number): this;
    /** Shifts the date by a specified number of minutes. @keywords moveByMinute, addMinutes */
    moveByMinute(value: number): this;
    /** Shifts the date by a specified number of seconds. @keywords moveBySecond, addSeconds */
    moveBySecond(value: number): this;
    /** Moves the date to January of the current year. @keywords moveMonthFirst, january */
    moveMonthFirst(): this;
    /** Moves the date to December of the current year. @keywords moveMonthLast, december */
    moveMonthLast(): this;
    /** Advances the date to the first day of the next month. @keywords moveMonthNext, nextMonth */
    moveMonthNext(): this;
    /** Rewinds the date to the first day of the previous month. @keywords moveMonthPrevious, prevMonth */
    moveMonthPrevious(): this;
    /** Moves the date to the first day of the current week. @keywords moveWeekdayFirst, weekStart */
    moveWeekdayFirst(): this;
    /** Moves the date to the last day of the current week. @keywords moveWeekdayLast, weekEnd */
    moveWeekdayLast(): this;
    /** Moves to the first weekday of the month's first week. @keywords moveWeekdayFirstByMonth */
    moveWeekdayFirstByMonth(): this;
    /** Moves to the first weekday of the following month's first full week. @keywords moveWeekdayLastByMonth */
    moveWeekdayLastByMonth(): this;
    /** Advances the date by one full week. @keywords moveWeekdayNext, nextWeek */
    moveWeekdayNext(): this;
    /** Rewinds the date by one full week. @keywords moveWeekdayPrevious, prevWeek */
    moveWeekdayPrevious(): this;
    /** Moves the date to the first day of the current month. @keywords moveDayFirst, startOfMonth */
    moveDayFirst(): this;
    /** Moves the date to the last day of the current month. @keywords moveDayLast, endOfMonth */
    moveDayLast(): this;
    /** Advances the date by one day. @keywords moveDayNext, tomorrow */
    moveDayNext(): this;
    /** Rewinds the date by one day. @keywords moveDayPrevious, yesterday */
    moveDayPrevious(): this;
    /** Clones and returns a native Date instance. @keywords clone, date */
    clone(): Date;
    /** Clones and returns a new Datetime instance. @keywords cloneClass, copy */
    cloneClass(): Datetime;
    /** Clones instance and sets month to January. @keywords cloneMonthFirst, january */
    cloneMonthFirst(): Datetime;
    /** Clones instance and sets month to December. @keywords cloneMonthLast, december */
    cloneMonthLast(): Datetime;
    /** Clones instance shifted to the next month. @keywords cloneMonthNext, nextMonth */
    cloneMonthNext(): Datetime;
    /** Clones instance shifted to the previous month. @keywords cloneMonthPrevious, prevMonth */
    cloneMonthPrevious(): Datetime;
    /** Clones instance set to the first day of the week. @keywords cloneWeekdayFirst, weekStart */
    cloneWeekdayFirst(): Datetime;
    /** Clones instance set to the last day of the week. @keywords cloneWeekdayLast, weekEnd */
    cloneWeekdayLast(): Datetime;
    /** Clones instance set to the first weekday of the month's first week. @keywords cloneWeekdayFirstByMonth */
    cloneWeekdayFirstByMonth(): Datetime;
    /** Clones instance set to the first weekday of the following month's first full week. @keywords cloneWeekdayLastByMonth */
    cloneWeekdayLastByMonth(): Datetime;
    /** Clones instance advanced by one week. @keywords cloneWeekdayNext, nextWeek */
    cloneWeekdayNext(): Datetime;
    /** Clones instance rewound by one week. @keywords cloneWeekdayPrevious, prevWeek */
    cloneWeekdayPrevious(): Datetime;
    /** Clones instance set to the first day of the month. @keywords cloneDayFirst, startOfMonth */
    cloneDayFirst(): Datetime;
    /** Clones instance set to the last day of the month. @keywords cloneDayLast, endOfMonth */
    cloneDayLast(): Datetime;
    /** Clones instance advanced by one day. @keywords cloneDayNext, tomorrow */
    cloneDayNext(): Datetime;
    /** Clones instance rewound by one day. @keywords cloneDayPrevious, yesterday */
    cloneDayPrevious(): Datetime;
}