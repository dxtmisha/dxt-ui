import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { D1DemoEmits, D1DemoProps, D1DemoSlots } from './types'

import item from './D1Demo.vue'

export type * from './types'

export const D1Demo: DefineSetupFnComponent<
  D1DemoProps,
  ShortEmitsToObject<D1DemoEmits>,
  SlotsType<D1DemoSlots>
> = item
