// ai-none

import { type Ref, unref, type WatchStopHandle, watch } from 'vue'
import {
  DesignLifecycleAbstract,
  EventItem,
  executeFunction,
  type RefOrNormal
} from '@dxtmisha/functional'

import type { WindowProps } from './props'

const activeEscStack: WindowEsc[] = []

/**
 * Class for handling Escape key press to close windows.
 *
 * Класс для обработки нажатия клавиши Escape для закрытия окон.
 */
export class WindowEsc extends DesignLifecycleAbstract {
  /** Event handler instance / Экземпляр обработчика событий */
  protected event?: EventItem<HTMLElement, KeyboardEvent>
  protected watchStop?: WatchStopHandle

  /**
   * Checks whether escape key handling should be active.
   *
   * Проверяет, должна ли быть активна обработка клавиши Escape.
   * @param props component properties / свойства компонента
   * @returns true if close on escape is enabled / true, если закрытие по escape включено
   */
  static is(props?: WindowProps): boolean {
    return !props?.persistent && (props?.closeOnEsc ?? true)
  }

  /**
   * Constructor.
   *
   * Конструктор.
   * @param open Reference to the open state / Ссылка на состояние открытия
   * @param on Optional callback function when Escape is pressed / Необязательная функция обратного вызова при нажатии Escape
   * @param active Reference to the active state / Ссылка на состояние активности
   */
  constructor(
    protected readonly open: Ref<boolean>,
    protected readonly on?: () => void,
    protected readonly active: RefOrNormal<boolean | (() => boolean)> = true
  ) {
    super()
  }

  /**
   * Setup lifecycle listeners and watchers on mount.
   *
   * Настройка слушателей жизненного цикла и наблюдателей при монтировании.
   */
  override readonly onMounted = (): void => {
    this.watchStop?.()
    this.watchStop = watch(
      this.open,
      (value) => {
        if (executeFunction(unref(this.active))) {
          if (value) {
            this.start()
          } else {
            this.stop()
          }
        }
      },
      { immediate: true }
    )
  }

  /**
   * Cleanup lifecycle listeners on unmount.
   *
   * Очистка слушателей жизненного цикла при размонтировании.
   */
  override readonly onUnmounted = (): void => {
    this.watchStop?.()
    this.watchStop = undefined
    this.stop()
  }

  /**
   * Start listening for the Escape key press.
   *
   * Начать прослушивание нажатия клавиши Escape.
   * @returns this instance / текущий экземпляр
   */
  start(): this {
    this.make()
    this.event?.start()

    if (!activeEscStack.includes(this)) {
      activeEscStack.push(this)
    }

    return this
  }

  /**
   * Stop listening for the Escape key press.
   *
   * Остановить прослушивание нажатия клавиши Escape.
   * @returns this instance / текущий экземпляр
   */
  stop(): this {
    const index = activeEscStack.indexOf(this)
    if (index !== -1) {
      activeEscStack.splice(index, 1)
    }

    if (this.event) {
      this.event.stop()
      this.event = undefined
    }

    return this
  }

  /**
   * Check if the pressed key is Escape.
   *
   * Проверяет, является ли нажатая клавиша Escape.
   * @param event Keyboard event / Событие клавиатуры
   * @returns true if Escape key was pressed / true, если нажата клавиша Escape
   */
  protected isEsc(event: KeyboardEvent): boolean {
    return (
      event.key === 'Escape'
      || event.key === 'Esc'
      || event.code === 'Escape'
      || event.code === 'Esc'
      || event.keyCode === 27
    )
  }

  /**
   * Event listener for keyboard events.
   *
   * Обработчик событий клавиатуры.
   * @param event Keyboard event / Событие клавиатуры
   */
  protected readonly listener = (event: KeyboardEvent): void => {
    if (
      event.isComposing
      || activeEscStack[activeEscStack.length - 1] !== this
    ) {
      return
    }

    if (this.isEsc(event)) {
      event.preventDefault()
      event.stopPropagation()
      event.stopImmediatePropagation()

      if (this.on) {
        this.on()
      } else {
        this.open.value = false
      }

      this.stop()
    }
  }

  /**
   * Create and initialize the event handler.
   *
   * Создать и инициализировать обработчик событий.
   */
  protected make(): void {
    if (!this.event) {
      this.event = new EventItem<HTMLElement, KeyboardEvent>(
        document.body,
        'keydown',
        this.listener
      )
    }
  }
}
