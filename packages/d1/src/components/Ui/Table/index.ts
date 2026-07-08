import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { TableEmits, TableSlots } from '@dxtmisha/constructor/Table'

import item from './D1Table.vue'

import type { TableProps } from './props'
export type { TableProps } from './props'

export const D1Table: DefineSetupFnComponent<
  TableProps,
  ShortEmitsToObject<TableEmits>,
  SlotsType<TableSlots>
> = item
