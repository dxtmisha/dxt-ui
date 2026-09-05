import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { FormEmits, FormSlots } from '@dxtmisha/constructor/Form'

import item from './D1Form.vue'

import type { FormProps } from './props'
export type { FormProps } from './props'

export const D1Form: DefineSetupFnComponent<
  FormProps,
  ShortEmitsToObject<FormEmits>,
  SlotsType<FormSlots>
> = item
