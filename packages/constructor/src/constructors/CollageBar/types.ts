import type { ConstrClass } from '@dxtmisha/functional'

import type { LabelSlots } from '../../types/labelTypes'
import type { DescriptionSlots } from '../../types/descriptionTypes'
import type { EventClickEmits, EventClickExpose } from '../../types/eventClickTypes'

import type { ButtonComponentInclude } from '../Button'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type CollageBarComponents = ButtonComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type CollageBarEmits = EventClickEmits

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface CollageBarExpose extends EventClickExpose { }

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface CollageBarSlots extends LabelSlots, DescriptionSlots {
  /** Slot for the body / Слот для основного содержимого */
  body?(props: any): any
  /** Slot for the trailing element / Слот для замыкающего элемента */
  trailing?(props: any): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type CollageBarClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  context: string
  label: string
  description: string
  button: string
  // :classes [!] System label / Системная метка
}
