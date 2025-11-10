import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { ChipGroupEmits, ChipGroupSlots } from '@dxtmisha/constructor/ChipGroup'

import item from './D1ChipGroup.vue'

import type { ChipGroupProps } from './props'
export type { ChipGroupProps } from './props'

export const D1ChipGroup: DefineSetupFnComponent<
  ChipGroupProps,
  ShortEmitsToObject<ChipGroupEmits>,
  SlotsType<ChipGroupSlots>
> = item
