import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { DropzoneEmits, DropzoneSlots } from '@dxtmisha/constructor/Dropzone'

import item from './D1Dropzone.vue'

import type { DropzoneProps } from './props'
export type { DropzoneProps } from './props'

export const D1Dropzone: DefineSetupFnComponent<
  DropzoneProps,
  ShortEmitsToObject<DropzoneEmits>,
  SlotsType<DropzoneSlots>
> = item
