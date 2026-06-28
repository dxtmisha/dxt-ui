import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { BreadcrumbItemEmits, BreadcrumbItemSlots } from '@dxtmisha/constructor/BreadcrumbItem'

import item from './D1BreadcrumbItem.vue'

import type { BreadcrumbItemProps } from './props'
export type { BreadcrumbItemProps } from './props'

export const D1BreadcrumbItem: DefineSetupFnComponent<
  BreadcrumbItemProps,
  ShortEmitsToObject<BreadcrumbItemEmits>,
  SlotsType<BreadcrumbItemSlots>
> = item
