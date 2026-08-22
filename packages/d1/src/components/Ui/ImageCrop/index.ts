import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { ImageCropEmits, ImageCropSlots } from '@dxtmisha/constructor/ImageCrop'

import item from './D1ImageCrop.vue'

import type { ImageCropProps } from './props'
export type { ImageCropProps } from './props'

export const D1ImageCrop: DefineSetupFnComponent<
  ImageCropProps,
  ShortEmitsToObject<ImageCropEmits>,
  SlotsType<ImageCropSlots>
> = item
