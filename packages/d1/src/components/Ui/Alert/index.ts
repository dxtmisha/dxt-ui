import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { AlertEmits, AlertSlots } from '@dxtmisha/constructor/Alert'

import item from './D1Alert.vue'

import type { AlertProps } from './props'
export type { AlertProps } from './props'

export const D1Alert: DefineSetupFnComponent<
  AlertProps,
  ShortEmitsToObject<AlertEmits>,
  SlotsType<AlertSlots>
> = item
