import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { HorizontalScrollEmits, HorizontalScrollSlots } from '@dxtmisha/constructor/HorizontalScroll'

import item from './D1HorizontalScroll.vue'

import type { HorizontalScrollProps } from './props'
export type { HorizontalScrollProps } from './props'

export const D1HorizontalScroll: DefineSetupFnComponent<
  HorizontalScrollProps,
  ShortEmitsToObject<HorizontalScrollEmits>,
  SlotsType<HorizontalScrollSlots>
> = item
