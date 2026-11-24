import {
  type ConstrItems,
  DesignLogicAbstract
} from '@dxtmisha/functional'

import type { BleedComponents, BleedEmits, BleedSlots } from './types'
import type { BleedProps } from './props'

/** Bleed dependency constructors type / Тип конструкторов зависимостей Bleed */
export type BleedConstructors = {
  // No subordinate constructors / Нет дочерних конструкторов
}

/**
 * Class representing the Bleed layout logic orchestrator.
 * Resolves the root tag name for negative-margin full-bleed layout wrappers.
 *
 * Класс, представляющий оркестратор логики разметки Bleed.
 * Разрешает имя корневого тега для обёрток разметки с отрицательными отступами.
 */
export class Bleed extends DesignLogicAbstract<
  HTMLDivElement,
  BleedComponents,
  BleedEmits,
  BleedSlots,
  BleedProps,
  BleedConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<BleedConstructors> = {}

  /**
   * Returns the root tag name.
   *
   * Возвращает название корневого тега.
   * @returns tag name / название тега
   */
  get tag(): string {
    return this.props.tag ?? 'div'
  }
}
