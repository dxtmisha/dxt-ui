import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { SkeletonEmits, SkeletonSlots } from '@dxt-ui/constructor/Skeleton'

import item from './C2Skeleton.vue'

import type { SkeletonProps } from './props'

export const C2Skeleton: DefineSetupFnComponent<
  SkeletonProps,
  ShortEmitsToObject<SkeletonEmits>,
  SlotsType<SkeletonSlots>
> = item
