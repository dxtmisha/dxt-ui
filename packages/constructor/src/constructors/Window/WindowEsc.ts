import { type Ref, watch } from 'vue'
import { EventItem, executeFunction, getRef, isDomRuntime, type RefOrNormal } from '@dxtmisha/functional'

/**
 * Class for handling Escape key press to close windows.
 *
 * Класс для обработки нажатия клавиши Escape для закрытия окон.
 */
export class WindowEsc {
  /** Event handler instance/ Экземпляр обработчика событий */
  protected event?: EventItem<HTMLElement, any>

  /**
   * Constructor
   * @param open Reference to the open state/ Ссылка на состояние открытия
   * @param on Optional callback function when Escape is pressed/ Необязательная функция обратного вызова при нажатии Escape
   * @param active Reference to the active state/ Ссылка на состояние активности
   */
  constructor(
    protected readonly open: Ref<boolean>,
    protected readonly on?: () => void,
    protected readonly active: RefOrNormal<boolean | (() => boolean)> = true
  ) {
    watch(
      open,
      (value) => {
        if (executeFunction(getRef(this.active))) {
          if (value) {
            this.start()
          } else {
            this.stop()
          }
        }
      }
    )
  }

  /**
   * Start listening for the Escape key press.
   *
   * Начать прослушивание нажатия клавиши Escape.
   */
  start(): this {
    this.make()
    this.event?.start()

    return this
  }

  /**
   * Stop listening for the Escape key press.
   *
   * Остановить прослушивание нажатия клавиши Escape.
   */
  stop(): this {
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
   * @param event Keyboard event/ Событие клавиатуры
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
   */
  protected readonly listener = (event: KeyboardEvent): void => {
    if (this.isEsc(event)) {
      event.preventDefault()
      event.stopPropagation()

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
    if (isDomRuntime() && !this.event) {
      this.event = new EventItem<HTMLElement, any>(
        document.body,
        'keydown',
        this.listener
      )
    }
  }
}
