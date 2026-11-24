import type { VNode } from 'vue'
import type { ConstrClass } from '@dxtmisha/functional'

import type { DescriptionSlots } from '../../types/descriptionTypes'
import type { HeaderComponentInclude, HeaderSlotsInclude } from '../Header'

/**
 * Interface for describing which components need to be connected for work /
 * Интерфейс для описания, какие компоненты надо подключить для работы
 */
export type BlockComponents = HeaderComponentInclude

/**
 * Type describing available events /
 * Тип, описывающий доступные события
 */
export type BlockEmits = {}

/**
 * Type describing available properties /
 * Тип, описывающий доступные свойства
 */
export interface BlockExpose {
}

/**
 * Type describing available slots /
 * Тип, описывающий доступные слоты
 */
export interface BlockSlots extends HeaderSlotsInclude, DescriptionSlots {
  /** Slot for headline / Слот для заголовка */
  headline?(props?: Record<string, unknown>): VNode[]

  /** Default slot / Слот по умолчанию */
  default?(props?: Record<string, unknown>): VNode[]
}

/**
 * Type describing subclasses /
 * Тип, описывающий подклассы
 */
export type BlockClasses = {
  /** Root element class / Класс корневого элемента */
  main: ConstrClass
  // :classes [!] System label / Системная метка
  headline: string
  header: string
  description: string
  body: string
  // :classes [!] System label / Системная метка
}
