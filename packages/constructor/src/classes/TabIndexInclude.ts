import { onUnmounted, type Ref } from 'vue'
import { EventItem, getRef, isDomRuntime, isFunction } from '@dxtmisha/functional'

/**
 * Class for managing focus and tab index of elements
 *
 * Класс для управления фокусом и табиндексом элементов
 */
export class TabIndexInclude<E extends HTMLElement = HTMLElement> {
  /** Previously focused element/ Ранее сфокусированный элемент */
  protected oldElement?: HTMLElement | Element | null

  /** Event item for focus events/ Элемент события для событий фокуса */
  protected event?: EventItem<HTMLElement, any>

  /**
   * Constructor
   * @param element - Reference to the element/ Ссылка на элемент
   * @param active - Return focus to the previous element/ Возвращать фокус на предыдущий элемент
   */
  constructor(
    protected readonly element: Ref<E | undefined> | (() => E | undefined),
    protected readonly active: () => boolean = () => true
  ) {
    onUnmounted(() => {
      this.stopEvent()
      this.event = undefined
    })
  }

  /**
   * Set focus to the element.
   *
   * Устанавливает фокус на элемент.
   */
  goTo(): this {
    if (
      this.isElement()
      && this.active()
      && isDomRuntime()
    ) {
      this.toFocus()
      this.startEvent()
    }

    return this
  }

  /**
   * Reset focus to the previously focused element.
   *
   * Сбрасывает фокус на ранее сфокусированный элемент.
   */
  reset(): this {
    if (this.active()) {
      if (
        this.oldElement
        && ('focus' in this.oldElement)
      ) {
        this.oldElement.focus()
      }

      this.stopEvent()
    }

    return this
  }

  /**
   * Toggle focus based on status.
   *
   * Переключает фокус в зависимости от статуса.
   * @param status Focus status/ Статус фокуса
   */
  toggle(status: boolean): this {
    if (status) {
      this.goTo()
    } else {
      this.reset()
    }

    return this
  }

  /**
   * Save the currently focused element.
   *
   * Сохраняет текущий сфокусированный элемент.
   */
  updateOldElement(): void {
    if (isDomRuntime()) {
      const shadowRoot = document.activeElement
        ?.shadowRoot
        ?.activeElement

      this.oldElement = shadowRoot ?? document.activeElement
    }
  }

  /**
   * Check if the element is defined.
   *
   * Проверяет, определен ли элемент.
   */
  protected isElement(): this is { element: Ref<E> } {
    return this.getElement() !== undefined
  }

  /**
   * Check if the event is a Tab key event.
   *
   * Проверяет, является ли событие событием клавиши Tab.
   * @param event Keyboard event/ Событие клавиатуры
   */
  protected isTab(event: KeyboardEvent): boolean {
    return event.key === 'Tab'
      || event.code === 'Tab'
      || event.keyCode === 9
  }

  /**
   * Check if the Shift key is pressed.
   *
   * Проверяет, нажата ли клавиша Shift.
   * @param event Keyboard event/ Событие клавиатуры
   */
  protected isShift(event: KeyboardEvent): boolean {
    return event.shiftKey
  }

  /**
   * Get the element.
   *
   * Получает элемент.
   */
  protected getElement(): E | undefined {
    if (isFunction(this.element)) {
      return this.element()
    }

    return getRef(this.element)
  }

  /**
   * Find the first focusable element.
   *
   * Находит первый фокусируемый элемент.
   */
  findFirstElement(): HTMLElement | undefined {
    const elements = this.getElement()
      ?.querySelectorAll<HTMLButtonElement>('*')

    if (elements) {
      for (const element of elements) {
        if (
          'tabIndex' in element
          && element.tabIndex >= 0
        ) {
          return element
        }
      }
    }

    return undefined
  }

  /**
   * Find the last focusable element.
   *
   * Находит последний фокусируемый элемент.
   */
  findLastElement(): HTMLElement | undefined {
    const elements = this.getElement()
      ?.querySelectorAll<HTMLButtonElement>('*')

    if (elements) {
      for (let i = elements.length - 1; i >= 0; i--) {
        const element = elements[i]

        if (
          element
          && 'tabIndex' in element
          && element.tabIndex >= 0
        ) {
          return element
        }
      }
    }

    return undefined
  }

  /**
   * Set focus with temporary tab index modification.
   *
   * Устанавливает фокус с временным изменением табиндекса.
   */
  protected toFocus(): this {
    const element = this.getElement()

    if (element) {
      element.setAttribute('tabindex', '-1')
      element.focus()

      requestAnimationFrame(() => {
        element.removeAttribute('tabindex')
      })
    }

    return this
  }

  /**
   * Event listener for keyboard events.
   *
   * Слушатель событий для событий клавиатуры.
   * @param event Keyboard event/ Событие клавиатуры
   */
  protected listenEvent = (event: KeyboardEvent): void => {
    if (!this.isTab(event)) {
      return
    }

    const focusActive = document.activeElement as HTMLElement

    if (focusActive) {
      if (this.isShift(event)) {
        if (focusActive === this.findFirstElement()) {
          this.findLastElement()?.focus()
          event.preventDefault()
        }
      } else if (focusActive === this.findLastElement()) {
        this.findFirstElement()?.focus()
        event.preventDefault()
      }
    }
  }

  /**
   * Start the event listener.
   *
   * Запускает слушатель событий.
   */
  protected startEvent(): void {
    if (this.event) {
      this.event.start()
      return
    }

    this.event = new EventItem<HTMLElement, any>(
      document.body,
      'keydown',
      this.listenEvent
    )
      .start()
  }

  /**
   * Stop the event listener.
   *
   * Останавливает слушатель событий.
   */
  protected stopEvent(): void {
    if (this.event) {
      this.event.stop()
    }
  }
}
