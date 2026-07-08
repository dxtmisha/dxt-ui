import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { TableRecordEmits, TableRecordSlots } from '@dxtmisha/constructor/TableRecord'

import item from './D1TableRecord.vue'

import type { TableRecordProps } from './props'
export type { TableRecordProps } from './props'

export const D1TableRecord: DefineSetupFnComponent<
  TableRecordProps,
  ShortEmitsToObject<TableRecordEmits>,
  SlotsType<TableRecordSlots>
> = item
