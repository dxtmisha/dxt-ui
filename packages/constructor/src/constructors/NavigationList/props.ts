import { defaultsList, type ListPropsBasic } from '../List'

import type { IconPropsBasic } from '../Icon'
import type { NavigationItemPropsBasic } from '../NavigationItem'
import type { InputPropsBasic } from '../Input'

type NavigationListPropsToken = {
  // :type [!] System label / Системная метка
  axis?: 'x' | 'y'
  divider?: boolean
  // :type [!] System label / Системная метка
}

export type NavigationListPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic,
  NavigationItem extends NavigationItemPropsBasic = NavigationItemPropsBasic,
  Input extends InputPropsBasic = InputPropsBasic
> = ListPropsBasic<Icon, NavigationItem, Input>

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type NavigationListProps = NavigationListPropsBasic & NavigationListPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsNavigationList = {
  ...defaultsList,
  tag: 'a',
  ...{
    // :default [!] System label / Системная метка
    axis: 'y'
    // :default [!] System label / Системная метка
  }
}
