import type { ConstrClass } from '@dxtmisha/functional'

import type { EventClickEmits, EventClickExpose } from '../../types/eventClickTypes'
import type { LabelSlots } from '../../types/labelTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type AlertLinkComponents = {
}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type AlertLinkEmits = EventClickEmits

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface AlertLinkExpose extends EventClickExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface AlertLinkSlots extends LabelSlots {
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type AlertLinkClasses = {
  /** Main class / Главный класс */
  main: ConstrClass
  // :classes [!] System label / Системная метка
  label: string
  // :classes [!] System label / Системная метка
}
