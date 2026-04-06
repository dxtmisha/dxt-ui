import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { BarsEmits, BarsSlots } from '@dxtmisha/constructor/Bars'

import item from './D1Bars.vue'

import type { BarsProps } from './props'
export type { BarsProps } from './props'

export const D1Bars: DefineSetupFnComponent<
  BarsProps,
  ShortEmitsToObject<BarsEmits>,
  SlotsType<BarsSlots>
> = item
