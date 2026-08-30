// md5:52c876434adccf0803dfe5429053d7a5 true
import { type ComputedRef, type Ref } from 'vue';
import { Datetime, type GeoDate, type GeoFirstDay, type GeoHours, type NumberOrStringOrDate } from '@dxtmisha/functional-basic';

/** Reactive wrapper for date operations and localization. @keywords datetime date time reactive vue */
export declare class DatetimeRef {
    /** Initializes a new DatetimeRef instance. @keywords constructor datetime init */
    constructor(date: RefOrNormal<NumberOrStringOrDate>, type?: RefOrNormal<GeoDate>, code?: RefOrNormal<string>);
    /** Returns the raw reactive date value. @keywords item value raw */
    getItem(): Ref<NumberOrStringOrDate>;
    /** Returns the reactive Date object. @keywords date object */
    getDate(): Ref<Date>;
    /** Returns the underlying basic Datetime instance. @keywords datetime instance base */
    getDatetime(): Datetime;
    /** Returns the reactive hour format type. @keywords hours format type 12h 24h */
    getHoursType(): ComputedRef<GeoHours>;
    /** Returns the reactive first day of the week code. @keywords first day week code */
    getFirstDayCode(): ComputedRef<GeoFirstDay>;
    /** Returns the reactive year according to local time. @keywords year local */
    getYear(): ComputedRef<number>;
    /** Returns the reactive zero-based month index according to local time. @keywords month index local */
    getMonth(): ComputedRef<number>;
    /** Returns the reactive day of the month according to local time. @keywords day month local */
    getDay(): ComputedRef<number>;
    /** Returns the reactive hour according to local time. @keywords hour local */
    getHour(): ComputedRef<number>;
    /** Returns the reactive minutes according to local time. @keywords minute local */
    getMinute(): ComputedRef<number>;
    /** Returns the reactive seconds according to local time. @keywords second local */
    getSecond(): ComputedRef<number>;
    /** Returns the reactive maximum number of days in the month. @keywords max day month days */
    getMaxDay(): ComputedRef<number>;
    /** Returns localized date/time string based on format and style options. @keywords locale format intl */
    locale(type?: GeoDate, styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions): ComputedRef<string>;
    /** Returns standard formatted date string with optional time zone. @keywords standard format timezone */
    standard(timeZone?: boolean): ComputedRef<string>;
}