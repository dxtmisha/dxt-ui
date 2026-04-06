import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { PageEmits, PageSlots } from '@dxtmisha/constructor/Page'

import item from './D1Page.vue'

import type { PageProps } from './props'
export type { PageProps } from './props'

export const D1Page: DefineSetupFnComponent<
  PageProps,
  ShortEmitsToObject<PageEmits>,
  SlotsType<PageSlots>
> = item
