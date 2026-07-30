import { type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

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
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param element input element / элемент ввода
   * @param classDesign design name / название дизайна
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors object with classes / объект с классами
   * @param constructors.HeadroomConstructor class for creating a headroom include / класс для создания включения headroom
   */
  constructor(
    protected readonly props: HeadroomProps,
    protected readonly refs: ToRefs<HeadroomProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
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
      this.refs,
      this.element,
      this.className,
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
