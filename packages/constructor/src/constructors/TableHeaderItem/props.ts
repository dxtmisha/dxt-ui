import type { ConstrBind } from '@dxtmisha/functional'

import type { IconPropsBasic } from '../Icon'
import type { TableItemPropsBasic } from '../TableItem'
import type { TooltipProps, TooltipPropsInclude } from '../Tooltip'

type TableHeaderItemPropsToken = {
  // :type [!] System label / Системная метка
  disabled?: boolean
  selected?: boolean
  align?: 'left' | 'center' | 'right'
  alignVertical?: 'top' | 'center' | 'bottom'
  labelClamp?: boolean
  stickyTop?: boolean
  stickyLeft?: boolean
  // :type [!] System label / Системная метка
}

export type TableHeaderItemPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic,
  Tooltip extends TooltipProps = TooltipProps
> = TableItemPropsBasic
  & TooltipPropsInclude<Tooltip>
  & {
    /** Tooltip control icon / Иконка управления подсказкой */
    iconTooltip?: string | ConstrBind<Icon>
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type TableHeaderItemProps = TableHeaderItemPropsBasic & TableHeaderItemPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsTableHeaderItem = {
  tag: 'th',
  ...{
    // :default [!] System label / Системная метка
    align: 'left',
    alignVertical: 'center'
    // :default [!] System label / Системная метка
  }
}
