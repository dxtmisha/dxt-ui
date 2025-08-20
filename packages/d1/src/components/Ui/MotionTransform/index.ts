import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { MotionTransformEmits, MotionTransformSlots } from '@dxt-ui/constructor/MotionTransform'

import item from './D1MotionTransform.vue'

import type { MotionTransformProps } from './props'
export type { MotionTransformProps } from './props'

export const D1MotionTransform: DefineSetupFnComponent<
  MotionTransformProps,
  ShortEmitsToObject<MotionTransformEmits>,
  SlotsType<MotionTransformSlots>
> = item
