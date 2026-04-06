import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { AccordionEmits, AccordionSlots } from '@dxtmisha/constructor/Accordion'

import item from './D1Accordion.vue'

import type { AccordionProps } from './props'
export type { AccordionProps } from './props'

export const D1Accordion: DefineSetupFnComponent<
  AccordionProps,
  ShortEmitsToObject<AccordionEmits>,
  SlotsType<AccordionSlots>
> = item
