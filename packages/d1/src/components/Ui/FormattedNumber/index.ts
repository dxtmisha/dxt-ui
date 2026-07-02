import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { FormattedNumberEmits, FormattedNumberSlots } from '@dxtmisha/constructor/FormattedNumber'

import item from './D1FormattedNumber.vue'

import type { FormattedNumberProps } from './props'
export type { FormattedNumberProps } from './props'

export const D1FormattedNumber: DefineSetupFnComponent<
  FormattedNumberProps,
  ShortEmitsToObject<FormattedNumberEmits>,
  SlotsType<FormattedNumberSlots>
> = item
