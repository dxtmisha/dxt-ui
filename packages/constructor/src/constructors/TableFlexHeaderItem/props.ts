import type { ChipPropsBasic } from '../Chip'
import type { IconPropsBasic } from '../Icon'
import type { TooltipProps } from '../Tooltip'
import type { TableHeaderItemPropsBasic } from '../TableHeaderItem'

/**
 * Type describing token properties for TableFlexHeaderItem component.
 *
 * Тип, описывающий токен-свойства для компонента TableFlexHeaderItem.
 */
type TableFlexHeaderItemPropsToken = {
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
 * Basic type describing flex table header item properties.
 *
 * Базовый тип, описывающий свойства ячейки шапки флекс-таблицы.
 */
export type TableFlexHeaderItemPropsBasic<
  Chip extends ChipPropsBasic = ChipPropsBasic,
  Icon extends IconPropsBasic = IconPropsBasic,
  Tooltip extends TooltipProps = TooltipProps
> = TableHeaderItemPropsBasic<Chip, Icon, Tooltip>

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type TableFlexHeaderItemProps = TableFlexHeaderItemPropsBasic & TableFlexHeaderItemPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsTableFlexHeaderItem = {
  tag: 'div',
  ...{
    // :default [!] System label / Системная метка
    align: 'left',
    alignVertical: 'center'
    // :default [!] System label / Системная метка
  }
}
