import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { CellEmits, CellSlots } from '@dxt-ui/constructor/Cell'

import item from './D1Cell.vue'

import type { CellProps } from './props'
export type { CellProps } from './props'

export const D1Cell: DefineSetupFnComponent<
  CellProps,
  ShortEmitsToObject<CellEmits>,
  SlotsType<CellSlots>
> = item
