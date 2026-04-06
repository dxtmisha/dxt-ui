import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { DialogEmits, DialogSlots } from '@dxtmisha/constructor/Dialog'

import item from './D1Dialog.vue'

import type { DialogProps } from './props'
export type { DialogProps } from './props'

export const D1Dialog: DefineSetupFnComponent<
  DialogProps,
  ShortEmitsToObject<DialogEmits>,
  SlotsType<DialogSlots>
> = item
