import { type ConstrClass } from '@dxt-ui/functional'

import type { ImageEventData, ImageEventItem, ImageTypeItem } from './imageTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type ImageComponents = {}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type ImageEmits = {
  load: [image: ImageEventData]
}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface ImageExpose {
  type: ImageTypeItem
  data: ImageEventItem
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface ImageSlots {
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type ImageClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  // :classes [!] System label / Системная метка
}
