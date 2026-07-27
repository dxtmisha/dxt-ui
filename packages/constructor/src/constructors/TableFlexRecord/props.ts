import type { TableFlexHeaderItemPropsBasic } from '../TableFlexHeaderItem'
import type { TableFlexItemPropsBasic } from '../TableFlexItem'
import type { TableRecordPropsBasic } from '../TableRecord'

type TableFlexRecordPropsToken = {
  // :type [!] System label / Системная метка
  disabled?: boolean
  selected?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Basic type describing flex table record properties. /
 * Базовый тип, описывающий свойства записи флекс-таблицы.
 */
export type TableFlexRecordPropsBasic<
  TableItem extends TableFlexItemPropsBasic = TableFlexItemPropsBasic,
  TableHeaderItem extends TableFlexHeaderItemPropsBasic = TableFlexHeaderItemPropsBasic
> = TableRecordPropsBasic<TableItem, TableHeaderItem>

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type TableFlexRecordProps = TableFlexRecordPropsBasic & TableFlexRecordPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsTableFlexRecord = {
  tag: 'div',
  lazy: true,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
