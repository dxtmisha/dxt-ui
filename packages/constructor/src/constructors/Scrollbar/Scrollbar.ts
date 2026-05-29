import { type Ref, type ToRefs } from 'vue'
import {
  type ConstrClassObject,
  type ConstrEmit,
  type DesignComp,
  ScrollbarWidthRef
} from '@dxtmisha/functional'

import { ClientOnlyInclude } from '../../classes/ClientOnlyInclude'

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
  /** Client-only rendering include / Подключение рендеринга только на клиенте */
  readonly clientOnly: ClientOnlyInclude

  /** Scrollbar width reference / Ссылка на ширину полосы прокрутки */
  readonly width: ScrollbarWidthRef

  /** Scrollbar border manager / Управление границей полосы прокрутки */
  readonly border: ScrollbarBorder

  /**
   * Constructor for Scrollbar class.
   *
   * Конструктор класса Scrollbar.
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param element input element / элемент ввода
   * @param classDesign design name / название дизайна
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors object with classes / объект с классами
   * @param constructors.ScrollbarBorderConstructor class for working with scrollbar border / класс для работы с границей скролла
   * @param constructors.ScrollbarWidthRefConstructor class for working with scrollbar width / класс для работы с шириной скролла
   * @param constructors.ClientOnlyIncludeConstructor class for client-only rendering / класс для рендеринга только на клиенте
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
    constructors: {
      ScrollbarBorderConstructor?: typeof ScrollbarBorder
      ScrollbarWidthRefConstructor?: typeof ScrollbarWidthRef
      ClientOnlyIncludeConstructor?: typeof ClientOnlyInclude
    } = {}
  ) {
    const {
      ScrollbarBorderConstructor = ScrollbarBorder,
      ScrollbarWidthRefConstructor = ScrollbarWidthRef,
      ClientOnlyIncludeConstructor = ClientOnlyInclude
    } = constructors

    this.clientOnly = new ClientOnlyIncludeConstructor(this.props)
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
   * @returns classes values / значения классов
   */
  get classes(): ConstrClassObject {
    return {
      [`${this.className}--disabled`]: this.clientOnly.isRender && Boolean(this.width.item.value)
    }
  }
}
