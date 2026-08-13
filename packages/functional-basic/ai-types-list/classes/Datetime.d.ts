// md5:173e496534804123c1dcedc88724aa42 true
/**
 * A class for working with dates.
 * @keywords date datetime calendar timezone format
 */
export declare class Datetime {
    protected watch?: (date: Date, type: GeoDate, hour24: boolean) => void;
    constructor(date?: NumberOrStringOrDate, type?: GeoDate, code?: string);
    /** Returns an object for working with formatting. */
    getIntl(): GeoIntl;
    /** Returns a Date object. */
    getDate(): Date;
    /** Returns the type of data output. */
    getType(): GeoDate;
    /** Returns the format of hours. */
    getHoursType(): GeoHours;
    /** Whether to use 24-hour time format. */
    getHour24(): boolean;
    /** Returns the time zone offset in minutes. */
    getTimeZoneOffset(): number;
    /** Returns the time zone as a string. */
    getTimeZone(style?: GeoTimeZoneStyle): string;
    /** Returns the code of the first day of the week. */
    getFirstDayCode(): GeoFirstDay;
    /** Returns the year of the specified date. */
    getYear(): number;
    /** Returns the month of the specified date (1-12). */
    getMonth(): number;
    /** Returns the day of the month (1-31). */
    getDay(): number;
    /** Returns the hour (0-23). */
    getHour(): number;
    /** Returns the minutes (0-59). */
    getMinute(): number;
    /** Returns the seconds (0-59). */
    getSecond(): number;
    /** Returns the last day of the month (28-31). */
    getMaxDay(): number;
    /** Formats date and time according to locale. */
    locale(type?: GeoDate, styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions): string;
    /** Returns the formatted year. */
    localeYear(style?: Intl.DateTimeFormatOptions['year']): string;
    /** Returns the formatted month. */
    localeMonth(style?: Intl.DateTimeFormatOptions['month']): string;
    /** Returns the formatted day. */
    localeDay(style?: Intl.DateTimeFormatOptions['day']): string;
    /** Returns the formatted hour. */
    localeHour(style?: Intl.DateTimeFormatOptions['hour']): string;
    /** Returns the formatted minute. */
    localeMinute(style?: Intl.DateTimeFormatOptions['minute']): string;
    /** Returns the formatted second. */
    localeSecond(style?: Intl.DateTimeFormatOptions['second']): string;
    /** Returns standard date format string. */
    standard(timeZone?: boolean): string;
    /** Sets the date completely. */
    setDate(value: NumberOrStringOrDate): this;
    /** Sets the type of data output. */
    setType(value: GeoDate): this;
    /** Sets whether to use 24-hour time format. */
    setHour24(value: boolean): this;
    /** Sets the location code. */
    setCode(code: string): this;
    /** Sets the update watch callback. */
    setWatch(watch: (date: Date, type: GeoDate, hour24: boolean) => void): this;
    /** Sets the full year. */
    setYear(value: number): this;
    /** Sets the month (1-12). */
    setMonth(value: number): this;
    /** Sets the day of the month. */
    setDay(value: number): this;
    /** Sets the hours. */
    setHour(value: number): this;
    /** Sets the minutes. */
    setMinute(value: number): this;
    /** Sets the seconds. */
    setSecond(value: number): this;
    /** Shifts the date by years. */
    moveByYear(value: number): this;
    /** Shifts the date by months. */
    moveByMonth(value: number): this;
    /** Shifts the date by days. */
    moveByDay(value: number): this;
    /** Shifts the date by hours. */
    moveByHour(value: number): this;
    /** Shifts the date by minutes. */
    moveByMinute(value: number): this;
    /** Shifts the date by seconds. */
    moveBySecond(value: number): this;
    /** Moves to January of the current year. */
    moveMonthFirst(): this;
    /** Moves to December of the current year. */
    moveMonthLast(): this;
    /** Moves to the first day of the next month. */
    moveMonthNext(): this;
    /** Moves to the first day of the previous month. */
    moveMonthPrevious(): this;
    /** Moves to the first day of the week. */
    moveWeekdayFirst(): this;
    /** Moves to the last day of the week. */
    moveWeekdayLast(): this;
    /** Moves to the first weekday of the month. */
    moveWeekdayFirstByMonth(): this;
    /** Moves to the last weekday of the month. */
    moveWeekdayLastByMonth(): this;
    /** Moves to the next week. */
    moveWeekdayNext(): this;
    /** Moves to the previous week. */
    moveWeekdayPrevious(): this;
    /** Moves to the first day of the month. */
    moveDayFirst(): this;
    /** Moves to the last day of the month. */
    moveDayLast(): this;
    /** Moves to the next day. */
    moveDayNext(): this;
    /** Moves to the previous day. */
    moveDayPrevious(): this;
    /** Clones the Date object. */
    clone(): Date;
    /** Clones the Datetime instance. */
    cloneClass(): Datetime;
    /** Clones and moves to the first month. */
    cloneMonthFirst(): Datetime;
    /** Clones and moves to the last month. */
    cloneMonthLast(): Datetime;
    /** Clones and moves to the next month. */
    cloneMonthNext(): Datetime;
    /** Clones and moves to the previous month. */
    cloneMonthPrevious(): Datetime;
    /** Clones and moves to the first day of the week. */
    cloneWeekdayFirst(): Datetime;
    /** Clones and moves to the last day of the week. */
    cloneWeekdayLast(): Datetime;
    /** Clones and moves to the first weekday of the month. */
    cloneWeekdayFirstByMonth(): Datetime;
    /** Clones and moves to the last weekday of the month. */
    cloneWeekdayLastByMonth(): Datetime;
    /** Clones and moves to the next week. */
    cloneWeekdayNext(): Datetime;
    /** Clones and moves to the previous week. */
    cloneWeekdayPrevious(): Datetime;
    /** Clones and moves to the first day of the month. */
    cloneDayFirst(): Datetime;
    /** Clones and moves to the last day of the month. */
    cloneDayLast(): Datetime;
    /** Clones and moves to the next day. */
    cloneDayNext(): Datetime;
    /** Clones and moves to the previous day. */
    cloneDayPrevious(): Datetime;
    protected toTimeZoneHourFormat(hour: number): string;
    protected update(): this;
}