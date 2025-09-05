import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { FieldEmits, FieldSlots } from '@dxt-ui/constructor/Field'

import item from './D1Field.vue'

import type { FieldProps } from './props'
export type { FieldProps } from './props'

export const D1Field: DefineSetupFnComponent<
  FieldProps,
  ShortEmitsToObject<FieldEmits>,
  SlotsType<FieldSlots>
> = item
