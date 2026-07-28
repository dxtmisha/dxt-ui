import { type NavigationItemPropsBasic, defaultsNavigationItem } from '@dxtmisha/constructor/NavigationItem'

import type { BadgeProps } from '../Badge'
import type { CheckboxProps } from '../Checkbox'
import type { IconProps } from '../Icon'
import type { ProgressProps } from '../Progress'
import type { RadioProps } from '../Radio'

export const propsValues = {
  // :values [!] System label / Системная метка
  iconAlign: ['center', 'edge'],
  controlPosition: ['start', 'end', 'autoSm', 'autoMd', 'autoLg', 'autoXl', 'auto2xl'],
  fill: []
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  focus?: boolean
  open?: boolean
  selectedChild?: boolean
  readonly?: boolean
  disabled?: boolean
  iconTop?: boolean
  iconAlign?: 'center' | 'edge'
  controlPosition?: 'start' | 'end' | 'autoSm' | 'autoMd' | 'autoLg' | 'autoXl' | 'auto2xl'
  fill?: string | 'custom'
  divider?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type NavigationItemProps = NavigationItemPropsBasic<
  IconProps,
  BadgeProps,
  ProgressProps,
  CheckboxProps,
  RadioProps
> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsNavigationItem,
  ...{
    // :default [!] System label / Системная метка
    iconAlign: 'center',
    controlPosition: 'end'
    // :default [!] System label / Системная метка
  }
}
