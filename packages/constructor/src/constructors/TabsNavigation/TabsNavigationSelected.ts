import { ref } from 'vue'
import type { ListSelectedList } from '@dxtmisha/functional'

import type { TabsNavigationProps } from './props'

/**
 * Selection management class.
 *
 * Класс управления выделением.
 */
export class TabsNavigationSelected {
  readonly item = ref<ListSelectedList>()

  /**
   * Constructor
   * @param props input data / входные данные
   */
  constructor(
    protected readonly props: TabsNavigationProps
  ) {
    this.item.value = props.selected
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
}
