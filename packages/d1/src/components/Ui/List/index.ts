import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { ListEmits, ListSlots } from '@dxt-ui/constructor/List'

import item from './D1List.vue'

import type { ListProps } from './props'
export type { ListProps } from './props'

export const D1List: DefineSetupFnComponent<
  ListProps,
  ShortEmitsToObject<ListEmits>,
  SlotsType<ListSlots>
> = item
