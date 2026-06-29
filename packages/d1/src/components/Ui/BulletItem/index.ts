import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { BulletItemEmits, BulletItemSlots } from '@dxtmisha/constructor/BulletItem'

import item from './D1BulletItem.vue'

import type { BulletItemProps } from './props'
export type { BulletItemProps } from './props'

export const D1BulletItem: DefineSetupFnComponent<
  BulletItemProps,
  ShortEmitsToObject<BulletItemEmits>,
  SlotsType<BulletItemSlots>
> = item
