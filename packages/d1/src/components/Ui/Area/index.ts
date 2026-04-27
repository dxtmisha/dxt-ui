import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { AreaEmits, AreaSlots } from '@dxtmisha/constructor/Area'

import item from './D1Area.vue'

import type { AreaProps } from './props'
export type { AreaProps } from './props'

export const D1Area: DefineSetupFnComponent<
  AreaProps,
  ShortEmitsToObject<AreaEmits>,
  SlotsType<AreaSlots>
> = item
