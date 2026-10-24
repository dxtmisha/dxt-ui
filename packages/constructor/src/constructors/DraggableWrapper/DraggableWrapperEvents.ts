// ai-none

import {
  DesignLifecycleAbstract,
  getMouseClient
} from '@dxtmisha/functional'

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
export class DraggableWrapperEvents extends DesignLifecycleAbstract {
  /** Active listener flag / Флаг активности слушателей */
  protected isListeners = false

  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input data / входные данные
   * @param classes classes helper instance factory / фабрика экземпляра помощника по классам
   * @param client client coordinates manager factory / фабрика менеджера клиентских координат
   * @param delay drag start delay helper factory / фабрика вспомогательного класса задержки начала перетаскивания
   * @param item item helper instance factory / фабрика экземпляра помощника по элементам
   * @param position coordinate position helper factory / фабрика вспомогательного класса позиционирования
   * @param selection multiselection helper factory / фабрика вспомогательного класса множественного выбора
   * @param square square placeholder manager factory / фабрика менеджера элемента-заполнителя
   */
  constructor(
    protected readonly props: DraggableWrapperProps,
    protected readonly classes: () => DraggableWrapperClassesData,
    protected readonly client: () => DraggableWrapperClient,
    protected readonly delay: () => DraggableWrapperDelay,
    protected readonly item: () => DraggableWrapperItem,
    protected readonly position: () => DraggableWrapperPosition,
    protected readonly selection: () => DraggableWrapperSelection,
    protected readonly square: () => DraggableWrapperSquare
  ) {
    super()
  }

  /** Callback after component unmounting / Обработчик после демонтирования компонента */
  override readonly onUnmounted = (): void => {
    if (this.isListeners) {
      this.stop()
    }
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

    const item = this.classes().findClick(event.target as HTMLElement)

    if (!item) {
      return
    }

    event.stopPropagation()

    if (event.cancelable) {
      event.preventDefault()
    }

    this.item().getFocus().set(item)

    this.delay().start(() => {
      const client = getMouseClient(event)

      this.client().prepare(item, client)
      this.item().getActive().prepare(item, client)
      this.square().prepare(item)
      this.selection().prepare()
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
    if (
      event.propertyName === 'transform'
      || event.propertyName === 'left'
    ) {
      this.position().reset()
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
      this.item().getActive().is()
    ) {
      event.stopPropagation()

      const client = getMouseClient(event)

      this.client().move(client)
      this.position().update(client)
    } else {
      const item = this.classes().findClick(event.target as HTMLElement)

      if (
        !item
        || item !== this.item().getFocus().get()
      ) {
        this.stop()
      }
    }
  }

  /**
   * Binds window drag event listeners.
   *
   * Добавляет слушатели событий перетаскивания к окну.
   */
  protected addListeners(): void {
    this.isListeners = true

    window.addEventListener('mousemove', this.handleMove)
    window.addEventListener('mouseup', this.handleMove)
    window.addEventListener('touchmove', this.handleMove, { passive: false })
    window.addEventListener('touchend', this.handleMove, { passive: false })
    window.addEventListener('touchcancel', this.handleMove, { passive: false })
  }

  /**
   * Unbinds window drag event listeners.
   *
   * Удаляет слушатели событий перетаскивания окна.
   */
  protected removeListeners(): void {
    this.isListeners = false

    window.removeEventListener('mousemove', this.handleMove)
    window.removeEventListener('mouseup', this.handleMove)
    window.removeEventListener('touchmove', this.handleMove)
    window.removeEventListener('touchend', this.handleMove)
    window.removeEventListener('touchcancel', this.handleMove)
  }

  /**
   * Stops the drag process and cleans up event listeners.
   *
   * Останавливает процесс перетаскивания и очищает слушатели событий.
   */
  protected stop(): void {
    if (!this.delay().stop()) {
      this.position().stop()
      this.selection().stop()
    }

    this.removeListeners()
  }
}
