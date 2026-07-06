import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { SegmentControlItemEmits, SegmentControlItemSlots } from '@dxtmisha/constructor/SegmentControlItem'

import item from './D1SegmentControlItem.vue'

import type { SegmentControlItemProps } from './props'
export type { SegmentControlItemProps } from './props'

export const D1SegmentControlItem: DefineSetupFnComponent<
  SegmentControlItemProps,
  ShortEmitsToObject<SegmentControlItemEmits>,
  SlotsType<SegmentControlItemSlots>
> = item
