import type { TableFlexHeaderItemPropsBasic } from '../TableFlexHeaderItem'
import type { TableFlexItemPropsBasic } from '../TableFlexItem'
import type { TableRecordPropsBasic } from '../TableRecord'

/**
 * Type describing token properties for TableFlexRecord component. /
 * Тип, описывающий токен-свойства для компонента TableFlexRecord.
 */
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
> = TableRecordPropsBasic<TableItem, TableHeaderItem> & {
  /** Lazy loading of row elements / Ленивая загрузка элементов строки */
  lazy?: boolean

  /** Default height of the row element / Высота элемента строки по умолчанию */
  defaultHeight?: string | number
}

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
  lazy: true,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
