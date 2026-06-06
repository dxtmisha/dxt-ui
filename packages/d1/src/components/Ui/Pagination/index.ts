import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { PaginationEmits, PaginationSlots } from '@dxtmisha/constructor/Pagination'

import item from './D1Pagination.vue'

import type { PaginationProps } from './props'
export type { PaginationProps } from './props'

export const D1Pagination: DefineSetupFnComponent<
  PaginationProps,
  ShortEmitsToObject<PaginationEmits>,
  SlotsType<PaginationSlots>
> = item
