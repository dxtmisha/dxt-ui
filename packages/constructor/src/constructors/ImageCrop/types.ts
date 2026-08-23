import type { ConstrClass } from '@dxtmisha/functional'

import type { CropAreaComponentInclude } from '../CropArea'
import type { ImageComponentInclude, ImageEmitsInclude } from '../Image'
import type { ProgressComponentInclude } from '../Progress'

import type { ModelEmits } from '../../types/modelTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type ImageCropComponents = ImageComponentInclude
  & CropAreaComponentInclude
  & ProgressComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type ImageCropEmits = ImageEmitsInclude & ModelEmits<any>

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface ImageCropExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface ImageCropSlots {
  /** Default slot / Слот по умолчанию */
  default?: (props: any) => any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type ImageCropClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  body: string
  image: string
  cropArea: string
  loading: string
  // :classes [!] System label / Системная метка
}
