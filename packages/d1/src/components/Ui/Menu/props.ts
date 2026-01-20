import { type MenuPropsBasic, defaultsMenu } from '@dxtmisha/constructor/Menu'
import type { ListProps } from '../List'
import type { ListItemProps } from '../ListItem'
import type { BarsProps } from '../Bars'
import type { WindowProps } from '../Window'

export const propsValues = {
  // :values [!] System label / Системная метка
  barsAdaptive: ['showAlways', 'showSm', 'showMd', 'showLg', 'showXl', 'show2xl']
  // :values [!] System label / Системная метка
}

export type PropsToken = {
  // :type [!] System label / Системная метка
  hideList?: boolean
  barsAdaptive?: 'showAlways' | 'showSm' | 'showMd' | 'showLg' | 'showXl' | 'show2xl'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type MenuProps = MenuPropsBasic<ListProps, ListItemProps, BarsProps, WindowProps> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsMenu,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
