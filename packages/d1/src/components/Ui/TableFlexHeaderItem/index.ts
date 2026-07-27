import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { TableFlexHeaderItemEmits, TableFlexHeaderItemSlots } from '@dxtmisha/constructor/TableFlexHeaderItem'

import item from './D1TableFlexHeaderItem.vue'

import type { TableFlexHeaderItemProps } from './props'
export type { TableFlexHeaderItemProps } from './props'

export const D1TableFlexHeaderItem: DefineSetupFnComponent<
  TableFlexHeaderItemProps,
  ShortEmitsToObject<TableFlexHeaderItemEmits>,
  SlotsType<TableFlexHeaderItemSlots>
> = item
