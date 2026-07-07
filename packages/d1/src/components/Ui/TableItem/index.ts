import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { TableItemEmits, TableItemSlots } from '@dxtmisha/constructor/TableItem'

import item from './D1TableItem.vue'

import type { TableItemProps } from './props'
export type { TableItemProps } from './props'

export const D1TableItem: DefineSetupFnComponent<
  TableItemProps,
  ShortEmitsToObject<TableItemEmits>,
  SlotsType<TableItemSlots>
> = item
