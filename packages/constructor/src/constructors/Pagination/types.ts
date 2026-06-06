import type { ConstrClass } from '@dxtmisha/functional'

import type { EventClickEmits } from '../../types/eventClickTypes'

import type { ButtonComponentInclude } from '../Button'
import type { MenuComponentInclude } from '../Menu'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type PaginationComponents = ButtonComponentInclude & MenuComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type PaginationEmits = EventClickEmits & {
  more: [event: MouseEvent, value: { value: number }]
  rows: [event: any, value: { value: number }]
}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface PaginationExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface PaginationSlots {
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type PaginationClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  more: string
  spacer: string
  text: string
  menu: string
  info: string
  navigation: string
  // :classes [!] System label / Системная метка
}
