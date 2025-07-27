import type { LabelProps, LabelSlots } from './labelTypes'

export interface LabelNumberSlots extends LabelSlots {
}

export interface LabelNumberProps extends LabelProps {
  labelMax?: number
  formatting?: boolean
}
