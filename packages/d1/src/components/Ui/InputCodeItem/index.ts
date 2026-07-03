import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { InputCodeItemEmits, InputCodeItemSlots } from '@dxtmisha/constructor/InputCodeItem'

import item from './D1InputCodeItem.vue'

import type { InputCodeItemProps } from './props'
export type { InputCodeItemProps } from './props'

export const D1InputCodeItem: DefineSetupFnComponent<
  InputCodeItemProps,
  ShortEmitsToObject<InputCodeItemEmits>,
  SlotsType<InputCodeItemSlots>
> = item
