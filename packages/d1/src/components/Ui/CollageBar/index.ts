import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { CollageBarEmits, CollageBarSlots } from '@dxtmisha/constructor/CollageBar'

import item from './D1CollageBar.vue'

import type { CollageBarProps } from './props'
export type { CollageBarProps } from './props'

export const D1CollageBar: DefineSetupFnComponent<
  CollageBarProps,
  ShortEmitsToObject<CollageBarEmits>,
  SlotsType<CollageBarSlots>
> = item
