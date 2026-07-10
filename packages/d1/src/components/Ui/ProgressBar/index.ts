import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { ProgressBarEmits, ProgressBarSlots } from '@dxtmisha/constructor/ProgressBar'

import item from './D1ProgressBar.vue'

import type { ProgressBarProps } from './props'
export type { ProgressBarProps } from './props'

export const D1ProgressBar: DefineSetupFnComponent<
  ProgressBarProps,
  ShortEmitsToObject<ProgressBarEmits>,
  SlotsType<ProgressBarSlots>
> = item
