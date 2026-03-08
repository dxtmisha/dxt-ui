import { GeoIntl } from './GeoIntl'

import { forEach } from '../functions/forEach'
import { getItemByPath } from '../functions/getItemByPath'
import { toCamelCase } from '../functions/toCamelCase'

import {
  FormattersType,
  type FormattersColumns,
  type FormattersListFormat,
  type FormattersListItem,
  type FormattersList,
  type FormattersOptionsList
} from '../types/formattersTypes'

export class Formatters<
  Item extends FormattersListItem,
  List extends FormattersList<Item> = FormattersList<Item>,
  Columns extends keyof List = keyof List
> {
  constructor(
    protected list: List,
    protected options: FormattersOptionsList
  ) { }

  getList(): List {
    return this.list
  }

  getColumns(): Columns {
    return Object.keys(this.options)
  }

  getOptions(): FormattersOptionsList {
    return this.options
  }

  setList(list: List): this {
    this.list = list
    return this
  }

  setOptions(options: FormattersOptionsList): this {
    this.options = options
    return this
  }

  to(): FormattersListFormat<Item, keyof List> {
    return forEach(this.list, (item) => {
      const result: Record<string, any> = { ...item }

      for (const [column, formatterConfig] of Object.entries(this.options)) {
        const formatKey = `${toCamelCase(column)}Format`
        const valueOriginal = getItemByPath(item, column)

        if (formatterConfig?.transformation) {
          result[formatKey] = formatterConfig.transformation(
            valueOriginal,
            item,
            formatterConfig.options as any
          )
          continue
        }

        if (!formatterConfig.type) {
          result[formatKey] = valueOriginal !== undefined && valueOriginal !== null
            ? String(valueOriginal)
            : ''
          continue
        }

        const opts = formatterConfig.options as any

        switch (formatterConfig.type) {
          case FormattersType.currency:
            result[formatKey] = this.formatCurrency(valueOriginal, item, opts)
            break

          case FormattersType.date:
            result[formatKey] = this.formatDate(valueOriginal, opts)
            break

          case FormattersType.name:
            result[formatKey] = this.formatName(item, opts)
            break

          case FormattersType.number:
            result[formatKey] = this.formatNumber(valueOriginal, opts)
            break

          case FormattersType.plural:
            result[formatKey] = this.formatPlural(valueOriginal, opts)
            break

          case FormattersType.unit:
            result[formatKey] = this.formatUnit(valueOriginal, opts)
            break

          default:
            result[formatKey] = valueOriginal !== undefined && valueOriginal !== null
              ? String(valueOriginal)
              : ''
        }
      }

      return result
    }) as FormattersListFormat<Item, Key>
  }

  protected formatCurrency(value: any, item: Item, options?: any): string {
    return GeoIntl.getInstance().currency(
      (options?.currencyPropName ? getItemByPath(item, options.currencyPropName) ?? value : value) ?? '',
      options?.options,
      options?.numberOnly ?? false
    )
  }

  protected formatDate(value: any, options?: any): string {
    return GeoIntl.getInstance().date(
      value ?? '',
      options?.type,
      options?.options,
      options?.hour24
    )
  }

  protected formatName(item: Item, options?: any): string {
    return GeoIntl.getInstance().fullName(
      getItemByPath(item, options?.lastPropName) ?? '',
      getItemByPath(item, options?.firstPropName) ?? '',
      options?.surname ? getItemByPath(item, options.surname) : undefined,
      options?.short
    )
  }

  protected formatNumber(value: any, options?: any): string {
    return GeoIntl.getInstance().number(value ?? '', options?.options)
  }

  protected formatPlural(value: any, options?: any): string {
    return GeoIntl.getInstance().plural(
      value ?? '',
      options?.words ?? '',
      options?.options,
      options?.optionsNumber
    )
  }

  protected formatUnit(value: any, options?: any): string {
    return GeoIntl.getInstance().unit(
      value ?? '',
      options?.unit ?? options?.options
    )
  }
}
