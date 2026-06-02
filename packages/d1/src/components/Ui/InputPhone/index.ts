import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { InputPhoneEmits, InputPhoneSlots } from '@dxtmisha/constructor/InputPhone'

import item from './D1InputPhone.vue'

import type { InputPhoneProps } from './props'
export type { InputPhoneProps } from './props'

export const D1InputPhone: DefineSetupFnComponent<
  InputPhoneProps,
  ShortEmitsToObject<InputPhoneEmits>,
  SlotsType<InputPhoneSlots>
> = item
