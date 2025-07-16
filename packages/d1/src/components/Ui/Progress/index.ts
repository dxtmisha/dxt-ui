import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { ProgressEmits, ProgressSlots } from '@dxt-ui/constructor/Progress'

import item from './D1Progress.vue'

import type { ProgressProps } from './props'
export type { ProgressProps } from './props'

export const D1Progress: DefineSetupFnComponent<
  ProgressProps,
  ShortEmitsToObject<ProgressEmits>,
  SlotsType<ProgressSlots>
> = item
