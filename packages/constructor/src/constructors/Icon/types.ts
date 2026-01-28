import type { ComputedRef } from 'vue'
import type { ConstrClass } from '@dxtmisha/functional'
import type { EventClickEmits, EventClickExpose } from '../../types/eventClickTypes'
import type { ImageComponentsInclude, ImageEmitsInclude } from '../Image'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type IconComponents = ImageComponentsInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type IconEmits = ImageEmitsInclude & EventClickEmits

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface IconExpose extends EventClickExpose {
  isActive: ComputedRef<boolean>
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
