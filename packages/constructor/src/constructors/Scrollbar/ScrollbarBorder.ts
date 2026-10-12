// ai-none

import { onMounted, onUnmounted, type Ref, type ToRefs, watch } from 'vue'
import {
  type ConstrEmit,
  EventItem
} from '@dxtmisha/functional'

import type { ScrollbarProps } from './props'
import type { ScrollbarEmits } from './types'

const SCROLLBAR_SHIFT = 8

/**
 * ScrollbarBorder class provides functionality for updating scroll position and displaying borders.
 * It monitors scroll events and manages visual feedback for top and bottom scroll boundaries.
 *
 * Класс ScrollbarBorder предоставляет функциональность для обновления положения скролла и отображения границ.
 * Он отслеживает события скролла и управляет визуальной обратной связью для верхней и нижней границ скролла.
 */
export class ScrollbarBorder {
  /** Event item for scroll synchronization / Элемент события для синхронизации скролла */
  protected event?: EventItem<HTMLElement, Event>

  /** Event item for resize monitoring / Элемент события для отслеживания изменения размера */
  protected eventResize?: EventItem<HTMLElement, Event>

  /**
   * Top boundary state / состояние верхней границы
   */
  protected top?: boolean

  /**
   * Bottom boundary state / состояние нижней границы
   */
  protected bottom?: boolean

  /**
   * Constructor for ScrollbarBorder class.
   *
   * Конструктор класса ScrollbarBorder.
   * @param props properties / свойства
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param element input element / элемент ввода
   * @param className class name / название класса
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly props: ScrollbarProps,
    refs: ToRefs<ScrollbarProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly className: string,
    protected readonly emits?: ConstrEmit<ScrollbarEmits>
  ) {
    watch([
      this.element,
      refs.divider,
      refs.dividerTop,
      refs.dividerBottom,
      refs.inverse
    ], this.reset)

    onMounted(this.reset)
    onUnmounted(() => this.stop())
  }

  /**
   * Updating the monitoring element for the event object.
   *
   * Обновление элемента слежения для объекта события.
   */
  readonly reset = (): void => {
    if (this.element.value) {
      if (this.event) {
        this.event.setElement(this.element.value)

        const firstChild = this.element.value.children?.[0]

        if (
          this.eventResize
          && firstChild instanceof HTMLElement
        ) {
          this.eventResize.setElement(firstChild)
        }
      }

      this.toggle()
      this.update()
    } else {
      this.stop()
    }
  }

  /**
   * Start monitoring the scroll.
   *
   * Начать слежение за скроллом.
   */
  start(): void {
    if (this.event) {
      this.event.start()
    } else {
      this.event = new EventItem<HTMLElement, Event>(this.element.value, ['scroll-sync'], this.on)
        .start()
    }

    const firstChild = this.element.value?.children?.[0]

    if (this.eventResize) {
      this.eventResize.start()
    } else if (
      firstChild instanceof HTMLElement
    ) {
      this.eventResize = new EventItem<HTMLElement, Event>(firstChild, ['resize'], this.on)
        .start()
    }

    this.on()
  }

  /**
   * Stopping the monitoring of scroll changes.
   *
   * Остановка слежения за изменениями скролла.
   */
  stop(): void {
    if (this.event) {
      this.event.stop()
      this.event = undefined
    }

    if (this.eventResize) {
      this.eventResize.stop()
      this.eventResize = undefined
    }
  }

  /**
   * Changing the monitoring status depending on the border parameter.
   *
   * Изменение статуса слежения в зависимости от параметра border.
   */
  readonly toggle = (): void => {
    if (
      this.props.divider
      || this.props.dividerTop
      || this.props.dividerBottom
    ) {
      this.start()
    } else {
      this.stop()
    }
  }

  /**
   * Changing the data for class output.
   *
   * Изменение данных для вывода класса.
   * @param top status of the top border display/ статус отображения верхнего бордера
   * @param bottom status of the bottom border display/ статус отображения нижнего бордера
   */
  protected setData(
    top: boolean,
    bottom: boolean
  ): this {
    if (
      this.top !== top
      || this.bottom !== bottom
    ) {
      this.setTop(top)
        .setBottom(bottom)
        .update()
    }

    return this
  }

  /**
   * Sets the top boundary state and emits related events.
   *
   * Устанавливает состояние верхней границы и генерирует связанные события.
   * @param top status of the top border display / статус отображения верхнего бордера
   * @returns this
   */
  protected setTop(top: boolean): this {
    if (this.top !== top) {
      const wasTop = this.top
      this.top = top

      const isTop = !top
      const isBottom = !this.bottom

      this.emits?.('top', isTop)
      this.emits?.('edge', isTop, isBottom, 'top')

      if (isTop) {
        this.emits?.('reachTop')
      } else if (wasTop !== undefined) {
        this.emits?.('leaveTop')
      }
    }
    return this
  }

  /**
   * Sets the bottom boundary state and emits related events.
   *
   * Устанавливает состояние нижней границы и генерирует связанные события.
   * @param bottom status of the bottom border display / статус отображения нижнего бордера
   * @returns this
   */
  protected setBottom(bottom: boolean): this {
    if (this.bottom !== bottom) {
      const wasBottom = this.bottom
      this.bottom = bottom

      const isTop = !this.top
      const isBottom = !bottom

      this.emits?.('bottom', isBottom)
      this.emits?.('edge', isTop, isBottom, 'bottom')

      if (isBottom) {
        this.emits?.('reachBottom')
      } else if (wasBottom !== undefined) {
        this.emits?.('leaveBottom')
      }
    }
    return this
  }

  /**
   * Updates the list of active data attributes.
   *
   * Обновляет список активных data-атрибутов.
   */
  protected readonly update = (): void => {
    const element = this.element.value

    if (element) {
      element.dataset.top = this.top ? 'top' : 'none'
      element.dataset.bottom = this.bottom ? 'bottom' : 'none'
      element.dataset.scrollbarDivider = this.top || this.bottom ? 'divider' : 'none'
    }
  }

  /**
   * Function for the event of monitoring scroll changes.
   *
   * Функция для события слежения за изменениями скролла.
   */
  protected readonly on = (): void => {
    const element = this.element.value

    if (element) {
      this.setData(
        element.scrollTop > SCROLLBAR_SHIFT,
        element.scrollTop < element.scrollHeight - element.clientHeight - SCROLLBAR_SHIFT
      )
    }
  }
}
