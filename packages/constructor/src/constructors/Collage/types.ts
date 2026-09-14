import type { ConstrClass, ListSelectedList } from '@dxtmisha/functional'
import type { EventClickEmits, EventClickExpose } from '../../types/eventClickTypes'

import type { ModelEmitsSelected } from '../../types/modelTypes'

import type { CollageBarSlotsInclude } from '../CollageBar'
import type { CollageItemComponentInclude } from '../CollageItem'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type CollageComponents = CollageItemComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type CollageEmits = EventClickEmits & ModelEmitsSelected<ListSelectedList>

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface CollageExpose extends EventClickExpose {
  /** Recalculates and updates the layout / Пересчитывает и обновляет макет */
  update(): void
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface CollageSlots extends CollageBarSlotsInclude {
  /** Default slot for custom content / Слот по умолчанию для пользовательского содержимого */
  default?(props: any): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type CollageClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  item: string
  // :classes [!] System label / Системная метка
}
