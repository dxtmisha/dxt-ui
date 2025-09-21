import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { MaskEmits, MaskSlots } from '@dxt-ui/constructor/Mask'

import item from './D1Mask.vue'

import type { MaskProps } from './props'
export type { MaskProps } from './props'

export const D1Mask: DefineSetupFnComponent<
  MaskProps,
  ShortEmitsToObject<MaskEmits>,
  SlotsType<MaskSlots>
> = item
