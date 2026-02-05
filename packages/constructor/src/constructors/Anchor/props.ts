import type { IconPropsBasic, IconValue } from '../Icon'
import type { TooltipProps, TooltipPropsInclude } from '../Tooltip'

import type { LabelProps } from '../../types/labelTypes'
import type { TextCopiedClipboardPropsInclude } from '../../types/textTypes'
import type { AnchorScrollProps } from './basicTypes'

export type AnchorPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type AnchorPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic,
  Tooltip extends TooltipProps = TooltipProps
> = LabelProps
  & TooltipPropsInclude<Tooltip>
  & TextCopiedClipboardPropsInclude
  & AnchorScrollProps & {
  // Status
    hide?: boolean

    // Value
    name?: string

    // Style
    isCopy?: boolean

    iconLink?: IconValue<Icon>
    iconTag?: IconValue<Icon>
    iconContentCopy?: IconValue<Icon>

    delayHide?: number
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type AnchorProps = AnchorPropsBasic & AnchorPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsAnchor = {
  shift: 64,
  delayHide: 3_072,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
