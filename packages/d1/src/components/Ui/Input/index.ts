import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { InputEmits, InputSlots } from '@dxtmisha/constructor/Input'

import item from './D1Input.vue'

import type { InputProps } from './props'
export type { InputProps } from './props'

export const D1Input: DefineSetupFnComponent<
  InputProps,
  ShortEmitsToObject<InputEmits>,
  SlotsType<InputSlots>
> = item
