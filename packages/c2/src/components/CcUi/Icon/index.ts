import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { IconEmits, IconSlots } from '@dxt-ui/constructor/Icon'

import item from './C2Icon.vue'

import type { IconProps } from './props'

export const C2Icon: DefineSetupFnComponent<
  IconProps,
  ShortEmitsToObject<IconEmits>,
  SlotsType<IconSlots>
> = item
