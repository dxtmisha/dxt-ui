import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { ArrowEmits, ArrowSlots } from '@dxtmisha/constructor/Arrow'

import item from './D1Arrow.vue'

import type { ArrowProps } from './props'
export type { ArrowProps } from './props'

export const D1Arrow: DefineSetupFnComponent<
  ArrowProps,
  ShortEmitsToObject<ArrowEmits>,
  SlotsType<ArrowSlots>
> = item
