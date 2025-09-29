import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { SkeletonEmits, SkeletonSlots } from '@dxtmisha/constructor/Skeleton'

import item from './D1Skeleton.vue'

import type { SkeletonProps } from './props'

export const D1Skeleton: DefineSetupFnComponent<
  SkeletonProps,
  ShortEmitsToObject<SkeletonEmits>,
  SlotsType<SkeletonSlots>
> = item
