import type { IconPropsBasic, IconTrailingPropsInclude } from '../Icon'
import type { BadgePropsBasic, BadgePropsInclude } from '../Badge'
import type { ProgressPropsBasic, ProgressPropsInclude } from '../Progress'
import type { SkeletonPropsInclude } from '../Skeleton'

import type { LabelHighlightProps } from '../../types/labelTypes'
import type { DescriptionProps } from '../../types/descriptionTypes'
import type { PrefixProps } from '../../types/prefixTypes'
import type { CaptionProps } from '../../types/captionTypes'
import type { SuffixProps } from '../../types/suffixTypes'
import type { EnabledProps } from '../../types/enabledTypes'
import type { EventClickProps } from '../../types/eventClickTypes'

interface ListItemPropsToken {
  // :type [!] System label / Системная метка
  focus?: boolean
  open?: boolean
  selected?: boolean
  readonly?: boolean
  disabled?: boolean
  iconTop?: boolean
  iconAlign?: 'center' | 'text'
  fill?: string | 'custom'
  divider?: boolean
  // :type [!] System label / Системная метка
}

export interface ListItemPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic,
  Badge extends BadgePropsBasic = BadgePropsBasic,
  Progress extends ProgressPropsBasic = ProgressPropsBasic
> extends LabelHighlightProps,
  DescriptionProps,
  PrefixProps,
  CaptionProps,
  SuffixProps,
  IconTrailingPropsInclude<Icon>,
  BadgePropsInclude<Badge>,
  ProgressPropsInclude<Progress>,
  SkeletonPropsInclude,
  EnabledProps,
  EventClickProps {
  // Value
  index?: any

  // Style
  tag?: 'button' | 'a' | 'span' | 'div' | string

  // Hide
  type?: string
  search?: string
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface ListItemProps extends ListItemPropsBasic, ListItemPropsToken {
}

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsListItem = {
  tag: 'div',
  ...{
    // :default [!] System label / Системная метка
    iconAlign: 'center'
    // :default [!] System label / Системная метка
  }
}
