import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { InputSearchEmits, InputSearchSlots } from '@dxtmisha/constructor/InputSearch'

import item from './D1InputSearch.vue'

import type { InputSearchProps } from './props'
export type { InputSearchProps } from './props'

export const D1InputSearch: DefineSetupFnComponent<
  InputSearchProps,
  ShortEmitsToObject<InputSearchEmits>,
  SlotsType<InputSearchSlots>
> = item
