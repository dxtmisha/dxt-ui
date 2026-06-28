import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { BreadcrumbsEmits, BreadcrumbsSlots } from '@dxtmisha/constructor/Breadcrumbs'

import item from './D1Breadcrumbs.vue'

import type { BreadcrumbsProps } from './props'
export type { BreadcrumbsProps } from './props'

export const D1Breadcrumbs: DefineSetupFnComponent<
  BreadcrumbsProps,
  ShortEmitsToObject<BreadcrumbsEmits>,
  SlotsType<BreadcrumbsSlots>
> = item
