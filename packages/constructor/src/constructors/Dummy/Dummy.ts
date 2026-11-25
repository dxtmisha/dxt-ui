import {
  type ConstrItems,
  DesignLogicAbstract
} from '@dxtmisha/functional'

import type { DummyProps } from './props'
import type {
  DummyComponents,
  DummyEmits,
  DummySlots
} from './types'

/** Dummy dependency constructors type / Тип конструкторов зависимостей Dummy */
export type DummyConstructors = {}

/**
 * Class representing the Dummy logic orchestrator.
 * Provides the base logic lifecycle contract for the placeholder dummy block component.
 *
 * Класс, представляющий оркестратор логики Dummy.
 * Обеспечивает базовый контракт жизненного цикла логики для компонента-заглушки.
 */
export class Dummy extends DesignLogicAbstract<
  HTMLElement,
  DummyComponents,
  DummyEmits,
  DummySlots,
  DummyProps,
  DummyConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<DummyConstructors> = {}
}
