import type { ConstrBind } from '@dxtmisha/functional'

import type { IconPropsBasic } from '../Icon'
import type { TableItemPropsBasic } from '../TableItem'
import type { TooltipProps, TooltipPropsInclude } from '../Tooltip'

type TableHeaderItemPropsToken = {
  // :type [!] System label / Системная метка
  disabled?: boolean
  selected?: boolean
  header?: boolean
  vertical?: 'always' | 'none'
  right?: boolean
  basis?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | 'auto'
  labelClamp?: boolean
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
    vertical: 'none',
    basis: '1'
    // :default [!] System label / Системная метка
  }
}
