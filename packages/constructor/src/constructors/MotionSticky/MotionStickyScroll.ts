// ai-none

import { type WatchStopHandle, watch } from 'vue'
import {
  DesignLifecycleAbstract,
  EventItem,
  isDomRuntime
} from '@dxtmisha/functional'

import { MotionStickyElement } from './MotionStickyElement'

import type { MotionStickyProps } from './props'

/**
 * Class for working with sticky element scrolling event bindings.
 *
 * Класс для работы с привязкой событий прокрутки липкого элемента.
 */
export class MotionStickyScroll extends DesignLifecycleAbstract {
  /** Reference to the scroll event item listener / Ссылка на слушатель событий прокрутки */
  protected event?: EventItem<HTMLElement | Window, Event>

  /** Active requestAnimationFrame identifier / Идентификатор активного requestAnimationFrame */
  protected animationFrame?: number

  /** Stop handle for the reactive watcher / Функция остановки реактивного наблюдателя */
  protected stopWatch?: WatchStopHandle

  /**
   * Constructor
   * @param props input data / входные данные
   * @param stickyElement helper class getter for sticky element calculations / геттер вспомогательного класса для вычислений липкого элемента
   */
  constructor(
    protected readonly props: Readonly<MotionStickyProps>,
    protected readonly stickyElement: () => MotionStickyElement
  ) {
    super()
  }

  /**
   * Initializes scroll listeners and reactive watchers on mount.
   *
   * Инициализирует слушатели прокрутки и реактивные наблюдатели при монтировании.
   */
  override readonly onMounted = (): void => {
    this.update()

    this.stopWatch?.()
    this.stopWatch = watch(
      [
        () => this.stickyElement().element.value,
        () => this.stickyElement().eventElement
      ],
      this.update
    )
  }

  /**
   * Cleans up scroll listeners, watchers, and pending animation frames on unmount.
   *
   * Очищает слушатели прокрутки, наблюдатели и ожидающие кадры анимации при размонтировании.
   */
  override readonly onUnmounted = (): void => {
    this.stopWatch?.()
    this.stopWatch = undefined
    this.stop()
  }

  /**
   * Updates listeners and performs scroll position calculation.
   *
   * Обновляет слушатели и выполняет расчет позиции прокрутки.
   */
  readonly update = (): void => {
    this.make()

    if (isDomRuntime()) {
      this.cancelAnimationFrame()
      this.animationFrame = requestAnimationFrame(this.onScroll)
    }
  }

  /**
   * Events for listening to scroll events.
   *
   * События для прослушивания события скролла.
   */
  protected readonly onScroll = (): void => {
    this.animationFrame = undefined

    const stickyElement = this.stickyElement()
    const positionStyle = stickyElement.getPositionStyle()
    const positionElement = stickyElement.getPositionElement()

    if (
      positionStyle
      && positionElement
    ) {
      stickyElement.setStatus(
        (
          positionStyle.top !== undefined
          && (
            positionStyle.top === Math.round(positionElement.top)
            || positionStyle.top === Math.floor(positionElement.top)
          )
        )
        || (
          positionStyle.bottom !== undefined
          && (
            positionStyle.bottom === Math.ceil(positionElement.bottom)
            || positionStyle.bottom === Math.floor(positionElement.bottom)
          )
        )
      )
    }
  }

  /**
   * Initialize scroll event listener.
   *
   * Инициализация слушателя события прокрутки.
   */
  protected make(): void {
    this.stop()

    const element = this.stickyElement().eventElement

    if (element) {
      this.event = new EventItem(
        element,
        'scroll',
        this.onScroll,
        { passive: true }
      )
      this.event.start()
    }
  }

  /**
   * Stop scroll event listener and cancel pending frame.
   *
   * Останавливает слушатель событий прокрутки и отменяет ожидающий кадр анимации.
   */
  protected stop(): void {
    this.cancelAnimationFrame()
    this.event?.stop()
    this.event = undefined
  }

  /**
   * Cancels the scheduled animation frame if active.
   *
   * Отменяет запланированный кадр анимации, если он активен.
   */
  protected cancelAnimationFrame(): void {
    if (
      this.animationFrame !== undefined
      && isDomRuntime()
    ) {
      cancelAnimationFrame(this.animationFrame)
      this.animationFrame = undefined
    }
  }
}
