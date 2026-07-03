import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { InputCodeEmits, InputCodeSlots } from '@dxtmisha/constructor/InputCode'

import item from './D1InputCode.vue'

import type { InputCodeProps } from './props'
export type { InputCodeProps } from './props'

export const D1InputCode: DefineSetupFnComponent<
  InputCodeProps,
  ShortEmitsToObject<InputCodeEmits>,
  SlotsType<InputCodeSlots>
> = item
