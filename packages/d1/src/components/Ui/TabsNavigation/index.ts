import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { TabsNavigationEmits, TabsNavigationSlots } from '@dxtmisha/constructor/TabsNavigation'

import item from './D1TabsNavigation.vue'

import type { TabsNavigationProps } from './props'
export type { TabsNavigationProps } from './props'

export const D1TabsNavigation: DefineSetupFnComponent<
  TabsNavigationProps,
  ShortEmitsToObject<TabsNavigationEmits>,
  SlotsType<TabsNavigationSlots>
> = item
