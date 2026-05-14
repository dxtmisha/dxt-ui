import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { DividerEmits, DividerSlots } from '@dxtmisha/constructor/Divider'

import item from './D1Divider.vue'

import type { DividerProps } from './props'
export type { DividerProps } from './props'

export const D1Divider: DefineSetupFnComponent<
  DividerProps,
  ShortEmitsToObject<DividerEmits>,
  SlotsType<DividerSlots>
> = item
