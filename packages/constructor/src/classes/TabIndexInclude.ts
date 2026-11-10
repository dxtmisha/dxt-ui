import { getCurrentInstance, onUnmounted, type Ref } from 'vue'
import { EventItem, getRef, isDomRuntime, isElementVisible, isFunction, isTab } from '@dxtmisha/functional'

/**
 * Class for managing focus and tab index of elements.
 *
 * Класс для управления фокусом и табиндексом элементов.
 */
export class TabIndexInclude<E extends HTMLElement = HTMLElement> {
  /** Previously focused element / Ранее сфокусированный элемент */
  protected oldElement?: HTMLElement | Element | null

  /** Event item for focus events / Элемент события для событий фокуса */
  protected event?: EventItem<HTMLElement, KeyboardEvent>

  /**
   * Constructor.
   *
   * Конструктор.
   * @param element reference to the element / ссылка на элемент
   * @param active return focus to the previous element / возвращать фокус на предыдущий элемент
   * @param activeOpen is active when opening / активен при открытии
   * @param activeClose is active when closing / активен при закрытии
   */
  constructor(
    protected readonly element: Ref<E | undefined> | (() => E | undefined),
    protected readonly active: () => boolean = () => true,
    protected readonly activeOpen: () => boolean = () => true,
    protected readonly activeClose: () => boolean = () => true
  ) {
    if (getCurrentInstance()) {
      onUnmounted(() => {
        this.destroy()
      })
    }
  }

  /**
   * Set focus to the element.
   *
   * Устанавливает фокус на элемент.
   * @returns this instance / текущий экземпляр
   */
  goTo(): this {
    if (
      this.isElement()
      && this.active()
      && this.activeOpen()
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
   * @returns this instance / текущий экземпляр
   */
  reset(): this {
    if (
      this.active()
      && this.activeClose()
      && isDomRuntime()
    ) {
      requestAnimationFrame(() => {
        if (
          this.oldElement
          && ('focus' in this.oldElement)
          && (
            !document.activeElement?.closest('body')
            || document.activeElement === document.body
          )
        ) {
          (this.oldElement as HTMLElement).focus()
        }
      })

      this.stopEvent()
    }

    return this
  }

  /**
   * Toggle focus based on status.
   *
   * Переключает фокус в зависимости от статуса.
   * @param status focus status / статус фокуса
   * @returns this instance / текущий экземпляр
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
   * Find the first focusable element.
   *
   * Находит первый фокусируемый элемент.
   * @returns first focusable element / первый фокусируемый элемент
   */
  findFirstElement(): HTMLElement | undefined {
    const elements = this.getElement()
      ?.querySelectorAll<HTMLElement>('*')

    if (elements) {
      for (const element of elements) {
        if (
          'tabIndex' in element
          && element.tabIndex >= 0
          && isElementVisible(element)
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
   * @returns last focusable element / последний фокусируемый элемент
   */
  findLastElement(): HTMLElement | undefined {
    const elements = this.getElement()
      ?.querySelectorAll<HTMLElement>('*')

    if (elements) {
      for (let i = elements.length - 1; i >= 0; i--) {
        const element = elements[i]

        if (
          element
          && 'tabIndex' in element
          && element.tabIndex >= 0
          && isElementVisible(element)
        ) {
          return element
        }
      }
    }

    return undefined
  }

  /**
   * Destroy event listeners and clean up resources.
   *
   * Уничтожает слушатели событий и освобождает ресурсы.
   * @returns this instance / текущий экземпляр
   */
  destroy(): this {
    this.stopEvent()
    this.event = undefined
    return this
  }

  /**
   * Check if the element is defined.
   *
   * Проверяет, определен ли элемент.
   * @returns true if element is defined / true, если элемент определен
   */
  protected isElement(): this is { element: Ref<E> } {
    return this.getElement() !== undefined
  }

  /**
   * Check if the Shift key is pressed.
   *
   * Проверяет, нажата ли клавиша Shift.
   * @param event keyboard event / событие клавиатуры
   * @returns true if shiftKey is pressed / true, если shiftKey нажат
   */
  protected isShift(event: KeyboardEvent): boolean {
    return event.shiftKey
  }

  /**
   * Get the element.
   *
   * Получает элемент.
   * @returns element or undefined / элемент или undefined
   */
  protected getElement(): E | undefined {
    if (isFunction(this.element)) {
      return this.element()
    }

    return getRef(this.element)
  }

  /**
   * Set focus with temporary tab index modification.
   *
   * Устанавливает фокус с временным изменением табиндекса.
   * @returns this instance / текущий экземпляр
   */
  protected toFocus(): this {
    const firstElement = this.findFirstElement()

    if (firstElement) {
      firstElement.focus()
      return this
    }

    const element = this.getElement()

    if (element && isDomRuntime()) {
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
   * @param event keyboard event / событие клавиатуры
   */
  protected listenEvent = (event: KeyboardEvent): void => {
    if (!isTab(event)) {
      return
    }

    const focusActive = document.activeElement as HTMLElement

    if (focusActive) {
      if (focusActive === document.body) {
        this.findFirstElement()?.focus()
        event.preventDefault()
      } else if (this.isShift(event)) {
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

    this.event = new EventItem<HTMLElement, KeyboardEvent>(
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
