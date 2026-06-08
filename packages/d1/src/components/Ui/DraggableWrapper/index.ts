import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { DraggableWrapperEmits, DraggableWrapperSlots } from '@dxtmisha/constructor/DraggableWrapper'

import item from './D1DraggableWrapper.vue'

import type { DraggableWrapperProps } from './props'
export type { DraggableWrapperProps } from './props'

export const D1DraggableWrapper: DefineSetupFnComponent<
  DraggableWrapperProps,
  ShortEmitsToObject<DraggableWrapperEmits>,
  SlotsType<DraggableWrapperSlots>
> = item
