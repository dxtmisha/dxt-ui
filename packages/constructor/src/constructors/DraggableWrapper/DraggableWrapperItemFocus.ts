/**
 * Class for managing the active focused element during a drag-and-drop action /
 * Класс для управления активным сфокусированным элементом во время перетаскивания
 */
export class DraggableWrapperItemFocus {
  /** Target element / Элемент назначения */
  protected item: HTMLElement | undefined

  /**
   * Returns the focused element /
   * Возвращает сфокусированный элемент
   * @returns focused element or undefined / сфокусированный элемент или undefined
   */
  get(): HTMLElement | undefined {
    return this.item
  }

  /**
   * Sets the focused element /
   * Устанавливает сфокусированный элемент
   * @param item target element / целевой элемент
   * @returns this instance / текущий экземпляр класса
   */
  set(item: HTMLElement | undefined): this {
    this.item = item
    return this
  }
}
