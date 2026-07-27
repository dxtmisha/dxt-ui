import type { TablePropsBasic } from '../Table'

import type { TableFlexHeaderItemPropsBasic } from '../TableFlexHeaderItem'
import type { TableFlexItemPropsBasic } from '../TableFlexItem'
import type { TableFlexRecordPropsBasic } from '../TableFlexRecord'

/**
 * Type describing token properties for TableFlex component.
 *
 * Тип, описывающий токен-свойства для компонента TableFlex.
 */
type TableFlexPropsToken = {
  // :type [!] System label / Системная метка
  headerTop?: boolean
  captionBottom?: boolean
  bleed?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Basic type describing flex table properties.
 *
 * Базовый тип, описывающий свойства флекс-таблицы.
 */
export type TableFlexPropsBasic<
  TableItem extends TableFlexItemPropsBasic = TableFlexItemPropsBasic,
  TableHeaderItem extends TableFlexHeaderItemPropsBasic = TableFlexHeaderItemPropsBasic,
  TableRecord extends TableFlexRecordPropsBasic<TableItem, TableHeaderItem> = TableFlexRecordPropsBasic<TableItem, TableHeaderItem>
> = TablePropsBasic<TableItem, TableHeaderItem, TableRecord>

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type TableFlexProps = TableFlexPropsBasic & TableFlexPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsTableFlex = {
  lazy: true,
  page: 1,
  stickyScrollBottom: true,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
