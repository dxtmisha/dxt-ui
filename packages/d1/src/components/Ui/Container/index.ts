import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { ContainerEmits, ContainerSlots } from '@dxtmisha/constructor/Container'

import item from './D1Container.vue'

import type { ContainerProps } from './props'
export type { ContainerProps } from './props'

export const D1Container: DefineSetupFnComponent<
  ContainerProps,
  ShortEmitsToObject<ContainerEmits>,
  SlotsType<ContainerSlots>
> = item
