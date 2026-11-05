import { getColumn } from '../functions/getColumn'
import { inArray } from '../functions/inArray'
import { isDomRuntime } from '../functions/isDomRuntime'
import { isString } from '../functions/isString'
import { toDate } from '../functions/toDate'
import { toNumber } from '../functions/toNumber'

import { Geo } from './Geo'
import { ErrorCenter } from './ErrorCenter'
import type { ErrorCenterInstance } from './ErrorCenterInstance'

import {
  type NumberOrStringOrDate,
  type NumberOrString,
  type ItemValue
} from '../types/basicTypes'
import {
  type GeoDate,
  type GeoHours,
  type GeoItemFull
} from '../types/geoTypes'

/**
 * Extracts numeric amount and 3-letter ISO currency code suffix /
 * Извлекает числовое значение и 3-буквенный суффикс кода валюты ISO
 */
const REGEXP_CURRENCY_SUFFIX = /^([\S\s]+[\d ])([a-zA-Z]{3})$/i

/**
 * Extracts numeric value and alphabetic measurement unit suffix /
 * Извлекает числовое значение и буквенный суффикс единицы измерения
 */
const REGEXP_UNIT_SUFFIX = /^([\S\s]+[\d ])([a-zA-Z]+)$/i

/**
 * Matches the first character of a string for capitalization /
 * Соответствует первому символу строки для перевода в верхний регистр
 */
const REGEXP_FIRST_CHAR = /^./

/** Part types excluded when formatting currency as number-only / Типы частей, исключаемые при форматировании валюты только числом */
const CURRENCY_EXCLUDED_PART_TYPES: Intl.NumberFormatPartTypes[] = ['literal', 'currency']

/** Date format types that include the year / Типы форматов даты, включающие год */
const DATE_OPTIONS_YEAR_TYPES: Array<GeoDate | undefined> = ['full', 'datetime', 'date', undefined, 'year-month', 'year']

/** Date format types that include the month / Типы форматов даты, включающие месяц */
const DATE_OPTIONS_MONTH_TYPES: Array<GeoDate | undefined> = ['full', 'datetime', 'date', undefined, 'year-month', 'month', 'day-month']

/** Date format types that include the day / Типы форматов даты, включающие день */
const DATE_OPTIONS_DAY_TYPES: Array<GeoDate | undefined> = ['full', 'datetime', 'date', undefined, 'day', 'day-month']

/** Date format types that include the hour / Типы форматов даты, включающие час */
const DATE_OPTIONS_HOUR_TYPES: GeoDate[] = ['full', 'datetime', 'time', 'hour-minute', 'hour']

/** Date format types that include the minute / Типы форматов даты, включающие минуту */
const DATE_OPTIONS_MINUTE_TYPES: GeoDate[] = ['full', 'datetime', 'time', 'hour-minute', 'minute']

/** Date format types that include the second / Типы форматов даты, включающие секунду */
const DATE_OPTIONS_SECOND_TYPES: GeoDate[] = ['full', 'time', 'second']

/** Default maximum number of cached entries / Максимальное количество кэшируемых записей по умолчанию */
const MAX_ITEMS_DEFAULT = 32

/**
 * The Intl namespace object contains several constructors as well as functionality common
 * to the internationalization constructors and other language sensitive functions. Collectively,
 * they comprise the ECMAScript Internationalization API, which provides language sensitive
 * string comparison, number formatting, date and time formatting, and more.
 *
 * Объект Intl является пространством имён для API интернационализации ECMAScript, предоставляющим
 * языка-зависимое сравнение строк, форматирование чисел и дат со временем. Конструкторы объектов
 * Collator, NumberFormat и DateTimeFormat являются свойствами объекта Intl. На этой странице
 * описаны эти свойства, а также общая функциональность конструкторов интернационализации и других
 * языка-зависимых функций.
 *
 * @remarks
 * **Warning (Single Instance per Location):** `GeoIntl` always creates and caches only a single object per standard location (`location`).
 * Both `new GeoIntl(code)` and `GeoIntl.getInstance(code)` return the existing cached instance if one has already been created for that location.
 * Consequently, the `errorCenter` constructor argument is only applied when the instance for a location is created for the first time,
 * and calling `setErrorCenter()` mutates the shared instance for that location globally.
 *
 * During SSR (when DOM runtime is unavailable), `errorCenter` is not initialized by default (`undefined`),
 * and formatting errors are silently ignored without dispatching to `ErrorCenter`.
 * In SSR, only attach a process-wide error center. A request-scoped center would be shared with other requests.
 *
 * **Внимание (Один объект на локацию):** `GeoIntl` всегда создаёт и кэширует только один объект для каждой стандартной локации (`location`).
 * Вызовы `new GeoIntl(code)` и `GeoIntl.getInstance(code)` всегда возвращают уже существующий экземпляр из кэша для данной локации.
 * Поэтому параметр `errorCenter` в конструкторе применяется только при первом создании объекта для локации,
 * а вызов `setErrorCenter()` изменяет этот общий экземпляр для данной локации глобально.
 *
 * При SSR (когда DOM-окружение недоступно) `errorCenter` по умолчанию не инициализируется (`undefined`),
 * и ошибки форматирования игнорируются без отправки в `ErrorCenter`.
 * В SSR подключайте только центр ошибок уровня приложения. Центр текущего запроса будет доступен другим запросам.
 */
export class GeoIntl {
  /** Full geo item data / Полные данные гео-объекта */
  private readonly geo: GeoItemFull

  /** Error center instance (undefined by default in SSR) / Экземпляр центра ошибок (по умолчанию undefined в SSR) */
  private errorCenter?: ErrorCenterInstance

  /**
   * Constructor
   *
   * Конструктор
   * @param code country code, full form language-country or one of them / код страны, полный вид язык-страна или один из них
   * @param errorCenter error center instance (defaults to ErrorCenter.getItem() in DOM runtime, undefined in SSR) / экземпляр центра ошибок (по умолчанию ErrorCenter.getItem() в DOM-окружении, undefined в SSR)
   */
  constructor(
    code: string = Geo.getLocation(),
    errorCenter?: ErrorCenterInstance
  ) {
    this.geo = Geo.find(code)
    const location = this.getLocation()

    if (location in items) {
      return items[location]
    }

    this.errorCenter = errorCenter ?? (isDomRuntime() ? ErrorCenter.getItem() : undefined)
    GeoIntl.setLocationItem(code, location)
    GeoIntl.setItem(location, this)
  }

  /**
   * Checks if an instance of the class exists for the specified country code.
   *
   * Проверяет, существует ли экземпляр класса для указанного кода страны.
   * @param code country code, full form language-country or one of them / код страны, полный вид язык-страна или один из них
   * @returns true if instance exists / true, если экземпляр существует
   */
  static isItem(
    code: string = Geo.getLocation()
  ): boolean {
    const location = this.getLocation(code)
    return location in items
  }

  /**
   * Returns an instance of the class according to the specified country code.
   *
   * Возвращает экземпляр класса по указанному коду страны.
   * @param code country code, full form language-country or one of them / код страны, полный вид язык-страна или один из них
   * @returns GeoIntl instance / экземпляр GeoIntl
   */
  static getInstance(code: string = Geo.getLocation()): GeoIntl {
    const location = this.getLocation(code)

    if (location in items) {
      return items[location]
    }

    return new GeoIntl(code)
  }

  /**
   * Returns the standard location code.
   *
   * Возвращает стандартный код местоположения.
   * @param code country code, full form language-country or one of them / код страны, полный вид язык-страна или один из них
   * @returns standard location code / стандартный код местоположения
   */
  static getLocation(code: string = Geo.getLocation()): string {
    if (code in locations) {
      return locations[code]
    }

    const geo = Geo.find(code)
    this.setLocationItem(code, geo.standard)
    return geo.standard
  }

  /**
   * Returns the first day of the week.
   *
   * Возвращает первый день недели.
   * @returns first day of the week / первый день недели
   */
  getFirstDay(): string {
    return this.geo.firstDay
  }

  /**
   * Returns country code and language.
   *
   * Возвращает код страны и языка.
   * @returns standard location code / стандартный код местоположения
   */
  getLocation(): string {
    return this.geo.standard
  }

  /**
   * Sets the error center instance for handling formatting errors.
   * Warning: In SSR, do not pass a request-scoped center such as `ErrorCenter.getItem()`.
   * Requests using the same cached locale would report their errors to that center.
   *
   * Устанавливает экземпляр центра ошибок для обработки ошибок форматирования.
   * Внимание: на SSR не передавайте центр текущего запроса, например `ErrorCenter.getItem()`.
   * Запросы с той же кешированной локалью будут отправлять ошибки в этот центр.
   * @param errorCenter error center instance / экземпляр центра ошибок
   * @returns this / текущий экземпляр
   */
  setErrorCenter(errorCenter?: ErrorCenterInstance): this {
    this.errorCenter = errorCenter
    return this
  }

  /**
   * Sets the maximum number of cached entries for locations and instances.
   * If the number of entries exceeds this limit, the cache is completely cleared.
   *
   * Устанавливает максимальное количество кэшируемых записей для локаций и экземпляров.
   * Если количество записей превышает этот лимит, кэш полностью очищается.
   * @param max maximum number of cached entries (default: 32) / максимальное количество кэшируемых записей (по умолчанию: 32)
   */
  static setMaxItems(max: number = MAX_ITEMS_DEFAULT): void {
    maxItems = max

    if (Object.keys(locations).length > maxItems) {
      locations = Object.create(null)
    }

    if (Object.keys(items).length > maxItems) {
      items = Object.create(null)
    }
  }

  /**
   * The consistent translation of language, region and script display names.
   *
   * Последовательный перевод отображаемых названий языка, региона и скрипта.
   * @param value the code to provide depends on the type / предоставляемый код зависит от типа
   * @param typeOptions an object with some or all of the following properties / объект с некоторыми или всеми из следующих свойств
   * @returns translated display name / переведенное отображаемое название
   */
  display(
    value?: string,
    typeOptions?: Intl.DisplayNamesOptions['type'] | Intl.DisplayNamesOptions
  ): string {
    let options: Intl.DisplayNamesOptions = { type: 'language' }
    let text

    if (typeOptions) {
      if (isString(typeOptions)) {
        options.type = typeOptions
      } else {
        options = {
          ...options,
          ...typeOptions
        }
      }
    }

    try {
      if (
        this.hasIntl()
        && typeof Intl.DisplayNames !== 'undefined'
      ) {
        if (value) {
          text = new Intl.DisplayNames(this.getLocation(), options).of(value)
        } else if (options.type === 'language') {
          text = new Intl.DisplayNames(this.getLocation(), options).of(this.geo.language)
        } else if (options.type === 'region') {
          text = new Intl.DisplayNames(this.getLocation(), options).of(this.geo.country)
        }
      }
    } catch (error) {
      this.errorCenter?.on({
        group: 'intl',
        code: 'display',
        details: error
      })
    }

    return text ?? value ?? ''
  }

  /**
   * Get display names of language.
   *
   * Получить отображаемые имена языка.
   * @param value the code to provide depends on the type / предоставляемый код зависит от типа
   * @param style the formatting style to display names / используемый стиль отображения имен
   * @returns display name of language / отображаемое имя языка
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
   * @param value the code to provide depends on the type / предоставляемый код зависит от типа
   * @param style the formatting style to display names / используемый стиль отображения имен
   * @returns display name of region / отображаемое имя региона
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
   * @param last last name / фамилию
   * @param first first name / имя
   * @param surname surname middle name (optional) / отчество
   * @param short shorten the names / сократить названия
   * @returns formatted full name / отформатированное полное имя
   */
  fullName(
    last: string,
    first: string,
    surname?: string,
    short?: boolean
  ): string {
    const nameFormat = this.geo?.nameFormat ?? 'fl'
    const firstText = short && first ? `${first[0].toUpperCase()}.` : first
    const surnameText = short && surname ? `${surname[0].toUpperCase()}.` : surname

    let fullName

    switch (nameFormat) {
      case 'fsl':
        fullName = `${firstText}${surnameText ? ` ${surnameText}` : ''} ${last}`
        break
      case 'lf':
        fullName = `${last} ${firstText}`
        break
      case 'lsf':
        fullName = `${last}${surnameText ? ` ${surnameText}` : ''} ${firstText}`
        break
      default:
        fullName = `${firstText} ${last}`
        break
    }

    return fullName
  }

  /**
   * In basic use without specifying a locale, a formatted string.
   *
   * При обычном использовании без указания локали форматированная строка.
   * @param value a number, bigint, or string, to format / число для форматирования
   * @param options an object with some or all properties / объект с некоторыми или всеми свойствами
   * @returns formatted number string / отформатированная строка числа
   */
  number(
    value: NumberOrString,
    options?: Intl.NumberFormatOptions
  ): string {
    return this.numberObject(options)?.format(toNumber(value)) || value.toString()
  }

  /**
   * Decimal point symbol.
   *
   * Символ десятичной точки.
   * @returns decimal point symbol / символ десятичной точки
   */
  decimal(): string {
    return this.numberObject()
      ?.formatToParts(1.2)
      .find(item => item.type === 'decimal')?.value || '.'
  }

  /**
   * Currency formatting.
   *
   * Форматирование валюты.
   * @param value a number, bigint, or string, to format / число для форматирования
   * @param currencyOptions the currency to use in currency formatting / валюта для использования в форматировании валюты
   * @param numberOnly do not display the currency symbol / не выводить значок валюты
   * @returns formatted currency string / отформатированная строка валюты
   */
  currency(
    value: NumberOrString,
    currencyOptions?: string | Intl.NumberFormatOptions,
    numberOnly = false
  ): string {
    const options: Intl.NumberFormatOptions = ({
      style: 'currency',
      currencyDisplay: 'symbol',
      ...(isString(currencyOptions) ? { currency: currencyOptions } : currencyOptions || {})
    })

    const number: string = value
      .toString()
      .replace(REGEXP_CURRENCY_SUFFIX, (...text: string[]): string => {
        options.currency = String(text[2]).toUpperCase()
        return String(text[1])
      })

    if (numberOnly) {
      const object = this.numberObject(options)
      if (object) {
        return getColumn(
          object.formatToParts(toNumber(value))
            .filter(item => !inArray(CURRENCY_EXCLUDED_PART_TYPES, item.type)),
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
   * @param currency the currency to use in currency formatting / валюта для использования в форматировании валюты
   * @param currencyDisplay how to display the currency in currency formatting / как отобразить валюту в формате валюты
   * @returns currency symbol or code / символ или код валюты
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
      ?.formatToParts(100)
      .find(item => item.type === 'currency')?.value || currency
  }

  /**
   * Unit formatting.
   * If the style is 'unit', a unit property must be provided.
   *
   * Форматирование юнитов.
   * @param value a number, bigint, or string, to format / число для форматирования
   * @param unitOptions the unit to use in unit formatting / блок для использования в форматировании блока
   * @returns formatted unit string / отформатированная строка единицы измерения
   */
  unit(
    value: NumberOrString,
    unitOptions?: string | Intl.NumberFormatOptions
  ): string {
    const options: Intl.NumberFormatOptions = ({
      style: 'unit',
      ...(isString(unitOptions) ? { unit: unitOptions } : unitOptions || {})
    })

    const number: string = value
      .toString()
      .replace(REGEXP_UNIT_SUFFIX, (...text: string[]): string => {
        options.unit = String(text[2]).toLowerCase()
        return String(text[1])
      })

    return this.number(number, options)
  }

  /**
   * Returns the formatted file size.
   *
   * Возвращает отформатированный размер файла.
   * @param value a number, bigint, or string, to format / число для форматирования
   * @param unitOptions the unit to use in unit formatting / блок для использования в форматировании блока
   * @returns formatted file size string / отформатированная строка размера файла
   */
  sizeFile(
    value: NumberOrString,
    unitOptions:
      'byte'
      | 'kilobyte'
      | 'megabyte'
      | 'gigabyte'
      | 'terabyte'
      | 'petabyte'
      | Intl.NumberFormatOptions = 'byte'
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
   * @param value a number, bigint, or string, to format / число для форматирования
   * @param options an object with some or all properties / объект с некоторыми или всеми свойствами
   * @returns formatted percentage string / отформатированная строка процента
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
   * @param value a number, bigint, or string, to format / число для форматирования
   * @param options an object with some or all properties / объект с некоторыми или всеми свойствами
   * @returns formatted percentage string / отформатированная строка процента
   */
  percentBy100(
    value: NumberOrString,
    options?: Intl.NumberFormatOptions
  ): string {
    return this.percent(toNumber(value) / 100, options)
  }

  /**
   * Applies plural-sensitive formatting and language rules related to plurals.
   *
   * Применяет форматирование, учитывающее множественное число, и языковые правила, связанные с множественным числом.
   * @param value a number, bigint, or string, to format / число для форматирования
   * @param words list of words for formatting (in the format one|two|few|many|other|zero) / список слов для форматирования (в формате `one|two|few|many|other|zero`)
   * @param options Property for PluralRules / свойство для PluralRules
   * @param optionsNumber an object with some or all properties / объект с некоторыми или всеми свойствами
   * @returns formatted string with plural word / отформатированная строка со словом во множественном числе
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
        if (
          this.hasIntl()
          && typeof Intl.PluralRules !== 'undefined'
        ) {
          const plural = new Intl.PluralRules(this.getLocation(), options)
          const type = plural.select(number)
          let wordsFormat: string | undefined

          switch (type) {
            case 'zero':
              wordsFormat = list[list.length - 1]
              break
            case 'one':
              wordsFormat = list[0]
              break
            case 'two':
              wordsFormat = list[1]
              break
            case 'few':
              wordsFormat = list[3] ? list[2] : list[1]
              break
            case 'many':
              wordsFormat = list[3] || list[2] || list[1]
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
      } catch (error) {
        this.errorCenter?.on({
          group: 'intl',
          code: 'plural',
          details: error
        })
      }
    }

    return `${this.number(number, optionsNumber)} ${list[0] ?? ''}`.trim()
  }

  /**
   * Enables language-sensitive date and time formatting.
   *
   * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
   * @param value the date to format / дата для форматирования
   * @param type type of data format / тип формата data
   * @param styleOptions the representation of the month / представление месяца
   * @param hour24 whether to use 12-hour time / использовать ли 12-часовое время
   * @returns formatted date and time / отформатированная дата и время
   */
  date(
    value: NumberOrStringOrDate,
    type?: GeoDate,
    styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions,
    hour24?: boolean
  ): string {
    const date = toDate(value)

    const isDisplay = isString(styleOptions)
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
   * @param value a number, bigint, or string, to format / число для форматирования
   * @param styleOptions the length of the internationalized message / длина интернационализированного сообщения
   * @param todayValue current day / текущий день
   * @returns formatted relative time / отформатированное относительное время
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
      ...(isString(styleOptions) ? { style: styleOptions } : styleOptions || {})
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
   * @param value a number, bigint, or string, to format / число для форматирования
   * @param limit values that determine the output limit (values per day) / значения, по которым определяем предел вывода (значения в день)
   * @param todayValue current day / текущий день
   * @param relativeOptions the length of the internationalized message / длина интернационализированного сообщения
   * @param dateOptions the representation of the month / представление месяца
   * @param type type of data format / тип формата data
   * @param hour24 whether to use 12-hour time / использовать ли 12-часовое время
   * @returns formatted relative or standard date string / отформатированная относительная или стандартная строка даты
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
   * Returns the formatted time value elapsed since the event.
   *
   * Возвращает отформатированное значение времени, прошедшего с момента события.
   * @param value a number, bigint, or string, to format / число для форматирования
   * @param unit time unit / единица времени
   * @param styleOptions additional option or formatting style / дополнительная опция или стиль форматирования
   * @returns formatted relative time string / отформатированная строка относительного времени
   */
  relativeByValue(
    value: NumberOrString,
    unit: Intl.RelativeTimeFormatUnit,
    styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions
  ): string {
    const options: Intl.RelativeTimeFormatOptions = ({
      numeric: 'auto',
      ...(isString(styleOptions) ? { style: styleOptions } : styleOptions || {})
    })

    try {
      if (
        this.hasIntl()
        && typeof Intl.RelativeTimeFormat !== 'undefined'
      ) {
        return new Intl.RelativeTimeFormat(this.getLocation(), options).format(Math.round(toNumber(value)), unit)
      }
    } catch (error) {
      this.errorCenter?.on({
        group: 'intl',
        code: 'relative',
        details: error
      })
    }

    return ''
  }

  /**
   * Names of months.
   *
   * Названия месяцев.
   * @param value the date to format / дата для форматирования
   * @param style the representation of the month / представление месяца
   * @returns month name / название месяца
   */
  month(
    value?: NumberOrStringOrDate,
    style?: Intl.DateTimeFormatOptions['month']
  ): string {
    try {
      if (this.hasIntlDateTimeFormat()) {
        return new Intl.DateTimeFormat(this.getLocation(), { month: style || 'long' })
          .format(toDate(value))
      }
    } catch (error) {
      this.errorCenter?.on({
        group: 'intl',
        code: 'datetime',
        details: error
      })
    }

    return ''
  }

  /**
   * Array to list of months.
   *
   * Массив в список месяцев.
   * @param style the representation of the month / представление месяца
   * @returns list of months (1-12) / список месяцев (1-12)
   */
  months(
    style?: Intl.DateTimeFormatOptions['month']
  ): ItemValue<number | undefined>[] {
    const list: ItemValue<number | undefined>[] = [{
      label: '',
      value: undefined
    }]

    try {
      if (this.hasIntlDateTimeFormat()) {
        const date = new Date(2000, 0, 1)
        const format = new Intl.DateTimeFormat(this.getLocation(), { month: style || 'long' })

        for (let index = 0; index < 12; index++) {
          date.setMonth(index)
          list.push({
            label: format.format(date)
              .replace(REGEXP_FIRST_CHAR, character => character.toUpperCase()),
            value: index + 1
          })
        }
      }
    } catch (error) {
      this.errorCenter?.on({
        group: 'intl',
        code: 'datetime',
        details: error
      })
    }

    return list
  }

  /**
   * Returns names of days of the week.
   *
   * Возвращает названия дней недели.
   * @param value the date to format / дата для форматирования
   * @param style the representation of the weekday / представление о дне недели
   * @returns weekday name / название дня недели
   */
  weekday(
    value?: NumberOrStringOrDate,
    style?: Intl.DateTimeFormatOptions['weekday']
  ): string {
    try {
      if (this.hasIntlDateTimeFormat()) {
        return new Intl.DateTimeFormat(this.getLocation(), { weekday: style || 'long' })
          .format(toDate(value))
      }
    } catch (error) {
      this.errorCenter?.on({
        group: 'intl',
        code: 'datetime',
        details: error
      })
    }

    return ''
  }

  /**
   * Array of the list of names of the days of the week.
   *
   * Массив из списка названий дней недели.
   * @param style the representation of the weekday / представление о дне недели
   * @returns list of weekdays (0-6) / список дней недели (0-6)
   */
  weekdays(
    style?: Intl.DateTimeFormatOptions['weekday']
  ): ItemValue<number | undefined>[] {
    const list: ItemValue<number | undefined>[] = [{
      label: '',
      value: undefined
    }]

    try {
      if (this.hasIntlDateTimeFormat()) {
        const date = new Date(2000, 0, 2)
        const format = new Intl.DateTimeFormat(this.getLocation(), { weekday: style || 'long' })
        const firstDayOffset = this.geo.firstDay === 'Mo' ? 1 : this.geo.firstDay === 'Sa' ? -1 : 0

        date.setDate(date.getDate() + firstDayOffset)

        for (let index = 0; index < 7; index++) {
          list.push({
            label: format
              .format(date)
              .replace(REGEXP_FIRST_CHAR, character => character.toUpperCase()),
            value: date.getDay()
          })

          date.setDate(date.getDate() + 1)
        }
      }
    } catch (error) {
      this.errorCenter?.on({
        group: 'intl',
        code: 'datetime',
        details: error
      })
    }

    return list
  }

  /**
   * Time.
   *
   * Время.
   * @param value the date to format / дата для форматирования
   * @returns formatted time / отформатированное время
   */
  time(value: NumberOrStringOrDate): string {
    return this.date(value, 'time')
  }

  /**
   * Returns the hour format (12-hour or 24-hour) for the current locale.
   *
   * Возвращает формат часов (12-часовой или 24-часовой) для текущей локали.
   * @returns hour format ('12' or '24') / формат часов ('12' или '24')
   */
  hoursType(): GeoHours {
    try {
      if (this.hasIntlDateTimeFormat()) {
        const { hour12 } = new Intl.DateTimeFormat(this.getLocation(), { hour: '2-digit' })
          .resolvedOptions()

        return hour12 === false ? '24' : '12'
      }
    } catch (error) {
      this.errorCenter?.on({
        group: 'intl',
        code: 'datetime',
        details: error
      })
    }

    return '12'
  }

  /**
   * Sorts strings taking into account the characteristics of countries.
   *
   * Сортирует строки с учетом особенностей стран.
   * @param data an array with data / массив с данными
   * @param compareFn a function for sorting / функция для сортировки
   * @returns sorted array / отсортированный массив
   */
  sort<T>(
    data: T[],
    compareFn: (itemA: T, itemB: T) => [string, string] = (itemA, itemB) => [itemA as string, itemB as string]
  ): T[] {
    if (
      this.hasIntl()
      && typeof Intl.Collator !== 'undefined'
    ) {
      const collator = new Intl.Collator(this.getLocation())

      return [...data].sort((itemA, itemB) => collator.compare(...compareFn(itemA, itemB)))
    }

    return [...data]
  }

  /**
   * Checks if the Intl object is available.
   *
   * Проверяет доступность объекта Intl.
   * @returns true if Intl is available / true, если объект Intl доступен
   */
  private hasIntl(): boolean {
    return typeof Intl !== 'undefined'
  }

  /**
   * Checks if the Intl.DateTimeFormat object is available.
   *
   * Проверяет доступность объекта Intl.DateTimeFormat.
   * @returns true if Intl.DateTimeFormat is available / true, если объект Intl.DateTimeFormat доступен
   */
  private hasIntlDateTimeFormat(): boolean {
    return this.hasIntl()
      && typeof Intl.DateTimeFormat !== 'undefined'
  }

  /**
   * Saves a GeoIntl instance to the cache, clearing the cache if the limit is exceeded.
   *
   * Сохраняет экземпляр GeoIntl в кэш, полностью очищая кэш при превышении лимита.
   * @param location standard location code / стандартный код локации
   * @param item GeoIntl instance / экземпляр GeoIntl
   */
  private static setItem(
    location: string,
    item: GeoIntl
  ): void {
    if (!(location in items)) {
      if (Object.keys(items).length >= maxItems) {
        items = Object.create(null)
      }

      if (maxItems > 0) {
        items[location] = item
      }
    }
  }

  /**
   * Saves a resolved standard location code to the cache, clearing the cache if the limit is exceeded.
   *
   * Сохраняет стандартный код локации в кэш, полностью очищая кэш при превышении лимита.
   * @param code input location code / входной код локации
   * @param location standard location code / стандартный код локации
   */
  private static setLocationItem(
    code: string,
    location: string
  ): void {
    if (!(code in locations)) {
      if (Object.keys(locations).length >= maxItems) {
        locations = Object.create(null)
      }

      if (maxItems > 0) {
        locations[code] = location
      }
    }
  }

  /**
   * Returns options for data according to its type.
   *
   * Возвращает options для data по его типу.
   * @param type type of data format / тип формата data
   * @param display the representation of the month / представление месяца
   * @returns Intl.DateTimeFormatOptions object / объект Intl.DateTimeFormatOptions
   */
  private dateOptions(
    type?: GeoDate,
    display: Intl.DateTimeFormatOptions['month'] = 'short'
  ): Intl.DateTimeFormatOptions {
    const options: Intl.DateTimeFormatOptions = {}

    if (inArray(DATE_OPTIONS_YEAR_TYPES, type)) {
      options.year = 'numeric'
    }

    if (inArray(DATE_OPTIONS_MONTH_TYPES, type)) {
      options.month = display
    }

    if (inArray(DATE_OPTIONS_DAY_TYPES, type)) {
      options.day = '2-digit'
    }

    if (inArray(DATE_OPTIONS_HOUR_TYPES, type)) {
      options.hour = '2-digit'
    }

    if (inArray(DATE_OPTIONS_MINUTE_TYPES, type)) {
      options.minute = '2-digit'
    }

    if (inArray(DATE_OPTIONS_SECOND_TYPES, type)) {
      options.second = '2-digit'
    }

    return options
  }

  /**
   * The object enables language-sensitive number formatting.
   *
   * Объект включает форматирование чисел с учетом языка.
   * @param options an object with some or all properties / объект с некоторыми или всеми свойствами
   * @returns Intl.NumberFormat instance or undefined / экземпляр Intl.NumberFormat или undefined
   */
  private numberObject(options?: Intl.NumberFormatOptions): Intl.NumberFormat | undefined {
    try {
      if (
        this.hasIntl()
        && typeof Intl.NumberFormat !== 'undefined'
      ) {
        return new Intl.NumberFormat(this.getLocation(), options)
      }
    } catch (error) {
      this.errorCenter?.on({
        group: 'intl',
        code: 'number',
        details: error
      })
    }

    return undefined
  }
}

/** Maximum number of cached entries before full reset / Максимальное количество кэшируемых записей до полной очистки */
let maxItems: number = MAX_ITEMS_DEFAULT

/** Cache of resolved standard location codes by input code / Кэш стандартных кодов локаций по входному коду */
let locations: Record<string, string> = /* #__PURE__ */ Object.create(null)

/** Cache of GeoIntl instances by standard location code / Кэш экземпляров GeoIntl по стандартному коду локации */
let items: Record<string, GeoIntl> = /* #__PURE__ */ Object.create(null)
