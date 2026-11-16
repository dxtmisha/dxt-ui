import {
  type ConstrBind,
  type ConstrItems,
  DesignLogicAbstract
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'

import { ListGroupOpen } from './ListGroupOpen'

import type { AriaList } from '../../types/ariaTypes'
import type { MotionTransformProps } from '../MotionTransform'
import type { ListGroupProps } from './props'
import type { ListGroupComponents, ListGroupEmits, ListGroupSlots } from './types'

/** ListGroup dependency constructors type / Тип конструкторов зависимостей ListGroup */
export type ListGroupConstructors = {
  /** Group open state constructor / Конструктор состояния открытия группы */
  open: typeof ListGroupOpen<ListGroupProps>
}

/**
 * Orchestrator class for the ListGroup component.
 * Manages group expansion state, ARIA attributes, root bindings, and transformation properties.
 *
 * Класс-оркестратор для компонента ListGroup.
 * Управляет состоянием раскрытия группы, ARIA-атрибутами, привязками корневого элемента и свойствами трансформации.
 */
export class ListGroup extends DesignLogicAbstract<
  HTMLDivElement,
  ListGroupComponents,
  ListGroupEmits,
  ListGroupSlots,
  ListGroupProps,
  ListGroupConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<ListGroupConstructors> = {
    open: {
      item: ListGroupOpen<ListGroupProps>,
      parameters: () => [this.props]
    }
  }

  /**
   * Returns list of ARIA attributes for the list group container.
   *
   * Возвращает список ARIA-атрибутов для контейнера группы списка.
   * @returns ARIA attributes object / объект ARIA-атрибутов
   */
  get aria(): AriaList {
    return AriaStaticInclude.role('group')
  }

  /**
   * Returns binding attributes for the root list group element.
   *
   * Возвращает привязочные атрибуты для корневого элемента группы списка.
   * @returns root element bindings / привязки корневого элемента
   */
  get binds(): ConstrBind {
    return {
      'data-open': this.isOpen() ? 'open' : 'close',
      'data-divider': this.props.divider ? 'divider' : undefined
    }
  }

  /**
   * Returns properties for the MotionTransform component.
   *
   * Возвращает свойства для компонента MotionTransform.
   * @returns transform component properties / свойства компонента трансформации
   */
  get transformBinds(): ConstrBind<MotionTransformProps> {
    return {
      autoClose: false,
      section: true,
      adaptive: 'planeAlways',
      open: this.isOpen(),
      onTransformLite: this.i('open').onOpen
    }
  }

  /**
   * Checks whether the group is currently open.
   *
   * Проверяет, открыта ли группа в данный момент.
   * @returns true if the group is open / true, если группа открыта
   */
  isOpen(): boolean {
    return this.i('open').is()
  }
}
