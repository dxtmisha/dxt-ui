import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { AvatarEmits, AvatarSlots } from '@dxtmisha/constructor/Avatar'

import item from './D1Avatar.vue'

import type { AvatarProps } from './props'
export type { AvatarProps } from './props'

export const D1Avatar: DefineSetupFnComponent<
  AvatarProps,
  ShortEmitsToObject<AvatarEmits>,
  SlotsType<AvatarSlots>
> = item
