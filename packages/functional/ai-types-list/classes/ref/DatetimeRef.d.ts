// md5:f6a91479dc38dd65dc7aef11f81a0df5
import { type ComputedRef, type Ref } from 'vue';
import { Datetime, type GeoDate, type GeoFirstDay, type GeoHours, type NumberOrStringOrDate } from '@dxtmisha/functional-basic';
import type { RefOrNormal } from '../../types/refTypes';
/**
 * Reactive wrapper around `Datetime`. It synchronizes input date refs with a working `Date`, exposes computed calendar fields, and refreshes those fields after mutations through `getDatetime()`.
 *
 * Реактивная обёртка над `Datetime`. Синхронизирует входную дату с рабочим `Date`, предоставляет вычисляемые поля календаря и обновляет их после изменений через `getDatetime()`.
 */
export declare class DatetimeRef {
    /** Original input date ref / Исходная ссылка на входную дату */
    protected item: Ref<NumberOrStringOrDate>;
    /** Output format ref / Ссылка на формат вывода */
    protected type: Ref<GeoDate>;
    /** Locale code ref / Ссылка на код локали */
    protected code: Ref<string>;
    /** Working Date ref / Ссылка на рабочий Date */
    protected date: Ref<Date>;
    /** Mutable calendar utility / Изменяемая календарная утилита */
    protected datetime: Datetime;
    /** Local year / Год по местному времени */
    protected year: Ref<number, number>;
    /** Local month from 1 to 12 / Месяц по местному времени от 1 до 12 */
    protected month: Ref<number, number>;
    /** Local day of month / День месяца по местному времени */
    protected day: Ref<number, number>;
    /** Local hour / Час по местному времени */
    protected hour: Ref<number, number>;
    /** Local minute / Минута по местному времени */
    protected minute: Ref<number, number>;
    /** Local second / Секунда по местному времени */
    protected second: Ref<number, number>;
    /**
     * Initializes DatetimeRef with the supplied configuration.
     *
     * Инициализирует DatetimeRef с переданными настройками.
     * @param date Required input date, timestamp or date string. / Обязательная дата, временная метка либо строка даты.
     * @param type Date output format; the constructor defaults to date. / Формат вывода даты; конструктор использует date по умолчанию.
     * @param code Locale, country or language code; a ref is supported where declared. / Код локали, страны или языка; ссылка поддерживается согласно сигнатуре.
     */
    constructor(date: RefOrNormal<NumberOrStringOrDate>, type?: RefOrNormal<GeoDate>, code?: RefOrNormal<string>);
    /**
     * Returns the original input ref.
     *
     * Возвращает исходную входную ссылку.
     * @returns Original input date ref. / Исходная ссылка на входную дату.
     */
    getItem(): Ref<NumberOrStringOrDate>;
    /**
     * Returns the working Date ref synchronized with the base class.
     *
     * Возвращает ссылку на рабочий Date, синхронизированную с базовым классом.
     * @returns Working Date ref. / Ссылка на рабочий Date.
     */
    getDate(): Ref<Date>;
    /**
     * Returns the mutable base utility for calendar operations.
     *
     * Возвращает изменяемую базовую утилиту для календарных операций.
     * @returns Mutable Datetime utility synchronized with this wrapper. / Изменяемая утилита Datetime, синхронизированная с обёрткой.
     */
    getDatetime(): Datetime;
    /**
     * Returns the locale clock format, `12` or `24` as a string.
     *
     * Возвращает формат часов локали: строку `12` или `24`.
     * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
     */
    getHoursType(): ComputedRef<GeoHours>;
    /**
     * Returns the locale first weekday code: Sunday is 0.
     *
     * Возвращает код первого дня недели локали: воскресенье — 0.
     * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
     */
    getFirstDayCode(): ComputedRef<GeoFirstDay>;
    /**
     * Returns the full local year.
     *
     * Возвращает полный год по местному времени.
     * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
     */
    getYear(): ComputedRef<number>;
    /**
     * Returns the local month, numbered 1–12.
     *
     * Возвращает месяц по местному времени, от 1 до 12.
     * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
     */
    getMonth(): ComputedRef<number>;
    /**
     * Returns the local day of the month.
     *
     * Возвращает день месяца по местному времени.
     * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
     */
    getDay(): ComputedRef<number>;
    /**
     * Returns the local hour, 0–23.
     *
     * Возвращает час по местному времени, от 0 до 23.
     * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
     */
    getHour(): ComputedRef<number>;
    /**
     * Returns local minutes, 0–59.
     *
     * Возвращает минуты по местному времени, от 0 до 59.
     * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
     */
    getMinute(): ComputedRef<number>;
    /**
     * Returns local seconds, 0–59.
     *
     * Возвращает секунды по местному времени, от 0 до 59.
     * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
     */
    getSecond(): ComputedRef<number>;
    /**
     * Returns the number of days in the current month, including leap years.
     *
     * Возвращает число дней текущего месяца с учётом високосного года.
     * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
     */
    getMaxDay(): ComputedRef<number>;
    /**
     * Returns localized output using the current format type unless an explicit type is supplied.
     *
     * Возвращает локализованный вывод текущего типа формата, если тип не указан явно.
     * @param type Date output format; the constructor defaults to date. / Формат вывода даты; конструктор использует date по умолчанию.
     * @param styleOptions Intl style or formatting options. / Стиль Intl либо параметры форматирования.
     * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
     */
    locale(type?: GeoDate, styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions): ComputedRef<string>;
    /**
     * Returns the base utility’s standard representation for the current type. `timeZone` controls timezone output where that format includes time.
     *
     * Возвращает стандартное представление базовой утилиты для текущего типа. `timeZone` управляет выводом часового пояса в форматах со временем.
     * @param timeZone Whether to include timezone information; defaults to true. / Выводить ли часовой пояс; по умолчанию true.
     * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
     */
    standard(timeZone?: boolean): ComputedRef<string>;
    /**
     * Updates all reactive date values.
     *
     * Обновляет все реактивные значения даты.
     * @returns current instance / текущий экземпляр
     */
    protected updateDate(): this;
}
