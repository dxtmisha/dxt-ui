import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { TableFlexItemEmits, TableFlexItemSlots } from '@dxtmisha/constructor/TableFlexItem'

import item from './D1TableFlexItem.vue'

import type { TableFlexItemProps } from './props'
export type { TableFlexItemProps } from './props'

export const D1TableFlexItem: DefineSetupFnComponent<
  TableFlexItemProps,
  ShortEmitsToObject<TableFlexItemEmits>,
  SlotsType<TableFlexItemSlots>
> = item
