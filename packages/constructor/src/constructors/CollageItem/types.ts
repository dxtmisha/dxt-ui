import type { ConstrClass } from '@dxtmisha/functional'

import type { CollageBarComponentInclude, CollageBarSlotsInclude } from '../CollageBar'
import type { ImageComponentInclude, ImageEventData } from '../Image'
import type { IconComponentInclude } from '../Icon'

import type { EventClickEmits, EventClickExpose } from '../../types/eventClickTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type CollageItemComponents = ImageComponentInclude
  & IconComponentInclude
  & CollageBarComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type CollageItemEmits = EventClickEmits & {
  /** Triggered when the image is loaded / Вызывается при загрузке изображения */
  load: [image: ImageEventData]
}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface CollageItemExpose extends EventClickExpose {
  /** Gets computed height factor / Получает вычисленный коэффициент высоты */
  getHeight?(): number | undefined

  /** Gets computed width factor / Получает вычисленный коэффициент ширины */
  getWidth?(): number | undefined
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface CollageItemSlots extends CollageBarSlotsInclude {
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type CollageItemClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  body: string
  image: string
  icon: string
  collageBar: string
  // :classes [!] System label / Системная метка
}
