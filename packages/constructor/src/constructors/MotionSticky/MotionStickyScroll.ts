import { watch, onMounted, onUnmounted } from 'vue'
import { EventItem } from '@dxtmisha/functional'

import { MotionStickyElement } from './MotionStickyElement'

import type { MotionStickyProps } from './props'

/**
 * Class for working with sticky element scrolling event bindings.
 *
 * Класс для работы с привязкой событий прокрутки липкого элемента.
 */
export class MotionStickyScroll {
  /** Reference to the scroll event item listener / Ссылка на слушатель событий прокрутки */
  protected event?: EventItem<HTMLElement | Window, Event>

  /**
   * Constructor
   * @param props input data / входные данные
   * @param stickyElement helper class for sticky element calculations / вспомогательный класс для вычислений липкого элемента
   */
  constructor(
    protected readonly props: MotionStickyProps,
    protected readonly stickyElement: MotionStickyElement
  ) {
    onMounted(() => {
      watch(
        this.stickyElement.element,
        () => {
          this.make()
          requestAnimationFrame(this.onScroll)
        },
        { immediate: true }
      )
    })

    onUnmounted(() => {
      this.stop()
    })
  }

  /**
   * Events for listening to scroll events.
   *
   * События для прослушивания события скролла.
   */
  protected readonly onScroll = (): void => {
    const positionStyle = this.stickyElement.getPositionStyle()
    const positionElement = this.stickyElement.getPositionElement()

    if (
      positionStyle
      && positionElement
    ) {
      this.stickyElement.setStatus(
        positionStyle.top === Math.round(positionElement.top)
        || positionStyle.top === Math.floor(positionElement.top)
        || positionStyle.bottom === Math.ceil(positionElement.bottom)
        || positionStyle.bottom === Math.floor(positionElement.bottom)
      )
    }
  }

  /**
   * Initialize scroll event listener.
   *
   * Инициализация слушателя события прокрутки.
   */
  protected make(): void {
    const element = this.stickyElement.getElement()

    if (element) {
      this.event = new EventItem(element, 'scroll', this.onScroll)
      this.event.start()
    } else {
      this.stop()
    }
  }

  /**
   * Stop scroll event listener.
   *
   * Остановить слушатель событий прокрутки.
   */
  protected stop(): void {
    this.event?.stop()
    this.event = undefined
  }

  /**
   * Initialize scroll event listener.
   *
   * Инициализация слушателя события прокрутки.
   * @param targetEventElement target element / целевой элемент
   * @returns event item instance / экземпляр события
   */
  protected makeEvent(targetEventElement: HTMLElement | Window): EventItem<HTMLElement | Window, Event> {
    return new EventItem(
      targetEventElement,
      'scroll',
      this.onScroll
    )
  }
}
