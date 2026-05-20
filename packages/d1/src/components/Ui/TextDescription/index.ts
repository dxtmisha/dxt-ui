import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { TextDescriptionEmits, TextDescriptionSlots } from '@dxtmisha/constructor/TextDescription'

import item from './D1TextDescription.vue'

import type { TextDescriptionProps } from './props'
export type { TextDescriptionProps } from './props'

export const D1TextDescription: DefineSetupFnComponent<
  TextDescriptionProps,
  ShortEmitsToObject<TextDescriptionEmits>,
  SlotsType<TextDescriptionSlots>
> = item
