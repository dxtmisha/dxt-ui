import type { DefineSetupFnComponent, ShortEmitsToObject, SlotsType } from 'vue'
import type { CropAreaEmits, CropAreaSlots } from '@dxtmisha/constructor/CropArea'

import item from './D1CropArea.vue'

import type { CropAreaProps } from './props'
export type { CropAreaProps } from './props'

export const D1CropArea: DefineSetupFnComponent<
  CropAreaProps,
  ShortEmitsToObject<CropAreaEmits>,
  SlotsType<CropAreaSlots>
> = item
