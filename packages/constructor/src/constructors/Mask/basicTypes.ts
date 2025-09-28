import type { GeoDate } from '@dxtmisha/functional'
import type { FieldPatternItemOrFunction, FieldValidationItem } from '../../types/fieldTypes'

export type MaskTypeItem = GeoDate
  | 'text'
  | 'number'
  | 'number-format'
  | 'currency'

export type MaskElementInput = HTMLInputElement | undefined
export type MaskMatchItem = RegExp | string
export type MaskFractionItem = string | boolean | number

export type MaskSpecialItem = {
  defaultValue?: string
  rubber?: boolean
  transitionChar?: string | string[]
  minLength?: number
  maxLength?: number
  match?: MaskMatchItem
  pattern?: FieldPatternItemOrFunction
  view?: string
}
export type MaskSpecialInfo = {
  index: number
  key: number
  char: string
}
export type MaskSpecialList = Record<string, MaskSpecialItem>
export type MaskSpecialProp = string | string[] | MaskSpecialList

export type MaskViewItem = {
  className: string
  value: string
}
export type MaskViewList = MaskViewItem[]

export type MaskList = string | string[]

export type MaskEventData = FieldValidationItem
export type MaskEventSelection = {
  target: HTMLInputElement
  start: number
  end: number
  length: number
}

export const MASK_CHAR_DELETE = '~'
export const MASK_VIEW_DEFAULT = '_'
