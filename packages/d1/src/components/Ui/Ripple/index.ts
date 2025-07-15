import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { RippleEmits, RippleSlots } from '@dxt-ui/constructor/Ripple'

import item from './D1Ripple.vue'

import type { RippleProps } from './props'
export type { RippleProps } from './props'

export const D1Ripple: DefineSetupFnComponent<
  RippleProps,
  ShortEmitsToObject<RippleEmits>,
  SlotsType<RippleSlots>
> = item
