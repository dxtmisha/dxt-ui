import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { ScrollbarEmits, ScrollbarSlots } from '@dxt-ui/constructor/Scrollbar'

import item from './C2Scrollbar.vue'

import type { ScrollbarProps } from './props'
export type { ScrollbarProps } from './props'

export const C2Scrollbar: DefineSetupFnComponent<
  ScrollbarProps,
  ShortEmitsToObject<ScrollbarEmits>,
  SlotsType<ScrollbarSlots>
> = item
