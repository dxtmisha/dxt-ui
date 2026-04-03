import type { ComputedRef } from 'vue'
import type { ConstrClass, ListSelectedList } from '@dxtmisha/functional'

import type { HorizontalScrollComponentInclude } from '../HorizontalScroll'
import type { TabItemComponentInclude } from '../TabItem'

import type { EventClickEmits } from '../../types/eventClickTypes'
import type { ModelEmitsSelected } from '../../types/modelTypes'
import type { TabsNavigationIdsList } from './basicTypes'

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
  /** Map of item values to their unique DOM identifiers/ Карта значений элементов и их уникальных DOM-идентификаторов */
  ids: ComputedRef<TabsNavigationIdsList>
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface TabsNavigationSlots {
  /** Slot for content before the tabs/ Слот для содержимого перед вкладками */
  leading?(props: any): any

  /** Slot for content after the tabs/ Слот для содержимого после вкладок */
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
