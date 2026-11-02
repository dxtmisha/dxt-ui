import { inArray } from '../functions/inArray'
import { toDate } from '../functions/toDate'

import { ErrorCenter } from './ErrorCenter'
import { Geo } from './Geo'
import { GeoIntl } from './GeoIntl'

import { type NumberOrStringOrDate } from '../types/basicTypes'
import {
  type GeoDate,
  type GeoFirstDay,
  type GeoHours,
  type GeoTimeZoneStyle
} from '../types/geoTypes'

/** Types that include the year in standard format / Типы, включающие год в стандартном формате */
const STANDARD_YEAR_TYPES: GeoDate[] = ['full', 'datetime', 'date', 'year-month', 'year']

/** Types that include the month in standard format / Типы, включающие месяц в стандартном формате */
const STANDARD_MONTH_TYPES: GeoDate[] = ['full', 'datetime', 'date', 'year-month', 'month', 'day-month']

/** Types that include the day in standard format / Типы, включающие день в стандартном формате */
const STANDARD_DAY_TYPES: GeoDate[] = ['full', 'datetime', 'date', 'day', 'day-month']

/** Types that include the hour in standard format / Типы, включающие час в стандартном формате */
const STANDARD_HOUR_TYPES: GeoDate[] = ['full', 'datetime', 'time', 'hour-minute', 'hour']

/** Types that include the minute in standard format / Типы, включающие минуту в стандартном формате */
const STANDARD_MINUTE_TYPES: GeoDate[] = ['full', 'datetime', 'time', 'hour-minute', 'minute']

/** Types that include the second in standard format / Типы, включающие секунду в стандартном формате */
const STANDARD_SECOND_TYPES: GeoDate[] = ['full', 'datetime', 'time', 'second']

/** Types that include optional timezone in standard format / Типы, включающие опциональную временную зону в стандартном формате */
const STANDARD_TIMEZONE_TYPES: GeoDate[] = ['full', 'datetime', 'time']

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
export class Datetime {
  /** Date object / Объект даты */
  protected date: Date
  /** Whether 24-hour format is used / Использовать ли 24-часовой формат */
  protected hour24 = false
  /** Callback on date update / Колбэк при изменении даты */
  protected watch?: (date: Date, type: GeoDate, hour24: boolean) => void
  /** Flag for blocking watch callback execution / Флаг блокировки вызова функции обратного вызова watch */
  protected block = false

  /**
   * Constructor.
   *
   * Конструктор.
   * @param date date for processing / дата для обработки
   * @param type type of date format for output / тип формата даты вывода
   * @param code country and language code / код страны и языка
   */
  constructor(
    date?: NumberOrStringOrDate,
    protected type: GeoDate = 'date',
    protected code: string = Geo.getLocation()
  ) {
    this.date = toDate(date)

    if (isNaN(this.date.getTime())) {
      ErrorCenter.on({
        group: 'intl',
        code: 'invalid'
      })
    }
  }

  /**
   * Returns an object for working with formatting.
   *
   * Возвращает объект для работы с форматированием.
   * @returns GeoIntl formatting object / объект форматирования
   */
  getIntl(): GeoIntl {
    return GeoIntl.getInstance(this.code)
  }

  /**
   * Returns a Date object.
   *
   * Возвращает объект Date.
   * @returns Date date object / объект даты
   */
  getDate(): Date {
    return this.date
  }

  /**
   * Returns the type of data output.
   *
   * Возвращает тип вывода данных.
   * @returns GeoDate output type / тип вывода
   */
  getType(): GeoDate {
    return this.type
  }

  /**
   * Returns the format of hours.
   *
   * Возвращает формат часов.
   * @returns GeoHours hour format / формат часов
   */
  getHoursType(): GeoHours {
    const date = this.clone()
    date.setHours(23)

    return date.toLocaleTimeString(this.getIntl().getLocation(), { hour: '2-digit' })
      .includes('23')
      ? '24'
      : '12'
  }

  /**
   * Whether to use 24-hour time format.
   *
   * Использовать ли 24-часовой формат времени.
   * @returns boolean 24-hour format flag / флаг 24-часового формата
   */
  getHour24(): boolean {
    return this.hour24
  }

  /**
   * The method returns the difference, in minutes, between
   * a date as evaluated in the UTC time zone, and the same date as evaluated
   * in the local time zone.
   *
   * Метод возвращает смещение часового пояса относительно часового пояса UTC
   * в минутах для текущей локали.
   * @returns number time zone offset in minutes / смещение часового пояса в минутах
   */
  getTimeZoneOffset(): number {
    return this.date.getTimezoneOffset()
  }

  /**
   * Returns the time zone as a string.
   *
   * Возвращает временную зону в виде строки.
   * @param style the style of the returned data / стиль возвращаемых данных
   * @returns string time zone string / строка временной зоны
   */
  getTimeZone(style?: GeoTimeZoneStyle): string {
    const offset = this.getTimeZoneOffset()

    if (style === 'minute') {
      return offset.toString()
    }

    const hour = offset / 60 * -1

    if (style === 'hour') {
      return this.getIntl()
        .number(Math.trunc(hour), { signDisplay: 'always' })
    }

    const numberHour = this.toTimeZoneHourFormat(hour)
    const numberMinute = Math.abs(offset % 60).toString().padStart(2, '0')

    if (style === 'RFC') {
      return `${numberHour}${numberMinute}`
    }

    return `${numberHour}:${numberMinute}`
  }

  /**
   * Returns the code of the first day of the week.
   *
   * Возвращает код первого дня недели.
   * @returns GeoFirstDay first day code / код первого дня недели
   */
  getFirstDayCode(): GeoFirstDay {
    const value = this.getIntl().getFirstDay()

    if (value === 'Sa') {
      return 6
    } else if (value === 'Su') {
      return 0
    } else {
      return 1
    }
  }

  /**
   * The method returns the year of the specified date according to local time.
   *
   * Метод возвращает год указанной даты по местному времени.
   * @returns year / год
   */
  getYear(): number {
    return this.date.getFullYear()
  }

  /**
   * The method returns the month in the specified date according to local time,
   * as a one-based value (1-12).
   *
   * Метод возвращает месяц указанной даты по местному времени, нумерация
   * месяцев начинается с единицы (1-12).
   * @returns month (1-12) / месяц (1-12)
   */
  getMonth(): number {
    return this.date.getMonth() + 1
  }

  /**
   * The method returns the day of the month for the specified date according to local time.
   *
   * Метод возвращает день месяца указанной даты по местному времени.
   * @returns day of month (1-31) / день месяца (1-31)
   */
  getDay(): number {
    return this.date.getDate()
  }

  /**
   * The method returns the day of the week for the specified date according to local time.
   *
   * Метод возвращает день недели указанной даты по местному времени.
   * @returns day of week (0-6) / день недели (0-6)
   */
  getWeekday(): number {
    return this.date.getDay()
  }

  /**
   * The method returns the hour for the specified date, according to local time.
   *
   * Метод возвращает часы указанной даты по местному времени.
   * @returns hours (0-23) / часы (0-23)
   */
  getHour(): number {
    return this.date.getHours()
  }

  /**
   * The method returns the minutes in the specified date according to local time.
   *
   * Метод возвращает минуты указанной даты по местному времени.
   * @returns minutes (0-59) / минуты (0-59)
   */
  getMinute(): number {
    return this.date.getMinutes()
  }

  /**
   * The method returns the seconds in the specified date according to local time.
   *
   * Метод возвращает секунды указанной даты по местному времени.
   * @returns seconds (0-59) / секунды (0-59)
   */
  getSecond(): number {
    return this.date.getSeconds()
  }

  /**
   * Returns the last day of the month as a number.
   *
   * Возвращает последний день месяца в виде числа.
   * @returns last day of month (28-31) / последний день месяца (28-31)
   */
  getMaxDay(): number {
    return new Date(
      this.date.getFullYear(),
      this.date.getMonth() + 1,
      0
    ).getDate()
  }

  /**
   * Changes the date completely.
   *
   * Полностью изменяет дату.
   * @param value date for processing / дата для обработки
   * @returns this instance / текущий экземпляр
   */
  setDate(value?: NumberOrStringOrDate): this {
    this.date = toDate(value)

    if (isNaN(this.date.getTime())) {
      ErrorCenter.on({
        group: 'intl',
        code: 'invalid'
      })
    }

    this.update()

    return this
  }

  /**
   * Change the type of data output.
   *
   * Изменить тип вывода данных.
   * @param value type of output / тип вывода
   * @returns this instance / текущий экземпляр
   */
  setType(value: GeoDate): this {
    this.type = value
    this.update()

    return this
  }

  /**
   * Whether to use a 24-hour time format.
   *
   * Использовать ли 24-часовой формат времени.
   * @param value If true, output the 24-hour time format / если true, выводить 24-часовой формат времени
   * @returns this instance / текущий экземпляр
   */
  setHour24(value: boolean): this {
    this.hour24 = value
    this.update()

    return this
  }

  /**
   * Changes the location and notifies the watcher.
   *
   * Изменяет местоположение и уведомляет наблюдателя.
   * @param code country and language code / код страны и языка
   * @returns this instance / текущий экземпляр
   */
  setCode(code: string = Geo.getLocation()): this {
    this.code = code
    this.update()

    return this
  }

  /**
   * The function is called when the data is updated.
   *
   * Функция вызывается при обновлении данных.
   * @param watch callback function on date update / функция обратного вызова при обновлении даты
   * @returns this instance / текущий экземпляр
   */
  setWatch(watch?: (date: Date, type: GeoDate, hour24: boolean) => void): this {
    this.watch = watch
    return this
  }

  /**
   * The method sets the full year for a specified date according to local time.
   * Clamps the day to the maximum number of days in the current month of the target year to prevent overflow.
   *
   * Метод устанавливает полный год указанной даты по местному времени.
   * Ограничивает день максимальным количеством дней в текущем месяце целевого года для предотвращения переполнения.
   * @param value value / значение
   * @returns this instance / текущий экземпляр
   */
  setYear(value: number): this {
    const currentMonth = this.date.getMonth()
    const currentDay = this.date.getDate()
    const maxDay = new Date(value, currentMonth + 1, 0).getDate()

    this.date.setFullYear(value, currentMonth, Math.min(currentDay, maxDay))
    this.update()

    return this
  }

  /**
   * The method sets the month for a specified date according to the currently set year.
   * Clamps the day to the maximum number of days in the target month to prevent overflow.
   *
   * Метод устанавливает месяц указанной даты по местному времени.
   * Ограничивает день максимальным количеством дней в целевом месяце для предотвращения переполнения.
   * @param value month (1-12) / месяц (1-12)
   * @returns this instance / текущий экземпляр
   */
  setMonth(value: number): this {
    const currentDay = this.date.getDate()
    const targetMonth = value - 1
    const targetYear = this.date.getFullYear()
    const maxDay = new Date(targetYear, targetMonth + 1, 0).getDate()

    this.date.setMonth(targetMonth, Math.min(currentDay, maxDay))
    this.update()

    return this
  }

  /**
   * The method changes the day of the month of a given Date instance, based on local time.
   *
   * Метод устанавливает день месяца указанной даты по местному времени.
   * @param value value / значение
   * @returns this instance / текущий экземпляр
   */
  setDay(value: number): this {
    this.date.setDate(value)
    this.update()

    return this
  }

  /**
   * The method sets the hours for a specified date according to local time.
   *
   * Метод устанавливает часы указанной даты по местному времени.
   * @param value value / значение
   * @returns this instance / текущий экземпляр
   */
  setHour(value: number): this {
    this.date.setHours(value)
    this.update()

    return this
  }

  /**
   * The method sets the minutes for a specified date according to local time.
   *
   * Метод устанавливает минуты указанной даты по местному времени.
   * @param value value / значение
   * @returns this instance / текущий экземпляр
   */
  setMinute(value: number): this {
    this.date.setMinutes(value)
    this.update()

    return this
  }

  /**
   * The method sets the seconds for a specified date according to local time.
   *
   * Метод устанавливает секунды указанной даты по местному времени.
   * @param value value / значение
   * @returns this instance / текущий экземпляр
   */
  setSecond(value: number): this {
    this.date.setSeconds(value)
    this.update()

    return this
  }

  /**
   * Enables language-sensitive date and time formatting.
   *
   * Включает форматирование даты и времени с учетом языка.
   * @param type type of date format for output / тип формата даты вывода
   * @param styleOptions month representation or Intl formatting options / представление месяца или опции форматирования Intl
   * @returns string formatted date string / отформатированная строка даты
   */
  locale(
    type: GeoDate = this.type,
    styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions
  ): string {
    return this.getIntl().date(
      this.date,
      type,
      styleOptions,
      this.hour24
    )
  }

  /**
   * Returns the formatted year.
   *
   * Возвращает отформатированный год.
   * @param style the representation of the year / представление года
   * @returns string formatted year / отформатированный год
   */
  localeYear(
    style: Intl.DateTimeFormatOptions['year'] = 'numeric'
  ): string {
    return this.locale('year', { year: style })
  }

  /**
   * Returns the formatted month.
   *
   * Возвращает отформатированный месяц.
   * @param style the representation of the month / представление месяца
   * @returns string formatted month / отформатированный месяц
   */
  localeMonth(
    style: Intl.DateTimeFormatOptions['month'] = 'long'
  ): string {
    return this.locale('month', { month: style })
  }

  /**
   * Returns the formatted day.
   *
   * Возвращает отформатированный день.
   * @param style the representation of the day / представление дня
   * @returns string formatted day / отформатированный день
   */
  localeDay(
    style: Intl.DateTimeFormatOptions['day'] = 'numeric'
  ): string {
    return this.locale('day', { day: style })
  }

  /**
   * Returns the formatted hour.
   *
   * Возвращает отформатированный час.
   * @param style the representation of the hour / представление часа
   * @returns string formatted hour / отформатированный час
   */
  localeHour(
    style: Intl.DateTimeFormatOptions['hour'] = 'numeric'
  ): string {
    return this.locale('hour', { hour: style })
  }

  /**
   * Returns the formatted minute.
   *
   * Возвращает отформатированную минуту.
   * @param style the representation of the minute / представление минуты
   * @returns string formatted minute / отформатированная минута
   */
  localeMinute(
    style: Intl.DateTimeFormatOptions['minute'] = 'numeric'
  ): string {
    return this.locale('minute', { minute: style })
  }

  /**
   * Returns the formatted second.
   *
   * Возвращает отформатированную секунду.
   * @param style the representation of the second / представление секунды
   * @returns string formatted second / отформатированная секунда
   */
  localeSecond(
    style: Intl.DateTimeFormatOptions['second'] = 'numeric'
  ): string {
    return this.locale('second', { second: style })
  }

  /**
   * Output of standard data.
   *
   * Вывод стандартных данных.
   * @param timeZone add time zone (default: true) / добавить временную зону (по умолчанию: true)
   * @returns standard format string / строка в стандартном формате
   */
  standard(timeZone = true): string {
    if (isNaN(this.date.getTime())) {
      return ''
    }

    const date: string[] = []
    const time: string[] = []

    if (inArray(STANDARD_YEAR_TYPES, this.type)) {
      date.push(this.getYear().toString().padStart(4, '0'))
    }

    if (inArray(STANDARD_MONTH_TYPES, this.type)) {
      date.push(this.getMonth().toString().padStart(2, '0'))
    }

    if (inArray(STANDARD_DAY_TYPES, this.type)) {
      date.push(this.getDay().toString().padStart(2, '0'))
    }

    if (inArray(STANDARD_HOUR_TYPES, this.type)) {
      time.push(this.getHour().toString().padStart(2, '0'))
    }

    if (inArray(STANDARD_MINUTE_TYPES, this.type)) {
      time.push(this.getMinute().toString().padStart(2, '0'))
    }

    if (inArray(STANDARD_SECOND_TYPES, this.type)) {
      time.push(this.getSecond().toString().padStart(2, '0'))
    }

    const isTimeZone = timeZone && inArray(STANDARD_TIMEZONE_TYPES, this.type)
    const dateText = date.join('-')
    const timeText = time.length > 0 ? `${time.join(':')}${isTimeZone ? this.getTimeZone() : ''}` : ''

    if (dateText && timeText) {
      return `${dateText}T${timeText}`
    }

    return dateText || timeText
  }

  /**
   * Shift the date by a given value in years.
   *
   * Сдвинуть дату на заданное значение в годах.
   * @param value values for moving / значения для перемещения
   * @returns this instance / текущий экземпляр
   */
  moveByYear(value: number): this {
    this.setYear(this.date.getFullYear() + value)
    return this
  }

  /**
   * Shift the date by a given value in months.
   *
   * Сдвинуть дату на заданное значение в месяцах.
   * @param value values for moving (in months) / значения для перемещения (в месяцах)
   * @returns this instance / текущий экземпляр
   */
  moveByMonth(value: number): this {
    return this.setMonth(this.getMonth() + value)
  }

  /**
   * Shift the date by a given value in days.
   *
   * Сдвинуть дату на заданное значение в днях.
   * @param value values for moving / значения для перемещения
   * @returns this instance / текущий экземпляр
   */
  moveByDay(value: number): this {
    this.setDay(this.date.getDate() + value)
    return this
  }

  /**
   * Shift the date by a given value in hours.
   *
   * Сдвинуть дату на заданное значение в часах.
   * @param value values for moving / значения для перемещения
   * @returns this instance / текущий экземпляр
   */
  moveByHour(value: number): this {
    this.setHour(this.date.getHours() + value)
    return this
  }

  /**
   * Shift the date by a given value in minutes.
   *
   * Сдвинуть дату на заданное значение в минутах.
   * @param value values for moving / значения для перемещения
   * @returns this instance / текущий экземпляр
   */
  moveByMinute(value: number): this {
    this.setMinute(this.date.getMinutes() + value)
    return this
  }

  /**
   * Shift the date by a given value in seconds.
   *
   * Сдвинуть дату на заданное значение в секундах.
   * @param value values for moving / значения для перемещения
   * @returns this instance / текущий экземпляр
   */
  moveBySecond(value: number): this {
    this.setSecond(this.date.getSeconds() + value)
    return this
  }

  /**
   * Sets the date to January (first month).
   *
   * Устанавливает дату на январь (первый месяц).
   * @returns this instance / текущий экземпляр
   */
  moveMonthFirst(): this {
    this.setMonth(1)
    return this
  }

  /**
   * Sets the date to December (last month).
   *
   * Устанавливает дату на декабрь (последний месяц).
   * @returns this instance / текущий экземпляр
   */
  moveMonthLast(): this {
    this.setMonth(12)
    return this
  }

  /**
   * Moves to the first day of the next month.
   *
   * Переводит на первый день следующего месяца.
   * @returns this instance / текущий экземпляр
   */
  moveMonthNext(): this {
    const block = this.block

    this.block = true
    this.setDay(1)
    this.block = block
    this.moveByMonth(+1)

    return this
  }

  /**
   * Moves to the first day of the previous month.
   *
   * Переводит на первый день предыдущего месяца.
   * @returns this instance / текущий экземпляр
   */
  moveMonthPrevious(): this {
    const block = this.block

    this.block = true
    this.setDay(1)
    this.block = block
    this.moveByMonth(-1)

    return this
  }

  /**
   * Moves to the first day of the week.
   *
   * Переводит на первый день недели.
   * @returns this instance / текущий экземпляр
   */
  moveWeekdayFirst(): this {
    const weekday = this.getWeekday()
    const weekdayFirst = this.getFirstDayCode()

    this.moveByDay(
      -((weekday - weekdayFirst + 7) % 7)
    )

    return this
  }

  /**
   * Moves to the last day of the week.
   *
   * Переводит на последний день недели.
   * @returns this instance / текущий экземпляр
   */
  moveWeekdayLast(): this {
    const block = this.block

    this.block = true
    this.moveWeekdayFirst()
    this.block = block
    this.moveByDay(6)

    return this
  }

  /**
   * Moves to the first day of the first week of the month.
   *
   * Переводит на первый день первой недели месяца.
   * @returns this instance / текущий экземпляр
   */
  moveWeekdayFirstByMonth(): this {
    const block = this.block

    this.block = true
    this.moveDayFirst()
    this.block = block
    this.moveWeekdayFirst()

    return this
  }

  /**
   * Moves to the last day of the last week of the month.
   *
   * Переводит на последний день последней недели месяца.
   * @returns this instance / текущий экземпляр
   */
  moveWeekdayLastByMonth(): this {
    const block = this.block

    this.block = true
    this.moveDayLast()
    this.block = block
    this.moveWeekdayLast()

    return this
  }

  /**
   * Moves to the next week.
   *
   * Переводит на следующую неделю.
   * @returns this instance / текущий экземпляр
   */
  moveWeekdayNext(): this {
    const block = this.block

    this.block = true
    this.moveWeekdayFirst()
    this.block = block
    this.moveByDay(7)

    return this
  }

  /**
   * Moves to the previous week.
   *
   * Переводит на предыдущую неделю.
   * @returns this instance / текущий экземпляр
   */
  moveWeekdayPrevious(): this {
    const block = this.block

    this.block = true
    this.moveWeekdayFirst()
    this.block = block
    this.moveByDay(-7)

    return this
  }

  /**
   * Moves to the first day of the month.
   *
   * Переводит на первый день месяца.
   * @returns this instance / текущий экземпляр
   */
  moveDayFirst(): this {
    this.setDay(1)
    return this
  }

  /**
   * Moves to the last day of the month.
   *
   * Переводит на последний день месяца.
   * @returns this instance / текущий экземпляр
   */
  moveDayLast(): this {
    this.setDay(this.getMaxDay())
    return this
  }

  /**
   * Moves to the next day.
   *
   * Переводит на следующий день.
   * @returns this instance / текущий экземпляр
   */
  moveDayNext(): this {
    this.moveByDay(+1)
    return this
  }

  /**
   * Moves to the previous day.
   *
   * Переводит на предыдущий день.
   * @returns this instance / текущий экземпляр
   */
  moveDayPrevious(): this {
    this.moveByDay(-1)
    return this
  }

  /**
   * Clone the Date object.
   *
   * Клонировать объект Date.
   * @returns Date cloned Date object / клонированный объект Date
   */
  clone(): Date {
    return new Date(this.date)
  }

  /**
   * Clone the Datetime object.
   *
   * Клонировать объект Datetime.
   * @returns Datetime cloned Datetime object / клонированный объект Datetime
   */
  cloneClass(): Datetime {
    return new (this.constructor as typeof Datetime)(
      this.clone(),
      this.type,
      this.code
    ).setHour24(this.hour24)
  }

  /**
   * Clone the Datetime object and set the month to January.
   *
   * Клонировать объект Datetime и установить месяц на январь.
   * @returns Datetime cloned Datetime with January month / клонированный Datetime с январем
   */
  cloneMonthFirst(): Datetime {
    return this.cloneClass()
      .moveMonthFirst()
  }

  /**
   * Clone the Datetime object and move the month to the end of the year.
   *
   * Клонировать объект Datetime и перевести месяц на конец года.
   * @returns Datetime cloned Datetime with December month / клонированный Datetime с декабрем
   */
  cloneMonthLast(): Datetime {
    return this.cloneClass()
      .moveMonthLast()
  }

  /**
   * Clone the Datetime object and transfer it one month ahead.
   *
   * Клонировать объект Datetime и перевести на 1 месяц вперед.
   * @returns Datetime cloned Datetime with next month / клонированный Datetime со следующим месяцем
   */
  cloneMonthNext(): Datetime {
    return this.cloneClass()
      .moveMonthNext()
  }

  /**
   * Clone the Datetime object and transfer it one month back.
   *
   * Клонировать объект Datetime и перевести на 1 месяц назад.
   * @returns Datetime cloned Datetime with previous month / клонированный Datetime с предыдущим месяцем
   */
  cloneMonthPrevious(): Datetime {
    return this.cloneClass()
      .moveMonthPrevious()
  }

  /**
   * Returns the first day of the week according to the current date.
   *
   * Возвращает первый день недели по текущей дате.
   * @returns Datetime cloned Datetime with first day of week / клонированный Datetime с первым днем недели
   */
  cloneWeekdayFirst(): Datetime {
    return this.cloneClass()
      .moveWeekdayFirst()
  }

  /**
   * Returns the last day of the week according to the current date.
   *
   * Возвращает последний день недели по текущей дате.
   * @returns Datetime cloned Datetime with last day of week / клонированный Datetime с последним днем недели
   */
  cloneWeekdayLast(): Datetime {
    return this.cloneClass()
      .moveWeekdayLast()
  }

  /**
   * Returns the first day of the week according to the current month.
   *
   * Возвращает первый день недели по текущему месяцу.
   * @returns Datetime cloned Datetime with first day of week in month / клонированный Datetime с первым днем недели в месяце
   */
  cloneWeekdayFirstByMonth(): Datetime {
    return this.cloneClass()
      .moveWeekdayFirstByMonth()
  }

  /**
   * Returns the last day of the week according to the current month.
   *
   * Возвращает последний день недели по текущему месяцу.
   * @returns Datetime cloned Datetime with last day of week in month / клонированный Datetime с последним днем недели в месяце
   */
  cloneWeekdayLastByMonth(): Datetime {
    return this.cloneClass()
      .moveWeekdayLastByMonth()
  }

  /**
   * Returns the next week according to the current date.
   *
   * Возвращает следующую неделю по текущей дате.
   * @returns Datetime cloned Datetime with next week / клонированный Datetime со следующей неделей
   */
  cloneWeekdayNext(): Datetime {
    return this.cloneClass()
      .moveWeekdayNext()
  }

  /**
   * Returns the previous week according to the current date.
   *
   * Возвращает предыдущую неделю по текущей дате.
   * @returns Datetime cloned Datetime with previous week / клонированный Datetime с предыдущей неделей
   */
  cloneWeekdayPrevious(): Datetime {
    return this.cloneClass()
      .moveWeekdayPrevious()
  }

  /**
   * Clone the Datetime object and move the day to the beginning of the month.
   *
   * Клонировать объект Datetime и перевести день на начало месяца.
   * @returns Datetime cloned Datetime with first day of month / клонированный Datetime с первым днем месяца
   */
  cloneDayFirst(): Datetime {
    return this.cloneClass()
      .moveDayFirst()
  }

  /**
   * Clone the Datetime object and move the day to the end of the month.
   *
   * Клонировать объект Datetime и перевести день на конец месяца.
   * @returns Datetime cloned Datetime with last day of month / клонированный Datetime с последним днем месяца
   */
  cloneDayLast(): Datetime {
    return this.cloneClass()
      .moveDayLast()
  }

  /**
   * Clone the Datetime object and move by 1 day.
   *
   * Клонировать объект Datetime и перевести на 1 день.
   * @returns Datetime cloned Datetime with next day / клонированный Datetime со следующим днем
   */
  cloneDayNext(): Datetime {
    return this.cloneClass()
      .moveDayNext()
  }

  /**
   * Clone the Datetime object and go back by 1 day.
   *
   * Клонировать объект Datetime и вернуться на 1 день.
   * @returns Datetime cloned Datetime with previous day / клонированный Datetime с предыдущим днем
   */
  cloneDayPrevious(): Datetime {
    return this.cloneClass()
      .moveDayPrevious()
  }

  /**
   * Updating all values.
   *
   * Обновление всех значений.
   * @returns this instance / текущий экземпляр
   */
  protected update(): this {
    if (!this.block) {
      this.watch?.(
        this.date,
        this.type,
        this.hour24
      )
    }

    return this
  }

  /**
   * Returns the time zone hour format.
   *
   * Возвращает часовой формат временной зоны.
   * @param hour hour / час
   * @returns string formatted hour / форматированный час
   */
  protected toTimeZoneHourFormat(hour: number): string {
    const numberHour = Math.abs(Math.trunc(hour))
      .toString()
      .padStart(2, '0')

    return `${hour >= 0 ? '+' : '-'}${numberHour}`
  }
}
