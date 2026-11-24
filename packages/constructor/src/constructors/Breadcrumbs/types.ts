import type { ConstrClass } from '@dxtmisha/functional'

import type { BreadcrumbItemComponentInclude, BreadcrumbItemEmitsInclude } from '../BreadcrumbItem'

/**
 * Interface for describing which components need to be connected for work /
 * Интерфейс для описания, какие компоненты надо подключить для работы
 */
export type BreadcrumbsComponents = BreadcrumbItemComponentInclude

/**
 * Type describing available events /
 * Тип, описывающий доступные события
 */
export type BreadcrumbsEmits = BreadcrumbItemEmitsInclude

/**
 * Type describing available properties /
 * Тип, описывающий доступные свойства
 */
export interface BreadcrumbsExpose {
}

/**
 * Type describing available slots /
 * Тип, описывающий доступные слоты
 */
export interface BreadcrumbsSlots {
}

/**
 * Type describing subclasses /
 * Тип, описывающий подклассы
 */
export type BreadcrumbsClasses = {
  /** Main class / Главный класс */
  main: ConstrClass
  // :classes [!] System label / Системная метка
  item: string
  // :classes [!] System label / Системная метка
}
