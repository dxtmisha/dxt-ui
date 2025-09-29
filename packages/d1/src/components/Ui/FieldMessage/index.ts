import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { FieldMessageEmits, FieldMessageSlots } from '@dxtmisha/constructor/FieldMessage'

import item from './D1FieldMessage.vue'

import type { FieldMessageProps } from './props'
export type { FieldMessageProps } from './props'

export const D1FieldMessage: DefineSetupFnComponent<
  FieldMessageProps,
  ShortEmitsToObject<FieldMessageEmits>,
  SlotsType<FieldMessageSlots>
> = item
