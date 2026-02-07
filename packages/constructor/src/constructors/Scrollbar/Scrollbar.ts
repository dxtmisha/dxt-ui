import { computed, type Ref, type ToRefs } from 'vue'
import {
  type ConstrClassObject,
  type ConstrEmit,
  type DesignComp,
  ScrollbarWidthRef
} from '@dxtmisha/functional'

import { ScrollbarBorder } from './ScrollbarBorder'

import type { ScrollbarComponents, ScrollbarEmits, ScrollbarSlots } from './types'
import type { ScrollbarPropsBasic } from './props'

/**
 * Scrollbar class provides functionality for managing scrollbar behavior and appearance.
 * It handles scroll width calculations and border display based on scroll position.
 *
 * Класс Scrollbar предоставляет функциональность для управления поведением и внешним видом полосы прокрутки.
 * Он обрабатывает вычисления ширины скролла и отображение границ на основе позиции скролла.
 */
export class Scrollbar {
  readonly width: ScrollbarWidthRef
  readonly border: ScrollbarBorder

  /**
   * Constructor for Scrollbar class.
   *
   * Конструктор класса Scrollbar.
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element input element/ элемент ввода
   * @param classDesign design name/ название дизайна
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param ScrollbarWidthRefConstructor class for working with scrollbar width/ класс для работы с шириной скролла
   * @param ScrollbarBorderConstructor class for working with scrollbar border/ класс для работы с границей скролла
   */
  constructor(
    protected readonly props: ScrollbarPropsBasic,
    protected readonly refs: ToRefs<ScrollbarPropsBasic>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<ScrollbarComponents, ScrollbarPropsBasic>,
    protected readonly slots?: ScrollbarSlots,
    protected readonly emits?: ConstrEmit<ScrollbarEmits>,
    ScrollbarWidthRefConstructor: typeof ScrollbarWidthRef = ScrollbarWidthRef,
    ScrollbarBorderConstructor: typeof ScrollbarBorder = ScrollbarBorder
  ) {
    this.width = new ScrollbarWidthRefConstructor()
    this.border = new ScrollbarBorderConstructor(
      props,
      refs,
      element as any,
      className,
      emits
    )
  }

  /**
   * Returns values for the class.
   *
   * Возвращает значения для класса.
   */
  readonly classes = computed<ConstrClassObject>(() => ({
    [`${this.className}--disabled`]: Boolean(this.width.item.value)
  }))
}
