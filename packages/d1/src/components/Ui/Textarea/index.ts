import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { TextareaEmits, TextareaSlots } from '@dxtmisha/constructor/Textarea'

import item from './D1Textarea.vue'

import type { TextareaProps } from './props'
export type { TextareaProps } from './props'

export const D1Textarea: DefineSetupFnComponent<
  TextareaProps,
  ShortEmitsToObject<TextareaEmits>,
  SlotsType<TextareaSlots>
> = item
