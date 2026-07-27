import { type TableFlexHeaderItemPropsBasic, defaultsTableFlexHeaderItem } from '@dxtmisha/constructor/TableFlexHeaderItem'

import type { ChipProps } from '../Chip'
import type { IconProps } from '../Icon'
import type { TooltipProps } from '../Tooltip'

export const propsValues = {
  // :values [!] System label / Системная метка
  align: ['left', 'center', 'right'],
  alignVertical: ['top', 'center', 'bottom']
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  selected?: boolean
  disabled?: boolean
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
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type TableFlexHeaderItemProps = TableFlexHeaderItemPropsBasic<ChipProps, IconProps, TooltipProps> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsTableFlexHeaderItem,
  iconTooltip: 'help',
  iconSort: 'swap_vert',
  iconArrowUp: 'arrow_upward',
  iconArrowDown: 'arrow_downward',
  ...{
    // :default [!] System label / Системная метка
    align: 'left',
    alignVertical: 'center',
    dividerX: true,
    dividerY: true
    // :default [!] System label / Системная метка
  }
}
