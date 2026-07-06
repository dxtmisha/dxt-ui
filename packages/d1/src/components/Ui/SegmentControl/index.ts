import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { SegmentControlEmits, SegmentControlSlots } from '@dxtmisha/constructor/SegmentControl'

import item from './D1SegmentControl.vue'

import type { SegmentControlProps } from './props'
export type { SegmentControlProps } from './props'

export const D1SegmentControl: DefineSetupFnComponent<
  SegmentControlProps,
  ShortEmitsToObject<SegmentControlEmits>,
  SlotsType<SegmentControlSlots>
> = item
