import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { ClientOnlyEmits, ClientOnlySlots } from '@dxtmisha/constructor/ClientOnly'

import item from './D1ClientOnly.vue'

import type { ClientOnlyProps } from './props'
export type { ClientOnlyProps } from './props'

export const D1ClientOnly: DefineSetupFnComponent<
  ClientOnlyProps,
  ShortEmitsToObject<ClientOnlyEmits>,
  SlotsType<ClientOnlySlots>
> = item
