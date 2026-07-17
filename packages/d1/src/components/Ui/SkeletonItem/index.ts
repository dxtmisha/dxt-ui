import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { SkeletonItemEmits, SkeletonItemSlots } from '@dxtmisha/constructor/SkeletonItem'

import item from './D1SkeletonItem.vue'

import type { SkeletonItemProps } from './props'
export type { SkeletonItemProps } from './props'

export const D1SkeletonItem: DefineSetupFnComponent<
  SkeletonItemProps,
  ShortEmitsToObject<SkeletonItemEmits>,
  SlotsType<SkeletonItemSlots>
> = item
