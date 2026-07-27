import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { TableFlexEmits, TableFlexSlots } from '@dxtmisha/constructor/TableFlex'

import item from './D1TableFlex.vue'

import type { TableFlexProps } from './props'
export type { TableFlexProps } from './props'

export const D1TableFlex: DefineSetupFnComponent<
  TableFlexProps,
  ShortEmitsToObject<TableFlexEmits>,
  SlotsType<TableFlexSlots>
> = item
