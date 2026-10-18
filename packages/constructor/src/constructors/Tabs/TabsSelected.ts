// ai-none

import { ref, watch } from 'vue'
import { getFirst, isSelected, type ListSelectedList } from '@dxtmisha/functional'

import type { TabsProps } from './props'

/**
 * Class for managing the selected element.
 *
 * Класс для управления выбранным элементом.
 */
export class TabsSelected {
  readonly item = ref<ListSelectedList>()

  /**
   * Constructor
   * @param props input data/ входные данные
   */
  constructor(
    protected readonly props: TabsProps
  ) {
    this.item.value = props.selected || getFirst(props.tabs)?.value

    watch(() => this.props.selected, this.update)
  }

  /**
   * Checks if the value is selected.
   *
   * Проверяет, выбрано ли значение.
   * @param selected value to check/ значение для проверки
   */
  is(selected?: string | number): boolean {
    return isSelected(selected, this.item.value)
  }

  /**
   * Sets the selected value.
   *
   * Устанавливает выбранное значение.
   * @param selected selected value/ выбранное значение
   */
  readonly set = (selected?: ListSelectedList) => {
    this.item.value = selected
  }

  /**
   * Updates the selected value.
   *
   * Обновляет выбранное значение.
   */
  protected update = () => {
    if (!this.is(this.props.selected)) {
      this.set(this.props.selected)
    }
  }
}
