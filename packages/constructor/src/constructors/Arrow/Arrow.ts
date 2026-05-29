import { type Ref, type ToRefs } from 'vue'
import {
  type ConstrClassObject,
  type ConstrStyles,
  isFilled
} from '@dxtmisha/functional'

import { ClientOnlyInclude } from '../../classes/ClientOnlyInclude'

import { ArrowElement } from './ArrowElement'
import { ArrowElementTarget } from './ArrowElementTarget'
import { ArrowEvent } from './ArrowEvent'
import { ArrowParent } from './ArrowParent'
import { ArrowPosition } from './ArrowPosition'

import { ArrowDirection } from './basicTypes'
import type { ArrowProps } from './props'

/**
 * Arrow.
 * The main class for managing the logic of the arrow component.
 * It coordinates the work of all sub-classes (elements, position, events).
 *
 * Стрелка.
 * Основной класс для управления логикой компонента стрелки.
 * Координирует работу всех подклассов (элементы, позиция, события).
 */
export class Arrow {
  /** Class for working with the arrow element / Класс для работы с элементом стрелки */
  readonly elementItem: ArrowElement

  /** Class for working with the target element / Класс для работы с целевым элементом */
  readonly elementTarget: ArrowElementTarget

  /** Class for working with the parent element / Класс для работы с родительским элементом */
  readonly parent: ArrowParent

  /** Class for calculating position / Класс для вычисления позиции */
  readonly position: ArrowPosition

  /** Class for managing events / Класс для управления событиями */
  readonly event: ArrowEvent

  /** Class for managing client-only rendering / Класс для управления рендерингом только на клиенте */
  readonly clientOnly: ClientOnlyInclude

  /**
   * Constructor
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param element input element / элемент ввода
   * @param className class name / название класса
   * @param constructors object with classes / объект с классами
   * @param constructors.ArrowElementConstructor class for working with the arrow element / класс для работы с элементом стрелки
   * @param constructors.ArrowElementTargetConstructor class for working with the target element of the arrow / класс для работы с целевым элементом стрелки
   * @param constructors.ArrowEventConstructor class for working with arrow events / класс для работы с событиями стрелки
   * @param constructors.ArrowParentConstructor class for working with the parent element of the arrow / класс для работы с родительским элементом стрелки
   * @param constructors.ArrowPositionConstructor class for working with the position of the arrow / класс для работы с позицией стрелки
   */
  constructor(
    protected readonly props: ArrowProps,
    protected readonly refs: ToRefs<ArrowProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly className: string,
    constructors: {
      ArrowElementConstructor?: typeof ArrowElement
      ArrowElementTargetConstructor?: typeof ArrowElementTarget
      ArrowEventConstructor?: typeof ArrowEvent
      ArrowParentConstructor?: typeof ArrowParent
      ArrowPositionConstructor?: typeof ArrowPosition
    } = {}
  ) {
    const {
      ArrowElementConstructor = ArrowElement,
      ArrowElementTargetConstructor = ArrowElementTarget,
      ArrowEventConstructor = ArrowEvent,
      ArrowParentConstructor = ArrowParent,
      ArrowPositionConstructor = ArrowPosition
    } = constructors

    this.clientOnly = new ClientOnlyInclude(this.props)

    this.elementItem = new ArrowElementConstructor(
      this.element,
      this.className
    )
    this.elementTarget = new ArrowElementTargetConstructor(this.props)
    this.parent = new ArrowParentConstructor(
      this.element,
      this.className,
      this.elementItem
    )

    this.position = new ArrowPositionConstructor(
      this.props,
      this.elementItem,
      this.elementTarget,
      this.parent
    )

    this.event = new ArrowEventConstructor(
      this.props,
      this.refs,
      this.element,
      this.elementTarget,
      this.parent,
      this.position
    )
  }

  /** Direction of the arrow / Направление стрелки */
  get direction(): ArrowDirection {
    if (isFilled(this.props.position)) {
      const directionPosition = this.position.direction.value

      if (directionPosition) {
        return directionPosition
      }
    }

    return ArrowDirection.HIDE
  }

  /** Gets the points for the arrow / Получает точки для стрелки */
  get points(): string {
    const width = this.elementItem.width
    const height = this.elementItem.height

    switch (this.direction) {
      case ArrowDirection.BOTTOM:
        return `0, 0 ${width / 2}, ${height} ${width}, 0`
      case ArrowDirection.LEFT:
        return `${width}, 0 0, ${height / 2} ${width}, ${height}`
      case ArrowDirection.RIGHT:
        return `0, 0 ${width}, ${height / 2} 0, ${height}`
      default:
        return `0, ${height} ${width / 2}, 0 ${width}, ${height}`
    }
  }

  /** Classes for the component / Классы для компонента */
  get classes(): ConstrClassObject {
    return {
      [`${this.className}--direction--${this.direction}`]: Boolean(this.direction)
    }
  }

  /** Styles for the component / Стили для компонента */
  get styles(): ConstrStyles {
    const styles = {
      [`--${this.className}-sys-background`]: this.parent.background,
      [`--${this.className}-sys-borderWidth`]: this.parent.borderWidth,
      [`--${this.className}-sys-borderColor`]: this.parent.borderColor,
      [`--${this.className}-sys-borderRadius`]: this.parent.borderRadius
    }

    if (
      this.parent.isBorder()
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
  }
}
