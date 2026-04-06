import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { GridItemEmits, GridItemSlots } from '@dxtmisha/constructor/GridItem'

import item from './D1GridItem.vue'

import type { GridItemProps } from './props'
export type { GridItemProps } from './props'

export const D1GridItem: DefineSetupFnComponent<
  GridItemProps,
  ShortEmitsToObject<GridItemEmits>,
  SlotsType<GridItemSlots>
> = item
