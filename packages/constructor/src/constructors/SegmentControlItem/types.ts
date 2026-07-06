import type { ConstrClass } from '@dxtmisha/functional'
import type {
  TabItemComponents,
  TabItemEmits,
  TabItemExpose,
  TabItemSlots
} from '../TabItem'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type SegmentControlItemComponents = TabItemComponents

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type SegmentControlItemEmits = TabItemEmits

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface SegmentControlItemExpose extends TabItemExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface SegmentControlItemSlots extends TabItemSlots {
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type SegmentControlItemClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  label: string
  icon: string
  badge: string
  // :classes [!] System label / Системная метка
}
