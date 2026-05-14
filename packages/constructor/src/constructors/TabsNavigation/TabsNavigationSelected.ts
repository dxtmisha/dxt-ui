import { ref, watch, type ToRefs } from 'vue'
import { isArray, isObject, isSelected, type ListSelectedList } from '@dxtmisha/functional'

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
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   */
  constructor(
    protected readonly props: TabsNavigationProps,
    protected readonly refs: ToRefs<TabsNavigationProps>
  ) {
    let selected = props.selected

    if (props.selected) {
      selected = props.selected
    } else if (props.list) {
      if (isArray(props.list)) {
        selected = props.list[0]?.value
      } else if (isObject(props.list)) {
        selected = Object.values(props.list)[0]?.value
      }
    }

    this.item.value = selected
    this.actualItem.value = selected

    watch(
      [refs.selected],
      () => this.set(props.selected)
    )
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
}
