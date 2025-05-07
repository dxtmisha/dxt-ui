import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { ProgressEmits, ProgressSlots } from '@dxt-ui/constructor/Progress'

import item from './C2Progress.vue'

import type { ProgressProps } from './props'

export const C2Progress: DefineSetupFnComponent<
  ProgressProps,
  ShortEmitsToObject<ProgressEmits>,
  SlotsType<ProgressSlots>
> = item
