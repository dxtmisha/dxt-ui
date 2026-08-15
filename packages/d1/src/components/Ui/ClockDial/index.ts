import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { ClockDialEmits, ClockDialSlots } from '@dxtmisha/constructor/ClockDial'

import item from './D1ClockDial.vue'

import type { ClockDialProps } from './props'
export type { ClockDialProps } from './props'

export const D1ClockDial: DefineSetupFnComponent<
  ClockDialProps,
  ShortEmitsToObject<ClockDialEmits>,
  SlotsType<ClockDialSlots>
> = item
