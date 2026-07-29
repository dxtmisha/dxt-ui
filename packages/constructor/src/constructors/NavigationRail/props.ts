import type {
  ConstrBind,
  ListRecord,
  ListSelectedItem,
  ListSelectedList
} from '@dxtmisha/functional'

import type { RoleType } from '../../types/roleTypes'
import type { AriaMultiselectablePropsInclude, AriaRolePropsInclude } from '../../types/ariaTypes'

import type { IconPropsBasic, IconValue } from '../Icon'
import type { NavigationItemPropsBasic } from '../NavigationItem'
import type { NavigationRailItemPropsBasic } from '../NavigationRailItem'

type NavigationRailPropsToken = {
  // :type [!] System label / Системная метка
  divider?: boolean
  // :type [!] System label / Системная метка
}

export type NavigationRailPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic,
  NavigationItem extends NavigationItemPropsBasic = NavigationItemPropsBasic,
  NavigationRailItem extends NavigationRailItemPropsBasic = NavigationRailItemPropsBasic
> = AriaRolePropsInclude
  & AriaMultiselectablePropsInclude
  & {
    /** Status/ Статус */
    /** Currently focused item/ Элемент, на котором установлен фокус */
    focus?: ListSelectedItem
    /** List of selected items/ Список выбранных элементов */
    selected?: ListSelectedList
    /** Whether the list is disabled/ Отключен ли список */
    disabled?: boolean

    /** Value/ Значения */
    /** Data list/ Список данных */
    list?: ListRecord<NavigationRailItem | NavigationItem>

    /** Key for the label in the data object/ Ключ для заголовка в объекте данных */
    keyLabel?: string
    /** Key for the value in the data object/ Ключ для значения в объекте данных */
    keyValue?: string

    /** Style/ Стили */
    /** HTML tag for the list/ HTML-тег для списка */
    tag?: 'div' | 'button' | 'a' | 'span' | string

    /** Whether to show dividers between items/ Показывать ли разделители между элементами */
    divider?: boolean

    /** Additional attributes for list items/ Дополнительные атрибуты для элементов списка */
    itemAttrs?: ConstrBind<NavigationRailItem | NavigationItem>
    /** Attributes for the item management component/ Атрибуты для компонента управления элементом */
    itemManagementAttrs?: ConstrBind<NavigationRailItem | NavigationItem>
    /** Attributes for the item menu component/ Атрибуты для компонента меню элемента */
    itemMenuAttrs?: ConstrBind<NavigationRailItem | NavigationItem>

    /** Icon for the right arrow/ Иконка для стрелки вправо */
    iconArrowRight?: IconValue<Icon>

    /** ARIA/ ARIA */
    /** ARIA role for items/ ARIA-роль для элементов */
    roleItem?: RoleType
    /** Tab index for keyboard navigation/ Индекс табуляции для навигации с клавиатуры */
    tabindex?: string | number

    /** Technical/ Технические свойства */
    /** Whether to enable external control/ Включено ли внешнее управление */
    control?: boolean
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type NavigationRailProps = NavigationRailPropsBasic & NavigationRailPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsNavigationRail = {
  keyLabel: 'label',
  keyValue: 'value',
  tag: 'div',
  role: 'listbox',
  tabindex: 0,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
