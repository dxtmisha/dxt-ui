import { nextTick, type Ref } from 'vue'
import {
  type ConstrBind,
  type ConstrEmit,
  type ConstrItems,
  type DesignComponents,
  DesignLogicAbstract,
  type DesignName,
  goScrollTo,
  isDomRuntime
} from '@dxtmisha/functional'

import { ScrollToXInclude } from '../../classes/ScrollToXInclude'

import type { HorizontalScrollControlItem } from './basicTypes'
import type {
  HorizontalScrollComponents,
  HorizontalScrollEmits,
  HorizontalScrollExpose,
  HorizontalScrollSlots
} from './types'
import type { HorizontalScrollProps } from './props'

/** HorizontalScroll dependency constructors type / Тип конструкторов зависимостей HorizontalScroll */
export type HorizontalScrollConstructors = {
  /** Scroll helper constructor / Конструктор помощника прокрутки */
  scroll: typeof ScrollToXInclude
}

/**
 * Class representing the business logic and scroll synchronization of the HorizontalScroll component.
 * It manages DOM events and smooth horizontal scrolling coordinates for active children.
 *
 * Класс, представляющий бизнес-логику и синхронизацию прокрутки компонента HorizontalScroll.
 * Управляет DOM-событиями и координатами плавной горизонтальной прокрутки для активных дочерних элементов.
 */
export class HorizontalScroll extends DesignLogicAbstract<
  HTMLDivElement,
  HorizontalScrollComponents,
  HorizontalScrollEmits,
  HorizontalScrollSlots,
  HorizontalScrollProps,
  HorizontalScrollConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<HorizontalScrollConstructors> = {
    scroll: {
      item: ScrollToXInclude,
      parameters: () => [this.element]
    }
  }

  /** Scheduled animation frame identifier / Идентификатор запланированного кадра анимации */
  protected animationFrameId?: number

  /** Whether the component has been unmounted / Был ли компонент размонтирован */
  protected isUnmounted = false

  /**
   * Executes post-mount scroll alignment to the selected element.
   *
   * Выполняет выравнивание прокрутки к выбранному элементу после монтирования.
   */
  protected override readonly onMounted = async (): Promise<void> => {
    await nextTick()

    if (!this.isUnmounted && isDomRuntime()) {
      this.animationFrameId = requestAnimationFrame(() => {
        this.animationFrameId = undefined
        this.toSelected()
      })
    }
  }

  /**
   * Cancels any scheduled scroll animation frame on unmount.
   *
   * Отменяет запланированный кадр анимации прокрутки при размонтировании.
   */
  protected override readonly onUnmounted = (): void => {
    this.isUnmounted = true

    if (
      this.animationFrameId !== undefined
      && isDomRuntime()
    ) {
      cancelAnimationFrame(this.animationFrameId)
      this.animationFrameId = undefined
    }
  }

  /**
   * Constructor for HorizontalScroll.
   *
   * Конструктор для HorizontalScroll.
   * @param props input data / входные данные
   * @param element input element / элемент ввода
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors dependency injection overrides object / объект переопределения конструкторов зависимостей
   */
  constructor(
    props: Readonly<HorizontalScrollProps>,
    element: Ref<HTMLDivElement | undefined>,
    naming: DesignName,
    components?: DesignComponents<HorizontalScrollComponents, HorizontalScrollProps>,
    slots?: HorizontalScrollSlots,
    emits?: ConstrEmit<HorizontalScrollEmits>,
    constructors?: Partial<HorizontalScrollConstructors>
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
  }

  /**
   * Returns bindings for the element.
   *
   * Возвращает привязки для элемента.
   * @returns element bindings / привязки элемента
   */
  get binds(): ConstrBind {
    return this.i('scroll').binds
  }

  /**
   * Returns exposed properties and methods.
   *
   * Возвращает открытые свойства и методы.
   * @returns exposed API object / объект открытого API
   */
  get expose(): HorizontalScrollExpose {
    return {
      getElement: () => this.element.value,
      toSelected: () => this.toSelected()
    }
  }

  /**
   * Returns data for managing slot data.
   *
   * Возвращает данные для управления данными слота.
   * @returns slot control data / данные управления слотом
   */
  get slotData(): HorizontalScrollControlItem {
    return {
      classItem: this.naming.getSubClass('item'),
      classItemSelected: this.naming.getSubClass('item--selected'),
      binds: {
        class: this.naming.getSubClass('item')
      }
    }
  }

  /**
   * Returns HTML tag for the scroll element.
   *
   * Возвращает HTML-тег для элемента прокрутки.
   * @returns tag name / название тега
   */
  get tag(): string {
    return this.props.tag ?? 'div'
  }

  /**
   * Returns the selected element.
   *
   * Возвращает выбранный элемент.
   * @returns selected HTML element or undefined / выбранный HTML-элемент или undefined
   */
  protected getItemSelected(): HTMLElement | undefined {
    return this.element.value?.querySelector<HTMLElement>(
      `.${this.slotData.classItemSelected}`
    ) ?? undefined
  }

  /**
   * Scrolls to the selected element.
   *
   * Прокручивает к выбранному элементу.
   */
  protected readonly toSelected = (): void => {
    const item = this.getItemSelected()

    if (
      this.element.value
      && item
    ) {
      goScrollTo(
        this.element.value,
        item
      )
    }
  }
}
