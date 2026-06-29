import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { BulletEmits, BulletSlots } from '@dxtmisha/constructor/Bullet'

import item from './D1Bullet.vue'

import type { BulletProps } from './props'
export type { BulletProps } from './props'

export const D1Bullet: DefineSetupFnComponent<
  BulletProps,
  ShortEmitsToObject<BulletEmits>,
  SlotsType<BulletSlots>
> = item
