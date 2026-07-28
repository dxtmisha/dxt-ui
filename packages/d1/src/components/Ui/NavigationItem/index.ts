import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { NavigationItemEmits, NavigationItemSlots } from '@dxtmisha/constructor/NavigationItem'

import item from './D1NavigationItem.vue'

import type { NavigationItemProps } from './props'
export type { NavigationItemProps } from './props'

export const D1NavigationItem: DefineSetupFnComponent<
  NavigationItemProps,
  ShortEmitsToObject<NavigationItemEmits>,
  SlotsType<NavigationItemSlots>
> = item
