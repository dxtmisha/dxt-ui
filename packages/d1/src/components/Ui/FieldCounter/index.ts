import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { FieldCounterEmits, FieldCounterSlots } from '@dxtmisha/constructor/FieldCounter'

import item from './D1FieldCounter.vue'

import type { FieldCounterProps } from './props'
export type { FieldCounterProps } from './props'

export const D1FieldCounter: DefineSetupFnComponent<
  FieldCounterProps,
  ShortEmitsToObject<FieldCounterEmits>,
  SlotsType<FieldCounterSlots>
> = item
