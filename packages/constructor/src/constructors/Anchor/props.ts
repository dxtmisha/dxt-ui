import type { TooltipProps, TooltipPropsInclude } from '../Tooltip'

import type { LabelProps } from '../../types/labelTypes'
import type { TextCopiedClipboardPropsInclude } from '../../types/textTypes'
import type { AnchorScrollProps } from './basicTypes'

interface AnchorPropsToken {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export interface AnchorPropsBasic<
  Tooltip extends TooltipProps = TooltipProps
> extends LabelProps,
  TooltipPropsInclude<Tooltip>,
  TextCopiedClipboardPropsInclude,
  AnchorScrollProps {
  // Status
  hide?: boolean

  // Value
  name?: string
  text?: string

  // Style
  isCopy?: boolean

  iconLink?: string
  iconTag?: string
  iconContentCopy?: string

  delayHide?: number
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface AnchorProps extends AnchorPropsBasic, AnchorPropsToken {
}

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsAnchor = {
  delayHide: 3_072,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
