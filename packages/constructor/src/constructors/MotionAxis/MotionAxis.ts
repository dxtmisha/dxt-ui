import type { Ref, ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { MotionAxisElement } from './MotionAxisElement'
import { MotionAxisPrevious } from './MotionAxisPrevious'
import { MotionAxisSelected } from './MotionAxisSelected'
import { MotionAxisStatus } from './MotionAxisStatus'
import { MotionAxisStyles } from './MotionAxisStyles'

import type { MotionAxisComponents, MotionAxisEmits, MotionAxisSlots } from './types'
import type { MotionAxisProps } from './props'

/**
 * MotionAxis
 */
export class MotionAxis {
  readonly elementItem: MotionAxisElement
  readonly previous: MotionAxisPrevious
  readonly selected: MotionAxisSelected
  readonly status: MotionAxisStatus
  readonly styles: MotionAxisStyles

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
   * @param constructors.MotionAxisPreviousConstructor class for working with previous/ класс для работы с предыдущим
   * @param constructors.MotionAxisSelectedConstructor class for working with selected/ класс для работы с выбранным
   * @param constructors.MotionAxisStatusConstructor class for working with status/ класс для работы со статусом
   * @param constructors.MotionAxisStylesConstructor class for working with styles/ класс для работы со стилями
   */
  constructor(
    protected readonly props: MotionAxisProps,
    protected readonly refs: ToRefs<MotionAxisProps>,
    protected readonly element: Ref<HTMLDivElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<MotionAxisComponents, MotionAxisProps>,
    protected readonly slots?: MotionAxisSlots,
    protected readonly emits?: ConstrEmit<MotionAxisEmits>,
    constructors?: {
      MotionAxisElementConstructor?: typeof MotionAxisElement
      MotionAxisPreviousConstructor?: typeof MotionAxisPrevious
      MotionAxisSelectedConstructor?: typeof MotionAxisSelected
      MotionAxisStatusConstructor?: typeof MotionAxisStatus
      MotionAxisStylesConstructor?: typeof MotionAxisStyles
    }
  ) {
    const {
      MotionAxisElementConstructor = MotionAxisElement,
      MotionAxisPreviousConstructor = MotionAxisPrevious,
      MotionAxisSelectedConstructor = MotionAxisSelected,
      MotionAxisStatusConstructor = MotionAxisStatus,
      MotionAxisStylesConstructor = MotionAxisStyles
    } = constructors ?? {}

    this.selected = new MotionAxisSelectedConstructor(this.props)
    this.elementItem = new MotionAxisElementConstructor(
      this.element,
      this.classDesign
    )
    this.styles = new MotionAxisStylesConstructor(
      this.element,
      this.classDesign,
      this.selected
    )
    this.previous = new MotionAxisPreviousConstructor(this.styles)
    this.status = new MotionAxisStatusConstructor(
      this.props,
      this.elementItem,
      this.selected,
      this.previous,
      this.styles,
      this.emits
    )
  }
}
