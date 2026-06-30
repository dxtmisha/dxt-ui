import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { MotionStickyEmits, MotionStickySlots } from '@dxtmisha/constructor/MotionSticky'

import item from './D1MotionSticky.vue'

import type { MotionStickyProps } from './props'
export type { MotionStickyProps } from './props'

export const D1MotionSticky: DefineSetupFnComponent<
  MotionStickyProps,
  ShortEmitsToObject<MotionStickyEmits>,
  SlotsType<MotionStickySlots>
> = item
