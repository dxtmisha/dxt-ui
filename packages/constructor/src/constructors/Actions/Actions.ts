import type { Ref } from 'vue'
import {
  type ConstrEmit,
  type ConstrItems,
  type DesignComp,
  type DesignName,
  DesignLogicAbstract
} from '@dxtmisha/functional'

import { AreaInclude } from '../../classes/AreaInclude'
import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'
import { TextInclude } from '../../classes/TextInclude'

import type { AriaList } from '../../types/ariaTypes'
import type { ActionsProps } from './props'
import type {
  ActionsComponents,
  ActionsEmits,
  ActionsSlots
} from './types'

/** Actions dependency constructors type / Тип конструкторов зависимостей Actions */
export type ActionsConstructors = {
  /** Area manager constructor / Конструктор менеджера области */
  area: typeof AreaInclude
  /** Event click constructor / Конструктор события клика */
  event: typeof EventClickInclude
  /** Text manager constructor / Конструктор менеджера текста */
  text: typeof TextInclude
}

/**
 * Class Actions manages the core logic of the actions component.
 * It is responsible for handling click events and determining the visibility of action lists.
 *
 * Класс Actions управляет основной логикой компонента действий.
 * Отвечает за обработку событий клика и определение видимости списков действий.
 */
export class Actions extends DesignLogicAbstract<
  HTMLDivElement,
  ActionsComponents,
  ActionsEmits,
  ActionsSlots,
  ActionsProps,
  ActionsConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<ActionsConstructors> = {
    area: {
      item: AreaInclude,
      parameters: () => [this.props]
    },
    event: {
      item: EventClickInclude,
      parameters: () => [
        undefined,
        undefined,
        this.emits
      ]
    },
    text: {
      item: TextInclude,
      parameters: () => [this.props]
    }
  }

  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input data / входные данные
   * @param element input element / элемент ввода
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors object with classes / объект с классами
   */
  constructor(
    props: Readonly<ActionsProps>,
    element: Ref<HTMLDivElement | undefined>,
    naming: DesignName,
    components?: DesignComp<ActionsComponents, ActionsProps>,
    slots?: ActionsSlots,
    emits?: ConstrEmit<ActionsEmits>,
    constructors?: Partial<ActionsConstructors>
  ) {
    super(
      props,
      element,
      naming,
      components,
      slots,
      emits,
      constructors
    )

    this.i('area')
  }

  /**
   * Returns list of ARIA attributes for the actions container.
   *
   * Возвращает список ARIA-атрибутов для контейнера действий.
   * @returns ARIA attributes object / объект ARIA-атрибутов
   */
  get aria(): AriaList {
    return {
      ...AriaStaticInclude.role(this.props.role),
      ...AriaStaticInclude.label(this.props.ariaLabel ?? this.i('text').actions)
    }
  }

  /**
   * Checks if the list should be rendered in left alignment order.
   *
   * Проверяет, должен ли список отображаться в порядке выравнивания по левому краю.
   * @returns true if alignment is left or none / true, если выравнивание left или none
   */
  isLeft(): boolean {
    return this.props.align === 'left'
      || this.props.align === 'none'
  }

  /**
   * Checks if the main list needs to be displayed.
   *
   * Проверяет, нужно ли выводить главный список.
   * @returns main list visibility status / статус видимости главного списка
   */
  isList(): boolean {
    return Boolean(
      this.props.list
      || (this.slots && 'default' in this.slots)
    )
  }

  /**
   * Checks if the secondary list needs to be displayed.
   *
   * Проверяет, нужно ли выводить второстепенный список.
   * @returns secondary list visibility status / статус видимости второстепенного списка
   */
  isSecondary(): boolean {
    return Boolean(
      this.props.listSecondary
      || (this.slots && 'secondary' in this.slots)
    )
  }
}
