import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { DemoAiDocEmits, DemoAiDocProps, DemoAiDocSlots } from './types'

import item from './DemoAiDoc.vue'

export type * from './types'

export const DemoAiDoc: DefineSetupFnComponent<
  DemoAiDocProps,
  ShortEmitsToObject<DemoAiDocEmits>,
  SlotsType<DemoAiDocSlots>
> = item
