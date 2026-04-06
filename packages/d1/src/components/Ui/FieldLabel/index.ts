import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { FieldLabelEmits, FieldLabelSlots } from '@dxtmisha/constructor/FieldLabel'

import item from './D1FieldLabel.vue'

import type { FieldLabelProps } from './props'
export type { FieldLabelProps } from './props'

export const D1FieldLabel: DefineSetupFnComponent<
  FieldLabelProps,
  ShortEmitsToObject<FieldLabelEmits>,
  SlotsType<FieldLabelSlots>
> = item
