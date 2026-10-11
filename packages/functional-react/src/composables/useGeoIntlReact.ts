import {
  useCallback,
  useMemo
} from 'react'
import {
  Geo,
  type GeoDate,
  GeoIntl,
  type ItemValue,
  type NumberOrString,
  type NumberOrStringOrDate
} from '@dxtmisha/functional-basic'

import { getReact } from '../functions/ref/getReact'
import type { RefOrNormalReact } from '../types/refTypes'
import { useItemReact } from './useItemReact'

/**
 * React hook for internationalization, locale-sensitive formatting of numbers, dates, currencies, and units.
 * Integrates the GeoIntl class with React state and memoization for automatic re-renders on change.
 *
 * React-хук для интернационализации и локализованного форматирования чисел, дат, валют и единиц измерения.
 * Интегрирует класс GeoIntl с состоянием React и мемоизацией для автоматических перерендеров при изменении.
 * @param code country and language code / код страны и языка
 * @returns object with internationalization formatter methods and locale data /
 * объект с методами форматирования интернационализации и данными локали
 */
export function useGeoIntlReact(
  code?: RefOrNormalReact<string>
) {
  /** Reactive country and language code / Реактивный код страны и языка */
  const [currentCode] = useItemReact(code, value => value ?? Geo.getLocation())

  /** Memoized instance of the GeoIntl class / Мемоизированный экземпляр класса GeoIntl */
  const intl = useMemo(
    () => new GeoIntl(currentCode),
    [currentCode]
  )

  /** Standard location code / Стандартный код местоположения */
  const location = useMemo(() => intl.getLocation(), [intl])

  /** First day of the week code / Код первого дня недели */
  const firstDay = useMemo(() => intl.getFirstDay(), [intl])

  /**
   * Returns the standard location code.
   *
   * Возвращает стандартный код местоположения.
   * @returns standard location code / стандартный код местоположения
   */
  const getLocation = useCallback((): string => {
    return intl.getLocation()
  }, [intl])

  /**
   * Returns the first day of the week.
   *
   * Возвращает первый день недели.
   * @returns first day of the week / первый день недели
   */
  const getFirstDay = useCallback((): string => {
    return intl.getFirstDay()
  }, [intl])

  /**
   * The consistent translation of language, region and script display names.
   *
   * Последовательный перевод отображаемых названий языка, региона и скрипта.
   * @param value code to provide depending on the type / предоставляемый код в зависимости от типа
   * @param typeOptions options specifying display name formatting / параметры форматирования отображаемого имени
   * @returns formatted display name / отформатированное отображаемое имя
   */
  const display = useCallback((
    value?: RefOrNormalReact<string>,
    typeOptions?: Intl.DisplayNamesOptions['type'] | Intl.DisplayNamesOptions
  ): string => {
    return intl.display(getReact(value), typeOptions)
  }, [intl])

  /**
   * Get display names of language.
   *
   * Получить отображаемые имена языка.
   * @param value code to provide depending on the type / предоставляемый код в зависимости от типа
   * @param style formatting style to use / используемый стиль форматирования
   * @returns formatted language name / отформатированное имя языка
   */
  const languageName = useCallback((
    value?: RefOrNormalReact<string>,
    style?: Intl.RelativeTimeFormatStyle
  ): string => {
    return intl.languageName(getReact(value), style)
  }, [intl])

  /**
   * Get display names of region.
   *
   * Получить отображаемые имена региона.
   * @param value code to provide depending on the type / предоставляемый код в зависимости от типа
   * @param style formatting style to use / используемый стиль форматирования
   * @returns formatted region name / отформатированное имя региона
   */
  const countryName = useCallback((
    value?: RefOrNormalReact<string>,
    style?: Intl.RelativeTimeFormatStyle
  ): string => {
    return intl.countryName(getReact(value), style)
  }, [intl])

  /**
   * Formats a number, bigint, or string into localized number representation.
   *
   * Форматирует число, bigint или строку в локализованное числовое представление.
   * @param value number to format / число для форматирования
   * @param options number formatting options / параметры форматирования числа
   * @returns formatted number string / отформатированная строка числа
   */
  const number = useCallback((
    value: RefOrNormalReact<NumberOrString>,
    options?: Intl.NumberFormatOptions
  ): string => {
    return intl.number(getReact(value), options)
  }, [intl])

  /**
   * Decimal point symbol for the current locale.
   *
   * Символ десятичной точки для текущей локали.
   * @returns decimal separator character / символ разделителя десятичной дроби
   */
  const decimal = useCallback((): string => {
    return intl.decimal()
  }, [intl])

  /**
   * Formats a currency value.
   *
   * Форматирование валюты.
   * @param value number to format / число для форматирования
   * @param currencyOptions currency code or formatting options / код валюты или параметры форматирования
   * @param numberOnly do not display the currency symbol / не выводить значок валюты
   * @returns formatted currency string / отформатированная строка валюты
   */
  const currency = useCallback((
    value: RefOrNormalReact<NumberOrString>,
    currencyOptions?: RefOrNormalReact<string | Intl.NumberFormatOptions>,
    numberOnly: boolean = false
  ): string => {
    return intl.currency(
      getReact(value),
      getReact(currencyOptions),
      numberOnly
    )
  }, [intl])

  /**
   * Returns the currency symbol if it exists, otherwise the currency code.
   *
   * Возвращает символ для валюты, если он есть, или сам код валюты.
   * @param currencyCode currency code / код валюты
   * @param currencyDisplay display style for the currency / способ отображения валюты
   * @returns currency symbol or code / символ или код валюты
   */
  const currencySymbol = useCallback((
    currencyCode: RefOrNormalReact<string>,
    currencyDisplay: keyof Intl.NumberFormatOptionsCurrencyDisplayRegistry = 'symbol'
  ): string => {
    return intl.currencySymbol(getReact(currencyCode), currencyDisplay)
  }, [intl])

  /**
   * Formats a value with a unit.
   *
   * Форматирование значения с единицей измерения.
   * @param value number to format / число для форматирования
   * @param unitOptions unit name or formatting options / название единицы измерения или параметры форматирования
   * @returns formatted unit string / отформатированная строка единицы измерения
   */
  const unit = useCallback((
    value: RefOrNormalReact<NumberOrString>,
    unitOptions?: string | Intl.NumberFormatOptions
  ): string => {
    return intl.unit(getReact(value), unitOptions)
  }, [intl])

  /**
   * Formats file size into a localized string.
   *
   * Возвращает отформатированный размер файла.
   * @param value file size in bytes to format / размер файла в байтах для форматирования
   * @param unitOptions file unit scale or formatting options / единица масштаба файла или параметры форматирования
   * @returns formatted file size string / отформатированная строка размера файла
   */
  const sizeFile = useCallback((
    value: RefOrNormalReact<NumberOrString>,
    unitOptions:
      'byte'
      | 'kilobyte'
      | 'megabyte'
      | 'gigabyte'
      | 'terabyte'
      | 'petabyte'
      | Intl.NumberFormatOptions = 'byte'
  ): string => {
    return intl.sizeFile(getReact(value), unitOptions)
  }, [intl])

  /**
   * Formats a number as a percentage.
   *
   * Число в виде процента.
   * @param value number to format / число для форматирования
   * @param options number formatting options / параметры форматирования числа
   * @returns formatted percentage string / отформатированная строка процента
   */
  const percent = useCallback((
    value: RefOrNormalReact<NumberOrString>,
    options?: Intl.NumberFormatOptions
  ): string => {
    return intl.percent(getReact(value), options)
  }, [intl])

  /**
   * Formats a fractional number as a percentage (multiplies by 100).
   *
   * Число в виде процента (умножает на 100).
   * @param value fractional number to format / дробное число для форматирования
   * @param options number formatting options / параметры форматирования числа
   * @returns formatted percentage string / отформатированная строка процента
   */
  const percentBy100 = useCallback((
    value: RefOrNormalReact<NumberOrString>,
    options?: Intl.NumberFormatOptions
  ): string => {
    return intl.percentBy100(getReact(value), options)
  }, [intl])

  /**
   * Applies plural formatting according to locale rules.
   *
   * Применяет форматирование с учётом правил множественного числа языка.
   * @param value number to determine plural form / число для определения формы множественного числа
   * @param words plural word options separated by pipe / варианты слов для множественного числа через пайп
   * @param options plural rules options / параметры правил множественного числа
   * @param optionsNumber number formatting options / параметры форматирования числа
   * @returns resolved plural word or formatted string / выбранная форма слова или отформатированная строка
   */
  const plural = useCallback((
    value: RefOrNormalReact<NumberOrString>,
    words: string,
    options?: Intl.PluralRulesOptions,
    optionsNumber?: Intl.NumberFormatOptions
  ): string => {
    return intl.plural(getReact(value), words, options, optionsNumber)
  }, [intl])

  /**
   * Enables language-sensitive date and time formatting.
   *
   * Форматирует дату и время с учётом языка и параметров локализации.
   * @param value date for formatting / дата для форматирования
   * @param type date format preset type / тип предустановленного формата даты
   * @param styleOptions representation style of the month or full options / представление месяца или параметры форматирования
   * @param hour24 whether to use 24-hour time format / использовать ли 24-часовой формат времени
   * @returns formatted date string / отформатированная строка даты
   */
  const date = useCallback((
    value: RefOrNormalReact<NumberOrStringOrDate>,
    type?: GeoDate,
    styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions,
    hour24?: boolean
  ): string => {
    return intl.date(getReact(value), type, styleOptions, hour24)
  }, [intl])

  /**
   * Enables language-sensitive relative time formatting.
   *
   * Включает форматирование относительного времени с учётом языка.
   * @param value date for relative calculation / дата для вычисления относительного времени
   * @param styleOptions formatting style or full relative options / стиль форматирования или полные параметры относительного времени
   * @param todayValue reference date representing current day / опорная дата текущего дня
   * @returns formatted relative time string / отформатированная строка относительного времени
   */
  const relative = useCallback((
    value: RefOrNormalReact<NumberOrStringOrDate>,
    styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions,
    todayValue?: Date
  ): string => {
    return intl.relative(getReact(value), styleOptions, todayValue)
  }, [intl])

  /**
   * Enables language-sensitive relative time formatting with a fallback limit.
   *
   * Включает форматирование относительного времени с лимитом переключения на стандартный формат.
   * @param value date for formatting / дата для форматирования
   * @param limit day boundary limit for switching format / граница в днях для переключения формата
   * @param todayValue reference date representing current day / опорная дата текущего дня
   * @param relativeOptions formatting style or relative options / стиль или параметры относительного времени
   * @param dateOptions month style or full date options / стиль месяца или полные параметры даты
   * @param type date format preset type / тип предустановленного формата даты
   * @param hour24 whether to use 24-hour time format / использовать ли 24-часовой формат времени
   * @returns formatted relative or standard date string / отформатированная строка относительной или стандартной даты
   */
  const relativeLimit = useCallback((
    value: RefOrNormalReact<NumberOrStringOrDate>,
    limit: number,
    todayValue?: Date,
    relativeOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions,
    dateOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions,
    type?: GeoDate,
    hour24?: boolean
  ): string => {
    return intl.relativeLimit(
      getReact(value),
      limit,
      todayValue,
      relativeOptions,
      dateOptions,
      type,
      hour24
    )
  }, [intl])

  /**
   * Formats relative time elapsed from a specific numeric value and unit.
   *
   * Возвращает отформатированное значение времени по числовому значению и единице.
   * @param value relative numeric value / числовое относительное значение
   * @param unit relative time unit / единица относительного времени
   * @param styleOptions formatting style or full relative options / стиль форматирования или полные параметры
   * @returns formatted relative time string / отформатированная строка относительного времени
   */
  const relativeByValue = useCallback((
    value: RefOrNormalReact<NumberOrString>,
    unit: Intl.RelativeTimeFormatUnit,
    styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions
  ): string => {
    return intl.relativeByValue(getReact(value), unit, styleOptions)
  }, [intl])

  /**
   * Formats and returns the name of the month for the given date.
   *
   * Название месяца для указанной даты.
   * @param value date for formatting / дата для форматирования
   * @param style representation style of the month / представление стиля месяца
   * @returns formatted month name / отформатированное название месяца
   */
  const month = useCallback((
    value?: RefOrNormalReact<NumberOrStringOrDate>,
    style?: Intl.DateTimeFormatOptions['month']
  ): string => {
    return intl.month(getReact(value), style)
  }, [intl])

  /**
   * Returns the list of month names and values for the current locale.
   *
   * Список названий и значений месяцев для текущей локали.
   * @param style representation style of the month / представление стиля месяца
   * @returns array of month item objects / массив объектов месяцев
   */
  const months = useCallback((
    style?: Intl.DateTimeFormatOptions['month']
  ): ItemValue<number | undefined>[] => {
    return intl.months(style)
  }, [intl])

  /**
   * Formats and returns the name of the day of the week for the given date.
   *
   * Название дня недели для указанной даты.
   * @param value date for formatting / дата для форматирования
   * @param style representation style of the weekday / представление стиля дня недели
   * @returns formatted day name / отформатированное название дня недели
   */
  const weekday = useCallback((
    value?: RefOrNormalReact<NumberOrStringOrDate>,
    style?: Intl.DateTimeFormatOptions['weekday']
  ): string => {
    return intl.weekday(getReact(value), style)
  }, [intl])

  /**
   * Returns the list of weekday names and values for the current locale.
   *
   * Список названий и значений дней недели для текущей локали.
   * @param style representation style of the weekday / представление стиля дня недели
   * @returns array of weekday item objects / массив объектов дней недели
   */
  const weekdays = useCallback((
    style?: Intl.DateTimeFormatOptions['weekday']
  ): ItemValue<number | undefined>[] => {
    return intl.weekdays(style)
  }, [intl])

  /**
   * Formats the time part of the specified date.
   *
   * Форматирует время указанной даты.
   * @param value date for formatting / дата для форматирования
   * @returns formatted time string / отформатированная строка времени
   */
  const time = useCallback((
    value: RefOrNormalReact<NumberOrStringOrDate>
  ): string => {
    return intl.time(getReact(value))
  }, [intl])

  /**
   * Sorts an array of items according to locale-aware collation rules.
   *
   * Сортирует массив данных с учётом правил сравнения текущей локали.
   * @param data array of items to sort / массив элементов для сортировки
   * @param compareFn function returning pair of strings for comparison / функция, возвращающая пару строк для сравнения
   * @returns sorted array of items / отсортированный массив элементов
   */
  const sort = useCallback(<T>(
    data: RefOrNormalReact<T[]>,
    compareFn: (firstItem: T, secondItem: T) => [string, string] = (firstItem, secondItem) => [firstItem as string, secondItem as string]
  ): T[] => {
    return intl.sort([...getReact(data)], compareFn)
  }, [intl])

  return {
    code: currentCode,
    intl,
    location,
    firstDay,
    getLocation,
    getFirstDay,
    display,
    languageName,
    countryName,
    number,
    decimal,
    currency,
    currencySymbol,
    unit,
    sizeFile,
    percent,
    percentBy100,
    plural,
    date,
    relative,
    relativeLimit,
    relativeByValue,
    month,
    months,
    weekday,
    weekdays,
    time,
    sort
  }
}
