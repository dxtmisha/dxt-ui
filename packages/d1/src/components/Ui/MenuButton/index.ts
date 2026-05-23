import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { MenuButtonEmits, MenuButtonSlots } from '@dxtmisha/constructor/MenuButton'

import item from './D1MenuButton.vue'

import type { MenuButtonProps } from './props'
export type { MenuButtonProps } from './props'

export const D1MenuButton: DefineSetupFnComponent<
  MenuButtonProps,
  ShortEmitsToObject<MenuButtonEmits>,
  SlotsType<MenuButtonSlots>
> = item
