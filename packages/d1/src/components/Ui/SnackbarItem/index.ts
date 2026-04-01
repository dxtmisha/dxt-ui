import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { SnackbarItemEmits, SnackbarItemSlots } from '@dxtmisha/constructor/SnackbarItem'

import item from './D1SnackbarItem.vue'

import type { SnackbarItemProps } from './props'
export type { SnackbarItemProps } from './props'

export const D1SnackbarItem: DefineSetupFnComponent<
  SnackbarItemProps,
  ShortEmitsToObject<SnackbarItemEmits>,
  SlotsType<SnackbarItemSlots>
> = item
