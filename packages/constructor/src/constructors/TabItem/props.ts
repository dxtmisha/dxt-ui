import type { LabelProps } from '../../types/labelTypes'
import type { IconPropsBasic, IconPropsInclude } from '../Icon'
import type { BadgePropsBasic, BadgePropsInclude } from '../Badge'
import type { SkeletonPropsInclude } from '../Skeleton'

import type { EnabledProps } from '../../types/enabledTypes'
import type { EventClickProps } from '../../types/eventClickTypes'
import type { AriaRolePropsInclude } from '../../types/ariaTypes'

type TabItemPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type TabItemPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic,
  Badge extends BadgePropsBasic = BadgePropsBasic
> = LabelProps
  & IconPropsInclude<Icon>
  & BadgePropsInclude<Badge>
  & SkeletonPropsInclude
  & EnabledProps
  & EventClickProps
  & AriaRolePropsInclude
  & {
    // Value
    index?: any
    href?: string

    // Style
    tag?: 'button' | 'a' | 'span' | 'li' | 'div' | string
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type TabItemProps = TabItemPropsBasic & TabItemPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsTabItem = {
  tag: 'button',
  role: 'tab',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
