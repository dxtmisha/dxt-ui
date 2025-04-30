import type { ConstrClass } from '@dxt-ui/functional'
import type { ImageUseComponents, ImageUseEmits } from '../Image/imageTypes.ts'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type IconComponents = ImageUseComponents

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type IconEmits = ImageUseEmits

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface IconExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface IconSlots {
  default? (props: any): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type IconClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  // :classes [!] System label / Системная метка
}
