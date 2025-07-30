import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { ListItemEmits, ListItemSlots } from '@dxt-ui/constructor/ListItem'

import item from './D1ListItem.vue'

import type { ListItemProps } from './props'
export type { ListItemProps } from './props'

export const D1ListItem: DefineSetupFnComponent<
  ListItemProps,
  ShortEmitsToObject<ListItemEmits>,
  SlotsType<ListItemSlots>
> = item
