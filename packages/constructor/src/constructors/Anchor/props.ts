import type { TooltipProps, TooltipPropsInclude } from '../Tooltip'
import type { TextCopiedClipboardPropsInclude } from '../../types/textTypes'

interface AnchorPropsToken {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export interface AnchorPropsBasic<
  Tooltip extends TooltipProps = TooltipProps
> extends TooltipPropsInclude<Tooltip>,
  TextCopiedClipboardPropsInclude {
  // Status
  hide?: boolean

  // Value
  name?: string
  text?: string

  iconTag?: string
  iconContentCopy?: string
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
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
