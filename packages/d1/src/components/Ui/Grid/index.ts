import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { GridEmits, GridSlots } from '@dxtmisha/constructor/Grid'

import item from './D1Grid.vue'

import type { GridProps } from './props'
export type { GridProps } from './props'

export const D1Grid: DefineSetupFnComponent<
  GridProps,
  ShortEmitsToObject<GridEmits>,
  SlotsType<GridSlots>
> = item
