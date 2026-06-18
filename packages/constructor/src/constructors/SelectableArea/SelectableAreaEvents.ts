import type { ImageCoordinator } from '@dxtmisha/functional-basic'

import type { SelectableAreaClassesData } from './SelectableAreaClassesData'
import type { SelectableAreaItem } from './SelectableAreaItem'
import type { SelectableAreaSquare } from './SelectableAreaSquare'

import type { SelectableAreaProps } from './props'

/**
 * Class managing selectable area event bindings.
 *
 * | * Класс, управляющий привязками событий области выделения.
 */
export class SelectableAreaEvents {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param props properties / свойства
   * @param classes classes manager / менеджер классов
   * @param item item manager / менеджер элементов
   * @param square square placeholder manager / менеджер элемента-заполнителя
   * @param emit event emit helper / вспомогательный класс вызова событий
   */
  constructor(
    protected readonly props: SelectableAreaProps,
    protected readonly classes: SelectableAreaClassesData,
    protected readonly item: SelectableAreaItem,
    protected readonly square: SelectableAreaSquare
  ) {
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
   * Checks if the event is a drag end event.
   *
   * Проверяет, является ли событие событием окончания перетаскивания.
   * @param event event object / объект события
   * @returns check result / результат проверки
   */
  isEnd(event: Event): boolean {
    return ['mouseup', 'contextmenu', 'touchend', 'touchcancel'].includes(event.type)
  }

  /**
   * Checks if no mouse buttons are pressed during a mouse event.
   *
   * Проверяет, не нажата ли ни одна кнопка мыши во время события мыши.
   * @param event event object / объект события
   * @returns check result / результат проверки
   */
  isNoButtons(event: Event): boolean {
    return event instanceof MouseEvent && event.buttons === 0
  }

  /**
   * General onClick handler.
   *
   * Общий обработчик onClick.
   * @param event mouse or touch event / событие мыши или касания
   */
  readonly onClick = (event: MouseEvent | TouchEvent): void => {
    if (this.props.disabled) return

    const target = event.target as HTMLElement
    const click = this.classes.findClick(target)

    if (click) {
      const item = this.classes.findItem(target)
      const value = item?.dataset?.value

      if (value !== undefined) {
        window.getSelection()?.removeAllRanges()

        const mouseEvent = event as MouseEvent
        const shiftKey = mouseEvent.shiftKey
        const metaKey = mouseEvent.ctrlKey || mouseEvent.metaKey

        if (shiftKey) {
          this.item.selectionByShift(value)
        } else if (metaKey || this.props.active) {
          this.item.selectionByMeta(value)
        } else {
          this.item.selectionByClick(value)
        }
      }
    }
  }

  /**
   * Bound start event listener.
   *
   * Привязанный слушатель события запуска.
   * @param event drag event / событие перетаскивания
   */
  readonly onMousedown = (
    event: MouseEvent | TouchEvent
  ): void => {
    if (
      !this.props.active
      && !this.props.disabled
      && !(event as MouseEvent).ctrlKey
      && !(event as MouseEvent).shiftKey
      && event.target === this.classes.getElement()
    ) {
      const rect = this.classes.getRect()

      if (!rect) {
        return
      }

      const selected = (event as MouseEvent).metaKey
        ? [...this.item.get()]
        : []

      const client = this.getCoordinates(event)

      this.square.start(
        {
          x: client.x - rect.left,
          y: client.y - rect.top
        },
        selected
      )

      this.addListeners()
      this.classes.setBlockSelection(true)
    }
  }

  /**
   * Mouse move event handler.
   *
   * Обработчик события перемещения мыши.
   * @param event mouse event / событие мыши
   */
  readonly onMousemove = (event: MouseEvent | TouchEvent): void => {
    if (
      this.isEnd(event)
      || this.isNoButtons(event)
    ) {
      event.preventDefault()
      event.stopPropagation()

      this.square.selectionBySquare()
      this.square.end()

      this.classes.setBlockSelection(false)
      this.removeListeners()

      this.item.set(this.square.getSelectedCurrent())

      return
    }

    const rect = this.classes.getRect()
    const client = this.getCoordinates(event)

    if (!rect) {
      return
    }

    this.square.move({
      x: client.x - rect.left,
      y: client.y - rect.top
    })
    this.item.set(this.square.getSelectedCurrent())
  }

  /**
   * Retrieves coordinate values from mouse or touch event.
   *
   * Получает значения координат из события мыши или касания.
   * @param event event object / объект события
   * @returns coordinator object / объект координат
   */
  protected getCoordinates(event: MouseEvent | TouchEvent): ImageCoordinator {
    if (event instanceof MouseEvent) {
      return {
        x: event.clientX,
        y: event.clientY
      }
    }

    if (
      event instanceof TouchEvent
      && event.touches.length > 0
    ) {
      return {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY
      }
    }

    return { x: 0, y: 0 }
  }

  /**
   * Binds window drag event listeners.
   */
  protected addListeners(): void {
    window.addEventListener('mousemove', this.onMousemove)
    window.addEventListener('mouseup', this.onMousemove)
    window.addEventListener('touchmove', this.onMousemove, { passive: false })
    window.addEventListener('touchend', this.onMousemove, { passive: false })
    window.addEventListener('touchcancel', this.onMousemove, { passive: false })
  }

  /**
   * Unbinds window drag event listeners.
   */
  protected removeListeners(): void {
    window.removeEventListener('mousemove', this.onMousemove)
    window.removeEventListener('mouseup', this.onMousemove)
    window.removeEventListener('touchmove', this.onMousemove)
    window.removeEventListener('touchend', this.onMousemove)
    window.removeEventListener('touchcancel', this.onMousemove)
  }
}
