import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { NavigationRailItemEmits, NavigationRailItemSlots } from '@dxtmisha/constructor/NavigationRailItem'

import item from './D1NavigationRailItem.vue'

import type { NavigationRailItemProps } from './props'
export type { NavigationRailItemProps } from './props'

export const D1NavigationRailItem: DefineSetupFnComponent<
  NavigationRailItemProps,
  ShortEmitsToObject<NavigationRailItemEmits>,
  SlotsType<NavigationRailItemSlots>
> = item
