import { getColumn } from '../functions/getColumn'
import { isDomRuntime } from '../functions/isDomRuntime'
import { isString } from '../functions/isString'
import { toDate } from '../functions/toDate'
import { toNumber } from '../functions/toNumber'

import { Geo } from './Geo'

import {
  type NumberOrStringOrDate,
  type NumberOrString,
  type ItemValue
} from '../types/basicTypes'
import {
  type GeoDate,
  type GeoItemFull
} from '../types/geoTypes'

/**
 * The Intl namespace object contains several constructors as well as functionality common
 * to the internationalization constructors and other language sensitive functions. Collectively,
 * they comprise the ECMAScript Internationalization API, which provides language sensitive
 * string comparison, number formatting, date and time formatting, and more
 *
 * Объект Intl является пространством имён для API интернационализации ECMAScript, предоставляющим
 * языка-зависимое сравнение строк, форматирование чисел и дат со временем. Конструкторы объектов
 * Collator, NumberFormat и DateTimeFormat являются свойствами объекта Intl. На этой странице
 * описаны эти свойства, а также общая функциональность конструкторов интернационализации и других
 * языка-зависимых функций
 */
export class GeoIntl {
  private readonly geo: GeoItemFull

  /**
   * Constructor
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  constructor(code: string = Geo.getLocation()) {
    this.geo = Geo.find(code)

    const location = this.getLocation()

    if (location in items) {
      return items[location]
    }

    items[location] = this
  }

  /**
   * Returns country code and language.
   *
   * Возвращает код страны и языка.
   */
  getLocation(): string {
    return this.geo.standard
  }

  /**
   * Returns the first day of the week.
   *
   * Возвращает первый день недели.
   */
  getFirstDay(): string {
    return this.geo.firstDay
  }

  /**
   * The consistent translation of language, region and script display names.
   *
   * Последовательный перевод отображаемых названий языка, региона и скрипта.
   * @param value the code to provide depends on the type/ предоставляемый код зависит от типа
   * @param typeOptions an object with some or all of the following properties/
   * объект с некоторыми или всеми из следующих свойств
   */
  display(
    value?: string,
    typeOptions?: Intl.DisplayNamesOptions['type'] | Intl.DisplayNamesOptions
  ): string {
    let options: Intl.DisplayNamesOptions = { type: 'language' }
    let text

    if (typeOptions) {
      if (typeof typeOptions === 'string') {
        options.type = typeOptions
      } else {
        options = {
          ...options,
          ...typeOptions
        }
      }
    }

    try {
      if (isDomRuntime()) {
        if (value) {
          text = new Intl.DisplayNames(this.getLocation(), options).of(value)
        } else if (options.type === 'language') {
          text = new Intl.DisplayNames(this.getLocation(), options).of(this.geo.language)
        } else if (options.type === 'region') {
          text = new Intl.DisplayNames(this.getLocation(), options).of(this.geo.country)
        }
      }
    } catch (e) {
      console.error('display: ', e)
    }

    return text ?? value ?? ''
  }

  /**
   * Get display names of language.
   *
   * Получить отображаемые имена языка.
   * @param value the code to provide depends on the type/ предоставляемый код зависит от типа
   * @param style the formatting style to use/ используемый стиль форматирования
   */
  languageName(
    value?: string,
    style?: Intl.RelativeTimeFormatStyle
  ): string {
    const options: Intl.DisplayNamesOptions = {
      type: 'language',
      style
    }

    return this.display(Geo.getByCode(value).language, options)
  }

  /**
   * Get display names of region.
   *
   * Получить отображаемые имена региона.
   * @param value the code to provide depends on the type/ предоставляемый код зависит от типа
   * @param style the formatting style to use/ используемый стиль форматирования
   */
  countryName(
    value?: string,
    style?: Intl.RelativeTimeFormatStyle
  ): string {
    const options: Intl.DisplayNamesOptions = {
      type: 'region',
      style
    }

    return this.display(value, options)
  }

  /**
   * The method returns a string containing the full name in a specific format.
   *
   * Метод возвращает строку, содержащую полное имя в определённом формате.
   * @param last last name/ фамилию
   * @param first first name/ имя
   * @param surname surname middle name (optional)/ отчество
   * @param short shorten the names/ сократить названия
   */
  fullName(
    last: string,
    first: string,
    surname?: string,
    short?: boolean
  ): string {
    const nameFormat = this.geo?.nameFormat ?? 'fl'
    let fullName

    switch (nameFormat) {
      case 'fsl':
        fullName = `${first}${surname ? ` ${surname}` : ''} ${last}`
        break
      case 'lf':
        fullName = `${last} ${first}`
        break
      case 'lsf':
        fullName = `${last}${surname ? ` ${surname}` : ''} ${first}`
        break
      default:
        fullName = `${first} ${last}`
        break
    }

    if (short) {
      return fullName.replace(/ (.)[^ ]+/ig, ' $1.')
    }

    return fullName
  }

  /**
   * In basic use without specifying a locale, a formatted string.
   *
   * При обычном использовании без указания локали форматированная строка.
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param options an object with some or all properties/ объект с некоторыми
   * или всеми свойствами
   */
  number(
    value: NumberOrString,
    options?: Intl.NumberFormatOptions
  ): string {
    return this.numberObject(options)?.format?.(toNumber(value)) || value.toString()
  }

  /**
   * Decimal point symbol.
   *
   * Символ десятичной точки.
   */
  decimal(): string {
    return this.numberObject()
      ?.formatToParts?.(1.2)
      ?.find?.(item => item.type === 'decimal')?.value || '.'
  }

  /**
   * Currency formatting.
   *
   * Форматирование валюты.
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param currencyOptions the currency to use in currency formatting/
   * валюта для использования в форматировании валюты
   * @param numberOnly do not display the currency symbol/ не выводить значок валюты
   */
  currency(
    value: NumberOrString,
    currencyOptions?: string | Intl.NumberFormatOptions,
    numberOnly = false
  ): string {
    const options: Intl.NumberFormatOptions = ({
      style: 'currency',
      currencyDisplay: 'symbol',
      ...(typeof currencyOptions === 'string' ? { currency: currencyOptions } : currencyOptions || {})
    })

    const number: string = value
      .toString()
      .replace(/^([\S\s]+[\d ])([a-zA-Z]{3})$/i, (...text: string[]): string => {
        options.currency = text[2].toUpperCase()
        return text[1]
      })

    if (numberOnly) {
      const object = this.numberObject(options)
      if (object) {
        return getColumn(
          object.formatToParts(toNumber(value))
            .filter(item => ['literal', 'currency'].indexOf(item.type) === -1),
          'value'
        )
          .join('')
      } else {
        return value.toString()
      }
    } else if ('currency' in options) {
      return this.number(
        typeof value === 'number' ? value : number,
        options
      )
    } else {
      return this.number(
        typeof value === 'number' ? value : number,
        {
          ...options,
          style: 'decimal'
        }
      )
    }
  }

  /**
   * Returns the currency symbol if it exists, otherwise the currency code.
   *
   * Возвращает символ для валюты, если он есть, или сам код валюты.
   * @param currency the currency to use in currency formatting/
   * валюта для использования в форматировании валюты
   * @param currencyDisplay how to display the currency in currency formatting/
   * как отобразить валюту в формате валюты
   */
  currencySymbol(
    currency: string,
    currencyDisplay: keyof Intl.NumberFormatOptionsCurrencyDisplayRegistry = 'symbol'
  ): string {
    return this.numberObject({
      style: 'currency',
      currencyDisplay,
      currency
    })
      ?.formatToParts?.(100)
      ?.find?.(item => item.type === 'currency')?.value || currency
  }

  /**
   * Unit formatting.
   * If the style is 'unit', a unit property must be provided.
   *
   * Форматирование юнитов.
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param unitOptions the unit to use in unit formatting/ блок для использования
   * в форматировании блока
   */
  unit(
    value: NumberOrString,
    unitOptions?: string | Intl.NumberFormatOptions
  ): string {
    const options: Intl.NumberFormatOptions = ({
      style: 'unit',
      ...(typeof unitOptions === 'string' ? { unit: unitOptions } : unitOptions || {})
    })

    const number: string = value
      .toString()
      .replace(/^([\S\s]+[\d ])([a-zA-Z]+)$/i, (...text: string[]): string => {
        options.unit = text[2].toLowerCase()
        return text[1]
      })

    return this.number(number, options)
  }

  /**
   * Возвращает отформатированный размер файла
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param unitOptions the unit to use in unit formatting /<br>блок для использования
   * в форматировании блока
   */
  sizeFile(
    value: NumberOrString,
    unitOptions:
      'byte' |
      'kilobyte' |
      'megabyte' |
      'gigabyte' |
      'terabyte' |
      'petabyte' |
      Intl.NumberFormatOptions = 'byte'
  ): string {
    const number: number = toNumber(value)

    if (
      number > 1024
      && isString(unitOptions)
    ) {
      switch (unitOptions) {
        case 'byte':
          return this.sizeFile(number / 1024, 'kilobyte')
        case 'kilobyte':
          return this.sizeFile(number / 1024, 'megabyte')
        case 'megabyte':
          return this.sizeFile(number / 1024, 'gigabyte')
        case 'gigabyte':
          return this.sizeFile(number / 1024, 'terabyte')
        case 'terabyte':
          return this.sizeFile(number / 1024, 'petabyte')
      }
    }

    return this.unit(value, unitOptions)
  }

  /**
   * Number as a percentage.
   *
   * Число в виде процента.
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param options an object with some or all properties/ объект с некоторыми или всеми свойствами
   */
  percent(
    value: NumberOrString,
    options?: Intl.NumberFormatOptions
  ): string {
    return this.number(value, {
      style: 'percent',
      ...(options || {})
    })
  }

  /**
   * Number as a percentage (unit).
   *
   * Число в виде процента (единица).
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param options an object with some or all properties/
   * объект с некоторыми или всеми свойствами
   */
  percentBy100(
    value: NumberOrString,
    options?: Intl.NumberFormatOptions
  ): string {
    return this.percent(toNumber(value) / 100, options)
  }

  /**
   * Применять форматирование, учитывающее множественное число, и языковые правила, связанные с множественным числом
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param words list of words for formatting (in the format one|two|few|many|other|zero)/
   * список слов для форматирования (в формате `one|two|few|many|other|zero`)
   * @param options Property for PluralRules/ свойство для PluralRules
   * @param optionsNumber an object with some or all properties/ объект с некоторыми или всеми свойствами
   */
  plural(
    value: NumberOrString,
    words: string,
    options?: Intl.PluralRulesOptions,
    optionsNumber?: Intl.NumberFormatOptions
  ): string {
    const number = toNumber(value)
    const list = words.split('|')

    if (list.length > 1) {
      try {
        if (isDomRuntime()) {
          const plural = new Intl.PluralRules(this.getLocation(), options)
          const type = plural.select(number)
          let wordsFormat: string | undefined

          switch (type) {
            case 'zero':
              wordsFormat = list[list.length - 1]
              break
            case 'one':
              wordsFormat = list?.[0]
              break
            case 'two':
              wordsFormat = list?.[1]
              break
            case 'few':
              wordsFormat = list?.[3] ? list?.[2] : list?.[1]
              break
            case 'many':
              wordsFormat = list?.[3] || list?.[2] || list?.[1]
              break
            case 'other':
              if (list.length === 6) {
                wordsFormat = list[list.length - 2]
              } else {
                wordsFormat = list[list.length - 1]
              }
              break
          }

          return `${this.number(number, optionsNumber)} ${wordsFormat ?? ''}`.trim()
        }
      } catch (e) {
        console.error('plural: ', e)
      }
    }

    return `${this.number(number, optionsNumber)} ${list?.[0] ?? ''}`.trim()
  }

  /**
   * Enables language-sensitive date and time formatting.
   *
   * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
   * @param value the date to format/ дата для форматирования
   * @param type type of data format/ тип формата data
   * @param styleOptions the representation of the month/ представление месяца
   * @param hour24 whether to use 12-hour time/ использовать ли 12-часовое время
   */
  date(
    value: NumberOrStringOrDate,
    type?: GeoDate,
    styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions,
    hour24?: boolean
  ): string {
    const date = toDate(value)

    const isDisplay = typeof styleOptions === 'string'
    const options = this.dateOptions(type, isDisplay ? styleOptions : 'short')

    if (hour24) {
      options.hour12 = false
    }

    if (!isDisplay) {
      Object.assign(options, styleOptions)
    }

    return date.toLocaleString(this.getLocation(), options)
  }

  /**
   * Enables language-sensitive relative time formatting.
   *
   * Включает форматирование относительного времени с учетом языка.
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param styleOptions the length of the internationalized message/
   * длина интернационализированного сообщения
   * @param todayValue current day/ текущий день
   */
  relative(
    value: NumberOrStringOrDate,
    styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions,
    todayValue?: Date
  ): string {
    const date = toDate(value)
    const today = todayValue || new Date()
    const options: Intl.RelativeTimeFormatOptions = ({
      numeric: 'auto',
      ...(typeof styleOptions === 'string' ? { style: styleOptions } : styleOptions || {})
    })

    let unit: Intl.RelativeTimeFormatUnit = 'second'
    let relative = (date.getTime() - today.getTime()) / 1000

    if (Math.abs(relative) >= 60) {
      unit = 'minute'
      relative /= 60

      if (Math.abs(relative) >= 60) {
        unit = 'hour'
        relative /= 60

        if (Math.abs(relative) >= 24) {
          unit = 'day'
          relative /= 24

          if (Math.abs(relative) >= 30) {
            unit = 'month'
            relative /= 30

            if (Math.abs(relative) >= 12) {
              unit = 'year'
              relative /= 12
            }
          }
        }
      }
    }

    return this.relativeByValue(relative, unit, options)
  }

  /**
   * Enables language-sensitive relative time formatting
   * Including the ability to add a limit to output the standard time format if the value
   * exceeds the allowable limit.
   *
   * Включает форматирование относительного времени с учетом языка.
   * Включая возможность добавления лимита, чтобы выводить уже стандартный формат времени,
   * если значение вышло за пределы допустимого.
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param limit values that determine the output limit (values per day)/
   * значения, по которым определяем предел вывода (значения в день)
   * @param todayValue current day/ текущий день
   * @param relativeOptions the length of the internationalized message/
   * длина интернационализированного сообщения
   * @param dateOptions the representation of the month/ представление месяца
   * @param type type of data format/ тип формата data
   * @param hour24 whether to use 12-hour time/ использовать ли 12-часовое время
   */
  relativeLimit(
    value: NumberOrStringOrDate,
    limit: number,
    todayValue?: Date,
    relativeOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions,
    dateOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions,
    type?: GeoDate,
    hour24?: boolean
  ): string {
    const date = toDate(value)
    const today = todayValue || new Date()
    const limitValueIn = (new Date(today))
    const limitValueOut = (new Date(today))

    limitValueIn.setDate(today.getDate() - limit)
    limitValueOut.setDate(today.getDate() + limit)

    if (
      date >= limitValueIn
      && date <= limitValueOut
    ) {
      return this.relative(
        date,
        relativeOptions,
        today
      )
    } else {
      return this.date(
        date,
        type,
        dateOptions,
        hour24
      )
    }
  }

  /**
   * Возвращает отформатированное значение времени, прошедшего с момента события
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param unit time unit/ единица времени
   * @param styleOptions additional option or formatting style/ дополнительная опция или стиль форматирования
   */
  relativeByValue(
    value: NumberOrString,
    unit: Intl.RelativeTimeFormatUnit,
    styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions
  ): string {
    const options: Intl.RelativeTimeFormatOptions = ({
      numeric: 'auto',
      ...(typeof styleOptions === 'string' ? { style: styleOptions } : styleOptions || {})
    })

    try {
      if (isDomRuntime()) {
        return new Intl.RelativeTimeFormat(this.getLocation(), options).format(Math.round(toNumber(value)), unit)
      }
    } catch (e) {
      console.error('relative: ', e)
    }

    return ''
  }

  /**
   * Names of months.<br>
   * Названия месяцев.
   * @param value the date to format/ дата для форматирования
   * @param style the representation of the month/ представление месяца
   */
  month(
    value?: NumberOrStringOrDate,
    style?: Intl.DateTimeFormatOptions['month']
  ): string {
    try {
      if (isDomRuntime()) {
        return Intl.DateTimeFormat(this.getLocation(), { month: style || 'long' })
          .format(toDate(value))
      }
    } catch (e) {
      console.error('month: ', e)
    }

    return ''
  }

  /**
   * Array to list of months.
   *
   * Массив в список месяцев.
   * @param style the representation of the month/ представление месяца
   */
  months(
    style?: Intl.DateTimeFormatOptions['month']
  ): ItemValue<number | undefined>[] {
    const list: ItemValue<number | undefined>[] = [{
      label: '',
      value: undefined
    }]

    try {
      if (isDomRuntime()) {
        const date = new Date()
        const format = Intl.DateTimeFormat(this.getLocation(), { month: style || 'long' })

        for (let i = 0; i < 12; i++) {
          date.setMonth(i)
          list.push({
            label: format.format(date)
              .replace(/^./, character => character.toUpperCase()),
            value: i + 1
          })
        }
      }
    } catch (e) {
      console.error('months: ', e)
    }

    return list
  }

  /**
   * Returns names of days of the week.
   *
   * Возвращает названия дней недели.
   * @param value the date to format/ дата для форматирования
   * @param style the representation of the weekday/ представление о дне недели
   */
  weekday(
    value?: NumberOrStringOrDate,
    style?: Intl.DateTimeFormatOptions['weekday']
  ): string {
    try {
      if (isDomRuntime()) {
        return Intl.DateTimeFormat(this.getLocation(), { weekday: style || 'long' })
          .format(toDate(value))
      }
    } catch (e) {
      console.error('weekday: ', e)
    }

    return ''
  }

  /**
   * An array of the list of names of the days of the week.
   *
   * Массив из списка названий дней недели.
   * @param style the representation of the weekday/ представление о дне недели
   */
  weekdays(
    style?: Intl.DateTimeFormatOptions['weekday']
  ): ItemValue<number | undefined>[] {
    const list: ItemValue<number | undefined>[] = [{
      label: '',
      value: undefined
    }]

    try {
      if (isDomRuntime()) {
        const date = new Date()
        const format = Intl.DateTimeFormat(this.getLocation(), { weekday: style || 'long' })
        const current = date.getDay() + (this.geo.firstDay === 'Mo' ? -1 : 1)

        date.setDate(date.getDate() - current)

        for (let i = 0; i < 7; i++) {
          list.push({
            label: format
              .format(date)
              .replace(/^./, character => character.toUpperCase()),
            value: date.getDay()
          })

          date.setDate(date.getDate() + 1)
        }
      }
    } catch (e) {
      console.error('weekdays: ', e)
    }

    return list
  }

  /**
   * Time.
   *
   * Время.
   * @param value the date to format/ дата для форматирования
   */
  time(value: NumberOrStringOrDate): string {
    return this.date(value, 'time')
  }

  /**
   * Sorts strings taking into account the characteristics of countries.
   *
   * Сортирует строки с учетом особенностей стран.
   * @param data an array with data/ массив с данными
   * @param compareFn a function for sorting/ функция для сортировки
   */
  sort<T>(
    data: T[],
    compareFn: (a: T, b: T) => [string, string] = (a, b) => [a as string, b as string]
  ) {
    if (isDomRuntime()) {
      const collator = new Intl.Collator(this.getLocation())

      return data.sort((a, b) => collator.compare(...compareFn(a, b)))
    }

    return data
  }

  /**
   * The object enables language-sensitive number formatting.
   *
   * Объект включает форматирование чисел с учетом языка.
   * @param options an object with some or all properties/
   * объект с некоторыми или всеми свойствами
   */
  private numberObject(options?: Intl.NumberFormatOptions): Intl.NumberFormat | undefined {
    try {
      if (isDomRuntime()) {
        return new Intl.NumberFormat(this.getLocation(), options)
      }
    } catch (e) {
      console.error('numberObject: ', e)
    }

    return undefined
  }

  /**
   * Returns options for data according to its type.
   *
   * Возвращает options для data по его типу.
   * @param type type of data format/ тип формата data
   * @param display the representation of the month/ представление месяца
   */
  private dateOptions(
    type?: GeoDate,
    display: Intl.DateTimeFormatOptions['month'] = 'short'
  ): Intl.DateTimeFormatOptions {
    const options: Intl.DateTimeFormatOptions = {}

    if (['full', 'datetime', 'date', undefined, 'year-month', 'year'].indexOf(type) !== -1) {
      options.year = 'numeric'
    }

    if (['full', 'datetime', 'date', undefined, 'year-month', 'month', 'day-month'].indexOf(type) !== -1) {
      options.month = display
    }

    if (['full', 'datetime', 'date', undefined, 'day', 'day-month'].indexOf(type) !== -1) {
      options.day = '2-digit'
    }

    if (type !== undefined) {
      if (['full', 'datetime', 'time', 'hour-minute', 'hour'].indexOf(type) !== -1) {
        options.hour = '2-digit'
      }

      if (['full', 'datetime', 'time', 'hour-minute', 'minute'].indexOf(type) !== -1) {
        options.minute = '2-digit'
      }

      if (['full', 'time', 'second'].indexOf(type) !== -1) {
        options.second = '2-digit'
      }
    }

    return options
  }
}

const items: Record<string, GeoIntl> = {}
