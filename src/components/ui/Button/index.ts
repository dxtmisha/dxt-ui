import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { ButtonEmits, ButtonSlots } from '@dxtmisha/constructor/Button'

import item from './UiButton.vue'

import type { ButtonProps } from './props'
export type { ButtonProps } from './props'

export const UiButton: DefineSetupFnComponent<
  ButtonProps,
  ShortEmitsToObject<ButtonEmits>,
  SlotsType<ButtonSlots>
> = item
