import { type ListItemPropsBasic, defaultsListItem } from '@dxtmisha/constructor/ListItem'
import type { IconProps } from '../Icon'
import type { BadgeProps } from '../Badge'
import type { ProgressProps } from '../Progress'

export const propsValues = {
  // :values [!] System label / Системная метка
  iconAlign: ['center', 'edge'],
  fill: [],
  size: ['sm', 'md', 'lg'],
  palette: ['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose', 'slate', 'gray', 'zinc', 'neutral', 'stone', 'black', 'white']
  // :values [!] System label / Системная метка
}

export type PropsToken = {
  // :type [!] System label / Системная метка
  focus?: boolean
  open?: boolean
  selected?: boolean
  selectedChild?: boolean
  readonly?: boolean
  disabled?: boolean
  iconTop?: boolean
  iconAlign?: 'center' | 'edge'
  fill?: string | 'custom'
  divider?: boolean
  size?: 'sm' | 'md' | 'lg'
  dense?: boolean
  palette?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type ListItemProps = ListItemPropsBasic<IconProps, BadgeProps, ProgressProps> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsListItem,
  ...{
    // :default [!] System label / Системная метка
    iconAlign: 'edge',
    size: 'md'
    // :default [!] System label / Системная метка
  }
}
