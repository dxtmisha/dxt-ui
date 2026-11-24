import {
  type ConstrItems,
  DesignLogicAbstract
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'

import type { AriaList } from '../../types/ariaTypes'
import type { DividerProps } from './props'
import type { DividerComponents, DividerEmits, DividerSlots } from './types'

/** Divider dependency constructors type / Тип конструкторов зависимостей Divider */
export type DividerConstructors = {}

/**
 * Class representing the Divider logic orchestrator.
 * Encapsulates semantic WAI-ARIA attributes for visual content separation.
 *
 * Класс, представляющий оркестратор логики Divider.
 * Инкапсулирует семантические WAI-ARIA атрибуты для визуального разделения контента.
 */
export class Divider extends DesignLogicAbstract<
  HTMLElement,
  DividerComponents,
  DividerEmits,
  DividerSlots,
  DividerProps,
  DividerConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<DividerConstructors> = {}

  /**
   * Returns semantic WAI-ARIA attributes for the divider element.
   *
   * Возвращает семантические WAI-ARIA атрибуты для элемента-разделителя.
   * @returns ARIA attributes object / объект ARIA-атрибутов
   */
  get aria(): AriaList {
    return AriaStaticInclude.role('separator')
  }
}
