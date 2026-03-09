import {
  computed,
  type ComputedRef,
  type Ref
} from 'vue'
import {
  type GeoDate,
  GeoIntl,
  type ItemValue,
  type NumberOrString,
  type NumberOrStringOrDate
} from '@dxtmisha/functional-basic'

import { getRef } from '../../functions/ref/getRef'
import { toRefItem } from '../../functions/ref/toRefItem'

import { GeoRef } from './GeoRef'

import type { RefOrNormal } from '../../types/refTypes'

/**
 * Reactive class for managing the formatting of numbers and dates.
 *
 * Реактивный класс для управления форматированием чисел и дат.
 */
export class GeoIntlRef {
  private location: Ref<string | undefined>
  private intl: ComputedRef<GeoIntl>

  /**
   * Constructor
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  constructor(code?: RefOrNormal<string>) {
    this.location = toRefItem(code)
    this.intl = computed(() => new GeoIntl(this.location.value ?? GeoRef.getLanguage().value))
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
    value?: RefOrNormal<string>,
    typeOptions?: Intl.DisplayNamesOptions['type'] | Intl.DisplayNamesOptions
  ): ComputedRef<string> {
    return computed(() => this.intl.value.display(getRef(value), typeOptions))
  }

  /**
   * Get display names of language.
   *
   * Получить отображаемые имена языка.
   * @param value the code to provide depends on the type/ предоставляемый код зависит от типа
   * @param style the formatting style to use/ используемый стиль форматирования
   */
  languageName(
    value?: RefOrNormal<string>,
    style?: Intl.RelativeTimeFormatStyle
  ): ComputedRef<string> {
    return computed(() => this.intl.value.languageName(getRef(value), style))
  }

  /**
   * Get display names of region.
   *
   * Получить отображаемые имена региона.
   * @param value the code to provide depends on the type/ предоставляемый код зависит от типа
   * @param style the formatting style to use/ используемый стиль форматирования
   */
  countryName(
    value?: RefOrNormal<string>,
    style?: Intl.RelativeTimeFormatStyle
  ): ComputedRef<string> {
    return computed(() => this.intl.value.countryName(getRef(value), style))
  }

  /**
   * In basic use without specifying a locale, a formatted string.
   *
   * При обычном использовании без указания локали форматированная строка
   *
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param options an object with some or all properties/ объект с некоторыми
   * или всеми свойствами
   */
  number(
    value: RefOrNormal<NumberOrString>,
    options?: Intl.NumberFormatOptions
  ): ComputedRef<string> {
    return computed(() => this.intl.value.number(getRef(value), options))
  }

  /**
   * Decimal point symbol.
   *
   * Символ десятичной точки.
   */
  decimal(): ComputedRef<string> {
    return computed(() => this.intl.value.decimal())
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
    value: RefOrNormal<NumberOrString>,
    currencyOptions?: RefOrNormal<string | Intl.NumberFormatOptions>,
    numberOnly = false
  ): ComputedRef<string> {
    return computed(
      () => this.intl.value.currency(
        getRef(value),
        getRef(currencyOptions),
        numberOnly
      )
    )
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
    currency: RefOrNormal<string>,
    currencyDisplay: keyof Intl.NumberFormatOptionsCurrencyDisplayRegistry = 'symbol'
  ): ComputedRef<string> {
    return computed(() => this.intl.value.currencySymbol(getRef(currency), currencyDisplay))
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
    value: RefOrNormal<NumberOrString>,
    unitOptions?: string | Intl.NumberFormatOptions
  ): ComputedRef<string> {
    return computed(() => this.intl.value.unit(getRef(value), unitOptions))
  }

  /**
   * Возвращает отформатированный размер файла
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param unitOptions the unit to use in unit formatting /<br>блок для использования
   * в форматировании блока
   */
  sizeFile(
    value: RefOrNormal<NumberOrString>,
    unitOptions:
      'byte'
      | 'kilobyte'
      | 'megabyte'
      | 'gigabyte'
      | 'terabyte'
      | 'petabyte'
      | Intl.NumberFormatOptions = 'byte'
  ): ComputedRef<string> {
    return computed(() => this.intl.value.sizeFile(getRef(value), unitOptions))
  }

  /**
   * Number as a percentage.
   *
   * Число в виде процента.
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param options an object with some or all properties/ объект с некоторыми или всеми свойствами
   */
  percent(
    value: RefOrNormal<NumberOrString>,
    options?: Intl.NumberFormatOptions
  ): ComputedRef<string> {
    return computed(() => this.intl.value.percent(getRef(value), options))
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
    value: RefOrNormal<NumberOrString>,
    options?: Intl.NumberFormatOptions
  ): ComputedRef<string> {
    return computed(() => this.intl.value.percentBy100(getRef(value), options))
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
    value: RefOrNormal<NumberOrString>,
    words: string,
    options?: Intl.PluralRulesOptions,
    optionsNumber?: Intl.NumberFormatOptions
  ): ComputedRef<string> {
    return computed(() => this.intl.value.plural(getRef(value), words, options, optionsNumber))
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
    value: RefOrNormal<NumberOrStringOrDate>,
    type?: GeoDate,
    styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions,
    hour24?: boolean
  ): ComputedRef<string> {
    return computed(() => this.intl.value.date(getRef(value), type, styleOptions, hour24))
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
    value: RefOrNormal<NumberOrStringOrDate>,
    styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions,
    todayValue?: Date
  ): ComputedRef<string> {
    return computed(() => this.intl.value.relative(getRef(value), styleOptions, todayValue))
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
    value: RefOrNormal<NumberOrStringOrDate>,
    limit: number,
    todayValue?: Date,
    relativeOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions,
    dateOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions,
    type?: GeoDate,
    hour24?: boolean
  ): ComputedRef<string> {
    return computed(() => this.intl.value.relativeLimit(
      getRef(value),
      limit,
      todayValue,
      relativeOptions,
      dateOptions,
      type,
      hour24
    ))
  }

  /**
   * Возвращает отформатированное значение времени, прошедшего с момента события
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param unit time unit/ единица времени
   * @param styleOptions additional option or formatting style/ дополнительная опция или стиль форматирования
   */
  relativeByValue(
    value: RefOrNormal<NumberOrString>,
    unit: Intl.RelativeTimeFormatUnit,
    styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions
  ): ComputedRef<string> {
    return computed(() => this.intl.value.relativeByValue(getRef(value), unit, styleOptions))
  }

  /**
   * Names of months.
   *
   * Названия месяцев.
   * @param value the date to format/ дата для форматирования
   * @param style the representation of the month/ представление месяца
   */
  month(
    value?: RefOrNormal<NumberOrStringOrDate>,
    style?: Intl.DateTimeFormatOptions['month']
  ): ComputedRef<string> {
    return computed(() => this.intl.value.month(getRef(value), style))
  }

  /**
   * Array to list of months.
   *
   * Массив в список месяцев.
   * @param style the representation of the month/ представление месяца
   */
  months(
    style?: Intl.DateTimeFormatOptions['month']
  ): ComputedRef<ItemValue<number | undefined>[]> {
    return computed(() => this.intl.value.months(style))
  }

  /**
   * Returns names of days of the week.
   *
   * Возвращает названия дней недели.
   * @param value the date to format/ дата для форматирования
   * @param style the representation of the weekday/ представление о дне недели
   */
  weekday(
    value?: RefOrNormal<NumberOrStringOrDate>,
    style?: Intl.DateTimeFormatOptions['weekday']
  ): ComputedRef<string> {
    return computed(() => this.intl.value.weekday(getRef(value), style))
  }

  /**
   * An array of the list of names of the days of the week.
   *
   * Массив из списка названий дней недели.
   * @param style the representation of the weekday/ представление о дне недели
   */
  weekdays(
    style?: Intl.DateTimeFormatOptions['weekday']
  ): ComputedRef<ItemValue<number | undefined>[]> {
    return computed(() => this.intl.value.weekdays(style))
  }

  /**
   * Time.
   *
   * Время.
   * @param value the date to format/ дата для форматирования
   */
  time(value: RefOrNormal<NumberOrStringOrDate>): ComputedRef<string> {
    return computed(() => this.intl.value.time(getRef(value)))
  }

  /**
   * Sorts strings taking into account the characteristics of countries.
   *
   * Сортирует строки с учетом особенностей стран.
   * @param data an array with data/ массив с данными
   * @param compareFn a function for sorting/ функция для сортировки
   */
  sort<T>(
    data: RefOrNormal<T[]>,
    compareFn: (a: T, b: T) => [string, string] = (a, b) => [a as string, b as string]
  ): ComputedRef<T[]> {
    return computed(() => this.intl.value.sort([...getRef(data)], compareFn))
  }
}
