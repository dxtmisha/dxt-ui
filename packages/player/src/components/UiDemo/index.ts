import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { UiDemoEmits, UiDemoProps, UiDemoSlots } from './types'

import item from './UiDemo.vue'

export type * from './types'

export const UiDemo: DefineSetupFnComponent<
  UiDemoProps,
  ShortEmitsToObject<UiDemoEmits>,
  SlotsType<UiDemoSlots>
> = item
