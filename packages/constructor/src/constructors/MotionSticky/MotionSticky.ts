import { type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { MotionStickyElement } from './MotionStickyElement'
import { MotionStickyScroll } from './MotionStickyScroll'

import type { MotionStickyComponents, MotionStickyEmits, MotionStickySlots } from './types'
import type { MotionStickyProps } from './props'

/**
 * Class for working with the computation component when the element sticks.
 *
 * Класс для работы с компонентом вычисления, когда элемент прилипает.
 */
export class MotionSticky {
  /** Reference helper for element interactions / Вспомогательный класс для работы с элементами */
  readonly element: MotionStickyElement

  /** Scroll event listener manager / Менеджер прослушивания событий прокрутки */
  readonly scroll: MotionStickyScroll

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
   * @param constructors.MotionStickyElementConstructor class for working with elements / класс для работы с элементами
   * @param constructors.MotionStickyScrollConstructor class for working with events / класс для работы с событиями
   */
  constructor(
    protected readonly props: MotionStickyProps,
    protected readonly refs: ToRefs<MotionStickyProps>,
    element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<MotionStickyComponents, MotionStickyProps>,
    protected readonly slots?: MotionStickySlots,
    protected readonly emits?: ConstrEmit<MotionStickyEmits>,
    constructors: {
      MotionStickyElementConstructor?: typeof MotionStickyElement
      MotionStickyScrollConstructor?: typeof MotionStickyScroll
    } = {}
  ) {
    const {
      MotionStickyElementConstructor = MotionStickyElement,
      MotionStickyScrollConstructor = MotionStickyScroll
    } = constructors

    this.element = new MotionStickyElementConstructor(
      this.props,
      element,
      this.emits
    )

    this.scroll = new MotionStickyScrollConstructor(
      this.props,
      this.element
    )
  }

  /**
   * Returns the tag name /
   * Возвращает название тега
   */
  get tag(): string {
    return this.props.tag ?? 'div'
  }
}
