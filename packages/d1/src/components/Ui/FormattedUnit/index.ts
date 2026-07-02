import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { FormattedUnitEmits, FormattedUnitSlots } from '@dxtmisha/constructor/FormattedUnit'

import item from './D1FormattedUnit.vue'

import type { FormattedUnitProps } from './props'
export type { FormattedUnitProps } from './props'

export const D1FormattedUnit: DefineSetupFnComponent<
  FormattedUnitProps,
  ShortEmitsToObject<FormattedUnitEmits>,
  SlotsType<FormattedUnitSlots>
> = item
