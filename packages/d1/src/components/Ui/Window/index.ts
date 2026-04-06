import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { WindowEmits, WindowSlots } from '@dxtmisha/constructor/Window'

import item from './D1Window.vue'

import type { WindowProps } from './props'
export type { WindowProps } from './props'

export const D1Window: DefineSetupFnComponent<
  WindowProps,
  ShortEmitsToObject<WindowEmits>,
  SlotsType<WindowSlots>
> = item
