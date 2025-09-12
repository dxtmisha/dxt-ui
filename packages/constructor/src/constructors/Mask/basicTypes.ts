export type MaskMatchItem = RegExp | string
export type MaskSpecialItem = {
  defaultValue?: string
  rubber?: boolean
  transitionChar?: string | string[]
  maxLength?: number
  minLength?: number
  match?: MaskMatchItem
  pattern?: InputPatternItemOrFunction
  view?: string
}
export type MaskSpecialList = Record<string, MaskSpecialItem>
export type MaskSpecialProp = string | string[] | MaskSpecialList

export type MaskList = string | string[]
