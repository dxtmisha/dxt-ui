import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { NavigationListEmits, NavigationListSlots } from '@dxtmisha/constructor/NavigationList'

import item from './D1NavigationList.vue'

import type { NavigationListProps } from './props'
export type { NavigationListProps } from './props'

export const D1NavigationList: DefineSetupFnComponent<
  NavigationListProps,
  ShortEmitsToObject<NavigationListEmits>,
  SlotsType<NavigationListSlots>
> = item
