import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { InputImageEmits, InputImageSlots } from '@dxtmisha/constructor/InputImage'

import item from './D1InputImage.vue'

import type { InputImageProps } from './props'
export type { InputImageProps } from './props'

export const D1InputImage: DefineSetupFnComponent<
  InputImageProps,
  ShortEmitsToObject<InputImageEmits>,
  SlotsType<InputImageSlots>
> = item
