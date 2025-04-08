import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { ImageEmits, ImageSlots } from '@dxt-ui/constructor/Image'

import item from './C2Image.vue'

import type { ImageProps } from './props'

export const C2Image: DefineSetupFnComponent<
  ImageProps,
  ShortEmitsToObject<ImageEmits>,
  SlotsType<ImageSlots>
> = item
