import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { SectionEmits, SectionSlots } from '@dxtmisha/constructor/Section'

import item from './D1Section.vue'

import type { SectionProps } from './props'
export type { SectionProps } from './props'

export const D1Section: DefineSetupFnComponent<
  SectionProps,
  ShortEmitsToObject<SectionEmits>,
  SlotsType<SectionSlots>
> = item
