import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { MotionFlipEmits, MotionFlipSlots } from '@dxtmisha/constructor/MotionFlip'

import item from './D1MotionFlip.vue'

import type { MotionFlipProps } from './props'
export type { MotionFlipProps } from './props'

export const D1MotionFlip: DefineSetupFnComponent<
  MotionFlipProps,
  ShortEmitsToObject<MotionFlipEmits>,
  SlotsType<MotionFlipSlots>
> = item
