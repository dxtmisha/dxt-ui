import type { TableItemPropsBasic } from '../TableItem'

/**
 * Type describing token properties. /
 * Тип, описывающий токен-свойства.
 */
type TableFlexItemPropsToken = {
  // :type [!] System label / Системная метка
  disabled?: boolean
  selected?: boolean
  align?: 'left' | 'center' | 'right'
  alignVertical?: 'top' | 'center' | 'bottom'
  dividerX?: boolean
  dividerY?: boolean
  labelClamp?: boolean
  stickyTop?: boolean
  stickyLeft?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Basic type describing flex table item properties. /
 * Базовый тип, описывающий свойства ячейки флекс-таблицы.
 */
export type TableFlexItemPropsBasic = TableItemPropsBasic

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type TableFlexItemProps = TableFlexItemPropsBasic & TableFlexItemPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsTableFlexItem = {
  tag: 'div',
  ...{
    // :default [!] System label / Системная метка
    align: 'left',
    alignVertical: 'center'
    // :default [!] System label / Системная метка
  }
}
