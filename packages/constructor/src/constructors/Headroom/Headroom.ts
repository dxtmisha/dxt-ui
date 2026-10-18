import { type Ref } from 'vue'
import { type ConstrEmit, type DesignComp, type DesignName } from '@dxtmisha/functional'

import { HeadroomInclude } from '../../classes/HeadroomInclude'

import type { HeadroomComponents, HeadroomEmits, HeadroomSlots } from './types'
import type { HeadroomProps } from './props'

/**
 * Headroom logic class managing sticky header position and scroll status calculations.
 *
 * Класс логики Headroom, управляющий липким положением шапки и вычислениями состояния прокрутки.
 */
export class Headroom {
  /** Headroom include / Подключение headroom */
  readonly headroom: HeadroomInclude

  /**
   * Constructor
   * @param props input data / входные данные
   * @param element input element / элемент ввода
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors object with classes / объект с классами
   * @param constructors.HeadroomConstructor class for creating a headroom include / класс для создания включения headroom
   */
  constructor(
    protected readonly props: HeadroomProps,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly naming: DesignName,
    protected readonly components?: DesignComp<HeadroomComponents, HeadroomProps>,
    protected readonly slots?: HeadroomSlots,
    protected readonly emits?: ConstrEmit<HeadroomEmits>,
    constructors: {
      HeadroomConstructor?: typeof HeadroomInclude
    } = {}
  ) {
    const {
      HeadroomConstructor = HeadroomInclude
    } = constructors

    this.headroom = new HeadroomConstructor(
      this.props,
      this.element,
      this.naming,
      this.emits
    )
  }

  /**
   * Returns HTML tag for the headroom container element.
   *
   * Возвращает HTML-тег для элемента контейнера headroom.
   * @returns tag name / название тега
   */
  get tag(): string {
    return this.props.tag ?? 'div'
  }
}
