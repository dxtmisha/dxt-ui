import type { ComputedRef } from 'vue'
import type { ConstrClass } from '@dxt-ui/functional'

import type { EventClickEmits } from '../../types/eventClickTypes'

import type { ListComponentInclude } from '../List/basicTypes'
import type { ListItemComponentInclude } from '../ListItem'
import type { MotionTransformComponentInclude } from '../MotionTransform'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type ListGroupComponents
  = ListComponentInclude
    & ListItemComponentInclude
    & MotionTransformComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type ListGroupEmits = EventClickEmits

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface ListGroupExpose {
  open: ComputedRef<boolean>
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface ListGroupSlots {
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type ListGroupClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  head: string
  list: string
  // :classes [!] System label / Системная метка
}
