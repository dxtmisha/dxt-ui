import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { MenuChipEmits, MenuChipSlots } from '@dxtmisha/constructor/MenuChip'

import item from './D1MenuChip.vue'

import type { MenuChipProps } from './props'
export type { MenuChipProps } from './props'

export const D1MenuChip: DefineSetupFnComponent<
  MenuChipProps,
  ShortEmitsToObject<MenuChipEmits>,
  SlotsType<MenuChipSlots>
> = item
