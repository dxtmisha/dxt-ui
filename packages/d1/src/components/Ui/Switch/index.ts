import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { SwitchEmits, SwitchSlots } from '@dxtmisha/constructor/Switch'

import item from './D1Switch.vue'

import type { SwitchProps } from './props'
export type { SwitchProps } from './props'

export const D1Switch: DefineSetupFnComponent<
  SwitchProps,
  ShortEmitsToObject<SwitchEmits>,
  SlotsType<SwitchSlots>
> = item
