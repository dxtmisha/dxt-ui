import { type ConstrItems, DesignLogicAbstract } from '@dxtmisha/functional'
import { getAreaValue } from '../../functions/getAreaValue'

import type { PageAreaProps } from './props'
import type { PageAreaComponents, PageAreaEmits, PageAreaSlots } from './types'

/** Mapping from parent layout area to delegated component name / Карта соответствия родительской области и делегируемого компонента */
const PAGE_AREA_COMPONENT_MAP: Record<string, keyof PageAreaComponents> = {
  container: 'page',
  page: 'section',
  section: 'block',
  block: 'group'
}

/** PageArea dependency constructors type / Тип конструкторов зависимостей PageArea */
export type PageAreaConstructors = {}

/**
 * PageArea orchestrator class for resolving the current layout area context
 * and delegating rendering to the corresponding structural component (`page`, `section`, `block`, or `group`).
 *
 * Класс-оркестратор PageArea для определения текущего контекста области макета
 * и делегирования рендеринга соответствующему структурному компоненту (`page`, `section`, `block` или `group`).
 */
export class PageArea extends DesignLogicAbstract<
  HTMLDivElement,
  PageAreaComponents,
  PageAreaEmits,
  PageAreaSlots,
  PageAreaProps,
  PageAreaConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<PageAreaConstructors> = {}

  /**
   * Current layout area value injected from ancestor structural components.
   *
   * Текущее значение области макета, полученное от родительских структурных компонентов.
   * @returns area identifier or undefined / идентификатор области или undefined
   */
  get area(): string | undefined {
    return getAreaValue()
  }

  /**
   * Resolves the delegated component key matching the current layout hierarchy level.
   *
   * Определяет ключ делегируемого компонента в соответствии с текущим уровнем иерархии макета.
   * @returns component key from `PageAreaComponents` / ключ компонента из `PageAreaComponents`
   */
  get componentName(): keyof PageAreaComponents {
    const currentArea = this.area

    if (currentArea && currentArea in PAGE_AREA_COMPONENT_MAP) {
      return PAGE_AREA_COMPONENT_MAP[currentArea] ?? 'group'
    }

    return 'group'
  }
}
