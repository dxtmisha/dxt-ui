// md5:ca1123aea63944930a115d03a1d2d35b true
import { ComputedRef, Ref } from 'vue';
import { Datetime, GeoDate, GeoFirstDay, GeoHours, NumberOrStringOrDate } from '@dxtmisha/functional-basic';

/** @keywords DatetimeRef, date, reactive, time */
export declare class DatetimeRef {
    /** @keywords constructor, init */
    constructor(date: RefOrNormal<NumberOrStringOrDate>, type?: RefOrNormal<GeoDate>, code?: RefOrNormal<string>);
    /** @keywords getItem, date, ref */
    getItem(): Ref<NumberOrStringOrDate>;
    /** @keywords getDate, date */
    getDate(): Ref<Date>;
    /** @keywords getDatetime, datetime */
    getDatetime(): Datetime;
    /** @keywords getHoursType, hours */
    getHoursType(): ComputedRef<GeoHours>;
    /** @keywords getFirstDayCode, firstDay */
    getFirstDayCode(): ComputedRef<GeoFirstDay>;
    /** @keywords getYear, year */
    getYear(): ComputedRef<number>;
    /** @keywords getMonth, month */
    getMonth(): ComputedRef<number>;
    /** @keywords getDay, day */
    getDay(): ComputedRef<number>;
    /** @keywords getHour, hour */
    getHour(): ComputedRef<number>;
    /** @keywords getMinute, minute */
    getMinute(): ComputedRef<number>;
    /** @keywords getSecond, second */
    getSecond(): ComputedRef<number>;
    /** @keywords getMaxDay, maxDay */
    getMaxDay(): ComputedRef<number>;
    /** @keywords locale, format */
    locale(type?: GeoDate, styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions): ComputedRef<string>;
    /** @keywords standard, format */
    standard(timeZone?: boolean): ComputedRef<string>;
    protected updateDate(): this;
}