import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { InputPhoneDialCodeEmits, InputPhoneDialCodeSlots } from '@dxtmisha/constructor/InputPhoneDialCode'

import item from './D1InputPhoneDialCode.vue'

import type { InputPhoneDialCodeProps } from './props'
export type { InputPhoneDialCodeProps } from './props'

export const D1InputPhoneDialCode: DefineSetupFnComponent<
  InputPhoneDialCodeProps,
  ShortEmitsToObject<InputPhoneDialCodeEmits>,
  SlotsType<InputPhoneDialCodeSlots>
> = item
