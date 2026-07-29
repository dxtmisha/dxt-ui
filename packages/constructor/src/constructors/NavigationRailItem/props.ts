import type { IconPropsBasic, IconPropsInclude } from '../Icon'
import type { BadgePropsBasic, BadgePropsInclude } from '../Badge'
import type { ProgressPropsBasic, ProgressPropsInclude } from '../Progress'
import type { SkeletonPropsInclude } from '../Skeleton'
import type { AriaRolePropsInclude } from '../../types/ariaTypes'

import type { LabelProps } from '../../types/labelTypes'
import type { EnabledProps } from '../../types/enabledTypes'
import type { EventClickProps } from '../../types/eventClickTypes'

export type NavigationRailItemPropsToken = {
  // :type [!] System label / Системная метка
  focus?: boolean
  open?: boolean
  selectedChild?: boolean
  readonly?: boolean
  disabled?: boolean
  divider?: boolean
  // :type [!] System label / Системная метка
}

export type NavigationRailItemPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic,
  Badge extends BadgePropsBasic = BadgePropsBasic,
  Progress extends ProgressPropsBasic = ProgressPropsBasic
> = LabelProps
  & IconPropsInclude<Icon>
  & BadgePropsInclude<Badge>
  & ProgressPropsInclude<Progress>
  & SkeletonPropsInclude
  & EnabledProps
  & EventClickProps
  & AriaRolePropsInclude
  & {
    /** Item index/ Индекс элемента */
    index?: any
    /** URL address for links/ URL-адрес для ссылок */
    href?: string

    /** HTML tag for the list item/ HTML-тег для элемента списка */
    tag?: 'button' | 'a' | 'span' | 'li' | 'div' | string
    /** Whether to show a divider/ Показывать ли разделитель */
    divider?: boolean

    /** Selection style/ Стиль выбора */
    selectionStyle?: 'radio' | 'checkbox' | 'checkmark' | 'none'

    /** Tab index for keyboard navigation/ Индекс табуляции для навигации с клавиатуры */
    tabindex?: number | string

    /** Item type/ Тип элемента */
    type?: string
    /** Parent identifier/ Идентификатор родителя */
    parent?: string
    /** List identifier/ Идентификатор списка */
    listId?: number
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type NavigationRailItemProps = NavigationRailItemPropsBasic & NavigationRailItemPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsNavigationRailItem = {
  tabindex: '-1',
  role: 'option',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
