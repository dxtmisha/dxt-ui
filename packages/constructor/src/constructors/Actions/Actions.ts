import { type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { AreaInclude } from '../../classes/AreaInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'

import type { ActionsComponents, ActionsEmits, ActionsSlots } from './types'
import type { ActionsProps } from './props'

/**
 * Class Actions manages the core logic of the actions component.
 * It is responsible for handling click events and determining the visibility of action lists.
 *
 * Класс Actions управляет основной логикой компонента действий.
 * Отвечает за обработку событий клика и определение видимости списков действий.
 */
export class Actions {
  /** Object for working with area values / Объект для работы со значениями области */
  readonly area: AreaInclude

  /** Object for handling click events / Объект для обработки событий клика */
  readonly event: EventClickInclude

  /**
   * Constructor for the Actions class.
   *
   * Конструктор для класса Actions.
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param element input element / элемент ввода
   * @param classDesign design name / название дизайна
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors object with classes / объект с классами
   */
  constructor(
    protected readonly props: ActionsProps,
    protected readonly refs: ToRefs<ActionsProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<ActionsComponents, ActionsProps>,
    protected readonly slots?: ActionsSlots,
    protected readonly emits?: ConstrEmit<ActionsEmits>,
    constructors: {
      AreaIncludeConstructor?: typeof AreaInclude
      EventConstructor?: typeof EventClickInclude
    } = {}
  ) {
    const {
      AreaIncludeConstructor = AreaInclude,
      EventConstructor = EventClickInclude
    } = constructors

    this.area = new AreaIncludeConstructor(props)
    this.event = new EventConstructor(undefined, undefined, emits)
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
