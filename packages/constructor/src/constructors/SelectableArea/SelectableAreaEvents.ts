// ai-none

import {
  type ConstrBind,
  DesignLifecycleAbstract,
  getKey,
  getMouseClient
} from '@dxtmisha/functional'
import { isDomRuntime, type ImageCoordinator } from '@dxtmisha/functional-basic'

import type { SelectableAreaClassesData } from './SelectableAreaClassesData'
import type { SelectableAreaItem } from './SelectableAreaItem'
import type { SelectableAreaSquare } from './SelectableAreaSquare'

import type { SelectableAreaProps } from './props'

/**
 * Class managing selectable area event bindings.
 *
 * Класс, управляющий привязками событий области выделения.
 */
export class SelectableAreaEvents extends DesignLifecycleAbstract {
  /** Active listener flag / Флаг активности слушателей */
  protected isListeners = false

  /** Pending animation frame identifier for move updates / Идентификатор ожидающего кадра анимации для обновлений перемещения */
  protected moveFrame?: number

  /** Latest pointer coordinates queued for the next animation frame / Последние координаты указателя в очереди на следующий кадр анимации */
  protected pendingClient?: ImageCoordinator

  /**
   * Constructor.
   *
   * Конструктор.
   * @param props properties / свойства
   * @param classes classes manager factory / фабрика менеджера классов
   * @param item item manager factory / фабрика менеджера элементов
   * @param square square placeholder manager factory / фабрика менеджера элемента-заполнителя
   */
  constructor(
    protected readonly props: Readonly<SelectableAreaProps>,
    protected readonly classes: () => SelectableAreaClassesData,
    protected readonly item: () => SelectableAreaItem,
    protected readonly square: () => SelectableAreaSquare
  ) {
    super()
  }

  /**
   * Cleans up active drag listeners, animation frames, and body selection lock on unmount.
   *
   * Очищает активные слушатели перетаскивания, кадры анимации и блокировку выделения body при размонтировании.
   */
  override readonly onUnmounted = (): void => {
    this.cancelMoveFrame()

    if (this.isListeners) {
      this.square().reset()
      this.classes().setBlockSelection(false)
      this.removeListeners()
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
      onKeydown: this.onKeydown,
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
   * General onClick handler.
   *
   * Общий обработчик onClick.
   * @param event mouse or touch event / событие мыши или касания
   */
  readonly onClick = (event: MouseEvent | TouchEvent): void => {
    if (this.props.disabled) {
      return
    }

    const target = event.target as HTMLElement
    const classesData = this.classes()
    const click = classesData.findClick(target)

    if (click) {
      const item = classesData.findItem(target)
      const value = item?.dataset?.value

      if (value !== undefined) {
        if (isDomRuntime()) {
          window.getSelection()?.removeAllRanges()
        }

        const mouseEvent = event as MouseEvent

        this.selectValue(
          value,
          Boolean(mouseEvent.shiftKey),
          Boolean(mouseEvent.ctrlKey || mouseEvent.metaKey)
        )
      }
    }
  }

  /**
   * Keyboard handler for accessible item selection (Enter/Space) and clearing selection (Escape).
   *
   * Обработчик клавиатуры для доступного выбора элемента (Enter/Space) и сброса выделения (Escape).
   * @param event keyboard event / событие клавиатуры
   */
  readonly onKeydown = (event: KeyboardEvent): void => {
    if (
      event.isComposing
      || this.props.disabled
    ) {
      return
    }

    const key = getKey(event)

    if (key === 'Escape') {
      if (this.item().get().length > 0) {
        event.preventDefault()
        this.item().reset()
      }

      return
    }

    if (
      key === 'Enter'
      || key === ' '
      || key === 'Space'
    ) {
      const target = event.target as HTMLElement
      const classesData = this.classes()
      const item = classesData.findItem(target)
      const value = item?.dataset?.value

      if (value !== undefined) {
        if (key === ' ' || key === 'Space') {
          event.preventDefault()
        }

        this.selectValue(
          value,
          event.shiftKey,
          event.ctrlKey || event.metaKey
        )
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
      this.isListeners
      || this.props.active
      || this.props.disabled
      || (event instanceof MouseEvent && event.button !== 0)
      || (event as MouseEvent).ctrlKey
      || (event as MouseEvent).shiftKey
    ) {
      return
    }

    const classesData = this.classes()

    if (!classesData.isMain(event.target as HTMLElement)) {
      return
    }

    const rect = classesData.getRect()

    if (!rect) {
      return
    }

    const selected = (event as MouseEvent).metaKey
      ? [...this.item().get()]
      : []

    const client = getMouseClient(event)

    this.square().start(
      {
        x: client.x - rect.left,
        y: client.y - rect.top
      },
      selected
    )

    this.addListeners()
    classesData.setBlockSelection(true)
  }

  /**
   * Mouse and touch move/end event handler.
   *
   * Обработчик событий перемещения и завершения для мыши и касания.
   * @param event mouse, touch, or cancellation event / событие мыши, касания или отмены
   */
  readonly onMousemove = (event: MouseEvent | TouchEvent | Event): void => {
    if (
      this.isEnd(event)
      || this.isNoButtons(event)
    ) {
      if (event.cancelable) {
        event.preventDefault()
      }

      event.stopPropagation()
      this.flushPendingMove()

      const square = this.square()

      square.selectionBySquare()
      square.end()

      this.classes().setBlockSelection(false)
      this.removeListeners()

      this.item().set(square.getSelectedCurrent())

      return
    }

    this.scheduleMove(getMouseClient(event as MouseEvent | TouchEvent))
  }

  /**
   * Binds window drag event listeners.
   *
   * Привязывает слушатели событий перетаскивания к окну.
   */
  protected addListeners(): void {
    if (!isDomRuntime()) {
      return
    }

    this.isListeners = true

    window.addEventListener('mousemove', this.onMousemove)
    window.addEventListener('mouseup', this.onMousemove)
    window.addEventListener('contextmenu', this.onMousemove)
    window.addEventListener('blur', this.onMousemove)
    window.addEventListener('touchmove', this.onMousemove, { passive: false })
    window.addEventListener('touchend', this.onMousemove, { passive: false })
    window.addEventListener('touchcancel', this.onMousemove, { passive: false })
  }

  /**
   * Unbinds window drag event listeners.
   *
   * Отвязывает слушатели событий перетаскивания от окна.
   */
  protected removeListeners(): void {
    this.isListeners = false

    if (!isDomRuntime()) {
      return
    }

    window.removeEventListener('mousemove', this.onMousemove)
    window.removeEventListener('mouseup', this.onMousemove)
    window.removeEventListener('contextmenu', this.onMousemove)
    window.removeEventListener('blur', this.onMousemove)
    window.removeEventListener('touchmove', this.onMousemove)
    window.removeEventListener('touchend', this.onMousemove)
    window.removeEventListener('touchcancel', this.onMousemove)
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
   * Flushes queued pointer coordinates to square and selection item helpers.
   *
   * Применяет отложенные координаты указателя к помощникам квадрата и выбора элементов.
   */
  protected readonly flushMove = (): void => {
    this.moveFrame = undefined
    const client = this.pendingClient
    this.pendingClient = undefined

    if (!client) {
      return
    }

    const rect = this.classes().getRect()

    if (!rect) {
      return
    }

    const square = this.square()

    square.move({
      x: client.x - rect.left,
      y: client.y - rect.top
    })
    this.item().set(square.getSelectedCurrent())
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
   * Applies selection logic for a target value using click, meta, or shift semantics.
   *
   * Применяет логику выбора для целевого значения с учетом клика, meta или shift.
   * @param value target item value / значение целевого элемента
   * @param shiftKey whether Shift modifier is pressed / зажат ли модификатор Shift
   * @param metaKey whether Ctrl or Meta modifier is pressed / зажат ли модификатор Ctrl или Meta
   */
  protected selectValue(
    value: string,
    shiftKey: boolean,
    metaKey: boolean
  ): void {
    if (shiftKey) {
      this.item().selectionByShift(value)
    } else if (metaKey || this.props.active) {
      this.item().selectionByMeta(value)
    } else {
      this.item().selectionByClick(value)
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
}
