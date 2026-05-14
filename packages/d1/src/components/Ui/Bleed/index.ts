import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { BleedEmits, BleedSlots } from '@dxtmisha/constructor/Bleed'

import item from './D1Bleed.vue'

import type { BleedProps } from './props'
export type { BleedProps } from './props'

export const D1Bleed: DefineSetupFnComponent<
  BleedProps,
  ShortEmitsToObject<BleedEmits>,
  SlotsType<BleedSlots>
> = item
