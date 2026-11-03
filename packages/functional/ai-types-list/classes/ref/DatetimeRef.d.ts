// md5:07ea74bfae2831ccbb85f9ae868ff1e0 true
import { type ComputedRef, type Ref } from 'vue';
import { Datetime, type GeoDate, type GeoFirstDay, type GeoHours, type NumberOrStringOrDate } from '@dxtmisha/functional-basic';
/**
 * Reactive wrapper around `Datetime` synchronizing date refs with a working `Date` and exposing computed calendar fields.
 * @remarks Modifying `type` and `code` directly via `getDatetime()` will be reset. Methods returning `ComputedRef` instantiate on each call; cache them once.
 * @keywords datetime, reactive, calendar, date-ref, vue
 */
export declare class DatetimeRef {
    /** Initializes DatetimeRef with the supplied configuration. @keywords constructor, init, datetime */
    constructor(date: RefOrNormal<NumberOrStringOrDate>, type?: RefOrNormal<GeoDate>, code?: RefOrNormal<string>);
    /** Returns the original input date ref. @keywords get-item, source, ref */
    getItem(): Ref<NumberOrStringOrDate>;
    /** Returns the working Date ref synchronized with the base class. @keywords get-date, working-date */
    getDate(): Ref<Date>;
    /** Returns the mutable base utility for calendar operations. @keywords get-datetime, utility */
    getDatetime(): Datetime;
    /** Returns the locale clock format ('12' | '24'). @keywords get-hours-type, clock-format, 12h, 24h */
    getHoursType(): ComputedRef<GeoHours>;
    /** Returns the locale first weekday code (Sunday is 0). @keywords get-first-day-code, weekday, start-day */
    getFirstDayCode(): ComputedRef<GeoFirstDay>;
    /** Returns the full local year. @keywords get-year, local-year */
    getYear(): ComputedRef<number>;
    /** Returns the local month (1–12). @keywords get-month */
    getMonth(): ComputedRef<number>;
    /** Returns the local day of the month. @keywords get-day, date */
    getDay(): ComputedRef<number>;
    /** Returns the local hour (0–23). @keywords get-hour, time */
    getHour(): ComputedRef<number>;
    /** Returns local minutes (0–59). @keywords get-minute, time */
    getMinute(): ComputedRef<number>;
    /** Returns local seconds (0–59). @keywords get-second, time */
    getSecond(): ComputedRef<number>;
    /** Returns the number of days in the current month, including leap years. @keywords get-max-day, days-in-month */
    getMaxDay(): ComputedRef<number>;
    /** Returns localized date string formatted according to the locale and style options. @keywords locale, format, intl */
    locale(type?: GeoDate, styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions): ComputedRef<string>;
    /** Returns the standard representation for the current date type with optional timezone. @keywords standard, format, timezone */
    standard(timeZone?: boolean): ComputedRef<string>;
}