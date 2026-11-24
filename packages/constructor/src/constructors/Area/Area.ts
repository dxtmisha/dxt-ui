import {
  type ConstrItems,
  DesignLogicAbstract
} from '@dxtmisha/functional'
import { getAreaValue } from '../../functions/getAreaValue'

import type { AreaComponents, AreaEmits, AreaSlots } from './types'
import type { AreaProps } from './props'

/** Area dependency constructors type / Тип конструкторов зависимостей Area */
export type AreaConstructors = {
  // No subordinate constructors / Нет дочерних конструкторов
}

/**
 * Class representing the Area logic orchestrator.
 * Resolves the active injected area name with a configurable default fallback for slot selection.
 *
 * Класс, представляющий оркестратор логики Area.
 * Разрешает активное внедрённое имя области с настраиваемым значением по умолчанию для выбора слота.
 */
export class Area extends DesignLogicAbstract<
  HTMLDivElement,
  AreaComponents,
  AreaEmits,
  AreaSlots,
  AreaProps,
  AreaConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<AreaConstructors> = {}

  /**
   * Returns the resolved area value from injection or default property.
   *
   * Возвращает разрешённое значение области из инъекции или свойства по умолчанию.
   * @returns active area name / активное имя области
   */
  get area(): string | undefined {
    return getAreaValue() ?? this.props.areaDefault
  }
}
