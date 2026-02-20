import type { ConstrClass, ListSelectedList } from '@dxtmisha/functional'

import type { HorizontalScrollComponentInclude } from '../HorizontalScroll'
import type { TabItemComponentInclude } from '../TabItem'

import type { EventClickEmits } from '../../types/eventClickTypes'
import type { ModelEmitsSelected } from '../../types/modelTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type TabsNavigationComponents
  = HorizontalScrollComponentInclude
    & TabItemComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type TabsNavigationEmits
  = EventClickEmits
    & ModelEmitsSelected<ListSelectedList>

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface TabsNavigationExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface TabsNavigationSlots {
  leading?(props: any): any

  trailing?(props: any): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type TabsNavigationClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  // :classes [!] System label / Системная метка
}
