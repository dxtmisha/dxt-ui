import {
  type ConstrBind,
  type ConstrClassObject,
  type ConstrItems,
  type ConstrStyles,
  DesignLogicAbstract
} from '@dxtmisha/functional'

import type { ConstructorsProps } from './props'
import type {
  ConstructorsComponents,
  ConstructorsEmits,
  ConstructorsSlots
} from './types'

/** Constructors dependency constructors type / Тип конструкторов зависимостей Constructors */
export type ConstructorsConstructors = {
  // item: typeof ConstructorsItem
}

/**
 * Base class for working with the Constructors component.
 *
 * Базовый класс для работы с компонентом Constructors.
 */
export class Constructors extends DesignLogicAbstract<
  HTMLDivElement,
  ConstructorsComponents,
  ConstructorsEmits,
  ConstructorsSlots,
  ConstructorsProps,
  ConstructorsConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<ConstructorsConstructors> = {
  }

  /**
   * Returns the root element bindings.
   *
   * Возвращает привязки корневого элемента.
   * @returns root element bindings / привязки корневого элемента
   */
  get binds(): ConstrBind {
    return {}
  }

  /**
   * Values for the class.
   *
   * Значения для класса.
   * @returns classes values / значения классов
   */
  get classes(): ConstrClassObject {
    return {}
  }

  /**
   * Calculates all properties for the style of the element.
   *
   * Вычисляет все свойства для стиля элемента.
   * @returns styles object / объект стилей
   */
  get styles(): ConstrStyles {
    return {}
  }
}
