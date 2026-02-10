import type { IconPropsBasic, IconTrailingPropsInclude } from '../Icon'
import type { BadgePropsBasic, BadgePropsInclude } from '../Badge'
import type { ProgressPropsBasic, ProgressPropsInclude } from '../Progress'
import type { SkeletonPropsInclude } from '../Skeleton'
import type { AriaRolePropsInclude } from '../../types/ariaTypes'

import type { LabelHighlightProps } from '../../types/labelTypes'
import type { DescriptionProps } from '../../types/descriptionTypes'
import type { PrefixProps } from '../../types/prefixTypes'
import type { CaptionProps } from '../../types/captionTypes'
import type { SuffixProps } from '../../types/suffixTypes'
import type { EnabledProps } from '../../types/enabledTypes'
import type { EventClickProps } from '../../types/eventClickTypes'

export type ListItemPropsToken = {
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
  // :type [!] System label / Системная метка
}

export type ListItemPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic,
  Badge extends BadgePropsBasic = BadgePropsBasic,
  Progress extends ProgressPropsBasic = ProgressPropsBasic
> = LabelHighlightProps
  & DescriptionProps
  & PrefixProps
  & CaptionProps
  & SuffixProps
  & IconTrailingPropsInclude<Icon>
  & BadgePropsInclude<Badge>
  & ProgressPropsInclude<Progress>
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
    filterMode?: boolean
    divider?: boolean

    tabindex?: number | string

    // Technical
    type?: string
    parent?: string
    listId?: number
    search?: string
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type ListItemProps = ListItemPropsBasic & ListItemPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsListItem = {
  tabindex: '-1',
  role: 'option',
  ...{
    // :default [!] System label / Системная метка
    iconAlign: 'center'
    // :default [!] System label / Системная метка
  }
}
