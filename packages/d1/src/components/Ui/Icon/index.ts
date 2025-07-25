import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { IconEmits, IconSlots } from '@dxt-ui/constructor/Icon'

import item from './D1Icon.vue'

import type { IconProps } from './props'
export type { IconProps } from './props'
export const D1Icon: DefineSetupFnComponent<
  IconProps,
  ShortEmitsToObject<IconEmits>,
  SlotsType<IconSlots>
> = item
