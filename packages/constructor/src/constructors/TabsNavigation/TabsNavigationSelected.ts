import { ref } from 'vue'
import { isSelected, ListDataRef, type ListSelectedList } from '@dxtmisha/functional'

import type { TabsNavigationProps } from './props'

/**
 * Selection management class.
 *
 * Класс управления выделением.
 */
export class TabsNavigationSelected {
  readonly item = ref<ListSelectedList>()
  readonly actualItem = ref<ListSelectedList>()

  /**
   * Constructor
   * @param props input data / входные данные
   * @param data list data manager / менеджер данных списка
   */
  constructor(
    protected readonly props: TabsNavigationProps,
    protected readonly data: ListDataRef
  ) {
    this.item.value = props.selected
    this.actualItem.value = props.selected
  }

  /**
   * Checks if the value is selected.
   *
   * Проверяет, выбрано ли значение.
   * @param selected value to check/ значение для проверки
   */
  isSelected(selected?: string) {
    return isSelected(selected, this.actualItem.value)
  }

  /**
   * Sets the selected value.
   *
   * Устанавливает выбранное значение.
   * @param selected selected value/ выбранное значение
   */
  set(selected?: ListSelectedList): this {
    this.item.value = selected
    return this
  }

  /**
   * Sets the actual selected value.
   *
   * Устанавливает актуальное выбранное значение.
   * @param selected selected value/ выбранное значение
   */
  setActual(selected?: ListSelectedList): this {
    this.actualItem.value = selected
    return this
  }

  /**
   * Selects the previous item.
   *
   * Выбирает предыдущий элемент.
   */
  prev(): this {
    const selected = this.data.getSelectedPrev()

    if (selected) {
      this.set(selected)
    }

    return this
  }

  /**
   * Selects the next item.
   *
   * Выбирает следующий элемент.
   */
  next(): this {
    const selected = this.data.getSelectedNext()

    if (selected) {
      this.set(selected)
    }

    return this
  }

  /**
   * Selects the current item.
   *
   * Выбирает текущий элемент.
   */
  enter(): this {
    this.set(this.item.value)
    return this
  }
}
