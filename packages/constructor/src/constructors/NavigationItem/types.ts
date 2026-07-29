import type { ConstrClass } from '@dxtmisha/functional'

import type {
  ListItemComponents,
  ListItemEmits,
  ListItemExpose,
  ListItemSlots
} from '../ListItem'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type NavigationItemComponents = ListItemComponents

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type NavigationItemEmits = ListItemEmits

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface NavigationItemExpose extends ListItemExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface NavigationItemSlots extends ListItemSlots {
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type NavigationItemClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  body: string
  context: string
  label: string
  highlight: string
  prefix: string
  caption: string
  description: string
  icon: string
  trailing: string
  control: string
  badge: string
  // :classes [!] System label / Системная метка
}
