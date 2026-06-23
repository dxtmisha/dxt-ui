import type { ConstrClass } from '@dxtmisha/functional'

import type {
  MenuCountryComponents,
  MenuCountryEmits,
  MenuCountryExpose,
  MenuCountrySlots
} from '../MenuCountry'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type MenuLanguageComponents = MenuCountryComponents

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type MenuLanguageEmits = MenuCountryEmits

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface MenuLanguageExpose extends MenuCountryExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface MenuLanguageSlots extends MenuCountrySlots {
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type MenuLanguageClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  // :classes [!] System label / Системная метка
}
