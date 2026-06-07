import type { ConstrClass } from '@dxtmisha/functional'

import type { EventClickEmits, EventClickValue } from '../../types/eventClickTypes'
import type { ModelEmits } from '../../types/modelTypes'

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
export type PaginationEmits = EventClickEmits
  & ModelEmits<number>
  & {
    'update:rows': [value: number]
    'update:modelRows': [value: number]
    'more': [
      event: MouseEvent,
      options?: EventClickValue
    ]
    'moreLite': [options?: EventClickValue]
    'rows': [
      event: MouseEvent,
      options?: EventClickValue
    ]
    'rowsLite': [options?: EventClickValue]
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
  /** Slot at the very beginning of the component / Слот в самом начале компонента */
  leading?(): any
  /** Slot in the middle before the spacer / Слот в середине перед разделителем (spacer) */
  info?(): any
  /** Slot at the very end of the component / Слот в самом конце компонента */
  trailing?(): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type PaginationClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  button: string
  navigation: string
  more: string
  info: string
  menuRows: string
  menuRowsLabel: string
  ellipsis: string
  spacer: string
  // :classes [!] System label / Системная метка
}
