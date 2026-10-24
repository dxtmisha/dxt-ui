import {
  type ConstrClassObject,
  type ConstrItems,
  DesignLogicAbstract,
  ScrollbarWidthRef
} from '@dxtmisha/functional'

import { ScrollbarBorder } from './ScrollbarBorder'

import type { ScrollbarProps } from './props'
import type { ScrollbarComponents, ScrollbarEmits, ScrollbarSlots } from './types'

/** Scrollbar dependency constructors type / Тип конструкторов зависимостей Scrollbar */
export type ScrollbarConstructors = {
  /** Scrollbar border constructor / Конструктор границы скролла */
  border: typeof ScrollbarBorder
  /** Scrollbar width constructor / Конструктор ширины скролла */
  width: typeof ScrollbarWidthRef
}

/**
 * Scrollbar class provides functionality for managing scrollbar behavior and appearance.
 * It handles scroll width calculations and border display based on scroll position.
 *
 * Класс Scrollbar предоставляет функциональность для управления поведением и внешним видом полосы прокрутки.
 * Он обрабатывает вычисления ширины скролла и отображение границ на основе позиции скролла.
 */
export class Scrollbar extends DesignLogicAbstract<
  HTMLElement,
  ScrollbarComponents,
  ScrollbarEmits,
  ScrollbarSlots,
  ScrollbarProps,
  ScrollbarConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<ScrollbarConstructors> = {
    border: {
      item: ScrollbarBorder,
      conditions: () => ScrollbarBorder.is(this.props),
      parameters: () => [
        this.props,
        this.element,
        this.emits
      ]
    },
    width: {
      item: ScrollbarWidthRef
    }
  }

  /**
   * Returns values for the class.
   *
   * Возвращает значения для класса.
   * @returns classes values / значения классов
   */
  get classes(): ConstrClassObject {
    return {
      [this.naming.getStatusClass('disabled')]: this.isMounted.value && Boolean(this.i('width').item.value)
    }
  }

  /**
   * Tag name.
   *
   * Название тега.
   * @returns tag name / название тега
   */
  get tag(): string {
    return this.props.tag ?? 'div'
  }
}
