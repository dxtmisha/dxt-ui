import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { ModalEmits, ModalSlots } from '@dxtmisha/constructor/Modal'

import item from './D1Modal.vue'

import type { ModalProps } from './props'
export type { ModalProps } from './props'

export const D1Modal: DefineSetupFnComponent<
  ModalProps,
  ShortEmitsToObject<ModalEmits>,
  SlotsType<ModalSlots>
> = item
