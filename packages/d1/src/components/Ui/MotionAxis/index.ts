import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { MotionAxisEmits, MotionAxisSlots } from '@dxtmisha/constructor/MotionAxis'

import item from './D1MotionAxis.vue'

import type { MotionAxisProps } from './props'
export type { MotionAxisProps } from './props'

export const D1MotionAxis: DefineSetupFnComponent<
  MotionAxisProps,
  ShortEmitsToObject<MotionAxisEmits>,
  SlotsType<MotionAxisSlots>
> = item
