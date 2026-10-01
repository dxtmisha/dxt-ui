import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { ClockPeriodEmits, ClockPeriodSlots } from '@dxtmisha/constructor/ClockPeriod'

import item from './D1ClockPeriod.vue'

import type { ClockPeriodProps } from './props'
export type { ClockPeriodProps } from './props'

export const D1ClockPeriod: DefineSetupFnComponent<
  ClockPeriodProps,
  ShortEmitsToObject<ClockPeriodEmits>,
  SlotsType<ClockPeriodSlots>
> = item
