import type { ConstrClass } from '@dxtmisha/functional'
import type { TabsNavigationComponentInclude, TabsNavigationEmits } from '../TabsNavigation'
import type { MotionAxisComponentInclude, MotionAxisEmitsInclude, MotionAxisSlots } from '../MotionAxis'

import type { EventClickExpose } from '../../types/eventClickTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type TabsComponents
  = TabsNavigationComponentInclude
    & MotionAxisComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type TabsEmits
  = TabsNavigationEmits
    & MotionAxisEmitsInclude

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface TabsExpose extends EventClickExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export type TabsSlots = MotionAxisSlots

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type TabsClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  slide: string
  // :classes [!] System label / Системная метка
}
