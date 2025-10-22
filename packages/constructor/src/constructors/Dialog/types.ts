import type { ConstrClass } from '@dxtmisha/functional'
import type {
  ModalComponents,
  ModalEmits,
  ModalExpose,
  ModalSlots
} from '../Modal'
import type { IconComponentInclude } from '../Icon'

import type { LabelAlternativeSlots } from '../../types/labelTypes'
import type { DescriptionSlots } from '../../types/descriptionTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type DialogComponents = ModalComponents & IconComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type DialogEmits
  = ModalEmits
    & {
      ok: []
      close: []
    }

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface DialogExpose extends ModalExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface DialogSlots extends ModalSlots,
  LabelAlternativeSlots,
  DescriptionSlots {
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type DialogClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  title: string
  header: string
  information: string
  icon: string
  label: string
  description: string
  body: string
  footer: string
  // :classes [!] System label / Системная метка
}
