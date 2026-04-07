import type { ConstrClass } from '@dxtmisha/functional'

import type { ButtonComponentInclude } from '../Button'
import type { EventClickEmits } from '../../types/eventClickTypes'
import type { LabelSlots } from '../../types/labelTypes'
import type { DescriptionSlots } from '../../types/descriptionTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type BarsComponents = ButtonComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type BarsEmits
  = EventClickEmits
    & {
    /** Event for updating the action mode status/ Событие обновления статуса режима действия */
      'update:action': [value: boolean]
      /** Event for updating the action mode model status/ Событие обновления статуса модели режима действия */
      'update:modelAction': [value: boolean]
    }

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface BarsExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface BarsSlots extends LabelSlots, DescriptionSlots {
  /** Slot for displaying a list of buttons/ Слот для отображения списка кнопок */
  bars?(props: any): any

  /** Slot for displaying a list of buttons in action mode/ Слот для отображения списка кнопок в режиме действия */
  actionBars?(props: any): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type BarsClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  context: string
  label: string
  description: string
  // :classes [!] System label / Системная метка
}
