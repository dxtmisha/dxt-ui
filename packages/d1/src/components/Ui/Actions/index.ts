import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { ActionsEmits, ActionsSlots } from '@dxtmisha/constructor/Actions'

import item from './D1Actions.vue'

import type { ActionsProps } from './props'
export type { ActionsProps } from './props'

export const D1Actions: DefineSetupFnComponent<
  ActionsProps,
  ShortEmitsToObject<ActionsEmits>,
  SlotsType<ActionsSlots>
> = item
