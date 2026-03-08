import { getItemByPath } from '../functions/getItemByPath'
import { toCamelCase } from '../functions/toCamelCase'
import { GeoIntl } from './GeoIntl'

import {
  FormattersType,
  type FormattersDataColumns,
  type FormattersDataList,
  type FormattersDataListList,
  type FormattersItem,
  type FormattersList
} from '../types/formattersTypes'
import { getColumn } from '../library'

export class Formatters<
  List extends FormattersDataListList,
  Key extends FormattersDataColumns<List>
> {
  protected columns: string[]

  constructor(
    protected list: List,
    protected options: FormattersList
  ) {
    this.columns = this.initColumns()
  }

  getColumns(): string[] {
    return this.columns
  }

  getList(): List {
    return this.list
  }

  getOptions(): FormattersList {
    return this.options
  }

  setList(list: List): this {
    this.list = list
    return this
  }

  setOptions(options: FormattersList): this {
    this.options = options
    this.columns = this.initColumns()
    return this
  }

  to(): FormattersDataList<List[number], Key> {
    const intl = GeoIntl.getInstance()

    return this.list.map(item => {
      const result: Record<string, any> = { ...item }

      for (const column of this.columns as string[]) {
        const formatKey = `${toCamelCase(column)}Format`
        const valueOriginal = getItemByPath(item, column)
        const formatterConfig: FormattersItem | undefined = this.options.find(
          opt => opt.prop === column
        )

        if (formatterConfig?.transformation) {
          result[formatKey] = formatterConfig.transformation(
            valueOriginal,
            item,
            formatterConfig.options as any
          )
          continue
        }

        if (!formatterConfig || !formatterConfig.type) {
          result[formatKey] = valueOriginal !== undefined && valueOriginal !== null
            ? String(valueOriginal)
            : ''
          continue
        }

        const opts = formatterConfig.options as any

        switch (formatterConfig.type) {
          case FormattersType.currency:
            result[formatKey] = intl.currency(
              (opts?.currencyPropName ? getItemByPath(item, opts.currencyPropName) ?? valueOriginal : valueOriginal) ?? '',
              opts?.options,
              opts?.numberOnly ?? false
            )
            break

          case FormattersType.date:
            result[formatKey] = intl.date(
              valueOriginal ?? '',
              opts?.type,
              opts?.options,
              opts?.hour24
            )
            break

          case FormattersType.name:
            result[formatKey] = intl.fullName(
              getItemByPath(item, opts?.lastPropName) ?? '',
              getItemByPath(item, opts?.firstPropName) ?? '',
              opts?.surname ? getItemByPath(item, opts.surname) : undefined,
              opts?.short
            )
            break

          case FormattersType.number:
            result[formatKey] = intl.number(valueOriginal ?? '', opts?.options)
            break

          case FormattersType.plural:
            result[formatKey] = intl.plural(
              valueOriginal ?? '',
              opts?.words ?? '',
              opts?.options,
              opts?.optionsNumber
            )
            break

          case FormattersType.unit:
            result[formatKey] = intl.unit(
              valueOriginal ?? '',
              opts?.unit ?? opts?.options
            )
            break

          default:
            result[formatKey] = valueOriginal !== undefined && valueOriginal !== null
              ? String(valueOriginal)
              : ''
        }
      }

      return result
    }) as FormattersDataList<List[number], Key>
  }

  protected initColumns(): string[] {
    return getColumn(this.options, 'prop') as string[]
  }
}
