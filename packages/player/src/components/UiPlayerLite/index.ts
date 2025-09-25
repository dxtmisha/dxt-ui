import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { UiPlayerLiteEmits, UiPlayerLiteProps, UiPlayerLiteSlots } from './types'

import item from './UiPlayerLite.vue'

export type * from './types'

export const UiPlayerLite: DefineSetupFnComponent<
  UiPlayerLiteProps,
  ShortEmitsToObject<UiPlayerLiteEmits>,
  SlotsType<UiPlayerLiteSlots>
> = item
