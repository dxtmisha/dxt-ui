import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { ListMenuEmits, ListMenuSlots } from '@dxtmisha/constructor/ListMenu'

import item from './D1ListMenu.vue'

import type { ListMenuProps } from './props'
export type { ListMenuProps } from './props'

export const D1ListMenu: DefineSetupFnComponent<
  ListMenuProps,
  ShortEmitsToObject<ListMenuEmits>,
  SlotsType<ListMenuSlots>
> = item
