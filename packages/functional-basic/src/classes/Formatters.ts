import { GeoIntl } from './GeoIntl'

import { forEach } from '../functions/forEach'
import { isFilled } from '../functions/isFilled'
import { getItemByPath } from '../functions/getItemByPath'
import { toArray } from '../functions/toArray'
import { toCamelCase } from '../functions/toCamelCase'

import {
  FormattersType,
  type FormattersList,
  type FormattersOptionsList,
  type FormattersOptionsInformation,
  type FormattersOptionsCurrency,
  type FormattersOptionsDate,
  type FormattersOptionsName,
  type FormattersOptionsNumber,
  type FormattersOptionsPlural,
  type FormattersOptionsUnit,
  type FormattersReturn,
  type FormattersListProp,
  type FormattersItemProp
} from '../types/formattersTypes'

/**
 * Class for formatting a list of data based on provided options.
 *
 * Класс для форматирования списка данных на основе предоставленных параметров.
 * @template Options - type of formatting options / тип параметров форматирования.
 * @template List - type of the list of items (can be an array or a single item) / тип списка элементов (может быть массивом или одним элементом).
 * @template Item - type of a single item in the list / тип одного элемента в списке.
 */
export class Formatters<
  Options extends FormattersOptionsList = FormattersOptionsList,
  List extends FormattersListProp = FormattersListProp,
  Item extends FormattersItemProp<List> = FormattersItemProp<List>
> {
  /**
   * Constructor
   *
   * Конструктор
   * @param options formatting options for each column/ property/
   * параметры форматирования для каждого столбца/свойства
   * @param list initial list of data to format/ начальный список данных для форматирования
   */
  constructor(
    protected options: Options,
    protected list?: List
  ) { }

  /**
   * Checks if the list is set.
   *
   * Проверяет, установлен ли список.
   * @returns true if the list is set, false otherwise/ true, если список установлен, иначе false
   */
  is(): boolean {
    return Boolean(this.list)
  }

  /**
   * Checks if the list is an array.
   *
   * Проверяет, является ли список массивом.
   * @returns true if the list is an array, false otherwise/ true, если список является массивом, иначе false
   */
  isArray(): this is this & { list: FormattersList<Item> } {
    return Array.isArray(this.list)
  }

  /**
   * Returns the count of records in the list.
   *
   * Возвращает количество записей в списке.
   * @returns count of records/ количество записей
   */
  length(): number {
    if (this.list) {
      if (this.isArray()) {
        return this.list.length
      }

      return 1
    }

    return 0
  }

  /**
   * Returns the current list of data.
   *
   * Возвращает текущий список данных.
   * @returns the list of data or undefined if not set/ список данных или undefined, если не задан
   */
  getList(): FormattersList<Item> {
    if (this.list) {
      return toArray(this.list) as FormattersList<Item>
    }

    return []
  }

  /**
   * Returns the current formatting options.
   *
   * Возвращает текущие параметры форматирования.
   * @returns formatting options/ параметры форматирования
   */
  getOptions(): Options {
    return this.options
  }

  /**
   * Sets the list of data to be formatted.
   *
   * Устанавливает список данных для форматирования.
   * @param list list of data/ список данных
   * @returns the Formatters instance for chaining/ экземпляр Formatters для цепочки вызовов
   */
  setList(list: List): this {
    this.list = list
    return this
  }

  /**
   * Formats the entire list or a single item based on the provided options.
   * Adds formatted values with the suffix 'Format' to each item.
   *
   * Форматирует весь список или один элемент на основе предоставленных параметров.
   * Добавляет отформатированные значения с суффиксом 'Format' к каждому элементу.
   * @returns formatted data (list or single item) with additional formatted columns /
   * отформатированные данные (список или один элемент) с дополнительными отформатированными столбцами
   */
  to(): FormattersReturn<List, Options> {
    const list = forEach(this.getList(), (item) => {
      return {
        ...item,
        ...this.getFormatData(item)
      }
    })

    if (this.isArray()) {
      return list as any
    }

    return list[0] as any
  }

  /**
   * Generates formatted data for a single item based on options.
   *
   * Генерирует отформатированные данные для одного элемента на основе параметров.
   * @param item item to format/ элемент для форматирования
   * @protected
   */
  protected getFormatData(item: Item) {
    const format: Record<string, string> = {}

    forEach(
      this.options,
      (options, column) => {
        const formatKey = `${toCamelCase(column)}Format`
        const valueOriginal = getItemByPath(item, column)

        if (options?.transformation) {
          if (isFilled(valueOriginal)) {
            format[formatKey] = options.transformation(
              valueOriginal,
              item,
              options.options
            )
          } else {
            format[formatKey] = ''
          }
        } else {
          format[formatKey] = this.transformation(
            valueOriginal,
            item,
            options.type,
            options.options
          )
        }
      }
    )

    return format
  }

  /**
   * Router-like method to delegate formatting to specific type formatters.
   *
   * Метод-маршрутизатор для делегирования форматирования конкретным типам форматировщиков.
   * @param valueOriginal original value to format/ исходное значение для форматирования
   * @param item entire item context/ весь контекст элемента
   * @param type type of formatter to use/ тип используемого форматировщика
   * @param options additional options for the specific formatter/
   * дополнительные параметры для конкретного форматировщика
   * @protected
   * @returns Formatted string/ отформатированная строка
   */
  protected transformation<Type extends FormattersType>(
    valueOriginal: any,
    item: any,
    type?: Type,
    options?: FormattersOptionsInformation<Type>
  ): string {
    if (
      isFilled(valueOriginal)
      || type === FormattersType.name
    ) {
      switch (type) {
        case FormattersType.currency:
          return this.formatCurrency(valueOriginal, item, options as FormattersOptionsCurrency)

        case FormattersType.date:
          return this.formatDate(valueOriginal, options as FormattersOptionsDate)

        case FormattersType.name:
          return this.formatName(item, options as FormattersOptionsName)

        case FormattersType.number:
          return this.formatNumber(valueOriginal, options as FormattersOptionsNumber)

        case FormattersType.plural:
          return this.formatPlural(valueOriginal, options as FormattersOptionsPlural)

        case FormattersType.unit:
          return this.formatUnit(valueOriginal, options as FormattersOptionsUnit)

        default:
          return String(valueOriginal)
      }
    }

    return ''
  }

  /**
   * Formats a value as currency.
   *
   * Форматирует значение как валюту.
   * @param value value to format/ значение для форматирования
   * @param item item context/ контекст элемента
   * @param options currency formatting options/ параметры форматирования валюты
   * @protected
   * @returns Formatted currency string/ отформатированная строка валюты
   */
  protected formatCurrency(
    value: any,
    item: Item,
    options?: FormattersOptionsCurrency
  ): string {
    const currency = options?.currencyPropName
      ? getItemByPath(item, options.currencyPropName)
      : item?.['currency']

    return GeoIntl.getInstance()
      .currency(
        value,
        options?.options ?? currency,
        options?.numberOnly
      )
  }

  /**
   * Formats a value as a date.
   *
   * Форматирует значение как дату.
   * @param value value to format/ значение для форматирования
   * @param options date formatting options/ параметры форматирования даты
   * @protected
   * @returns Formatted date string/ отформатированная строка даты
   */
  protected formatDate(
    value: any,
    options?: FormattersOptionsDate
  ): string {
    return GeoIntl
      .getInstance()
      .date(
        value,
        options?.type,
        options?.options,
        options?.hour24
      )
  }

  /**
   * Formats full name from multiple property names.
   *
   * Форматирует полное имя из нескольких имен свойств.
   * @param item item context containing name components/ контекст элемента, содержащий компоненты имени
   * @param options name formatting options (prop names for first, last, surname)/
   * параметры форматирования имени (имена свойств для имени, фамилии, отчества)
   * @protected
   * @returns Formatted name string or empty string if components are missing/
   * отформатированная строка имени или пустая строка, если компоненты отсутствуют
   */
  protected formatName(
    item: Item,
    options?: FormattersOptionsName
  ): string {
    const lastName = getItemByPath(item, options?.lastPropName ?? 'lastName')
    const firstName = getItemByPath(item, options?.firstPropName ?? 'firstName')
    const surname = getItemByPath(item, options?.surname ?? 'surname')

    if (
      lastName
      && firstName
    ) {
      return GeoIntl
        .getInstance()
        .fullName(
          lastName,
          firstName,
          surname,
          options?.short
        )
    }

    return ''
  }

  /**
   * Formats a value as a number.
   *
   * Форматирует значение как число.
   * @param value value to format/ значение для форматирования
   * @param options number formatting options/ параметры форматирования числа
   * @protected
   * @returns Formatted number string/ отформатированная строка числа
   */
  protected formatNumber(
    value: any,
    options?: FormattersOptionsNumber
  ): string {
    return GeoIntl
      .getInstance()
      .number(value, options?.options)
  }

  /**
   * Formats a value based on plural rules.
   *
   * Форматирует значение на основе правил множественного числа.
   * @param value numeric value for pluralization/ числовое значение для плюрализации
   * @param options plural formatting options (words and rules)/
   * параметры форматирования множественного числа (слова и правила)
   * @protected
   * @returns Formatted plural string/ отформатированная строка множественного числа
   */
  protected formatPlural(
    value: any,
    options?: FormattersOptionsPlural
  ): string {
    if (
      options
      && options.words
    ) {
      return GeoIntl
        .getInstance()
        .plural(
          value,
          options?.words,
          options?.options,
          options?.optionsNumber
        )
    }

    return value
  }

  /**
   * Formats a value with a specific unit.
   *
   * Форматирует значение с определенной единицей измерения.
   * @param value value to format/ значение для форматирования
   * @param options unit formatting options/ параметры форматирования единиц измерения
   * @protected
   * @returns Formatted unit string/ отформатированная строка единицы измерения
   */
  protected formatUnit(
    value: any,
    options?: FormattersOptionsUnit
  ): string {
    if (
      options
      && options.unit
    ) {
      return GeoIntl
        .getInstance()
        .unit(value, options.unit)
    }

    return value
  }
}
