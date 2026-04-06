import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { TextareaAutosizeEmits, TextareaAutosizeSlots } from '@dxtmisha/constructor/TextareaAutosize'

import item from './D1TextareaAutosize.vue'

import type { TextareaAutosizeProps } from './props'
export type { TextareaAutosizeProps } from './props'

export const D1TextareaAutosize: DefineSetupFnComponent<
  TextareaAutosizeProps,
  ShortEmitsToObject<TextareaAutosizeEmits>,
  SlotsType<TextareaAutosizeSlots>
> = item
