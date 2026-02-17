import type { Ref, ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { MotionAxisElement } from './MotionAxisElement'
import { MotionAxisSelected } from './MotionAxisSelected'

import type { MotionAxisComponents, MotionAxisEmits, MotionAxisSlots } from './types'
import type { MotionAxisProps } from './props'

/**
 * MotionAxis
 */
export class MotionAxis {
  readonly elementItem: MotionAxisElement
  readonly selected: MotionAxisSelected

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element input element/ элемент ввода
   * @param classDesign design name/ название дизайна
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param constructors object with classes/ объект с классами
   * @param constructors.MotionAxisElementConstructor class for working with elements/ класс для работы с элементами
   * @param constructors.MotionAxisSelectedConstructor class for working with selected/ класс для работы с выбранным
   */
  constructor(
    protected readonly props: MotionAxisProps,
    protected readonly refs: ToRefs<MotionAxisProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<MotionAxisComponents, MotionAxisProps>,
    protected readonly slots?: MotionAxisSlots,
    protected readonly emits?: ConstrEmit<MotionAxisEmits>,
    constructors?: {
      MotionAxisElementConstructor?: typeof MotionAxisElement
      MotionAxisSelectedConstructor?: typeof MotionAxisSelected
    }
  ) {
    const {
      MotionAxisElementConstructor = MotionAxisElement,
      MotionAxisSelectedConstructor = MotionAxisSelected
    } = constructors ?? {}

    this.selected = new MotionAxisSelectedConstructor(this.props)
    this.elementItem = new MotionAxisElementConstructor(
      this.element as Ref<HTMLDivElement | undefined>,
      this.classDesign
    )
  }
}
