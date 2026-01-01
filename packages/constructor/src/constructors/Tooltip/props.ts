import type { LabelProps } from '../../types/labelTypes'
import type { DescriptionProps } from '../../types/descriptionTypes'

import type { ArrowProps, ArrowPropsInclude } from '../Arrow'

interface TooltipPropsToken {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export interface TooltipPropsBasic<
  Arrow extends ArrowProps = ArrowProps
> extends LabelProps,
  DescriptionProps,
  ArrowPropsInclude<Arrow> {
  // Status
  open?: boolean
  disabled?: boolean

  // Style
  inDom?: boolean
  top?: boolean
  indent?: number
  delay?: number
  delayHide?: number
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface TooltipProps extends TooltipPropsBasic, TooltipPropsToken {
}

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsTooltip = {
  indent: 4,
  delay: 64,
  delayHide: 0,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
