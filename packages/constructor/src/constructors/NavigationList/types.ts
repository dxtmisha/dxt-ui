import type { ConstrClass } from '@dxtmisha/functional'

import type {
  ListComponents,
  ListEmits,
  ListExpose,
  ListSlots
} from '../List'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type NavigationListComponents = ListComponents

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type NavigationListEmits = ListEmits

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface NavigationListExpose extends ListExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface NavigationListSlots extends ListSlots {
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type NavigationListClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  space: string
  line: string
  subtitle: string
  html: string
  management: string
  group: string
  menu: string
  menuGroup: string
  filterInput: string
  none: string
  // :classes [!] System label / Системная метка
}
