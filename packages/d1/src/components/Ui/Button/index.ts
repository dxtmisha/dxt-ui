import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { ButtonEmits, ButtonSlots } from '@dxt-ui/constructor/Button'

import item from './D1Button.vue'

import type { ButtonProps } from './props'
export type { ButtonProps } from './props'

export const D1Button: DefineSetupFnComponent<
  ButtonProps,
  ShortEmitsToObject<ButtonEmits>,
  SlotsType<ButtonSlots>
> = item
