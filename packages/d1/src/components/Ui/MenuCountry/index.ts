import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { MenuCountryEmits, MenuCountrySlots } from '@dxtmisha/constructor/MenuCountry'

import item from './D1MenuCountry.vue'

import type { MenuCountryProps } from './props'
export type { MenuCountryProps } from './props'

export const D1MenuCountry: DefineSetupFnComponent<
  MenuCountryProps,
  ShortEmitsToObject<MenuCountryEmits>,
  SlotsType<MenuCountrySlots>
> = item
