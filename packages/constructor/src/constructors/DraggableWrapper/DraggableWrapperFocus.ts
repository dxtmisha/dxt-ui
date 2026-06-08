/**
 * Helper class for managing the focused element during dragging /
 * Вспомогательный класс для управления элементом в фокусе при перетаскивании
 */
export class DraggableWrapperFocus {
  protected item: HTMLElement | undefined

  /**
   * Returns the focused element /
   * Возвращает элемент в фокусе
   */
  get(): HTMLElement | undefined {
    return this.item
  }

  /**
   * Sets the focused element /
   * Устанавливает элемент в фокусе
   * @param item element / элемент
   */
  set(item: HTMLElement | undefined): this {
    this.item = item
    return this
  }
}
