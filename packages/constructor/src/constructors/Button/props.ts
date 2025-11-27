import type { IconPropsBasic, IconTrailingPropsInclude } from '../Icon'
import type { ProgressPropsBasic, ProgressPropsInclude } from '../Progress'
import type { SkeletonPropsInclude } from '../Skeleton'

import type { LabelProps } from '../../types/labelTypes'
import type { EnabledProps } from '../../types/enabledTypes'
import type { EventClickProps } from '../../types/eventClickTypes'
import type { AriaLabelPropsInclude } from '../../types/ariaTypes'

interface ButtonPropsToken {
  // :type [!] System label / Системная метка
  focus?: boolean
  disabled?: boolean
  selected?: boolean
  readonly?: boolean
  adaptive?: 'iconAlways' | 'block' | 'auto'
  container?: boolean
  inverse?: boolean
  grid?: boolean
  textAlign?: 'left' | 'center' | 'right'
  // :type [!] System label / Системная метка
}

export interface ButtonPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic,
  Progress extends ProgressPropsBasic = ProgressPropsBasic
> extends LabelProps,
  EnabledProps,
  IconTrailingPropsInclude<Icon>,
  ProgressPropsInclude<Progress>,
  SkeletonPropsInclude,
  EventClickProps,
  AriaLabelPropsInclude {
  // Style
  tag?: 'button' | 'a' | 'span' | string
  type?: 'button' | 'submit' | 'reset' | string
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface ButtonProps extends ButtonPropsBasic, ButtonPropsToken {
}

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsButton = {
  tag: 'button',
  type: 'button',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
