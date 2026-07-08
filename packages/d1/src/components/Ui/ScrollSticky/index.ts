import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { ScrollStickyEmits, ScrollStickySlots } from '@dxtmisha/constructor/ScrollSticky'

import item from './D1ScrollSticky.vue'

import type { ScrollStickyProps } from './props'
export type { ScrollStickyProps } from './props'

export const D1ScrollSticky: DefineSetupFnComponent<
  ScrollStickyProps,
  ShortEmitsToObject<ScrollStickyEmits>,
  SlotsType<ScrollStickySlots>
> = item
