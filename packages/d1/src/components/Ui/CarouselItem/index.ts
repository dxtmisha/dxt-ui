import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { CarouselItemEmits, CarouselItemSlots } from '@dxtmisha/constructor/CarouselItem'

import item from './D1CarouselItem.vue'

import type { CarouselItemProps } from './props'
export type { CarouselItemProps } from './props'

export const D1CarouselItem: DefineSetupFnComponent<
  CarouselItemProps,
  ShortEmitsToObject<CarouselItemEmits>,
  SlotsType<CarouselItemSlots>
> = item
