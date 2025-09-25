import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { ComponentDocEmits, ComponentDocProps, ComponentDocSlots } from './types'

import item from './ComponentDoc.vue'

export type * from './types'

export const ComponentDoc: DefineSetupFnComponent<
  ComponentDocProps,
  ShortEmitsToObject<ComponentDocEmits>,
  SlotsType<ComponentDocSlots>
> = item
