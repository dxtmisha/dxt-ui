import type { Ref } from 'vue'
import { getRef, isDomRuntime, isFunction } from '@dxtmisha/functional'

/**
 * Class for managing focus and tab index of elements
 *
 * Класс для управления фокусом и табиндексом элементов
 */
export class TabIndexInclude<E extends HTMLElement = HTMLElement> {
  /** Previously focused element/ Ранее сфокусированный элемент */
  protected oldElement?: HTMLElement | Element | null

  /**
   * Сonstructor
   * @param element - Reference to the element/ Ссылка на элемент
   */
  constructor(
    protected readonly element: Ref<E | undefined> | (() => E | undefined)
  ) {
  }

  /**
   * Set focus to the element.
   *
   * Устанавливает фокус на элемент.
   */
  goTo(): this {
    this.updateOldElement()
    this.toFocus()

    return this
  }

  /**
   * Reset focus to the previously focused element.
   *
   * Сбрасывает фокус на ранее сфокусированный элемент.
   */
  reset(): this {
    if (
      this.oldElement
      && ('focus' in this.oldElement)
    ) {
      this.oldElement.focus()
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
   * Save the currently focused element.
   *
   * Сохраняет текущий сфокусированный элемент.
   */
  protected updateOldElement(): void {
    if (isDomRuntime()) {
      this.oldElement = document.activeElement
    }
  }
}
