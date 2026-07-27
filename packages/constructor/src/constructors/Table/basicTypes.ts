import type { ConstrStyles } from '@dxtmisha/functional'

import type { TableHeaderItemPropsBasic } from '../TableHeaderItem'
import type { TableItemPropsBasic } from '../TableItem'
import type { TableRecordValue } from '../TableRecord'

/**
 * Type describing col element attributes for colgroup.
 *
 * Тип, описывающий атрибуты элемента col для colgroup.
 */
export type TableColumnCol = {
  /** Column key identifier / Идентификатор ключа колонки */
  'key': string
  /** Column inline styles / Стили колонки */
  'style'?: ConstrStyles
  /** Column index data attribute / Атрибут данных индекса колонки */
  'data-col': string
}

/**
 * Type describing table header data.
 *
 * Тип, описывающий данные шапки таблицы.
 */
export type TableHeader<
  TableHeaderItem extends TableHeaderItemPropsBasic = TableHeaderItemPropsBasic
> = Record<string, TableRecordValue<TableHeaderItem>>

/**
 * Type describing multiple table header rows.
 *
 * Тип, описывающий несколько строк шапки таблицы.
 */
export type TableHeaders<
  TableHeaderItem extends TableHeaderItemPropsBasic = TableHeaderItemPropsBasic
> = TableHeader<TableHeaderItem>[]

/**
 * Type describing list of row records.
 *
 * Тип, описывающий список записей строк.
 */
export type TableList<
  TableItem extends TableItemPropsBasic = TableItemPropsBasic
> = (Partial<Record<string, TableRecordValue<TableItem>>> | Record<string, any> | any)[]
