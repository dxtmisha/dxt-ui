import { type Ref } from 'vue'
import {
  type ConstrEmit,
  type ConstrItems,
  type DesignComp,
  type DesignName,
  DesignLogicAbstract
} from '@dxtmisha/functional'

import { MotionStickyElement } from './MotionStickyElement'
import { MotionStickyScroll } from './MotionStickyScroll'

import type { MotionStickyProps } from './props'
import type { MotionStickyComponents, MotionStickyEmits, MotionStickySlots } from './types'

/**
 * MotionSticky dependency constructors type /
 * Тип конструкторов зависимостей MotionSticky.
 */
export type MotionStickyConstructors = {
  /** Helper constructor for sticky element position calculations / Конструктор помощника для вычислений положения липкого элемента */
  element: typeof MotionStickyElement
  /** Scroll event listener manager constructor / Конструктор менеджера прослушивания событий прокрутки */
  scroll: typeof MotionStickyScroll
}

/**
 * Class for working with the computation component when the element sticks.
 *
 * Класс для работы с компонентом вычисления, когда элемент прилипает.
 */
export class MotionSticky extends DesignLogicAbstract<
  HTMLElement,
  MotionStickyComponents,
  MotionStickyEmits,
  MotionStickySlots,
  MotionStickyProps,
  MotionStickyConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<MotionStickyConstructors> = {
    element: {
      item: MotionStickyElement,
      parameters: () => [
        this.props,
        this.element,
        this.emits
      ]
    },
    scroll: {
      item: MotionStickyScroll,
      parameters: () => [
        this.props,
        () => this.i('element')
      ]
    }
  }

  /**
   * Constructor
   * @param props input data / входные данные
   * @param element input element / элемент ввода
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors object with classes / объект с классами
   */
  constructor(
    props: Readonly<MotionStickyProps>,
    element: Ref<HTMLElement | undefined>,
    naming: DesignName,
    components?: DesignComp<MotionStickyComponents, MotionStickyProps>,
    slots?: MotionStickySlots,
    emits?: ConstrEmit<MotionStickyEmits>,
    constructors?: Partial<MotionStickyConstructors>
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

    this.i('scroll')
  }

  /**
   * Returns the tag name.
   *
   * Возвращает название тега.
   * @returns tag name / название тега
   */
  get tag(): string {
    return this.props.tag ?? 'div'
  }
}
