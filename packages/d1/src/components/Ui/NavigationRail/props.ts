import { type NavigationRailPropsBasic, defaultsNavigationRail } from '@dxtmisha/constructor/NavigationRail'
import type { NavigationItemProps } from '../NavigationItem'
import type { NavigationRailItemProps } from '../NavigationRailItem'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  divider?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type NavigationRailProps = NavigationRailPropsBasic<
  NavigationItemProps,
  NavigationRailItemProps
> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsNavigationRail,
  iconArrowRight: 'keyboard_arrow_right',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
