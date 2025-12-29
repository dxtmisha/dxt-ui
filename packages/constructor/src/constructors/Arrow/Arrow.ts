import { computed, type Ref, type ToRefs } from 'vue'
import {
  type ConstrClassObject,
  type ConstrEmit,
  type ConstrStyles,
  DesignComp,
  isFilled
} from '@dxtmisha/functional'

import { ArrowElement } from './ArrowElement'
import { ArrowElementTarget } from './ArrowElementTarget'
import { ArrowParent } from './ArrowParent'
import { ArrowPosition } from './ArrowPosition'
import { ArrowEvent } from './ArrowEvent'

import { ArrowDirection } from './basicTypes'
import type { ArrowComponents, ArrowEmits, ArrowSlots } from './types'
import type { ArrowProps } from './props'

/**
 * Arrow
 */
export class Arrow {
  readonly elementItem: ArrowElement
  readonly elementTarget: ArrowElementTarget
  readonly parent: ArrowParent
  readonly position: ArrowPosition
  readonly event: ArrowEvent

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
   */
  constructor(
    protected readonly props: ArrowProps,
    protected readonly refs: ToRefs<ArrowProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<ArrowComponents, ArrowProps>,
    protected readonly slots?: ArrowSlots,
    protected readonly emits?: ConstrEmit<ArrowEmits>
  ) {
    this.elementItem = new ArrowElement(
      this.element,
      this.className
    )
    this.elementTarget = new ArrowElementTarget(this.props)
    this.parent = new ArrowParent(
      this.element,
      this.className,
      this.elementItem
    )

    this.position = new ArrowPosition(
      this.props,
      this.elementItem,
      this.elementTarget
    )

    this.event = new ArrowEvent(
      this.props,
      this.refs,
      this.element,
      this.elementTarget,
      this.parent,
      this.position
    )
  }

  /** Direction of the arrow/ Направление стрелки */
  readonly direction = computed<ArrowDirection>(() => {
    if (isFilled(this.props.position)) {
      const directionPosition = this.position.direction.value

      if (directionPosition) {
        return directionPosition
      }
    }

    return ArrowDirection.HIDE
  })

  /** Classes for the component/ Классы для компонента */
  readonly classes = computed<ConstrClassObject>(() => {
    return {
      [`${this.className}--direction--${this.direction.value}`]: Boolean(this.direction.value)
    }
  })

  /** Styles for the component/ Стили для компонента */
  readonly styles = computed<ConstrStyles>(() => {
    const styles = {
      [`--${this.className}-sys-background`]: this.parent.background.value,
      [`--${this.className}-sys-borderWidth`]: this.parent.borderWidth.value,
      [`--${this.className}-sys-borderColor`]: this.parent.borderColor.value,
      [`--${this.className}-sys-borderRadius`]: this.parent.borderRadius.value
    }

    if (
      this.parent.isBorder.value
      && this.position.clipPath.value
    ) {
      styles[`--${this.className}-sys-clipPath`] = this.position.clipPath.value
    }

    if (
      this.elementTarget.is()
      && this.position.shift.value
    ) {
      styles[`--${this.className}-sys-shift`] = this.position.shift.value
    }

    return styles
  })
}
