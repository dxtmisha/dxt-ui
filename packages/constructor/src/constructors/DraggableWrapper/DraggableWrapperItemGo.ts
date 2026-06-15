import { ref } from 'vue'

/**
 * Class for managing the target drop element during drag-and-drop.
 *
 * Класс для управления целевым элементом сброса во время перетаскивания.
 */
export class DraggableWrapperItemGo {
  /** Target drop element / Целевой элемент сброса */
  protected readonly item = ref<HTMLElement>()

  /**
   * Checks if a target drop element is set.
   *
   * Проверяет, установлен ли целевой элемент сброса.
   * @returns check result / результат проверки
   */
  is(): boolean {
    return Boolean(this.item.value)
  }

  /**
   * Checks if the given element is not the current target drop element.
   *
   * Проверяет, отличается ли переданный элемент от текущего целевого элемента сброса.
   * @param item element to compare / элемент для сравнения
   * @returns check result / результат проверки
   */
  isByItem(item: HTMLElement): boolean {
    return item !== this.get()
  }

  /**
   * Returns the target drop element.
   *
   * Возвращает целевой элемент сброса.
   * @returns target drop element or undefined / целевой элемент сброса или undefined
   */
  get(): HTMLElement | undefined {
    return this.item.value
  }

  /**
   * Sets the target drop element.
   *
   * Устанавливает целевой элемент сброса.
   * @param value target drop element or undefined / целевой элемент сброса или undefined
   * @returns this instance / текущий экземпляр класса
   */
  set(value: HTMLElement | undefined): this {
    this.item.value = value
    return this
  }

  /**
   * Resets the target drop element.
   *
   * Сбрасывает целевой элемент сброса.
   * @returns this instance / текущий экземпляр класса
   */
  reset(): this {
    return this.set(undefined)
  }
}
