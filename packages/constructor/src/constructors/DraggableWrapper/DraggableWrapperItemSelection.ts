import { ref } from 'vue'

/**
 * Class for managing selected items during multiselect drag action.
 *
 * Класс для управления выбранными элементами во время множественного перетаскивания.
 */
export class DraggableWrapperItemSelection {
  /** Selected items stack / Стек выбранных элементов */
  protected readonly item = ref<HTMLElement[]>()

  /**
   * Returns the array of selected items.
   *
   * Возвращает массив выбранных элементов.
   * @returns array of selected elements or undefined / массив выбранных элементов или undefined
   */
  get(): HTMLElement[] | undefined {
    return this.item.value
  }

  /**
   * Sets the array of selected items.
   *
   * Устанавливает массив выбранных элементов.
   * @param value array of selected elements or undefined / массив выбранных элементов или undefined
   * @returns this instance / текущий экземпляр класса
   */
  set(value: HTMLElement[] | undefined): this {
    this.item.value = value
    return this
  }

  /**
   * Resets the selected items stack.
   *
   * Сбрасывает стек выбранных элементов.
   * @returns this instance / текущий экземпляр класса
   */
  reset(): this {
    return this.set(undefined)
  }
}
