import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { RadioEmits, RadioSlots } from '@dxtmisha/constructor/Radio'

import item from './D1Radio.vue'

import type { RadioProps } from './props'
export type { RadioProps } from './props'

export const D1Radio: DefineSetupFnComponent<
  RadioProps,
  ShortEmitsToObject<RadioEmits>,
  SlotsType<RadioSlots>
> = item
