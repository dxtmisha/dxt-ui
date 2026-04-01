import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { SnackbarEmits, SnackbarSlots } from '@dxtmisha/constructor/Snackbar'

import item from './D1Snackbar.vue'

import type { SnackbarProps } from './props'
export type { SnackbarProps } from './props'

export const D1Snackbar: DefineSetupFnComponent<
  SnackbarProps,
  ShortEmitsToObject<SnackbarEmits>,
  SlotsType<SnackbarSlots>
> = item
