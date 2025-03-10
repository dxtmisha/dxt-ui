import { toDate } from '../functions/toDate'

import { Geo } from './Geo'
import { GeoIntl } from './GeoIntl'

import { type NumberOrStringOrDate } from '../types/basicTypes'
import {
  type GeoDate,
  type GeoFirstDay,
  type GeoHours,
  type GeoTimeZoneStyle
} from '../types/geoTypes'

/**
 * A class for working with dates.
 *
 * Класс для работы с датами.
 */
export class Datetime {
  protected date: Date
  protected hour24 = false
  protected watch?: (date: Date, type: GeoDate, hour24: boolean) => void

  /**
   * Constructor
   * @param date date for processing/ дата для обработки
   * @param type type of date format for output/ тип формата даты вывода
   * @param code country and language code/ код страны и языка
   */
  constructor(
    date?: NumberOrStringOrDate,
    protected type: GeoDate = 'date',
    protected code: string = Geo.getLocation()
  ) {
    this.date = toDate(date)
  }

  /**
   * Returns an object for working with formatting.
   *
   * Возвращает объект для работы с форматированием.
   */
  getIntl(): GeoIntl {
    return new GeoIntl(this.code)
  }

  /**
   * Returns a Date object.
   *
   * Возвращает объект Date.
   */
  getDate(): Date {
    return this.date
  }

  /**
   * Returns the type of data output.
   *
   * Возвращает тип вывода данных.
   */
  getType(): string {
    return this.type
  }

  /**
   * Returns the format of hours.
   *
   * Возвращает формат часов.
   */
  getHoursType(): GeoHours {
    const date = this.clone()
    date.setHours(23)

    return date.toLocaleTimeString(this.getIntl().getLocation(), { hour: '2-digit' })
      .match(/23/ig)
      ? '24'
      : '12'
  }

  /**
   * Whether to use 12-hour time.
   *
   * Использовать ли 12-часовой формат времени.
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
   */
  getTimeZoneOffset(): number {
    return this.date.getTimezoneOffset()
  }

  /**
   * Returns the time zone as a string.
   *
   * Возвращает временную зону в виде строки.
   * @param style the style of the returned data/ стиль возвращаемых данных
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

    const numberHour = this.getIntl()
      .number(Math.trunc(hour), {
        signDisplay: 'always',
        minimumIntegerDigits: 2
      })
    const numberMinute = hour.toString().match(/.\d+/) ? '30' : '00'

    if (style === 'RFC') {
      return `${numberHour}${numberMinute}`
    }

    return `${numberHour}:${numberMinute}`
  }

  /**
   * Returns the code of the first day of the week.
   *
   * Возвращает код первого дня недели.
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
   */
  getYear(): number {
    return this.date.getFullYear()
  }

  /**
   * The method returns the month in the specified date according to local time,
   * as a zero-based value.
   *
   * Метод возвращает месяц указанной даты по местному времени, нумерация
   * месяцев начинается с нуля для первого месяца в году.
   */
  getMonth(): number {
    return this.date.getMonth() + 1
  }

  /**
   * The method returns the day of the month for the specified date according to local time.
   *
   * Метод возвращает день месяца указанной даты по местному времени
   */
  getDay(): number {
    return this.date.getDate()
  }

  /**
   * The method returns the hour for the specified date, according to local time.
   *
   * Метод возвращает часы указанной даты по местному времени.
   */
  getHour(): number {
    return this.date.getHours()
  }

  /**
   * The method returns the minutes in the specified date according to local time.
   *
   * Метод возвращает минуты указанной даты по местному времени.
   */
  getMinute(): number {
    return this.date.getMinutes()
  }

  /**
   * The method returns the seconds in the specified date according to local time.
   *
   * Метод возвращает секунды указанной даты по местному времени.
   */
  getSecond(): number {
    return this.date.getSeconds()
  }

  /**
   * Returns the last day of the week.
   *
   * Возвращает последний день недели.
   */
  getMaxDay(): number {
    return this.getMonth() > 0 ? this.cloneDayLast().getDay() : 0
  }

  /**
   * Enables language-sensitive date and time formatting.
   *
   * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
   * @param type type of date format for output/ тип формата даты вывода
   * @param styleOptions the representation of the month/ представление месяца
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
   * @param style the representation of the month/ представление месяца
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
   * @param style the representation of the month/ представление месяца
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
   * @param style the representation of the month/ представление месяца
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
   * @param style the representation of the month/ представление месяца
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
   * @param style the representation of the month/ представление месяца
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
   * @param style the representation of the month/ представление месяца
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
   * @param timeZone add time zone/ добавить временную зону
   */
  standard(timeZone = true as boolean): string {
    const geo = new Datetime(this.date, this.type, 'en-GB')
    const date: string[] = []
    let time: string | undefined

    geo.setHour24(true)

    if (this.type === 'hour-minute') {
      time = geo.locale(this.type, {
        year: 'numeric',
        month: '2-digit',
        hour12: false
      })
    } else {
      if (['full', 'datetime', 'date', 'year-month', 'year', 'month', 'day'].indexOf(this.type) !== -1) {
        date.push(geo.localeYear())
        date.push(geo.localeMonth('2-digit'))
      }

      if (['full', 'datetime', 'date', 'year', 'month', 'day'].indexOf(this.type) !== -1) {
        date.push(geo.localeDay('2-digit'))
      }

      if (['full', 'datetime', 'time', 'hour', 'minute', 'second'].indexOf(this.type) !== -1) {
        time = geo.locale('time')
      }
    }

    return `${date.join('-')}${time ? `T${time}${timeZone ? geo.getTimeZone() : ''}` : ''}`
  }

  /**
   * Change the date completely.
   *
   * Изменять полностью дату.
   * @param value an integer value representing the number/
   * целочисленное значение, представляющее число
   */
  setDate(value: NumberOrStringOrDate): this {
    this.date = toDate(value)
    this.update()

    return this
  }

  /**
   * Change the type of data output.
   *
   * Изменить тип вывода данных.
   * @param value type of output/ тип вывод
   */
  setType(value: GeoDate): this {
    this.type = value
    this.update()

    return this
  }

  /**
   * Whether to use 12-hour time.
   *
   * Использовать ли 12-часовой формат времени.
   * @param value If true, output the 12-hour time format/
   * если true, выводить 12-часовой формат времени
   */
  setHour24(value: boolean): this {
    this.hour24 = value
    this.update()

    return this
  }

  /**
   * To change the location.
   *
   * Изменить местоположение.
   * @param code country and language code/ код страны и языка
   */
  setCode(code: string): this {
    this.code = code
    return this
  }

  /**
   * The function is called when the data is updated.
   *
   * Функция вызывается при обновлении данных.
   * @param watch the function calls/ функция вызывает
   */
  setWatch(watch: (date: Date, type: GeoDate, hour24: boolean) => void): this {
    this.watch = watch
    return this
  }

  /**
   * The method sets the full year for a specified date according to local time.
   *
   * Метод устанавливает полный год указанной даты по местному времени.
   * @param value value/ значения
   */
  setYear(value: number): this {
    this.date.setFullYear(value)
    this.update()

    return this
  }

  /**
   * The method sets the month for a specified date according to the currently set year.
   *
   * Метод устанавливает месяц указанной даты по местному времени.
   * @param value value/ значения
   */
  setMonth(value: number): this {
    this.date.setMonth(value - 1)
    this.update()

    return this
  }

  /**
   * The method changes the day of the month of a given Date instance, based on local time.
   *
   * Метод устанавливает день месяца указанной даты по местному времени.
   * @param value value/ значения
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
   * @param value value/ значения
   */
  setHour(value: number): this {
    this.date.setHours(value)
    this.update()

    return this
  }

  /**
   * The method sets the minutes for a specified date according to local time
   *
   * Метод устанавливает минуты указанной даты по местному времени
   * @param value value / значения
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
   * @param value value/ значения
   */
  setSecond(value: number): this {
    this.date.setSeconds(value)
    this.update()

    return this
  }

  /**
   * Shift the date by a given value in years.
   *
   * Сдвинуть дату на заданное значение в годах.
   * @param value values for moving/ значения для перемещения
   */
  moveByYear(value: number): this {
    this.setYear(this.date.getFullYear() + value)
    return this
  }

  /**
   * Shift the date by a given value in months.
   *
   * Сдвинуть дату на заданное значение в месяцах.
   * @param value values for moving/ значения для перемещения
   */
  moveByMonth(value: number): this {
    this.setMonth(this.date.getMonth() + 1 + value)
    return this
  }

  /**
   * Shift the date by a given value in days.
   *
   * Сдвинуть дату на заданное значение в днях.
   * @param value values for moving/ значения для перемещения
   */
  moveByDay(value: number): this {
    this.setDay(this.date.getDate() + value)
    return this
  }

  /**
   * Shift the date by a given value in hours.
   *
   * Сдвинуть дату на заданное значение в часах.
   * @param value values for moving/ значения для перемещения
   */
  moveByHour(value: number): this {
    this.setHour(this.date.getHours() + value)
    return this
  }

  /**
   * Shift the date by a given value in minutes.
   *
   * Сдвинуть дату на заданное значение в минутах.
   * @param value values for moving/ значения для перемещения
   */
  moveByMinute(value: number): this {
    this.setMinute(this.date.getMinutes() + value)
    return this
  }

  /**
   * Shift the date by a given value in seconds.
   *
   * Сдвинуть дату на заданное значение в секундах.
   * @param value values for moving/ значения для перемещения
   */
  moveBySecond(value: number): this {
    this.setSecond(this.date.getSeconds() + value)
    return this
  }

  /**
   * Translate to the first month.
   *
   * Переводить на первый месяц.
   */
  moveMonthFirst(): this {
    this.setMonth(1)
    return this
  }

  /**
   * Translate to the first month.
   *
   * Переводить на первый месяц.
   */
  moveMonthLast(): this {
    this.setMonth(12)
    return this
  }

  /**
   * Translate to the first day of the next month.
   *
   * Переводить на первый день следующего месяца.
   */
  moveMonthNext(): this {
    this.setDay(1)
      .moveByMonth(+1)

    return this
  }

  /**
   * Translate to the first day of the previous month.
   *
   * Переводить на первый день предыдущего месяца.
   */
  moveMonthPrevious(): this {
    this.setDay(1)
      .moveByMonth(-1)

    return this
  }

  /**
   * Translate to the first day of the week.
   *
   * Переводить на первый день недели.
   */
  moveWeekdayFirst(): this {
    const weekday = this.date.getDay()
    const weekdayFirst = this.getFirstDayCode()

    this.moveByDay(
      (weekdayFirst === 6 ? -1 : weekdayFirst) - weekday
    )

    return this
  }

  /**
   * Translate to the last day of the week.
   *
   * Переводить на последний день недели.
   */
  moveWeekdayLast(): this {
    this.moveWeekdayFirst()
      .moveByDay(6)

    return this
  }

  /**
   * Translate to the first day of the first week of the month.
   *
   * Переводить на первый день первой недели месяца.
   */
  moveWeekdayFirstByMonth(): this {
    this.moveDayFirst()
      .moveWeekdayFirst()

    return this
  }

  /**
   * Translate to the first day of the first full week of the following month.
   *
   * Переводить на первый день первой полной недели следующего месяца.
   */
  moveWeekdayLastByMonth(): this {
    this.moveDayLast()
      .moveWeekdayLast()

    return this
  }

  /**
   * Translate to the next week.
   *
   * Переводить на следующую неделю.
   */
  moveWeekdayNext(): this {
    this.moveWeekdayFirst()
      .moveByDay(7)

    return this
  }

  /**
   * Translate to the previous week.
   *
   * Переводить на предыдущую неделю.
   */
  moveWeekdayPrevious(): this {
    this.moveWeekdayFirst()
      .moveByDay(-7)

    return this
  }

  /**
   * Translate to the first day of the month.
   *
   * Переводить на первый день месяца.
   */
  moveDayFirst(): this {
    this.setDay(1)
    return this
  }

  /**
   * Translate to the last day of the month.
   *
   * Переводить на последний день месяца.
   */
  moveDayLast(): this {
    this.setDay(1)
      .moveByMonth(1)
      .moveByDay(-1)

    return this
  }

  /**
   * Translate to the next day.
   *
   * Переводить на следующий день.
   */
  moveDayNext(): this {
    this.moveByDay(+1)
    return this
  }

  /**
   * Translate to the previous day.
   *
   * Переводить на предыдущий день.
   */
  moveDayPrevious(): this {
    this.moveByDay(-1)
    return this
  }

  /**
   * Clone the Date object.
   *
   * Клонировать объект Date.
   */
  clone(): Date {
    return new Date(this.date)
  }

  /**
   * Clone the GeoDate object.
   *
   * Клонировать объект GeoDate.
   */
  cloneClass(): Datetime {
    return new (this.constructor as typeof Datetime)(
      this.clone(),
      this.type,
      this.code
    )
  }

  /**
   * Clone the GeoDate object and set the month to January.
   *
   * Клонировать объект GeoDate и установить месяц на январь.
   */
  cloneMonthFirst(): Datetime {
    return this.cloneClass()
      .moveMonthFirst()
  }

  /**
   * Clone the GeoDate object and move the month to the end of the year.
   *
   * Клонировать объект GeoDate и перевести месяц на конец года.
   */
  cloneMonthLast(): Datetime {
    return this.cloneClass()
      .moveMonthLast()
  }

  /**
   * Clone the GeoDate object and transfer it one month ahead.
   *
   * Клонировать объект GeoDate и перевести на 1 месяц вперед.
   */
  cloneMonthNext(): Datetime {
    return this.cloneClass()
      .moveMonthNext()
  }

  /**
   * Clone the GeoDate object and transfer it one month back.
   *
   * Клонировать объект GeoDate и перевести на 1 месяц назад.
   */
  cloneMonthPrevious(): Datetime {
    return this.cloneClass()
      .moveMonthPrevious()
  }

  /**
   * Returns the first day of the week according to the current date.
   *
   * Возвращает первый день недели по текущей дате.
   */
  cloneWeekdayFirst(): Datetime {
    return this.cloneClass()
      .moveWeekdayFirst()
  }

  /**
   * Returns the last day of the week according to the current date.
   *
   * Возвращает последний день недели по текущей дате.
   */
  cloneWeekdayLast(): Datetime {
    return this.cloneClass()
      .moveWeekdayLast()
  }

  /**
   * Returns the first day of the week according to the current month.
   *
   * Возвращает первый день недели по текущему месяцу.
   */
  cloneWeekdayFirstByMonth(): Datetime {
    return this.cloneClass()
      .moveWeekdayFirstByMonth()
  }

  /**
   * Returns the last day of the week according to the current month.
   *
   * Возвращает последний день недели по текущему месяцу.
   */
  cloneWeekdayLastByMonth(): Datetime {
    return this.cloneClass()
      .moveWeekdayLastByMonth()
  }

  /**
   * Returns the next week according to the current date.
   *
   * Возвращает следующую неделю по текущей дате.
   */
  cloneWeekdayNext(): Datetime {
    return this.cloneClass()
      .moveWeekdayNext()
  }

  /**
   * Returns the previous week according to the current date.
   *
   * Возвращает предыдущую неделю по текущей дате.
   */
  cloneWeekdayPrevious(): Datetime {
    return this.cloneClass()
      .moveWeekdayPrevious()
  }

  /**
   * Clone the GeoDate object and move the day to the beginning of the month.
   *
   * Клонировать объект GeoDate и перевести день на начало месяца.
   */
  cloneDayFirst(): Datetime {
    return this.cloneClass()
      .moveDayFirst()
  }

  /**
   * Clone the GeoDate object and move the day to the end of the month.
   *
   * Клонировать объект GeoDate и перевести день на конец месяца.
   */
  cloneDayLast(): Datetime {
    return this.cloneClass()
      .moveDayLast()
  }

  /**
   * Clone the GeoDate object and move by 1 day.
   *
   * Клонировать объект GeoDate и перевести на 1 день.
   */
  cloneDayNext(): Datetime {
    return this.cloneClass()
      .moveDayNext()
  }

  /**
   * Clone the GeoDate object and go back by 1 day.
   *
   * Клонировать объект GeoDate и вернуться на 1 день.
   */
  cloneDayPrevious(): Datetime {
    return this.cloneClass()
      .moveDayPrevious()
  }

  /**
   * Updating all values.
   *
   * Обновление всех значений.
   */
  protected update(): this {
    this.watch?.(
      this.date,
      this.type,
      this.hour24
    )

    return this
  }
}
