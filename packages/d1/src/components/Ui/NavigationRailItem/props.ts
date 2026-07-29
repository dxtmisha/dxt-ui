import { type NavigationRailItemPropsBasic, defaultsNavigationRailItem } from '@dxtmisha/constructor/NavigationRailItem'
import type { IconProps } from '../Icon'
import type { BadgeProps } from '../Badge'
import type { ProgressProps } from '../Progress'

export const propsValues = {
  // :values [!] System label / Системная метка
  palette: ['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose', 'slate', 'gray', 'zinc', 'neutral', 'stone', 'black', 'white']
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  focus?: boolean
  open?: boolean
  selectedChild?: boolean
  readonly?: boolean
  disabled?: boolean
  divider?: boolean
  palette?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type NavigationRailItemProps = NavigationRailItemPropsBasic<
  IconProps,
  BadgeProps,
  ProgressProps
> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsNavigationRailItem,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
