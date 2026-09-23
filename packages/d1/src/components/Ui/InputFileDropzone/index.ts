import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { InputFileDropzoneEmits, InputFileDropzoneSlots } from '@dxtmisha/constructor/InputFileDropzone'

import item from './D1InputFileDropzone.vue'

import type { InputFileDropzoneProps } from './props'
export type { InputFileDropzoneProps } from './props'

export const D1InputFileDropzone: DefineSetupFnComponent<
  InputFileDropzoneProps,
  ShortEmitsToObject<InputFileDropzoneEmits>,
  SlotsType<InputFileDropzoneSlots>
> = item
