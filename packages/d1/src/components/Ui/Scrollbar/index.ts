import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { ScrollbarEmits, ScrollbarSlots } from '@dxtmisha/constructor/Scrollbar'

import item from './D1Scrollbar.vue'

import type { ScrollbarProps } from './props'
export type { ScrollbarProps } from './props'

export const D1Scrollbar: DefineSetupFnComponent<
  ScrollbarProps,
  ShortEmitsToObject<ScrollbarEmits>,
  SlotsType<ScrollbarSlots>
> = item
