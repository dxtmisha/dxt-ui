// md5:52c876434adccf0803dfe5429053d7a5 true
import { type ComputedRef, type Ref } from 'vue';
import { Datetime, type GeoDate, type GeoFirstDay, type GeoHours, type NumberOrStringOrDate } from '@dxtmisha/functional-basic';

/** Reactive wrapper for Datetime date operations. @keywords datetime, date, reactive, vue */
export declare class DatetimeRef {
    /** Initializes reactive Datetime instance. @keywords datetime, init, constructor */
    constructor(date: NumberOrStringOrDate | Ref<NumberOrStringOrDate>, type?: GeoDate | Ref<GeoDate>, code?: string | Ref<string>);
    /** Returns reactive reference to raw date value. @keywords date, raw, item */
    getItem(): Ref<NumberOrStringOrDate>;
    /** Returns reactive reference to Date object. @keywords date, object */
    getDate(): Ref<Date>;
    /** Returns underlying Datetime instance. @keywords datetime, instance */
    getDatetime(): Datetime;
    /** Returns hour display format. @keywords hours, format, 12h, 24h */
    getHoursType(): ComputedRef<GeoHours>;
    /** Returns locale first day of week code. @keywords first day, week, locale */
    getFirstDayCode(): ComputedRef<GeoFirstDay>;
    /** Returns local year. @keywords year */
    getYear(): ComputedRef<number>;
    /** Returns local zero-based month index. @keywords month */
    getMonth(): ComputedRef<number>;
    /** Returns local day of month. @keywords day, day of month */
    getDay(): ComputedRef<number>;
    /** Returns local hour. @keywords hour */
    getHour(): ComputedRef<number>;
    /** Returns local minute. @keywords minute */
    getMinute(): ComputedRef<number>;
    /** Returns local second. @keywords second */
    getSecond(): ComputedRef<number>;
    /** Returns maximum day number of current month. @keywords max day, days in month */
    getMaxDay(): ComputedRef<number>;
    /** Formats date into locale-sensitive string. @keywords locale, format, intl */
    locale(type?: GeoDate, styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions): ComputedRef<string>;
    /** Formats date into standard string representation. @keywords standard, iso, format */
    standard(timeZone?: boolean): ComputedRef<string>;
}