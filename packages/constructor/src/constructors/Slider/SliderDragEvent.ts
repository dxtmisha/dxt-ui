import type { SliderEmit } from './SliderEmit'
import type { SliderGo } from './SliderGo'

import type { SliderProps } from './props'

/**
 * Class for managing global drag interaction events and pointer movements for slider.
 *
 * Класс для управления глобальными событиями перетаскивания и перемещения указателя слайдера.
 */
export class SliderDragEvent {
  /** Previous pointer position for drag optimization / Предыдущая позиция указателя для оптимизации перетаскивания */
  protected previousPointerPosition: number | undefined = undefined

  /**
   * Constructor
   * @param props input data / входные данные
   * @param emitsItem event emission manager / менеджер эмита событий
   * @param go navigation step manager / менеджер навигации и шагов
   */
  constructor(
    protected readonly props: SliderProps,
    protected readonly emitsItem: SliderEmit,
    protected readonly go: SliderGo
  ) { }

  /**
   * Extracts coordinate pointer value from MouseEvent or TouchEvent.
   *
   * Извлекает значение координаты указателя из MouseEvent или TouchEvent.
   * @param event Pointer/Touch event / событие указателя или касания
   * @returns numeric coordinate / числовая координата
   */
  getCoordinates(event: MouseEvent | TouchEvent): number {
    const isVertical = Boolean(this.props.vertical)
    const touch = ('targetTouches' in event && event.targetTouches[0])
      || ('touches' in event && event.touches[0])

    if (touch) {
      return isVertical ? touch.clientY : touch.clientX
    }

    const mouseEvent = event as MouseEvent

    return isVertical ? mouseEvent.clientY : mouseEvent.clientX
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
      this.previousPointerPosition = coordinate
      this.go.updateFromCoordinate(coordinate)
    }
  }

  /**
   * Global pointer end/up event listener.
   *
   * Глобальный слушатель события завершения перемещения указателя.
   */
  readonly onPointerEnd = (): void => {
    this.stop()
    this.emitsItem.emit('change')
  }

  /**
   * Starts drag global event listeners.
   *
   * Запускает глобальные слушатели событий перетаскивания.
   */
  start(): void {
    this.stop()

    window.addEventListener('mousemove', this.onPointerMove)
    window.addEventListener('mouseup', this.onPointerEnd)
    window.addEventListener('touchmove', this.onPointerMove, { passive: false })
    window.addEventListener('touchend', this.onPointerEnd)
    window.addEventListener('touchcancel', this.onPointerEnd)
  }

  /**
   * Stops drag global event listeners.
   *
   * Останавливает глобальные слушатели событий перетаскивания.
   */
  stop(): void {
    this.previousPointerPosition = undefined

    window.removeEventListener('mousemove', this.onPointerMove)
    window.removeEventListener('mouseup', this.onPointerEnd)
    window.removeEventListener('touchmove', this.onPointerMove)
    window.removeEventListener('touchend', this.onPointerEnd)
    window.removeEventListener('touchcancel', this.onPointerEnd)
  }
}
