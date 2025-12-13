import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { F1TestEmits, F1TestProps, F1TestSlots } from './types'

import item from './F1Test.vue'

export type * from './types'

export const F1Test: DefineSetupFnComponent<
  F1TestProps,
  ShortEmitsToObject<F1TestEmits>,
  SlotsType<F1TestSlots>
> = item
