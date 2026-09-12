import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { CollageItemEmits, CollageItemSlots } from '@dxtmisha/constructor/CollageItem'

import item from './D1CollageItem.vue'

import type { CollageItemProps } from './props'
export type { CollageItemProps } from './props'

export const D1CollageItem: DefineSetupFnComponent<
  CollageItemProps,
  ShortEmitsToObject<CollageItemEmits>,
  SlotsType<CollageItemSlots>
> = item
