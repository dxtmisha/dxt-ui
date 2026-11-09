import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { ComponentOutletEmits, ComponentOutletSlots } from '@dxtmisha/constructor/ComponentOutlet'

import item from './D1ComponentOutlet.vue'

import type { ComponentOutletProps } from './props'
export type { ComponentOutletProps } from './props'

export const D1ComponentOutlet: DefineSetupFnComponent<
  ComponentOutletProps,
  ShortEmitsToObject<ComponentOutletEmits>,
  SlotsType<ComponentOutletSlots>
> = item
