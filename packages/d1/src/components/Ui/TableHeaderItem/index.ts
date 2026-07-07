import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { TableHeaderItemEmits, TableHeaderItemSlots } from '@dxtmisha/constructor/TableHeaderItem'

import item from './D1TableHeaderItem.vue'

import type { TableHeaderItemProps } from './props'
export type { TableHeaderItemProps } from './props'

export const D1TableHeaderItem: DefineSetupFnComponent<
  TableHeaderItemProps,
  ShortEmitsToObject<TableHeaderItemEmits>,
  SlotsType<TableHeaderItemSlots>
> = item
