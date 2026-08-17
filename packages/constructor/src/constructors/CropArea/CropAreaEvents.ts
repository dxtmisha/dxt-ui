import { onUnmounted } from 'vue'
import { eventStopPropagation } from '@dxtmisha/functional-basic'

import type { CropAreaCoordinates } from './CropAreaCoordinates'
import type { CropAreaElement } from './CropAreaElement'

import type { CropAreaDirection } from './basicTypes'
import type { CropAreaProps } from './props'

/**
 * Class managing interaction drag events for CropArea.
 *
 * Класс, управляющий событиями перетаскивания и взаимодействия для CropArea.
 */
export class CropAreaEvents {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param props component properties / свойства компонента
   * @param element element manager / менеджер элемента
   * @param coordinates coordinates manager / менеджер координат
   */
  constructor(
    protected readonly props: CropAreaProps,
    protected readonly element: CropAreaElement,
    protected readonly coordinates: CropAreaCoordinates
  ) {
    onUnmounted(() => {
      this.removeListeners()
    })
  }

  /**
   * Returns bound attributes for the element.
   *
   * Возвращает привязанные атрибуты для элемента.
   * @returns element binding properties / свойства привязки элемента
   */
  get binds() {
    return {
      onMousedown: this.onMousedown,
      onTouchstart: this.onMousedown
    }
  }

  /**
   * Checks if the event indicates interaction finish.
   *
   * Проверяет, указывает ли событие на завершение взаимодействия.
   * @param event event object / объект события
   * @returns true if finished / true, если завершено
   */
  isEnd(event: Event): boolean {
    return [
      'mouseup',
      'contextmenu',
      'touchend',
      'touchcancel'
    ].includes(event.type)
  }

  /**
   * Checks if no mouse buttons are pressed during mouse interaction.
   *
   * Проверяет, не нажата ли ни одна кнопка мыши во время взаимодействия.
   * @param event event object / объект события
   * @returns true if no buttons pressed / true, если кнопки не нажаты
   */
  isNoButtons(event: Event): boolean {
    return event instanceof MouseEvent && event.buttons === 0
  }

  /**
   * Start interaction event handler.
   *
   * Обработчик события начала взаимодействия.
   * @param event mouse or touch event / событие мыши или касания
   */
  readonly onMousedown = (event: MouseEvent | TouchEvent): void => {
    const target = event.target as HTMLElement | null
    const direction = target?.dataset?.value as CropAreaDirection | undefined

    if (
      direction
      && this.coordinates.start(event, direction)
    ) {
      eventStopPropagation(event)

      this.element.setBlockSelection(true)
      this.addListeners()
    }
  }

  /**
   * Movement interaction event handler.
   *
   * Обработчик события движения при взаимодействии.
   * @param event mouse or touch event / событие мыши или касания
   */
  readonly onMousemove = (event: MouseEvent | TouchEvent): void => {
    if (
      this.isEnd(event)
      || this.isNoButtons(event)
    ) {
      eventStopPropagation(event)

      this.element.setBlockSelection(false)
      this.removeListeners()
      this.coordinates.reset()

      return
    }

    event.stopPropagation()
    this.coordinates.move(event)
  }

  /**
   * Adds global event listeners.
   *
   * Добавляет глобальные слушатели событий.
   */
  protected addListeners(): void {
    window.addEventListener('mousemove', this.onMousemove)
    window.addEventListener('mouseup', this.onMousemove)
    window.addEventListener('contextmenu', this.onMousemove)
    window.addEventListener('touchmove', this.onMousemove, { passive: false })
    window.addEventListener('touchend', this.onMousemove, { passive: false })
    window.addEventListener('touchcancel', this.onMousemove, { passive: false })
  }

  /**
   * Removes global event listeners.
   *
   * Удаляет глобальные слушатели событий.
   */
  protected removeListeners(): void {
    window.removeEventListener('mousemove', this.onMousemove)
    window.removeEventListener('mouseup', this.onMousemove)
    window.removeEventListener('contextmenu', this.onMousemove)
    window.removeEventListener('touchmove', this.onMousemove)
    window.removeEventListener('touchend', this.onMousemove)
    window.removeEventListener('touchcancel', this.onMousemove)
  }
}
