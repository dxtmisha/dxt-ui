import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { ListGroupEmits, ListGroupSlots } from '@dxtmisha/constructor/ListGroup'

import item from './D1ListGroup.vue'

import type { ListGroupProps } from './props'
export type { ListGroupProps } from './props'

export const D1ListGroup: DefineSetupFnComponent<
  ListGroupProps,
  ShortEmitsToObject<ListGroupEmits>,
  SlotsType<ListGroupSlots>
> = item
