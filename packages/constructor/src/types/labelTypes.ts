import type { NumberOrString } from '@dxtmisha/functional'

export interface LabelSlots {
  default?(props: any): any
}

export interface LabelAlternativeSlots {
  label?(props: any): any
}

export interface LabelNumberSlots extends LabelSlots {
}

export interface LabelHighlightSlots extends LabelSlots {
}

export interface LabelProps {
  label?: NumberOrString
}

export interface LabelNumberProps extends LabelProps {
  labelMax?: NumberOrString
  formatting?: boolean
}

export interface LabelHighlightProps extends LabelProps {
  highlight?: string
  highlightLengthStart?: number
  value?: any
}
