import { getMouseClient } from '@dxtmisha/functional'

import type { DraggableWrapperClassesData } from './DraggableWrapperClassesData'
import type { DraggableWrapperClient } from './DraggableWrapperClient'
import type { DraggableWrapperDelay } from './DraggableWrapperDelay'
import type { DraggableWrapperItem } from './DraggableWrapperItem'
import type { DraggableWrapperPosition } from './DraggableWrapperPosition'
import type { DraggableWrapperSelection } from './DraggableWrapperSelection'
import type { DraggableWrapperSquare } from './DraggableWrapperSquare'

import type { DraggableWrapperProps } from './props'

/**
 * Class managing draggable event validation and filters.
 *
 * Класс, управляющий валидацией и фильтрами событий перетаскивания.
 */
export class DraggableWrapperEvents {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input data / входные данные
   * @param delay drag start delay helper class / вспомогательный класс задержки начала перетаскивания
   * @param classes classes helper instance / экземпляр помощника по классам
   * @param item item helper instance / экземпляр помощника по элементам
   * @param client client coordinates manager / менеджер клиентских координат
   * @param square square placeholder manager / менеджер элемента-заполнителя
   * @param selection multiselection helper class / вспомогательный класс множественного выбора
   * @param position coordinate position helper class / вспомогательный класс позиционирования
   */
  constructor(
    protected readonly props: DraggableWrapperProps,
    protected readonly delay: DraggableWrapperDelay,
    protected readonly classes: DraggableWrapperClassesData,
    protected readonly item: DraggableWrapperItem,
    protected readonly client: DraggableWrapperClient,
    protected readonly square: DraggableWrapperSquare,
    protected readonly selection: DraggableWrapperSelection,
    protected readonly position: DraggableWrapperPosition
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
      onTouchstart: this.onMousedown,
      onTransitionend: this.onTransitionend
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
   * Bound start event listener.
   *
   * Привязанный слушатель события запуска.
   * @param event drag event / событие перетаскивания
   */
  readonly onMousedown = (
    event: MouseEvent | TouchEvent
  ): void => {
    if (this.props.disabled) {
      return
    }

    const item = this.classes.findClick(event.target as HTMLElement)

    if (!item) {
      return
    }

    event.stopPropagation()

    if (event.cancelable) {
      event.preventDefault()
    }

    this.item.getFocus().set(item)

    this.delay.start(() => {
      const client = getMouseClient(event as MouseEvent & TouchEvent)

      this.client.prepare(item, client)
      this.item.getActive().prepare(item, client)
      this.square.prepare(item)
      this.selection.prepare()
    })

    this.addListeners()
  }

  /**
   * Bound transitionend event listener.
   *
   * Привязанный слушатель события завершения перехода.
   * @param event transition event / событие перехода
   */
  readonly onTransitionend = (event: TransitionEvent): void => {
    console.log('onTransitionend', event.propertyName)
    if (
      event.propertyName === 'transform'
      || event.propertyName === 'left'
    ) {
      this.position.reset()
    }
  }

  /**
   * Move event helper.
   *
   * Вспомогательный метод для перемещения.
   * @param event move event / событие перемещения
   */
  protected readonly handleMove = (event: MouseEvent | TouchEvent): void => {
    if (
      this.isEnd(event)
      || this.isNoButtons(event)
    ) {
      this.stop()
      return
    }

    if (
      this.item.getActive().is()
    ) {
      event.stopPropagation()

      const client = getMouseClient(event as MouseEvent & TouchEvent)

      this.client.move(client)
      this.position.update(client)
    } else {
      const item = this.classes.findClick(event.target as HTMLElement)

      if (
        !item
        || item !== this.item.getFocus().get()
      ) {
        this.stop()
      }
    }
  }

  /**
   * Stops the drag process and cleans up event listeners.
   *
   * Останавливает процесс перетаскивания и очищает слушатели событий.
   */
  protected stop(): void {
    if (!this.delay.stop()) {
      this.position.stop()
    }

    this.removeListeners()
  }

  /**
   * Binds window drag event listeners.
   *
   * Добавляет слушатели событий перетаскивания к окну.
   */
  protected addListeners(): void {
    window.addEventListener('mousemove', this.handleMove)
    window.addEventListener('mouseup', this.handleMove)
    window.addEventListener('touchmove', this.handleMove)
    window.addEventListener('touchend', this.handleMove)
    window.addEventListener('touchcancel', this.handleMove)
  }

  /**
   * Unbinds window drag event listeners.
   *
   * Удаляет слушатели событий перетаскивания окна.
   */
  protected removeListeners(): void {
    window.removeEventListener('mousemove', this.handleMove)
    window.removeEventListener('mouseup', this.handleMove)
    window.removeEventListener('touchmove', this.handleMove)
    window.removeEventListener('touchend', this.handleMove)
    window.removeEventListener('touchcancel', this.handleMove)
  }
}
