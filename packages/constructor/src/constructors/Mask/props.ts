import type { MaskList } from './basicTypes.ts'

interface MaskPropsToken {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export interface MaskPropsBasic {
  // Value
  value?: string | number
  valueDefault?: string | number
  currency?: string
  currencyHide?: boolean
  fullOnly?: boolean

  // Mask
  mask?: MaskList
  special?: MaskSpecialProp
  groupSave?: boolean
  pattern?: InputPatternItemOrFunction
  check?: InputPatternItemOrFunction
  fraction?: MaskFractionItem
  view?: string

  // Input
  type?: MaskTypeItem
  name?: string
  match?: MaskMatchItem
  inputAttrs?: Partial<HTMLInputElement>

  // Style
  language?: string
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface MaskProps extends MaskPropsBasic, MaskPropsToken {
}

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsMask = {
  // TODO: Location for a user-defined default value / Место для пользовательского значения по умолчанию
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
