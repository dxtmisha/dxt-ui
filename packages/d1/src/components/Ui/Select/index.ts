import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { SelectEmits, SelectSlots } from '@dxtmisha/constructor/Select'

import item from './D1Select.vue'

import type { SelectProps } from './props'
export type { SelectProps } from './props'

export const D1Select: DefineSetupFnComponent<
  SelectProps,
  ShortEmitsToObject<SelectEmits>,
  SlotsType<SelectSlots>
> = item
