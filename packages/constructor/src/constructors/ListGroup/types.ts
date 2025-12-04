import type { ComputedRef } from 'vue'
import type { ConstrClass } from '@dxtmisha/functional'

import type { MotionTransformComponentInclude } from '../MotionTransform'
import type { ListGroupSlotsPropsInclude } from './basicTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type ListGroupComponents
  = MotionTransformComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type ListGroupEmits = {}

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
  head?(props: ListGroupSlotsPropsInclude): any
  list?(props: any): any
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
