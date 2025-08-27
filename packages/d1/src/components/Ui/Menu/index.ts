import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { MenuEmits, MenuSlots } from '@dxt-ui/constructor/Menu'

import item from './D1Menu.vue'

import type { MenuProps } from './props'
export type { MenuProps } from './props'

export const D1Menu: DefineSetupFnComponent<
  MenuProps,
  ShortEmitsToObject<MenuEmits>,
  SlotsType<MenuSlots>
> = item
