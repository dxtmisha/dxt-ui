import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { ButtonEmits, ButtonSlots } from '@dxt-ui/constructor/Button'

import item from './C2Button.vue'

import type { ButtonProps } from './props'

export const C2Button: DefineSetupFnComponent<
  ButtonProps,
  ShortEmitsToObject<ButtonEmits>,
  SlotsType<ButtonSlots>
> = item
