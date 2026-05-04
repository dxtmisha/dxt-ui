import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { DemoTestFigmaLayoutEmits, DemoTestFigmaLayoutProps, DemoTestFigmaLayoutSlots } from './types'

import item from './DemoTestFigmaLayout.vue'

export type * from './types'

export const DemoTestFigmaLayout: DefineSetupFnComponent<
  DemoTestFigmaLayoutProps,
  ShortEmitsToObject<DemoTestFigmaLayoutEmits>,
  SlotsType<DemoTestFigmaLayoutSlots>
> = item
