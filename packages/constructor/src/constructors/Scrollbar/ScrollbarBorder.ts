import { onUnmounted, type ToRefs, watch } from 'vue'
import {
  type ConstrEmit,
  type ConstrValue,
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
  private event?: EventItem<HTMLDivElement, Event, any>
  private eventSub?: EventItem<HTMLDivElement, Event, any>

  /**
   * Top boundary state/ состояние верхней границы
   */
  private top: boolean = false

  /**
   * Bottom boundary state/ состояние нижней границы
   */
  private bottom: boolean = false

  /**
   * Constructor for ScrollbarBorder class.
   *
   * Конструктор класса ScrollbarBorder.
   * @param props properties/ свойства
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element input element/ элемент ввода
   * @param className class name/ название класса
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly props: ScrollbarProps,
    refs: ToRefs<ScrollbarProps>,
    protected readonly element: ConstrValue<HTMLDivElement>,
    protected readonly className: string,
    protected readonly emits?: ConstrEmit<ScrollbarEmits>
  ) {
    watch([
      this.element,
      refs.divider,
      refs.dividerTop,
      refs.dividerBottom,
      refs.inverse
    ], this.reset, { immediate: true })

    onUnmounted(() => this.stop())
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
   * Updating the monitoring element for the event object.
   *
   * Обновление элемента слежения для объекта события.
   */
  readonly reset = (): void => {
    if (this.element.value) {
      if (this.event) {
        this.event.setElement(this.element.value)

        if (
          this.eventSub
          && this.element.value.children?.[0]
        ) {
          this.eventSub.setElement(this.element.value.children[0] as HTMLDivElement)
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
      this.event = new EventItem<HTMLDivElement, Event>(this.element.value, ['scroll-sync'], this.on)
        .start()
    }

    if (this.eventSub) {
      this.eventSub.start()
    } else if (
      this.element.value?.children?.[0]
    ) {
      this.eventSub = new EventItem<HTMLDivElement, Event>(this.element.value.children[0] as HTMLDivElement, ['resize'], this.on)
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

    if (this.eventSub) {
      this.eventSub.stop()
      this.eventSub = undefined
    }
  }

  /**
   * Updates the list of active classes.
   *
   * Обновляет список активных классов.
   */
  protected readonly update = () => {
    const element = this.element.value

    if (element) {
      element.classList.toggle(`${this.className}--divider--top`, this.top)
      element.classList.toggle(`${this.className}--divider--bottom`, this.bottom)
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
   * @param top status of the top border display/ статус отображения верхнего бордера
   */
  private setTop(top: boolean): this {
    if (this.top !== top) {
      this.top = top

      this.emits?.('top', top)
      this.emits?.('edge', top, this.bottom, 'top')

      if (top) {
        this.emits?.('reachTop')
      } else {
        this.emits?.('leaveTop')
      }
    }
    return this
  }

  /**
   * Sets the bottom boundary state and emits related events.
   *
   * Устанавливает состояние нижней границы и генерирует связанные события.
   * @param bottom status of the bottom border display/ статус отображения нижнего бордера
   */
  private setBottom(bottom: boolean): this {
    if (this.bottom !== bottom) {
      this.bottom = bottom

      this.emits?.('bottom', bottom)
      this.emits?.('edge', this.top, bottom, 'bottom')

      if (bottom) {
        this.emits?.('reachBottom')
      } else {
        this.emits?.('leaveBottom')
      }
    }
    return this
  }
}
