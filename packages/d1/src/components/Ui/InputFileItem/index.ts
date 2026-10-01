import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { InputFileItemEmits, InputFileItemSlots } from '@dxtmisha/constructor/InputFileItem'

import item from './D1InputFileItem.vue'

import type { InputFileItemProps } from './props'
export type { InputFileItemProps } from './props'

export const D1InputFileItem: DefineSetupFnComponent<
  InputFileItemProps,
  ShortEmitsToObject<InputFileItemEmits>,
  SlotsType<InputFileItemSlots>
> = item
