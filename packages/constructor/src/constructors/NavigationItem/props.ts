import { type ListItemPropsBasic } from '../ListItem'

import type { IconPropsBasic } from '../Icon'
import type { BadgePropsBasic } from '../Badge'
import type { ProgressPropsBasic } from '../Progress'
import type { CheckboxPropsBasic } from '../Checkbox'
import type { RadioPropsBasic } from '../Radio'

type NavigationItemPropsToken = {
  // :type [!] System label / Системная метка
  focus?: boolean
  open?: boolean
  selectedChild?: boolean
  readonly?: boolean
  disabled?: boolean
  iconTop?: boolean
  iconAlign?: 'center' | 'edge'
  controlPosition?: 'start' | 'end'
  fill?: string | 'custom'
  divider?: boolean
  // :type [!] System label / Системная метка
}

export type NavigationItemPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic,
  Badge extends BadgePropsBasic = BadgePropsBasic,
  Progress extends ProgressPropsBasic = ProgressPropsBasic,
  Checkbox extends CheckboxPropsBasic = CheckboxPropsBasic,
  Radio extends RadioPropsBasic = RadioPropsBasic
> = ListItemPropsBasic<Icon, Badge, Progress, Checkbox, Radio>

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type NavigationItemProps = NavigationItemPropsBasic & NavigationItemPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsNavigationItem = {
  tag: 'a',
  tabindex: '-1',
  role: 'option',
  selectionStyle: 'none',
  ...{
    // :default [!] System label / Системная метка
    iconAlign: 'center',
    controlPosition: 'end'
    // :default [!] System label / Системная метка
  }
}
