// md5:cc2377e836eff8d33aee1078abc6ef04 true
/**
 * Utility class for date manipulation, calculation, and localization.
 * @remarks Creating a `Datetime` instance without a specific date (using the current time) for SSR rendering may lead to hydration mismatches due to server/client timezone differences.
 * @keywords datetime date time calendar localization
 */
export declare class Datetime {
    /** Creates a Datetime instance. @keywords constructor datetime */
    constructor(date?: NumberOrStringOrDate, type?: GeoDate, code?: string);
    /** Returns the GeoIntl formatting instance. @keywords intl format */
    getIntl(): GeoIntl;
    /** Returns the underlying native Date object. @keywords date native */
    getDate(): Date;
    /** Returns the configured date display format type. @keywords type format */
    getType(): GeoDate;
    /** Returns the hour format type. @keywords hours format */
    getHoursType(): GeoHours;
    /** Returns whether 24-hour time format is enabled. @keywords 24-hour format */
    getHour24(): boolean;
    /** Returns the time zone offset in minutes relative to UTC. @keywords timezone offset utc */
    getTimeZoneOffset(): number;
    /** Returns the time zone string. @keywords timezone */
    getTimeZone(style?: GeoTimeZoneStyle): string;
    /** Returns the code of the first day of the week for the current locale. @keywords first day weekday */
    getFirstDayCode(): GeoFirstDay;
    /** Returns the four-digit year according to local time. @keywords year local */
    getYear(): number;
    /** Returns the 1-based month index (1-12) according to local time. @keywords month local */
    getMonth(): number;
    /** Returns the day of the month (1-31) according to local time. @keywords day month local */
    getDay(): number;
    /** Returns the hour (0-23) according to local time. @keywords hour local */
    getHour(): number;
    /** Returns the minute (0-59) according to local time. @keywords minute local */
    getMinute(): number;
    /** Returns the second (0-59) according to local time. @keywords second local */
    getSecond(): number;
    /** Returns the total number of days (28-31) in the current month. @keywords days in month max day */
    getMaxDay(): number;
    /** Formats the date and time according to the current locale. @keywords locale format intl */
    locale(type?: GeoDate, styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions): string;
    /** Formats the year according to the current locale. @keywords locale year format */
    localeYear(style?: Intl.DateTimeFormatOptions['year']): string;
    /** Formats the month according to the current locale. @keywords locale month format */
    localeMonth(style?: Intl.DateTimeFormatOptions['month']): string;
    /** Formats the day according to the current locale. @keywords locale day format */
    localeDay(style?: Intl.DateTimeFormatOptions['day']): string;
    /** Formats the hour according to the current locale. @keywords locale hour format */
    localeHour(style?: Intl.DateTimeFormatOptions['hour']): string;
    /** Formats the minute according to the current locale. @keywords locale minute format */
    localeMinute(style?: Intl.DateTimeFormatOptions['minute']): string;
    /** Formats the second according to the current locale. @keywords locale second format */
    localeSecond(style?: Intl.DateTimeFormatOptions['second']): string;
    /** Returns the date in standard ISO-like format. @keywords standard format iso */
    standard(timeZone?: boolean): string;
    /** Sets the date value from a number, string, or Date instance. @keywords set date */
    setDate(value: NumberOrStringOrDate): this;
    /** Sets the date display format type. @keywords set format type */
    setType(value: GeoDate): this;
    /** Sets whether to use 24-hour time format. @keywords set 24-hour format */
    setHour24(value: boolean): this;
    /** Sets the country and language locale code. @keywords set locale code */
    setCode(code: string): this;
    /** Registers a callback invoked when the date value is updated. @keywords watch listener callback */
    setWatch(watch: (date: Date, type: GeoDate, hour24: boolean) => void): this;
    /** Sets the full year according to local time. @keywords set year */
    setYear(value: number): this;
    /** Sets the 1-based month (1-12) according to local time. @keywords set month */
    setMonth(value: number): this;
    /** Sets the day of the month (1-31) according to local time. @keywords set day */
    setDay(value: number): this;
    /** Sets the hour (0-23) according to local time. @keywords set hour */
    setHour(value: number): this;
    /** Sets the minute (0-59) according to local time. @keywords set minute */
    setMinute(value: number): this;
    /** Sets the second (0-59) according to local time. @keywords set second */
    setSecond(value: number): this;
    /** Shifts the date by the specified number of years. @keywords move shift year */
    moveByYear(value: number): this;
    /** Shifts the date by the specified number of months. @keywords move shift month */
    moveByMonth(value: number): this;
    /** Shifts the date by the specified number of days. @keywords move shift day */
    moveByDay(value: number): this;
    /** Shifts the date by the specified number of hours. @keywords move shift hour */
    moveByHour(value: number): this;
    /** Shifts the date by the specified number of minutes. @keywords move shift minute */
    moveByMinute(value: number): this;
    /** Shifts the date by the specified number of seconds. @keywords move shift second */
    moveBySecond(value: number): this;
    /** Sets the month to January. @keywords january first month */
    moveMonthFirst(): this;
    /** Sets the month to December. @keywords december last month */
    moveMonthLast(): this;
    /** Advances the date to the first day of the next month. @keywords next month */
    moveMonthNext(): this;
    /** Moves the date to the first day of the previous month. @keywords previous month */
    moveMonthPrevious(): this;
    /** Moves the date to the first day of the current week. @keywords first weekday week start */
    moveWeekdayFirst(): this;
    /** Moves the date to the last day of the current week. @keywords last weekday week end */
    moveWeekdayLast(): this;
    /** Moves the date to the first day of the month's first week. @keywords month first weekday */
    moveWeekdayFirstByMonth(): this;
    /** Moves the date to the first day of the next month's first full week. @keywords month last weekday */
    moveWeekdayLastByMonth(): this;
    /** Advances the date by one week. @keywords next week */
    moveWeekdayNext(): this;
    /** Moves the date back by one week. @keywords previous week */
    moveWeekdayPrevious(): this;
    /** Moves the date to the first day of the current month. @keywords first day month start */
    moveDayFirst(): this;
    /** Moves the date to the last day of the current month. @keywords last day month end */
    moveDayLast(): this;
    /** Advances the date to the next day. @keywords next day tomorrow */
    moveDayNext(): this;
    /** Moves the date to the previous day. @keywords previous day yesterday */
    moveDayPrevious(): this;
    /** Creates a clone of the underlying native Date object. @keywords clone date */
    clone(): Date;
    /** Creates a clone of this Datetime instance. @keywords clone datetime */
    cloneClass(): Datetime;
    /** Clones the Datetime instance with month set to January. @keywords clone january */
    cloneMonthFirst(): Datetime;
    /** Clones the Datetime instance with month set to December. @keywords clone december */
    cloneMonthLast(): Datetime;
    /** Clones the Datetime instance and advances it by one month. @keywords clone next month */
    cloneMonthNext(): Datetime;
    /** Clones the Datetime instance and moves it back by one month. @keywords clone previous month */
    cloneMonthPrevious(): Datetime;
    /** Clones the Datetime instance set to the first day of the current week. @keywords clone week start */
    cloneWeekdayFirst(): Datetime;
    /** Clones the Datetime instance set to the last day of the current week. @keywords clone week end */
    cloneWeekdayLast(): Datetime;
    /** Clones the Datetime instance set to the first day of the month's first week. @keywords clone month week start */
    cloneWeekdayFirstByMonth(): Datetime;
    /** Clones the Datetime instance set to the last day of the month's last week. @keywords clone month week end */
    cloneWeekdayLastByMonth(): Datetime;
    /** Clones the Datetime instance advanced by one week. @keywords clone next week */
    cloneWeekdayNext(): Datetime;
    /** Clones the Datetime instance moved back by one week. @keywords clone previous week */
    cloneWeekdayPrevious(): Datetime;
    /** Clones the Datetime instance set to the first day of the month. @keywords clone month start */
    cloneDayFirst(): Datetime;
    /** Clones the Datetime instance set to the last day of the month. @keywords clone month end */
    cloneDayLast(): Datetime;
    /** Clones the Datetime instance advanced by one day. @keywords clone next day */
    cloneDayNext(): Datetime;
    /** Clones the Datetime instance moved back by one day. @keywords clone previous day */
    cloneDayPrevious(): Datetime;
}