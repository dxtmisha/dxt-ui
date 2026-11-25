// ai-none

import {
  type ConstrBind,
  DesignLifecycleAbstract,
  getMouseClient
} from '@dxtmisha/functional'
import type { ImageCoordinator } from '@dxtmisha/functional-basic'

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

  /** Active drag or return transition flag / Флаг активного перетаскивания или перехода возврата */
  protected hasActiveDrag = false

  /** Pending animation frame identifier for move updates / Идентификатор ожидающего кадра анимации для обновлений перемещения */
  protected moveFrame?: number

  /** Latest pointer coordinates queued for the next animation frame / Последние координаты указателя в очереди на следующий кадр анимации */
  protected pendingClient?: ImageCoordinator

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
    protected readonly props: Readonly<DraggableWrapperProps>,
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
    this.cancelMoveFrame()

    if (
      this.isListeners
      || this.hasActiveDrag
    ) {
      this.delay()?.stop()
      this.selection()?.stop()

      const position = this.position()

      if (position) {
        position.abort()
      } else {
        const activeElement = this.item()?.getActive()?.get()

        if (activeElement) {
          const list = this.classes().getList()

          activeElement.classList.remove(
            list.active,
            list.selection,
            list.selectionMore,
            list.return
          )
        }

        this.square()?.reset()
        this.item()?.reset()
        this.client()?.reset()
      }

      this.removeListeners()
      this.hasActiveDrag = false
    }
  }

  /**
   * Returns bound attributes for the element.
   *
   * Возвращает привязанные атрибуты для элемента.
   * @returns element binding properties / свойства привязки элемента
   */
  get binds(): ConstrBind {
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
    return ['mouseup', 'contextmenu', 'blur', 'touchend', 'touchcancel'].includes(event.type)
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
    if (
      this.props.disabled
      || (event instanceof MouseEvent && event.button !== 0)
    ) {
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

    this.hasActiveDrag = true
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

      if (!this.item().getActive().is()) {
        this.hasActiveDrag = false
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
    window.addEventListener('contextmenu', this.handleMove)
    window.addEventListener('blur', this.handleMove)
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
    window.removeEventListener('contextmenu', this.handleMove)
    window.removeEventListener('blur', this.handleMove)
    window.removeEventListener('touchmove', this.handleMove)
    window.removeEventListener('touchend', this.handleMove)
    window.removeEventListener('touchcancel', this.handleMove)
  }

  /**
   * Cancels any pending animation frame without applying queued coordinates.
   *
   * Отменяет ожидающий кадр анимации без применения накопленных координат.
   */
  protected cancelMoveFrame(): void {
    if (this.moveFrame !== undefined) {
      cancelAnimationFrame(this.moveFrame)
      this.moveFrame = undefined
    }

    this.pendingClient = undefined
  }

  /**
   * Flushes queued pointer coordinates to client and position helpers.
   *
   * Применяет отложенные координаты указателя к помощникам клиента и позиционирования.
   */
  protected readonly flushMove = (): void => {
    this.moveFrame = undefined
    const client = this.pendingClient
    this.pendingClient = undefined

    if (
      client
      && this.item().getActive().is()
    ) {
      this.client().move(client)
      this.position().update(client)
    }
  }

  /**
   * Cancels pending animation frame and synchronously applies the last queued coordinates.
   *
   * Отменяет ожидающий кадр анимации и синхронно применяет последние накопленные координаты.
   */
  protected flushPendingMove(): void {
    if (this.moveFrame !== undefined) {
      cancelAnimationFrame(this.moveFrame)
      this.flushMove()
    }
  }

  /**
   * Move event helper.
   *
   * Вспомогательный метод для перемещения.
   * @param event move event / событие перемещения
   */
  protected readonly handleMove = (event: MouseEvent | TouchEvent | Event): void => {
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
      this.scheduleMove(getMouseClient(event as MouseEvent | TouchEvent))
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
   * Queues pointer coordinates update for the next animation frame.
   *
   * Ставит обновление координат указателя в очередь на следующий кадр анимации.
   * @param client pointer coordinates / координаты указателя
   */
  protected scheduleMove(client: ImageCoordinator): void {
    this.pendingClient = client

    if (this.moveFrame === undefined) {
      if (typeof requestAnimationFrame === 'function') {
        this.moveFrame = requestAnimationFrame(this.flushMove)
      } else {
        this.flushMove()
      }
    }
  }

  /**
   * Stops the drag process and cleans up event listeners.
   *
   * Останавливает процесс перетаскивания и очищает слушатели событий.
   */
  protected stop(): void {
    this.flushPendingMove()

    if (this.delay().stop()) {
      this.hasActiveDrag = false
    } else {
      this.position().stop()
      this.selection().stop()

      if (!this.item().getActive().is()) {
        this.hasActiveDrag = false
      }
    }

    this.removeListeners()
  }
}
