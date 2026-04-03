import type { ConstrHrefProps } from '@dxtmisha/functional'

import type { IconPropsBasic, IconTrailingPropsInclude } from '../Icon'
import type { ProgressPropsBasic, ProgressPropsInclude } from '../Progress'
import type { SkeletonPropsInclude } from '../Skeleton'

import type { LabelProps } from '../../types/labelTypes'
import type { EnabledProps } from '../../types/enabledTypes'
import type { EventClickProps } from '../../types/eventClickTypes'
import type { AriaLabelPropsInclude } from '../../types/ariaTypes'

export type ButtonPropsToken = {
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

export type ButtonPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic,
  Progress extends ProgressPropsBasic = ProgressPropsBasic
> = LabelProps
  & EnabledProps
  & IconTrailingPropsInclude<Icon>
  & ProgressPropsInclude<Progress>
  & SkeletonPropsInclude
  & EventClickProps
  & ConstrHrefProps
  & AriaLabelPropsInclude
  & {
    /** HTML tag for the button container/ HTML-тег для контейнера кнопки */
    tag?: 'button' | 'a' | 'span' | string
    /** HTML type for the button element/ HTML-тип для элемента кнопки */
    type?: 'button' | 'submit' | 'reset' | string
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type ButtonProps = ButtonPropsBasic & ButtonPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsButton = {
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
