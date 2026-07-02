import type { ConstrClass } from '@dxtmisha/functional'
import type { DescriptionSlots } from '../../types/descriptionTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type BulletItemComponents = {}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type BulletItemEmits = {}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface BulletItemExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface BulletItemSlots extends DescriptionSlots {
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type BulletItemClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  // :classes [!] System label / Системная метка
}
