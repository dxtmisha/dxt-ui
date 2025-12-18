import type { IconPropsBasic, IconPropsInclude } from '../Icon'

import type { LabelProps } from '../../types/labelTypes'
import type { DescriptionProps } from '../../types/descriptionTypes'
import type { CaptionProps } from '../../types/captionTypes'

interface BlockPropsToken {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export interface BlockPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic
> extends LabelProps,
  DescriptionProps,
  CaptionProps,
  IconPropsInclude<Icon> {
  // Value
  headline?: string

  // Style
  tag?: string
  tagHeader?: string
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface BlockProps extends BlockPropsBasic, BlockPropsToken {
}

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsBlock = {
  tag: 'div',
  tagHeader: 'h3',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
