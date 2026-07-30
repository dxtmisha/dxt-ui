import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { HeadroomEmits, HeadroomSlots } from '@dxtmisha/constructor/Headroom'

import item from './D1Headroom.vue'

import type { HeadroomProps } from './props'
export type { HeadroomProps } from './props'

export const D1Headroom: DefineSetupFnComponent<
  HeadroomProps,
  ShortEmitsToObject<HeadroomEmits>,
  SlotsType<HeadroomSlots>
> = item
