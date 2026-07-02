import type { ConstrClass } from '@dxtmisha/functional'

import type { BulletItemComponentInclude } from '../BulletItem'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type BulletComponents = BulletItemComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type BulletEmits = {}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface BulletExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface BulletSlots {
  default? (props: any): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type BulletClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  // :classes [!] System label / Системная метка
}
