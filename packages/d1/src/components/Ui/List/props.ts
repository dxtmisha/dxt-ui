import { type ListPropsBasic, defaultsList } from '@dxtmisha/constructor/List'
import type { IconProps } from '../Icon'
import type { ListItemProps } from '../ListItem'

export const propsValues = {
  // :values [!] System label / Системная метка
  axis: ['x', 'y']
  // :values [!] System label / Системная метка
}

export type PropsToken = {
  // :type [!] System label / Системная метка
  axis?: 'x' | 'y'
  divider?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type ListProps = ListPropsBasic<IconProps, ListItemProps> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsList,
  iconArrowDown: 'keyboard_arrow_down',
  iconArrowRight: 'keyboard_arrow_right',
  ...{
    // :default [!] System label / Системная метка
    axis: 'y'
    // :default [!] System label / Системная метка
  }
}
