import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { CheckboxEmits, CheckboxSlots } from '@dxtmisha/constructor/Checkbox'

import item from './D1Checkbox.vue'

import type { CheckboxProps } from './props'
export type { CheckboxProps } from './props'

export const D1Checkbox: DefineSetupFnComponent<
  CheckboxProps,
  ShortEmitsToObject<CheckboxEmits>,
  SlotsType<CheckboxSlots>
> = item
