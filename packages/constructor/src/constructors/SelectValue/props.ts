import type { ConstrBind, ListList } from '@dxtmisha/functional'

import type { IconPropsBasic, IconValue } from '../Icon'
import type { ChipPropsBasic, ChipPropsInclude } from '../Chip'

import type { EnabledProps } from '../../types/enabledTypes'

export type SelectValuePropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type SelectValuePropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic,
  Chip extends ChipPropsBasic = ChipPropsBasic
> = EnabledProps & ChipPropsInclude<Chip> & {
  // Value
  placeholder?: string
  value?: ListList

  // Style
  multiple?: boolean

  iconShow?: boolean
  iconAttrs?: ConstrBind<Icon>

  iconCancel?: IconValue<Icon>
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type SelectValueProps = SelectValuePropsBasic & SelectValuePropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsSelectValue = {
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
