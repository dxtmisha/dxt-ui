import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { CarouselPaginationEmits, CarouselPaginationSlots } from '@dxtmisha/constructor/CarouselPagination'

import item from './D1CarouselPagination.vue'

import type { CarouselPaginationProps } from './props'
export type { CarouselPaginationProps } from './props'

export const D1CarouselPagination: DefineSetupFnComponent<
  CarouselPaginationProps,
  ShortEmitsToObject<CarouselPaginationEmits>,
  SlotsType<CarouselPaginationSlots>
> = item
