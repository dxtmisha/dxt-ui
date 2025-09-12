import type { GeoDate } from '@dxt-ui/functional'
import type { FieldPatternItemOrFunction } from '../../types/fieldTypes'

export type MaskTypeItem = GeoDate
  | 'text'
  | 'number'
  | 'number-format'
  | 'currency'

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
export type MaskSpecialList = Record<string, MaskSpecialItem>
export type MaskSpecialProp = string | string[] | MaskSpecialList

export type MaskList = string | string[]
