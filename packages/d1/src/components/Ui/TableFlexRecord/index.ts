import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { TableFlexRecordEmits, TableFlexRecordSlots } from '@dxtmisha/constructor/TableFlexRecord'

import item from './D1TableFlexRecord.vue'

import type { TableFlexRecordProps } from './props'
export type { TableFlexRecordProps } from './props'

export const D1TableFlexRecord: DefineSetupFnComponent<
  TableFlexRecordProps,
  ShortEmitsToObject<TableFlexRecordEmits>,
  SlotsType<TableFlexRecordSlots>
> = item
