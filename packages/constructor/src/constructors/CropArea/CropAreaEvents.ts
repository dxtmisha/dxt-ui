// ai-none

import { eventStopPropagation, isDomRuntime } from '@dxtmisha/functional-basic'
import {
  type ConstrBind,
  DesignLifecycleAbstract,
  getKey
} from '@dxtmisha/functional'

import type { CropAreaCoordinates } from './CropAreaCoordinates'
import type { CropAreaElement } from './CropAreaElement'

import type { CropAreaDirection } from './basicTypes'
import type { CropAreaProps } from './props'

/** Set of DOM event types that terminate active drag interaction / Множество типов DOM-событий, завершающих активное перетаскивание */
const END_EVENTS = /* #__PURE__ */ new Set<string>([
  'mouseup',
  'contextmenu',
  'touchend',
  'touchcancel',
  'pointercancel',
  'blur'
])

/**
 * Class managing interaction drag events for CropArea.
 *
 * Класс, управляющий событиями перетаскивания и взаимодействия для CropArea.
 */
export class CropAreaEvents extends DesignLifecycleAbstract {
  /** Active global listeners state flag / Флаг активности глобальных слушателей */
  protected isListeners = false

  /**
   * Constructor.
   *
   * Конструктор.
   * @param props component properties / свойства компонента
   * @param coordinates getter returning coordinates manager / функция, возвращающая менеджер координат
   * @param element getter returning element manager / функция, возвращающая менеджер элемента
   */
  constructor(
    protected readonly props: Readonly<CropAreaProps>,
    protected readonly coordinates: () => CropAreaCoordinates,
    protected readonly element: () => CropAreaElement
  ) {
    super()
  }

  /**
   * Returns bound attributes for the element.
   *
   * Возвращает привязанные атрибуты для элемента.
   * @returns element binding properties / свойства привязки элемента
   */
  get binds(): ConstrBind {
    return {
      tabindex: this.tabindex,
      onMousedown: this.onMousedown,
      onTouchstart: this.onMousedown,
      onKeydown: this.onKeydown
    }
  }

  /**
   * Returns tabindex attribute for focusability.
   *
   * Возвращает атрибут tabindex для возможности фокусировки.
   * @returns tabindex value or undefined / значение tabindex или undefined
   */
  get tabindex(): number | string | undefined {
    if (this.props.disabled) {
      return undefined
    }

    return this.props.tabindex ?? 0
  }

  /**
   * Checks if the event indicates interaction finish.
   *
   * Проверяет, указывает ли событие на завершение взаимодействия.
   * @param event event object / объект события
   * @returns true if finished / true, если завершено
   */
  isEnd(event: Event): boolean {
    return END_EVENTS.has(event.type)
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
   * Keyboard arrow navigation event handler when focused.
   *
   * Обработчик события навигации стрелками клавиатуры при фокусе.
   * @param event keyboard event / событие клавиатуры
   */
  readonly onKeydown = (event: KeyboardEvent): void => {
    if (
      this.props.disabled
      || event.isComposing
    ) {
      return
    }

    const key = getKey(event)
    const stepMultiplier = event.altKey ? 10 : 1
    const baseStep = Number(this.props.step ?? 1)
    const step = (Number.isFinite(baseStep) && baseStep > 0 ? baseStep : 1) * stepMultiplier

    let deltaX = 0
    let deltaY = 0

    switch (key) {
      case 'ArrowUp':
        deltaY = -step
        break
      case 'ArrowDown':
        deltaY = step
        break
      case 'ArrowLeft':
        deltaX = -step
        break
      case 'ArrowRight':
        deltaX = step
        break
      default:
        return
    }

    event.preventDefault()

    const isOpposite = event.ctrlKey || event.metaKey

    if (event.shiftKey || isOpposite) {
      this.coordinates().resizeByStep(deltaX, deltaY, isOpposite)
    } else {
      this.coordinates().moveByStep(deltaX, deltaY)
    }
  }

  /**
   * Start interaction event handler.
   *
   * Обработчик события начала взаимодействия.
   * @param event mouse or touch event / событие мыши или касания
   */
  readonly onMousedown = (event: MouseEvent | TouchEvent): void => {
    if (this.props.disabled) {
      return
    }

    const target = event.target as HTMLElement | null
    const direction = target?.dataset?.value as CropAreaDirection | undefined

    if (
      direction
      && this.coordinates().start(event, direction)
    ) {
      eventStopPropagation(event)

      this.element().setBlockSelection(true)
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
      this.stop()

      return
    }

    event.stopPropagation()
    this.coordinates().move(event)
  }

  /**
   * Cleans up active drag state and listeners when the component unmounts.
   *
   * Очищает активное состояние перетаскивания и слушатели при размонтировании компонента.
   */
  override readonly onUnmounted = (): void => {
    if (this.isListeners) {
      this.stop()
    }
  }

  /**
   * Adds global event listeners.
   *
   * Добавляет глобальные слушатели событий.
   */
  protected addListeners(): void {
    if (isDomRuntime()) {
      this.isListeners = true

      window.addEventListener('mousemove', this.onMousemove)
      window.addEventListener('mouseup', this.onMousemove)
      window.addEventListener('contextmenu', this.onMousemove)
      window.addEventListener('pointercancel', this.onMousemove)
      window.addEventListener('blur', this.onCancel)
      window.addEventListener('touchmove', this.onMousemove, { passive: false })
      window.addEventListener('touchend', this.onMousemove, { passive: false })
      window.addEventListener('touchcancel', this.onMousemove, { passive: false })
    }
  }

  /**
   * Removes global event listeners.
   *
   * Удаляет глобальные слушатели событий.
   */
  protected removeListeners(): void {
    this.isListeners = false

    if (isDomRuntime()) {
      window.removeEventListener('mousemove', this.onMousemove)
      window.removeEventListener('mouseup', this.onMousemove)
      window.removeEventListener('contextmenu', this.onMousemove)
      window.removeEventListener('pointercancel', this.onMousemove)
      window.removeEventListener('blur', this.onCancel)
      window.removeEventListener('touchmove', this.onMousemove)
      window.removeEventListener('touchend', this.onMousemove)
      window.removeEventListener('touchcancel', this.onMousemove)
    }
  }

  /**
   * Cancels active drag interaction on window blur.
   *
   * Отменяет активное перетаскивание при потере фокуса окна.
   */
  protected readonly onCancel = (): void => {
    if (this.isListeners) {
      this.stop()
    }
  }

  /**
   * Stops active drag interaction, restores text selection, removes listeners, and resets coordinates.
   *
   * Останавливает активное перетаскивание, восстанавливает выделение текста, удаляет слушатели и сбрасывает координаты.
   */
  protected stop(): void {
    this.element().setBlockSelection(false)
    this.removeListeners()
    this.coordinates().reset()
  }
}
