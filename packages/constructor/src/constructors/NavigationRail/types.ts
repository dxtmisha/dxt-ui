import type { ConstrClass } from '@dxtmisha/functional'
import type { EventClickEmits } from '../../types/eventClickTypes'

import type { ListExpose, ListSlots } from '../List'
import type { ListMenuComponentInclude } from '../ListMenu'
import type { NavigationItemComponentInclude } from '../NavigationItem'
import type { NavigationRailItemComponentInclude } from '../NavigationRailItem'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type NavigationRailComponents
  = NavigationItemComponentInclude
    & NavigationRailItemComponentInclude
    & ListMenuComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type NavigationRailEmits
  = EventClickEmits
    & {
      /** Event for closing the list/ Событие закрытия списка */
      close: []
    }

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface NavigationRailExpose extends ListExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export type NavigationRailSlots = ListSlots

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type NavigationRailClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  space: string
  line: string
  html: string
  management: string
  menu: string
  // :classes [!] System label / Системная метка
}
