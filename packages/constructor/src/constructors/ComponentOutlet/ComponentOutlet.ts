import {
  ComponentStorage,
  type ComponentStorageReturn,
  type ConstrBind,
  type ConstrItems,
  DesignLogicAbstract
} from '@dxtmisha/functional'

import type { ComponentOutletProps } from './props'
import type {
  ComponentOutletComponents,
  ComponentOutletEmits,
  ComponentOutletSlots
} from './types'

/** ComponentOutlet dependency constructors type / Тип конструкторов зависимостей ComponentOutlet */
export type ComponentOutletConstructors = {}

/**
 * Base class for working with the ComponentOutlet component.
 * Resolves a registered component from `ComponentStorage` by name and merges its properties.
 *
 * Базовый класс для работы с компонентом ComponentOutlet.
 * Разрешает зарегистрированный компонент из `ComponentStorage` по имени и объединяет его свойства.
 */
export class ComponentOutlet extends DesignLogicAbstract<
  Element,
  ComponentOutletComponents,
  ComponentOutletEmits,
  ComponentOutletSlots,
  ComponentOutletProps,
  ComponentOutletConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<ComponentOutletConstructors> = {
  }

  /**
   * Returns the root element bindings.
   *
   * Возвращает привязки корневого элемента.
   * @returns root element bindings / привязки корневого элемента
   */
  get binds(): ConstrBind {
    return {
      ref: this.element
    }
  }

  /**
   * Resolves the registered component from `ComponentStorage` with `props.props`.
   *
   * Разрешает зарегистрированный компонент из `ComponentStorage` со свойствами `props.props`.
   * @returns resolved component with merged properties or undefined / разрешённый компонент с объединёнными свойствами или undefined
   */
  get component(): ComponentStorageReturn | undefined {
    if (this.props.name) {
      return ComponentStorage.get(
        this.props.name,
        this.props.props
      )
    }

    return undefined
  }

  /**
   * Returns the resolved component instance or DOM element.
   *
   * Возвращает экземпляр разрешённого компонента или DOM-элемент.
   * @returns component instance or DOM element / экземпляр компонента или DOM-элемент
   */
  readonly getElement = <T = Element>(): T | undefined => {
    return this.element.value as T | undefined
  }
}
