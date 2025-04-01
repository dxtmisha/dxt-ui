import { ComputedRef, Ref } from 'vue';
import { Datetime } from '../Datetime';
import { NumberOrStringOrDate } from '../../types/basicTypes';
import { RefOrNormal } from '../../types/refTypes';
import { GeoDate, GeoFirstDay, GeoHours } from '../../types/geoTypes';
/**
 * A class for working with dates.
 *
 * Класс для работы с датами.
 */
export declare class DatetimeRef {
    protected item: Ref<NumberOrStringOrDate>;
    protected type: Ref<GeoDate>;
    protected code: Ref<string>;
    protected date: Ref<Date>;
    protected datetime: Datetime;
    protected year: ComputedRef<number>;
    protected month: ComputedRef<number>;
    protected day: ComputedRef<number>;
    protected hour: ComputedRef<number>;
    protected minute: ComputedRef<number>;
    protected second: ComputedRef<number>;
    /**
     * Constructor
     * @param date date for processing. дата для обработки
     * @param type type of date format for output. тип формата даты вывода
     * @param code country and language code. код страны и языка
     */
    constructor(date: RefOrNormal<NumberOrStringOrDate>, type?: RefOrNormal<GeoDate>, code?: RefOrNormal<string>);
    /**
     * Returns the basic data for the date.
     *
     * Возвращает основные данные для даты.
     */
    getItem(): RefOrNormal<NumberOrStringOrDate>;
    /**
     * Returns a Date object.
     *
     * Возвращает объект Date.
     */
    getDate(): Ref<Date>;
    /**
     * Obtaining an object of the basic Datetime class.
     *
     * Получение объекта основного класса Datetime.
     */
    getDatetime(): Datetime;
    /**
     * Returns the format of hours.
     *
     * Возвращает формат часов.
     */
    getHoursType(): ComputedRef<GeoHours>;
    /**
     * Returns the code of the first day of the week.
     *
     * Возвращает код первого дня недели.
     */
    getFirstDayCode(): ComputedRef<GeoFirstDay>;
    /**
     * The method returns the year of the specified date according to local time.
     *
     * Метод возвращает год указанной даты по местному времени.
     */
    getYear(): ComputedRef<number>;
    /**
     * The method returns the month in the specified date according to local time,
     * as a zero-based value.
     *
     * Метод возвращает месяц указанной даты по местному времени, нумерация
     * месяцев начинается с нуля для первого месяца в году.
     */
    getMonth(): ComputedRef<number>;
    /**
     * The method returns the day of the month for the specified date according to local time.
     *
     * Метод возвращает день месяца указанной даты по местному времени.
     */
    getDay(): ComputedRef<number>;
    /**
     * The method returns the hour for the specified date, according to local time.
     *
     * Метод возвращает часы указанной даты по местному времени.
     */
    getHour(): ComputedRef<number>;
    /**
     * The method returns the minutes in the specified date according to local time.
     *
     * Метод возвращает минуты указанной даты по местному времени.
     */
    getMinute(): ComputedRef<number>;
    /**
     * The method returns the seconds in the specified date according to local time.
     *
     * Метод возвращает секунды указанной даты по местному времени.
     */
    getSecond(): ComputedRef<number>;
    /**
     * Returns the last day of the week.
     *
     * Возвращает последний день недели.
     */
    getMaxDay(): ComputedRef<number>;
    /**
     * Enables language-sensitive date and time formatting.
     *
     * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
     * @param type type of date format for output. тип формата даты вывода
     * @param styleOptions the representation of the month. представление месяца
     */
    locale(type?: GeoDate, styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions): ComputedRef<string>;
    /**
     * Output of standard data.
     *
     * Вывод стандартных данных.
     * @param timeZone add time zone. добавить временную зону
     */
    standard(timeZone?: boolean): ComputedRef<string>;
}
