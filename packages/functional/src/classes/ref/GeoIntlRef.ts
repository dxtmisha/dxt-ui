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
 * Reactive `GeoIntl` facade for numbers, money, dates, names and locale-aware sorting. Methods return computed refs that track supported value refs and the explicit locale or `GeoRef` fallback. Use the nonreactive GeoIntl class when computed updates are unnecessary.
 *
 * Реактивный фасад `GeoIntl` для чисел, валют, дат, названий и сортировки с учётом локали. Методы возвращают вычисляемые ссылки, отслеживающие поддерживаемые входные ссылки и явную локаль либо резервную локаль `GeoRef`. Используйте нереактивный GeoIntl, если вычисляемые обновления не нужны.
 */
export class GeoIntlRef {
  /** Explicit locale ref or undefined for GeoRef fallback / Явная ссылка на локаль либо undefined для локали GeoRef */
  private location: Ref<string | undefined>
  /** Locale-dependent formatting utility / Утилита форматирования текущей локали */
  private intl: ComputedRef<GeoIntl>

  /**
   * Initializes GeoIntlRef with the supplied configuration.
   *
   * Инициализирует GeoIntlRef с переданными настройками.
   * @param code Locale, country or language code; a ref is supported where declared. / Код локали, страны или языка; ссылка поддерживается согласно сигнатуре.
   */
  constructor(code?: RefOrNormal<string>) {
    this.location = toRefItem(code)
    this.intl = computed(() => new GeoIntl(this.location.value ?? GeoRef.getLocation().value))
  }

  /**
   * Returns a localized display name for the requested Intl type.
   *
   * Возвращает локализованное название для указанного типа Intl.
   * @param value Value to format; a ref is supported where declared. / Значение для форматирования; ссылка поддерживается согласно сигнатуре.
   * @param typeOptions Intl display-name type or options. / Тип отображаемого названия Intl либо опции.
   * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
   */
  display(
    value?: RefOrNormal<string>,
    typeOptions?: Intl.DisplayNamesOptions['type'] | Intl.DisplayNamesOptions
  ): ComputedRef<string> {
    return computed(() => this.intl.value.display(getRef(value), typeOptions))
  }

  /**
   * Returns the localized language name.
   *
   * Возвращает локализованное название языка.
   * @param value Value to format; a ref is supported where declared. / Значение для форматирования; ссылка поддерживается согласно сигнатуре.
   * @param style Intl display style. / Стиль отображения Intl.
   * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
   */
  languageName(
    value?: RefOrNormal<string>,
    style?: Intl.RelativeTimeFormatStyle
  ): ComputedRef<string> {
    return computed(() => this.intl.value.languageName(getRef(value), style))
  }

  /**
   * Returns the localized region name.
   *
   * Возвращает локализованное название региона.
   * @param value Value to format; a ref is supported where declared. / Значение для форматирования; ссылка поддерживается согласно сигнатуре.
   * @param style Intl display style. / Стиль отображения Intl.
   * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
   */
  countryName(
    value?: RefOrNormal<string>,
    style?: Intl.RelativeTimeFormatStyle
  ): ComputedRef<string> {
    return computed(() => this.intl.value.countryName(getRef(value), style))
  }

  /**
   * Formats a numeric value or numeric string using locale rules and number options.
   *
   * Форматирует число или числовую строку по правилам локали и числовым опциям.
   * @param value Value to format; a ref is supported where declared. / Значение для форматирования; ссылка поддерживается согласно сигнатуре.
   * @param options Configuration options. / Параметры настройки.
   * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
   */
  number(
    value: RefOrNormal<NumberOrString>,
    options?: Intl.NumberFormatOptions
  ): ComputedRef<string> {
    return computed(() => this.intl.value.number(getRef(value), options))
  }

  /**
   * Returns the locale decimal separator.
   *
   * Возвращает десятичный разделитель локали.
   * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
   */
  decimal(): ComputedRef<string> {
    return computed(() => this.intl.value.decimal())
  }

  /**
   * Formats money with a currency code or reactive option object. `numberOnly` omits the currency representation.
   *
   * Форматирует сумму с кодом валюты или реактивным объектом опций. `numberOnly` убирает обозначение валюты.
   * @param value Value to format; a ref is supported where declared. / Значение для форматирования; ссылка поддерживается согласно сигнатуре.
   * @param currencyOptions Currency code or Intl number options. / Код валюты либо числовые опции Intl.
   * @param numberOnly Omit the currency representation; defaults to false. / Убрать обозначение валюты; по умолчанию false.
   * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
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
   * Returns the requested currency representation, falling back to its code.
   *
   * Возвращает запрошенное представление валюты с резервным возвратом кода.
   * @param currency Currency code. / Код валюты.
   * @param currencyDisplay Currency representation; defaults to symbol. / Представление валюты; по умолчанию symbol.
   * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
   */
  currencySymbol(
    currency: RefOrNormal<string>,
    currencyDisplay: keyof Intl.NumberFormatOptionsCurrencyDisplayRegistry = 'symbol'
  ): ComputedRef<string> {
    return computed(() => this.intl.value.currencySymbol(getRef(currency), currencyDisplay))
  }

  /**
   * Formats a numeric value with an Intl unit; it does not perform regional unit conversion.
   *
   * Форматирует число с единицей Intl; не выполняет региональную конвертацию единиц.
   * @param value Value to format; a ref is supported where declared. / Значение для форматирования; ссылка поддерживается согласно сигнатуре.
   * @param unitOptions Unit identifier or Intl number options. / Идентификатор единицы либо числовые опции Intl.
   * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
   */
  unit(
    value: RefOrNormal<NumberOrString>,
    unitOptions?: string | Intl.NumberFormatOptions
  ): ComputedRef<string> {
    return computed(() => this.intl.value.unit(getRef(value), unitOptions))
  }

  /**
   * Formats a file size starting with the supplied unit. String units are promoted when the value exceeds 1024; an options object is passed to unit formatting.
   *
   * Форматирует размер файла начиная с переданной единицы. Строковые единицы повышаются при значении больше 1024; объект опций передаётся форматированию единиц.
   * @param value Value to format; a ref is supported where declared. / Значение для форматирования; ссылка поддерживается согласно сигнатуре.
   * @param unitOptions Unit identifier or Intl number options. / Идентификатор единицы либо числовые опции Intl.
   * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
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
   * Formats a ratio as a percentage: 0.25 becomes 25%.
   *
   * Форматирует долю в проценты: 0.25 превращается в 25%.
   * @param value Value to format; a ref is supported where declared. / Значение для форматирования; ссылка поддерживается согласно сигнатуре.
   * @param options Configuration options. / Параметры настройки.
   * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
   */
  percent(
    value: RefOrNormal<NumberOrString>,
    options?: Intl.NumberFormatOptions
  ): ComputedRef<string> {
    return computed(() => this.intl.value.percent(getRef(value), options))
  }

  /**
   * Divides by 100 before percentage formatting: 25 becomes 25%.
   *
   * Делит на 100 перед форматированием процентов: 25 превращается в 25%.
   * @param value Value to format; a ref is supported where declared. / Значение для форматирования; ссылка поддерживается согласно сигнатуре.
   * @param options Configuration options. / Параметры настройки.
   * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
   */
  percentBy100(
    value: RefOrNormal<NumberOrString>,
    options?: Intl.NumberFormatOptions
  ): ComputedRef<string> {
    return computed(() => this.intl.value.percentBy100(getRef(value), options))
  }

  /**
   * Selects a plural word form and formats its count. Pass pipe-separated word variants supported by `GeoIntl`.
   *
   * Выбирает форму множественного числа и форматирует количество. Передавайте варианты слов через вертикальную черту по правилам `GeoIntl`.
   * @param value Value to format; a ref is supported where declared. / Значение для форматирования; ссылка поддерживается согласно сигнатуре.
   * @param words Pipe-separated plural word forms. / Формы слова через вертикальную черту.
   * @param options Configuration options. / Параметры настройки.
   * @param optionsNumber Number formatting options for the count. / Опции форматирования числового количества.
   * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
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
   * Formats a date with a Geo format type, date options and an optional 24-hour clock override.
   *
   * Форматирует дату с типом Geo, опциями даты и необязательным переключением на 24-часовые часы.
   * @param value Value to format; a ref is supported where declared. / Значение для форматирования; ссылка поддерживается согласно сигнатуре.
   * @param type Output format or event type(s), according to the signature. / Формат вывода либо типы событий согласно сигнатуре.
   * @param styleOptions Intl style or formatting options. / Стиль Intl либо параметры форматирования.
   * @param hour24 Whether to use a 24-hour clock. / Использовать ли 24-часовые часы.
   * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
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
   * Formats a date relative to the reference date using GeoIntl’s unit selection.
   *
   * Форматирует дату относительно точки отсчёта с выбором единицы по правилам GeoIntl.
   * @param value Value to format; a ref is supported where declared. / Значение для форматирования; ссылка поддерживается согласно сигнатуре.
   * @param styleOptions Intl style or formatting options. / Стиль Intl либо параметры форматирования.
   * @param todayValue Reference date; omitted values use the current date when evaluated. / Дата отсчёта; при отсутствии используется текущая дата в момент вычисления.
   * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
   */
  relative(
    value: RefOrNormal<NumberOrStringOrDate>,
    styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions,
    todayValue?: Date
  ): ComputedRef<string> {
    return computed(() => this.intl.value.relative(getRef(value), styleOptions, todayValue))
  }

  /**
   * Uses relative formatting inside the inclusive ±limit-day interval. Outside that interval, delegates to date formatting with all supplied date options.
   *
   * Использует относительное время внутри включительного интервала ±limit дней. Снаружи форматирует дату со всеми переданными опциями даты.
   * @param value Value to format; a ref is supported where declared. / Значение для форматирования; ссылка поддерживается согласно сигнатуре.
   * @param limit Inclusive relative-time limit in days. / Включительный лимит относительного времени в днях.
   * @param todayValue Reference date; omitted values use the current date when evaluated. / Дата отсчёта; при отсутствии используется текущая дата в момент вычисления.
   * @param relativeOptions Relative-time style or Intl options. / Стиль либо опции Intl относительного времени.
   * @param dateOptions Date style or Intl date options for values outside the limit. / Стиль либо опции Intl даты за пределами лимита.
   * @param type Output format or event type(s), according to the signature. / Формат вывода либо типы событий согласно сигнатуре.
   * @param hour24 Whether to use a 24-hour clock. / Использовать ли 24-часовые часы.
   * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
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
   * Formats an explicit signed interval using the supplied relative-time unit.
   *
   * Форматирует явный интервал со знаком в переданной единице относительного времени.
   * @param value Value to format; a ref is supported where declared. / Значение для форматирования; ссылка поддерживается согласно сигнатуре.
   * @param unit Unit identifier. / Идентификатор единицы.
   * @param styleOptions Intl style or formatting options. / Стиль Intl либо параметры форматирования.
   * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
   */
  relativeByValue(
    value: RefOrNormal<NumberOrString>,
    unit: Intl.RelativeTimeFormatUnit,
    styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions
  ): ComputedRef<string> {
    return computed(() => this.intl.value.relativeByValue(getRef(value), unit, styleOptions))
  }

  /**
   * Returns the month name for the supplied date.
   *
   * Возвращает название месяца переданной даты.
   * @param value Value to format; a ref is supported where declared. / Значение для форматирования; ссылка поддерживается согласно сигнатуре.
   * @param style Intl display style. / Стиль отображения Intl.
   * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
   */
  month(
    value?: RefOrNormal<NumberOrStringOrDate>,
    style?: Intl.DateTimeFormatOptions['month']
  ): ComputedRef<string> {
    return computed(() => this.intl.value.month(getRef(value), style))
  }

  /**
   * Returns the placeholder followed by 12 month entries numbered 1–12.
   *
   * Возвращает пустую запись и 12 месяцев с номерами 1–12.
   * @param style Intl display style. / Стиль отображения Intl.
   * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
   */
  months(
    style?: Intl.DateTimeFormatOptions['month']
  ): ComputedRef<ItemValue<number | undefined>[]> {
    return computed(() => this.intl.value.months(style))
  }

  /**
   * Returns the weekday name for the supplied date.
   *
   * Возвращает название дня недели переданной даты.
   * @param value Value to format; a ref is supported where declared. / Значение для форматирования; ссылка поддерживается согласно сигнатуре.
   * @param style Intl display style. / Стиль отображения Intl.
   * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
   */
  weekday(
    value?: RefOrNormal<NumberOrStringOrDate>,
    style?: Intl.DateTimeFormatOptions['weekday']
  ): ComputedRef<string> {
    return computed(() => this.intl.value.weekday(getRef(value), style))
  }

  /**
   * Returns the placeholder followed by seven weekday entries in locale order.
   *
   * Возвращает пустую запись и семь дней недели в порядке локали.
   * @param style Intl display style. / Стиль отображения Intl.
   * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
   */
  weekdays(
    style?: Intl.DateTimeFormatOptions['weekday']
  ): ComputedRef<ItemValue<number | undefined>[]> {
    return computed(() => this.intl.value.weekdays(style))
  }

  /**
   * Formats the supplied date as local time.
   *
   * Форматирует переданную дату как местное время.
   * @param value Value to format; a ref is supported where declared. / Значение для форматирования; ссылка поддерживается согласно сигнатуре.
   * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
   */
  time(value: RefOrNormal<NumberOrStringOrDate>): ComputedRef<string> {
    return computed(() => this.intl.value.time(getRef(value)))
  }

  /**
   * Returns a sorted copy using locale collation. For object arrays, provide a mapper returning the two comparison strings.
   *
   * Возвращает отсортированную копию по правилам локали. Для массива объектов передайте функцию, возвращающую две сравниваемые строки.
   * @param data Input array; it is not mutated. / Входной массив; не изменяется.
   * @param compareFn Maps two entries to the two strings compared by Intl.Collator. / Преобразует две записи в две строки для сравнения Intl.Collator.
   * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
   */
  sort<T>(
    data: RefOrNormal<T[]>,
    compareFn: (a: T, b: T) => [string, string] = (a, b) => [a as string, b as string]
  ): ComputedRef<T[]> {
    return computed(() => this.intl.value.sort([...getRef(data)], compareFn))
  }
}
