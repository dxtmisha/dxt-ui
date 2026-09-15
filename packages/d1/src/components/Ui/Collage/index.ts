import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { CollageEmits, CollageSlots } from '@dxtmisha/constructor/Collage'

import item from './D1Collage.vue'

import type { CollageProps } from './props'
export type { CollageProps } from './props'

export const D1Collage: DefineSetupFnComponent<
  CollageProps,
  ShortEmitsToObject<CollageEmits>,
  SlotsType<CollageSlots>
> = item
