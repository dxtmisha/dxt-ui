import type { ConstrClass } from '@dxtmisha/functional'

import type { ButtonComponentInclude } from '../Button'
import type { MenuCountryComponentInclude, MenuCountryEmits } from '../MenuCountry'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type InputPhoneDialCodeComponents
  = ButtonComponentInclude
    & MenuCountryComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type InputPhoneDialCodeEmits = MenuCountryEmits

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface InputPhoneDialCodeExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface InputPhoneDialCodeSlots { }

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type InputPhoneDialCodeClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  button: string
  menuCountry: string
  // :classes [!] System label / Системная метка
}
