import type { FieldPatternItemOrFunction } from '../../types/fieldTypes'
import type {
  MaskFractionItem,
  MaskList,
  MaskMatchItem,
  MaskSpecialProp,
  MaskTypeItem
} from './basicTypes'

interface MaskPropsToken {
  // :type [!] System label / Системная метка
  visible?: boolean
  visiblePartly?: boolean
  left?: boolean
  right?: boolean
  center?: boolean
  dir?: 'ltr' | 'rtl'
  // :type [!] System label / Системная метка
}

export interface MaskPropsBasic {
  // Value
  name?: string
  value?: string | number
  valueDefault?: string | number
  currency?: string
  currencyHide?: boolean
  fullOnly?: boolean

  mask?: MaskList
  special?: MaskSpecialProp
  match?: MaskMatchItem
  groupSave?: boolean

  pattern?: FieldPatternItemOrFunction
  check?: FieldPatternItemOrFunction
  fraction?: MaskFractionItem

  // Style
  type?: MaskTypeItem
  view?: string

  inputAttrs?: Partial<HTMLInputElement>

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
  special: '*',
  match: /[0-9]/,
  type: 'text',
  groupSave: true,
  view: '_',
  ...{
    // :default [!] System label / Системная метка
    visible: true
    // :default [!] System label / Системная метка
  }
}
