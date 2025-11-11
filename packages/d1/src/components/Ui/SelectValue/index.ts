import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { SelectValueEmits, SelectValueSlots } from '@dxtmisha/constructor/SelectValue'

import item from './D1SelectValue.vue'

import type { SelectValueProps } from './props'
export type { SelectValueProps } from './props'

export const D1SelectValue: DefineSetupFnComponent<
  SelectValueProps,
  ShortEmitsToObject<SelectValueEmits>,
  SlotsType<SelectValueSlots>
> = item
