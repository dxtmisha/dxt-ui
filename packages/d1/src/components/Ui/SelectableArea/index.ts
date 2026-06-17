import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { SelectableAreaEmits, SelectableAreaSlots } from '@dxtmisha/constructor/SelectableArea'

import item from './D1SelectableArea.vue'

import type { SelectableAreaProps } from './props'
export type { SelectableAreaProps } from './props'

export const D1SelectableArea: DefineSetupFnComponent<
  SelectableAreaProps,
  ShortEmitsToObject<SelectableAreaEmits>,
  SlotsType<SelectableAreaSlots>
> = item
