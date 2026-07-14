import type { ConstrClass } from '@dxtmisha/functional'

import type { ActionsComponentInclude, ActionsEmitsInclude } from '../Actions'
import type { ImageComponentInclude, ImageEmitsInclude } from '../Image'

import type { DescriptionSlots } from '../../types/descriptionTypes'
import type { LabelSlots } from '../../types/labelTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type PlaceholderComponents = ImageComponentInclude & ActionsComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type PlaceholderEmits = ImageEmitsInclude & ActionsEmitsInclude

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface PlaceholderExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface PlaceholderSlots extends LabelSlots, DescriptionSlots {
  context?(props: any): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type PlaceholderClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  image: string
  label: string
  description: string
  actions: string
  // :classes [!] System label / Системная метка
}
