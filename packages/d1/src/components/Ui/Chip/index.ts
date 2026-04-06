import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { ChipEmits, ChipSlots } from '@dxtmisha/constructor/Chip'

import item from './D1Chip.vue'

import type { ChipProps } from './props'
export type { ChipProps } from './props'

export const D1Chip: DefineSetupFnComponent<
  ChipProps,
  ShortEmitsToObject<ChipEmits>,
  SlotsType<ChipSlots>
> = item
