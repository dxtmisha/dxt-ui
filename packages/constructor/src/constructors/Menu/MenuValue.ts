import { computed, ref, type ToRefs, watch } from 'vue'
import { type ConstrEmit, isObject, type ListSelectedList } from '@dxtmisha/functional'

import { ModelInclude } from '../../classes/ModelInclude'

import type { MenuEmits } from './types'
import type { MenuProps } from './props'

/**
 * Value manager for Menu
 *
 * Менеджер значения для Menu
 */
export class MenuValue {
  readonly value = ref<ListSelectedList>()

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly props: MenuProps,
    protected readonly refs: ToRefs<MenuProps>,
    protected readonly emits?: ConstrEmit<MenuEmits>
  ) {
    if (this.props.isSelectedByValue) {
      new ModelInclude('selected', this.emits, this.value)

      if (refs.selected) {
        watch(
          refs.selected,
          (value) => {
            this.value.value = value
          },
          { immediate: true }
        )
      }
    }
  }

  /**
   * Computed selected value
   *
   * Вычисляемое выбранное значение
   */
  readonly selected = computed(() => {
    if (this.props.isSelectedByValue) {
      return this.value.value
    }

    return this.props.selected
  })

  /**
   * Sets a new selected value if it has changed and returns the instance for chaining.
   *
   * Устанавливает новое выбранное значение, если оно изменилось, и возвращает экземпляр для чейнинга.
   * @param value selected list value/ выбранное значение списка
   * @returns this
   */
  setValue(value: ListSelectedList): this {
    if (
      this.props.isSelectedByValue
      && !isObject(value)
      && this.value.value !== value
    ) {
      this.value.value = value
    }
    return this
  }
}
