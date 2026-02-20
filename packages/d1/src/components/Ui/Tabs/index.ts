import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { TabsEmits, TabsSlots } from '@dxtmisha/constructor/Tabs'

import item from './D1Tabs.vue'

import type { TabsProps } from './props'
export type { TabsProps } from './props'

export const D1Tabs: DefineSetupFnComponent<
  TabsProps,
  ShortEmitsToObject<TabsEmits>,
  SlotsType<TabsSlots>
> = item
