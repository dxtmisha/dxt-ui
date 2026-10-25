import {
  type ConstrClassObject,
  type ConstrItem,
  type ConstrItems,
  type ConstrStyles,
  DesignLogicAbstract
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { ArrowElement } from './ArrowElement'
import { ArrowElementTarget } from './ArrowElementTarget'
import { ArrowEvent } from './ArrowEvent'
import { ArrowParent } from './ArrowParent'
import { ArrowPosition } from './ArrowPosition'

import { ArrowDirection } from './basicTypes'
import type { ArrowProps } from './props'
import type {
  ArrowComponents,
  ArrowEmits,
  ArrowSlots
} from './types'

/** Arrow dependency constructors type / Тип конструкторов зависимостей Arrow */
export type ArrowConstructors = {
  /** Arrow element constructor / Конструктор элемента стрелки */
  element: typeof ArrowElement
  /** Target element constructor / Конструктор целевого элемента */
  elementTarget: typeof ArrowElementTarget
  /** Arrow event constructor / Конструктор событий стрелки */
  event: typeof ArrowEvent
  /** Parent element constructor / Конструктор родительского элемента */
  parent: typeof ArrowParent
  /** Arrow position constructor / Конструктор позиции стрелки */
  position: typeof ArrowPosition
}

/**
 * Arrow.
 * The main class for managing the logic of the arrow component.
 * It coordinates the work of all sub-classes (elements, position, events).
 *
 * Стрелка.
 * Основной класс для управления логикой компонента стрелки.
 * Координирует работу всех подклассов (элементы, позиция, события).
 */
export class Arrow extends DesignLogicAbstract<
  HTMLDivElement,
  ArrowComponents,
  ArrowEmits,
  ArrowSlots,
  ArrowProps,
  ArrowConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<ArrowConstructors> = {
    element: {
      item: ArrowElement,
      parameters: () => [
        this.element,
        this.naming
      ]
    },
    elementTarget: {
      item: ArrowElementTarget,
      parameters: () => [this.props]
    },
    event: {
      item: ArrowEvent,
      conditions: () => ArrowEvent.is(this.props),
      parameters: () => [
        this.props,
        this.element,
        () => this.i('elementTarget'),
        () => this.i('parent'),
        () => this.i('position')
      ]
    },
    parent: {
      item: ArrowParent,
      parameters: () => [
        this.element,
        this.naming,
        () => this.i('element')
      ]
    },
    position: {
      item: ArrowPosition,
      parameters: () => [
        this.props,
        () => this.i('element'),
        () => this.i('elementTarget'),
        () => this.i('parent')
      ]
    }
  }

  /**
   * ARIA attributes for the arrow element.
   *
   * ARIA-атрибуты для элемента стрелки.
   * @returns ARIA attributes object / объект ARIA-атрибутов
   */
  get aria(): ConstrItem {
    return AriaStaticInclude.hidden()
  }

  /**
   * Root element bindings.
   *
   * Привязки корневого элемента.
   * @returns bindings object / объект привязок
   */
  get binds(): ConstrItem {
    return {
      ...this.aria
    }
  }

  /**
   * Values for the class.
   *
   * Значения для класса.
   * @returns classes values / значения классов
   */
  get classes(): ConstrClassObject {
    return {
      [this.naming.getStatusClass('direction', this.direction)]: Boolean(this.direction)
    }
  }

  /**
   * Direction of the arrow.
   *
   * Направление стрелки.
   * @returns arrow direction / направление стрелки
   */
  get direction(): ArrowDirection {
    if (ArrowPosition.is(this.props)) {
      if (!ArrowPosition.isAuto(this.props)) {
        return this.props.position as ArrowDirection
      }

      const directionPosition = this.i('position').direction.value

      if (directionPosition) {
        return directionPosition
      }
    }

    return ArrowDirection.HIDE
  }

  /**
   * Gets the points for the arrow.
   *
   * Получает точки для стрелки.
   * @returns SVG points string / строка точек SVG
   */
  get points(): string {
    const element = this.i('element')
    const width = element.width
    const height = element.height

    switch (this.direction) {
      case ArrowDirection.BOTTOM:
        return `0, 0 ${width / 2}, ${height} ${width}, 0`
      case ArrowDirection.LEFT:
        return `${height}, 0 0, ${width / 2} ${height}, ${width}`
      case ArrowDirection.RIGHT:
        return `0, 0 ${height}, ${width / 2} 0, ${width}`
      default:
        return `0, ${height} ${width / 2}, 0 ${width}, ${height}`
    }
  }

  /**
   * Styles for the component.
   *
   * Стили для компонента.
   * @returns styles object / объект стилей
   */
  get styles(): ConstrStyles {
    const parent = this.i('parent')

    const styles: ConstrStyles = {
      [this.naming.getStyle('background')]: parent.background,
      [this.naming.getStyle('borderWidth')]: parent.borderWidth,
      [this.naming.getStyle('borderColor')]: parent.borderColor,
      [this.naming.getStyle('borderRadius')]: parent.borderRadius
    }

    if (
      parent.isBorder()
      && this.i('position').clipPath.value
    ) {
      styles[this.naming.getStyle('clipPath')] = this.i('position').clipPath.value
    }

    if (
      ArrowElementTarget.is(this.props)
      && this.i('elementTarget').is()
      && this.i('position').shift.value
    ) {
      styles[this.naming.getStyle('shift')] = this.i('position').shift.value
    }

    return styles
  }

  /**
   * Updates the position of the arrow.
   *
   * Обновляет позицию стрелки.
   */
  readonly update = (): void => {
    this.i('position').update()
  }
}
