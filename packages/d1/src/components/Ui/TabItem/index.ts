import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { TabItemEmits, TabItemSlots } from '@dxtmisha/constructor/TabItem'

import item from './D1TabItem.vue'

import type { TabItemProps } from './props'
export type { TabItemProps } from './props'

export const D1TabItem: DefineSetupFnComponent<
  TabItemProps,
  ShortEmitsToObject<TabItemEmits>,
  SlotsType<TabItemSlots>
> = item
