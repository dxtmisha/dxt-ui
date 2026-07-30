import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { SliderFieldEmits, SliderFieldSlots } from '@dxtmisha/constructor/SliderField'

import item from './D1SliderField.vue'

import type { SliderFieldProps } from './props'
export type { SliderFieldProps } from './props'

export const D1SliderField: DefineSetupFnComponent<
  SliderFieldProps,
  ShortEmitsToObject<SliderFieldEmits>,
  SlotsType<SliderFieldSlots>
> = item
