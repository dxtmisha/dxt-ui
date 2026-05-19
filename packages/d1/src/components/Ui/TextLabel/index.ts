import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { TextLabelEmits, TextLabelSlots } from '@dxtmisha/constructor/TextLabel'

import item from './D1TextLabel.vue'

import type { TextLabelProps } from './props'
export type { TextLabelProps } from './props'

export const D1TextLabel: DefineSetupFnComponent<
  TextLabelProps,
  ShortEmitsToObject<TextLabelEmits>,
  SlotsType<TextLabelSlots>
> = item
