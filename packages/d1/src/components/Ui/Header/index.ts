import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { HeaderEmits, HeaderSlots } from '@dxtmisha/constructor/Header'

import item from './D1Header.vue'

import type { HeaderProps } from './props'
export type { HeaderProps } from './props'

export const D1Header: DefineSetupFnComponent<
  HeaderProps,
  ShortEmitsToObject<HeaderEmits>,
  SlotsType<HeaderSlots>
> = item
