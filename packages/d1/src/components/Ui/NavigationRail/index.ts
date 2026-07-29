import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { NavigationRailEmits, NavigationRailSlots } from '@dxtmisha/constructor/NavigationRail'

import item from './D1NavigationRail.vue'

import type { NavigationRailProps } from './props'
export type { NavigationRailProps } from './props'

export const D1NavigationRail: DefineSetupFnComponent<
  NavigationRailProps,
  ShortEmitsToObject<NavigationRailEmits>,
  SlotsType<NavigationRailSlots>
> = item
