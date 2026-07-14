import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { PlaceholderEmits, PlaceholderSlots } from '@dxtmisha/constructor/Placeholder'

import item from './D1Placeholder.vue'

import type { PlaceholderProps } from './props'
export type { PlaceholderProps } from './props'

export const D1Placeholder: DefineSetupFnComponent<
  PlaceholderProps,
  ShortEmitsToObject<PlaceholderEmits>,
  SlotsType<PlaceholderSlots>
> = item
