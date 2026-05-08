import { GeoIntl } from './GeoIntl';
import { NumberOrStringOrDate } from '../types/basicTypes';
import { GeoDate, GeoFirstDay, GeoHours, GeoTimeZoneStyle } from '../types/geoTypes';
/**
 * A class for working with dates.
 *
 * Класс для работы с датами.
 *
 * @remarks
 * Creating a `Datetime` instance without a specific date (using the current time)
 * for rendering in SSR may lead to hydration mismatches because the time or time zone
 * on the server may differ from the time on the client.
 *
 * Создание экземпляра `Datetime` без указания конкретной даты (использование текущего времени)
 * для отрисовки в SSR может привести к ошибкам гидратации, так как время или часовой пояс
 * сервера могут отличаться от времени на стороне клиента.
 */
export declare class Datetime {
    protected type: GeoDate;
    protected code: string;
    protected date: Date;
    protected hour24: boolean;
    protected watch?: (date: Date, type: GeoDate, hour24: boolean) => void;
    /**
     * Constructor
     * @param date date for processing/ дата для обработки
     * @param type type of date format for output/ тип формата даты вывода
     * @param code country and language code/ код страны и языка
     */
    constructor(date?: NumberOrStringOrDate, type?: GeoDate, code?: string);
    /**
     * Returns an object for working with formatting.
     *
     * Возвращает объект для работы с форматированием.
     * @returns GeoIntl formatting object/ объект форматирования
     */
    getIntl(): GeoIntl;
    /**
     * Returns a Date object.
     *
     * Возвращает объект Date.
     * @returns Date date object/ объект даты
     */
    getDate(): Date;
    /**
     * Returns the type of data output.
     *
     * Возвращает тип вывода данных.
     * @returns GeoDate output type/ тип вывода
     */
    getType(): GeoDate;
    /**
     * Returns the format of hours.
     *
     * Возвращает формат часов.
     * @returns GeoHours hour format/ формат часов
     */
    getHoursType(): GeoHours;
    /**
     * Whether to use 24-hour time format.
     *
     * Использовать ли 24-часовой формат времени.
     * @returns boolean 24-hour format flag/ флаг 24-часового формата
     */
    getHour24(): boolean;
    /**
     * The method returns the difference, in minutes, between
     * a date as evaluated in the UTC time zone, and the same date as evaluated
     * in the local time zone.
     *
     * Метод возвращает смещение часового пояса относительно часового пояса UTC
     * в минутах для текущей локали.
     * @returns number time zone offset in minutes/ смещение часового пояса в минутах
     */
    getTimeZoneOffset(): number;
    /**
     * Returns the time zone as a string.
     *
     * Возвращает временную зону в виде строки.
     * @param style the style of the returned data/ стиль возвращаемых данных
     * @returns string time zone string/ строка временной зоны
     */
    getTimeZone(style?: GeoTimeZoneStyle): string;
    /**
     * Returns the code of the first day of the week.
     *
     * Возвращает код первого дня недели.
     * @returns GeoFirstDay first day code/ код первого дня недели
     */
    getFirstDayCode(): GeoFirstDay;
    /**
     * The method returns the year of the specified date according to local time.
     *
     * Метод возвращает год указанной даты по местному времени.
     * @returns year / год
     */
    getYear(): number;
    /**
     * The method returns the month in the specified date according to local time,
     * as a one-based value (1-12).
     *
     * Метод возвращает месяц указанной даты по местному времени, нумерация
     * месяцев начинается с единицы (1-12).
     * @returns month (1-12) / месяц (1-12)
     */
    getMonth(): number;
    /**
     * The method returns the day of the month for the specified date according to local time.
     *
     * Метод возвращает день месяца указанной даты по местному времени
     * @returns day of month (1-31) / день месяца (1-31)
     */
    getDay(): number;
    /**
     * The method returns the hour for the specified date, according to local time.
     *
     * Метод возвращает часы указанной даты по местному времени.
     * @returns hours (0-23) / часы (0-23)
     */
    getHour(): number;
    /**
     * The method returns the minutes in the specified date according to local time.
     *
     * Метод возвращает минуты указанной даты по местному времени.
     * @returns minutes (0-59) / минуты (0-59)
     */
    getMinute(): number;
    /**
     * The method returns the seconds in the specified date according to local time.
     *
     * Метод возвращает секунды указанной даты по местному времени.
     * @returns seconds (0-59) / секунды (0-59)
     */
    getSecond(): number;
    /**
     * Returns the last day of the month as a number.
     *
     * Возвращает последний день месяца в виде числа.
     * @returns last day of month (28-31) / последний день месяца (28-31)
     */
    getMaxDay(): number;
    /**
     * Enables language-sensitive date and time formatting.
     *
     * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
     * @param type type of date format for output/ тип формата даты вывода
     * @param styleOptions the representation of the month/ представление месяца
     * @returns string formatted date string/ отформатированная строка даты
     */
    locale(type?: GeoDate, styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions): string;
    /**
     * Returns the formatted year.
     *
     * Возвращает отформатированный год.
     * @param style the representation of the year/ представление года
     * @returns string formatted year/ отформатированный год
     */
    localeYear(style?: Intl.DateTimeFormatOptions['year']): string;
    /**
     * Returns the formatted month.
     *
     * Возвращает отформатированный месяц.
     * @param style the representation of the month/ представление месяца
     * @returns string formatted month/ отформатированный месяц
     */
    localeMonth(style?: Intl.DateTimeFormatOptions['month']): string;
    /**
     * Returns the formatted day.
     *
     * Возвращает отформатированный день.
     * @param style the representation of the day/ представление дня
     * @returns string formatted day/ отформатированный день
     */
    localeDay(style?: Intl.DateTimeFormatOptions['day']): string;
    /**
     * Returns the formatted hour.
     *
     * Возвращает отформатированный час.
     * @param style the representation of the hour/ представление часа
     * @returns string formatted hour/ отформатированный час
     */
    localeHour(style?: Intl.DateTimeFormatOptions['hour']): string;
    /**
     * Returns the formatted minute.
     *
     * Возвращает отформатированную минуту.
     * @param style the representation of the minute/ представление минуты
     * @returns string formatted minute/ отформатированная минута
     */
    localeMinute(style?: Intl.DateTimeFormatOptions['minute']): string;
    /**
     * Returns the formatted second.
     *
     * Возвращает отформатированную секунду.
     * @param style the representation of the second/ представление секунды
     * @returns string formatted second/ отформатированная секунда
     */
    localeSecond(style?: Intl.DateTimeFormatOptions['second']): string;
    /**
     * Output of standard data.
     *
     * Вывод стандартных данных.
     * @param timeZone add time zone (default: true) / добавить временную зону (по умолчанию: true)
     * @returns standard format string / строка в стандартном формате
     */
    standard(timeZone?: boolean): string;
    /**
     * Change the date completely.
     *
     * Изменять полностью дату.
     * @param value an integer value representing the number /
     * целочисленное значение, представляющее число
     * @returns this instance / текущий экземпляр
     */
    setDate(value: NumberOrStringOrDate): this;
    /**
     * Change the type of data output.
     *
     * Изменить тип вывода данных.
     * @param value type of output / тип вывод
     * @returns this instance / текущий экземпляр
     */
    setType(value: GeoDate): this;
    /**
     * Whether to use a 24-hour time format.
     *
     * Использовать ли 24-часовой формат времени.
     * @param value If true, output the 24-hour time format /
     * если true, выводить 24-часовой формат времени
     * @returns this instance / текущий экземпляр
     */
    setHour24(value: boolean): this;
    /**
     * To change the location.
     *
     * Изменить местоположение.
     * @param code country and language code / код страны и языка
     * @returns this instance / текущий экземпляр
     */
    setCode(code: string): this;
    /**
     * The function is called when the data is updated.
     *
     * Функция вызывается при обновлении данных.
     * @param watch the function calls / функция вызывает
     * @returns this instance / текущий экземпляр
     */
    setWatch(watch: (date: Date, type: GeoDate, hour24: boolean) => void): this;
    /**
     * The method sets the full year for a specified date according to local time.
     *
     * Метод устанавливает полный год указанной даты по местному времени.
     * @param value value / значения
     * @returns this instance / текущий экземпляр
     */
    setYear(value: number): this;
    /**
     * The method sets the month for a specified date according to the currently set year.
     *
     * Метод устанавливает месяц указанной даты по местному времени.
     * @param value month (1-12) / месяц (1-12)
     * @returns this instance / текущий экземпляр
     */
    setMonth(value: number): this;
    /**
     * The method changes the day of the month of a given Date instance, based on local time.
     *
     * Метод устанавливает день месяца указанной даты по местному времени.
     * @param value value / значения
     * @returns this instance / текущий экземпляр
     */
    setDay(value: number): this;
    /**
     * The method sets the hours for a specified date according to local time.
     *
     * Метод устанавливает часы указанной даты по местному времени.
     * @param value value / значения
     * @returns this instance / текущий экземпляр
     */
    setHour(value: number): this;
    /**
     * The method sets the minutes for a specified date according to local time
     *
     * Метод устанавливает минуты указанной даты по местному времени
     * @param value value / значения
     * @returns this instance / текущий экземпляр
     */
    setMinute(value: number): this;
    /**
     * The method sets the seconds for a specified date according to local time.
     *
     * Метод устанавливает секунды указанной даты по местному времени.
     * @param value value / значения
     * @returns this instance / текущий экземпляр
     */
    setSecond(value: number): this;
    /**
     * Shift the date by a given value in years.
     *
     * Сдвинуть дату на заданное значение в годах.
     * @param value values for moving / значения для перемещения
     * @returns this instance / текущий экземпляр
     */
    moveByYear(value: number): this;
    /**
     * Shift the date by a given value in months.
     *
     * Сдвинуть дату на заданное значение в месяцах.
     * @param value values for moving (in months) / значения для перемещения (в месяцах)
     * @returns this instance / текущий экземпляр
     */
    moveByMonth(value: number): this;
    /**
     * Shift the date by a given value in days.
     *
     * Сдвинуть дату на заданное значение в днях.
     * @param value values for moving / значения для перемещения
     * @returns this instance / текущий экземпляр
     */
    moveByDay(value: number): this;
    /**
     * Shift the date by a given value in hours.
     *
     * Сдвинуть дату на заданное значение в часах.
     * @param value values for moving / значения для перемещения
     * @returns this instance / текущий экземпляр
     */
    moveByHour(value: number): this;
    /**
     * Shift the date by a given value in minutes.
     *
     * Сдвинуть дату на заданное значение в минутах.
     * @param value values for moving / значения для перемещения
     * @returns this instance / текущий экземпляр
     */
    moveByMinute(value: number): this;
    /**
     * Shift the date by a given value in seconds.
     *
     * Сдвинуть дату на заданное значение в секундах.
     * @param value values for moving / значения для перемещения
     * @returns this instance / текущий экземпляр
     */
    moveBySecond(value: number): this;
    /**
     * Sets the date to January (first month).
     *
     * Устанавливает дату на январь (первый месяц).
     * @returns this instance / текущий экземпляр
     */
    moveMonthFirst(): this;
    /**
     * Sets the date to December (last month).
     *
     * Устанавливает дату на декабрь (последний месяц).
     * @returns this instance / текущий экземпляр
     */
    moveMonthLast(): this;
    /**
     * Translate to the first day of the next month.
     *
     * Переводить на первый день следующего месяца.
     * @returns this instance / текущий экземпляр
     */
    moveMonthNext(): this;
    /**
     * Translate to the first day of the previous month.
     *
     * Переводить на первый день предыдущего месяца.
     * @returns this instance / текущий экземпляр
     */
    moveMonthPrevious(): this;
    /**
     * Translate to the first day of the week.
     *
     * Переводить на первый день недели.
     * @returns this instance / текущий экземпляр
     */
    moveWeekdayFirst(): this;
    /**
     * Translate to the last day of the week.
     *
     * Переводить на последний день недели.
     * @returns this instance / текущий экземпляр
     */
    moveWeekdayLast(): this;
    /**
     * Translate to the first day of the first week of the month.
     *
     * Переводить на первый день первой недели месяца.
     * @returns this instance / текущий экземпляр
     */
    moveWeekdayFirstByMonth(): this;
    /**
     * Translate to the first day of the first full week of the following month.
     *
     * Переводить на первый день первой полной недели следующего месяца.
     * @returns this instance / текущий экземпляр
     */
    moveWeekdayLastByMonth(): this;
    /**
     * Translate to the next week.
     *
     * Переводить на следующую неделю.
     * @returns this instance / текущий экземпляр
     */
    moveWeekdayNext(): this;
    /**
     * Translate to the previous week.
     *
     * Переводить на предыдущую неделю.
     * @returns this instance / текущий экземпляр
     */
    moveWeekdayPrevious(): this;
    /**
     * Translate to the first day of the month.
     *
     * Переводить на первый день месяца.
     * @returns this instance / текущий экземпляр
     */
    moveDayFirst(): this;
    /**
     * Translate to the last day of the month.
     *
     * Переводить на последний день месяца.
     * @returns this instance / текущий экземпляр
     */
    moveDayLast(): this;
    /**
     * Translate to the next day.
     *
     * Переводить на следующий день.
     * @returns this instance / текущий экземпляр
     */
    moveDayNext(): this;
    /**
     * Translate to the previous day.
     *
     * Переводить на предыдущий день.
     * @returns this instance / текущий экземпляр
     */
    moveDayPrevious(): this;
    /**
     * Clone the Date object.
     *
     * Клонировать объект Date.
     * @returns Date cloned Date object/ клонированный объект Date
     */
    clone(): Date;
    /**
     * Clone the GeoDate object.
     *
     * Клонировать объект GeoDate.
     * @returns Datetime cloned Datetime object/ клонированный объект Datetime
     */
    cloneClass(): Datetime;
    /**
     * Clone the Datetime object and set the month to January.
     *
     * Клонировать объект Datetime и установить месяц на январь.
     * @returns Datetime cloned Datetime with January month/ клонированный Datetime с январем
     */
    cloneMonthFirst(): Datetime;
    /**
     * Clone the GeoDate object and move the month to the end of the year.
     *
     * Клонировать объект GeoDate и перевести месяц на конец года.
     * @returns Datetime cloned Datetime with December month/ клонированный Datetime с декабрем
     */
    cloneMonthLast(): Datetime;
    /**
     * Clone the GeoDate object and transfer it one month ahead.
     *
     * Клонировать объект GeoDate и перевести на 1 месяц вперед.
     * @returns Datetime cloned Datetime with next month/ клонированный Datetime со следующим месяцем
     */
    cloneMonthNext(): Datetime;
    /**
     * Clone the GeoDate object and transfer it one month back.
     *
     * Клонировать объект GeoDate и перевести на 1 месяц назад.
     * @returns Datetime cloned Datetime with previous month/ клонированный Datetime с предыдущим месяцем
     */
    cloneMonthPrevious(): Datetime;
    /**
     * Returns the first day of the week according to the current date.
     *
     * Возвращает первый день недели по текущей дате.
     * @returns Datetime cloned Datetime with first day of week/ клонированный Datetime с первым днем недели
     */
    cloneWeekdayFirst(): Datetime;
    /**
     * Returns the last day of the week according to the current date.
     *
     * Возвращает последний день недели по текущей дате.
     * @returns Datetime cloned Datetime with last day of week/ клонированный Datetime с последним днем недели
     */
    cloneWeekdayLast(): Datetime;
    /**
     * Returns the first day of the week according to the current month.
     *
     * Возвращает первый день недели по текущему месяцу.
     * @returns Datetime cloned Datetime with first day of week in month/ клонированный Datetime с первым днем недели в месяце
     */
    cloneWeekdayFirstByMonth(): Datetime;
    /**
     * Returns the last day of the week according to the current month.
     *
     * Возвращает последний день недели по текущему месяцу.
     * @returns Datetime cloned Datetime with last day of week in month/ клонированный Datetime с последним днем недели в месяце
     */
    cloneWeekdayLastByMonth(): Datetime;
    /**
     * Returns the next week according to the current date.
     *
     * Возвращает следующую неделю по текущей дате.
     * @returns Datetime cloned Datetime with next week/ клонированный Datetime со следующей неделей
     */
    cloneWeekdayNext(): Datetime;
    /**
     * Returns the previous week according to the current date.
     *
     * Возвращает предыдущую неделю по текущей дате.
     * @returns Datetime cloned Datetime with previous week/ клонированный Datetime с предыдущей неделей
     */
    cloneWeekdayPrevious(): Datetime;
    /**
     * Clone the GeoDate object and move the day to the beginning of the month.
     *
     * Клонировать объект GeoDate и перевести день на начало месяца.
     * @returns Datetime cloned Datetime with first day of month/ клонированный Datetime с первым днем месяца
     */
    cloneDayFirst(): Datetime;
    /**
     * Clone the GeoDate object and move the day to the end of the month.
     *
     * Клонировать объект GeoDate и перевести день на конец месяца.
     * @returns Datetime cloned Datetime with last day of month/ клонированный Datetime с последним днем месяца
     */
    cloneDayLast(): Datetime;
    /**
     * Clone the GeoDate object and move by 1 day.
     *
     * Клонировать объект GeoDate и перевести на 1 день.
     * @returns Datetime cloned Datetime with next day/ клонированный Datetime со следующим днем
     */
    cloneDayNext(): Datetime;
    /**
     * Clone the GeoDate object and go back by 1 day.
     *
     * Клонировать объект GeoDate и вернуться на 1 день.
     * @returns Datetime cloned Datetime with previous day/ клонированный Datetime с предыдущим днем
     */
    cloneDayPrevious(): Datetime;
    /**
     * Returns the time zone hour format.
     *
     * Возвращает часовой формат временной зоны.
     * @param hour hour/ час
     * @returns string formatted hour/ форматированный час
     */
    protected toTimeZoneHourFormat(hour: number): string;
    /**
     * Updating all values.
     *
     * Обновление всех значений.
     * @returns this instance/ текущий экземпляр
     */
    protected update(): this;
}
