import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { DummyEmits, DummySlots } from '@dxtmisha/constructor/Dummy'

import item from './D1Dummy.vue'

import type { DummyProps } from './props'
export type { DummyProps } from './props'

export const D1Dummy: DefineSetupFnComponent<
  DummyProps,
  ShortEmitsToObject<DummyEmits>,
  SlotsType<DummySlots>
> = item
