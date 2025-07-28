import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { BadgeEmits, BadgeSlots } from '@dxt-ui/constructor/Badge'

import item from './D1Badge.vue'

import type { BadgeProps } from './props'
export type { BadgeProps } from './props'

export const D1Badge: DefineSetupFnComponent<
  BadgeProps,
  ShortEmitsToObject<BadgeEmits>,
  SlotsType<BadgeSlots>
> = item
