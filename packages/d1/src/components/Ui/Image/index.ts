import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { ImageEmits, ImageSlots } from '@dxtmisha/constructor/Image'

import item from './D1Image.vue'

import type { ImageProps } from './props'
export type { ImageProps } from './props'

export const D1Image: DefineSetupFnComponent<
  ImageProps,
  ShortEmitsToObject<ImageEmits>,
  SlotsType<ImageSlots>
> = item
