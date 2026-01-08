import type { LabelProps } from '../../types/labelTypes'
import type { DescriptionProps } from '../../types/descriptionTypes'
import type { CaptionProps } from '../../types/captionTypes'
import type { EnabledProps } from '../../types/enabledTypes'
import type { SkeletonPropsInclude } from '../Skeleton'
import type { EventClickProps } from '../../types/eventClickTypes'

import type { IconPropsBasic, IconTrailingPropsInclude } from '../Icon'
import type { ProgressPropsBasic, ProgressPropsInclude } from '../Progress'

import type { AriaRolePropsInclude } from '../../types/ariaTypes'

interface CellPropsToken {
  // :type [!] System label / Системная метка
  focus?: boolean
  selected?: boolean
  readonly?: boolean
  disabled?: boolean
  dynamic?: boolean
  dynamicHover?: boolean
  divider?: boolean
  dividerLabel?: 'always' | 'none'
  iconTop?: boolean
  // :type [!] System label / Системная метка
}

export interface CellPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic,
  Progress extends ProgressPropsBasic = ProgressPropsBasic
> extends LabelProps,
  DescriptionProps,
  CaptionProps,
  EnabledProps,
  IconTrailingPropsInclude<Icon>,
  ProgressPropsInclude<Progress>,
  SkeletonPropsInclude,
  EventClickProps,
  AriaRolePropsInclude {
  // Style
  tag?: string
  divider?: boolean
  dynamic?: boolean
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface CellProps extends CellPropsBasic, CellPropsToken {
}

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsCell = {
  tag: 'div',
  ...{
    // :default [!] System label / Системная метка
    divider: true
    // :default [!] System label / Системная метка
  }
}
