import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { RippleEmits, RippleSlots } from '@dxt-ui/constructor/Ripple'

import item from './C2Ripple.vue'

import type { RippleProps } from './props'

export const C2Ripple: DefineSetupFnComponent<
  RippleProps,
  ShortEmitsToObject<RippleEmits>,
  SlotsType<RippleSlots>
> = item
