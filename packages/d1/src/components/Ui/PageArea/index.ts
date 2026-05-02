import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { PageAreaEmits, PageAreaSlots } from '@dxtmisha/constructor/PageArea'

import item from './D1PageArea.vue'

import type { PageAreaProps } from './props'
export type { PageAreaProps } from './props'

export const D1PageArea: DefineSetupFnComponent<
  PageAreaProps,
  ShortEmitsToObject<PageAreaEmits>,
  SlotsType<PageAreaSlots>
> = item
