import type { ConstrClass } from '@dxtmisha/functional'
import type { TabsNavigationComponentInclude, TabsNavigationEmits, TabsNavigationSlots } from '../TabsNavigation'
import type { MotionAxisComponentInclude, MotionAxisEmitsInclude, MotionAxisSlots } from '../MotionAxis'

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
export interface TabsExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface TabsSlots extends TabsNavigationSlots, MotionAxisSlots {
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type TabsClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  // :classes [!] System label / Системная метка
}
