import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { ButtonGroupEmits, ButtonGroupSlots } from '@dxtmisha/constructor/ButtonGroup'

import item from './D1ButtonGroup.vue'

import type { ButtonGroupProps } from './props'
export type { ButtonGroupProps } from './props'

export const D1ButtonGroup: DefineSetupFnComponent<
  ButtonGroupProps,
  ShortEmitsToObject<ButtonGroupEmits>,
  SlotsType<ButtonGroupSlots>
> = item
