import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { SliderEmits, SliderSlots } from '@dxtmisha/constructor/Slider'

import item from './D1Slider.vue'

import type { SliderProps } from './props'
export type { SliderProps } from './props'

export const D1Slider: DefineSetupFnComponent<
  SliderProps,
  ShortEmitsToObject<SliderEmits>,
  SlotsType<SliderSlots>
> = item
