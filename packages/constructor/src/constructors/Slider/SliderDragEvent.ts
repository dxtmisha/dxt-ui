// ai-none

import {
  DesignLifecycleAbstract,
  getMouseClientX,
  getMouseClientY,
  isDomRuntime
} from '@dxtmisha/functional'

import type { SliderEmit } from './SliderEmit'
import type { SliderGo } from './SliderGo'

import type { SliderProps } from './props'

/**
 * Class for managing global drag interaction events and pointer movements for slider.
 *
 * Класс для управления глобальными событиями перетаскивания и перемещения указателя слайдера.
 */
export class SliderDragEvent extends DesignLifecycleAbstract {
  /** Pending animation frame identifier for move coalescing / Идентификатор ожидающего кадра анимации для коалесцирования перемещений */
  protected moveFrame?: number

  /** Latest queued pointer coordinate for the next animation frame / Последняя координата указателя в очереди на следующий кадр анимации */
  protected pendingCoordinate: number | undefined = undefined

  /** Previous pointer position for drag optimization / Предыдущая позиция указателя для оптимизации перетаскивания */
  protected previousPointerPosition: number | undefined = undefined

  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input data / входные данные
   * @param emitsItem getter returning event emission manager / функция, возвращающая менеджер эмита событий
   * @param go getter returning navigation step manager / функция, возвращающая менеджер навигации и шагов
   */
  constructor(
    protected readonly props: Readonly<SliderProps>,
    protected readonly emitsItem: () => SliderEmit,
    protected readonly go: () => SliderGo
  ) {
    super()
  }

  /**
   * Cleans up global drag event listeners when the component unmounts.
   *
   * Очищает глобальные слушатели событий перетаскивания при размонтировании компонента.
   */
  override readonly onUnmounted = (): void => {
    this.stop()
  }

  /**
   * Extracts coordinate pointer value from MouseEvent or TouchEvent.
   *
   * Извлекает значение координаты указателя из MouseEvent или TouchEvent.
   * @param event pointer or touch event / событие указателя или касания
   * @returns numeric coordinate / числовая координата
   */
  getCoordinates(event: MouseEvent | TouchEvent): number {
    return this.props.vertical
      ? getMouseClientY(event)
      : getMouseClientX(event)
  }

  /**
   * Global pointer end/up/cancel/blur event listener.
   *
   * Глобальный слушатель события завершения или отмены перемещения указателя.
   */
  readonly onPointerEnd = (): void => {
    this.flushPendingMove()
    this.stop()
    this.emitsItem().emit('change')
  }

  /**
   * Global pointer move event listener.
   *
   * Глобальный слушатель события перемещения указателя.
   * @param event MouseEvent or TouchEvent / событие мыши или касания
   */
  readonly onPointerMove = (event: MouseEvent | TouchEvent): void => {
    const coordinate = this.getCoordinates(event)

    if (coordinate !== this.previousPointerPosition) {
      this.scheduleMove(coordinate)
    }
  }

  /**
   * Starts drag global event listeners.
   *
   * Запускает глобальные слушатели событий перетаскивания.
   */
  start(): void {
    this.stop()

    if (isDomRuntime()) {
      window.addEventListener('mousemove', this.onPointerMove)
      window.addEventListener('mouseup', this.onPointerEnd)
      window.addEventListener('touchmove', this.onPointerMove, { passive: false })
      window.addEventListener('touchend', this.onPointerEnd)
      window.addEventListener('touchcancel', this.onPointerEnd)
      window.addEventListener('pointercancel', this.onPointerEnd)
      window.addEventListener('blur', this.onPointerEnd)
    }
  }

  /**
   * Stops drag global event listeners.
   *
   * Останавливает глобальные слушатели событий перетаскивания.
   */
  stop(): void {
    this.cancelMoveFrame()
    this.previousPointerPosition = undefined

    if (isDomRuntime()) {
      window.removeEventListener('mousemove', this.onPointerMove)
      window.removeEventListener('mouseup', this.onPointerEnd)
      window.removeEventListener('touchmove', this.onPointerMove)
      window.removeEventListener('touchend', this.onPointerEnd)
      window.removeEventListener('touchcancel', this.onPointerEnd)
      window.removeEventListener('pointercancel', this.onPointerEnd)
      window.removeEventListener('blur', this.onPointerEnd)
    }
  }

  /**
   * Cancels any pending animation frame without applying queued coordinates.
   *
   * Отменяет ожидающий кадр анимации без применения накопленных координат.
   */
  protected cancelMoveFrame(): void {
    if (this.moveFrame !== undefined) {
      if (typeof cancelAnimationFrame === 'function') {
        cancelAnimationFrame(this.moveFrame)
      }

      this.moveFrame = undefined
    }

    this.pendingCoordinate = undefined
  }

  /**
   * Flushes queued pointer coordinate to the slider navigation helper.
   *
   * Применяет отложенную координату указателя к помощнику навигации слайдера.
   */
  protected readonly flushMove = (): void => {
    this.moveFrame = undefined
    const coordinate = this.pendingCoordinate
    this.pendingCoordinate = undefined

    if (
      coordinate !== undefined
      && coordinate !== this.previousPointerPosition
    ) {
      this.previousPointerPosition = coordinate
      this.go().updateFromCoordinate(coordinate)
    }
  }

  /**
   * Cancels pending animation frame and synchronously applies the last queued coordinate.
   *
   * Отменяет ожидающий кадр анимации и синхронно применяет последнюю накопленную координату.
   */
  protected flushPendingMove(): void {
    if (this.moveFrame !== undefined) {
      if (typeof cancelAnimationFrame === 'function') {
        cancelAnimationFrame(this.moveFrame)
      }

      this.flushMove()
    }
  }

  /**
   * Queues pointer coordinate update for the next animation frame.
   *
   * Ставит обновление координаты указателя в очередь на следующий кадр анимации.
   * @param coordinate pointer coordinate / координата указателя
   */
  protected scheduleMove(coordinate: number): void {
    this.pendingCoordinate = coordinate

    if (this.moveFrame === undefined) {
      if (typeof requestAnimationFrame === 'function') {
        this.moveFrame = requestAnimationFrame(this.flushMove)
      } else {
        this.flushMove()
      }
    }
  }
}
