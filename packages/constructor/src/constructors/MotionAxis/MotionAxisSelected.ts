import { ref } from 'vue'

import type { MotionAxisSelectedValue } from './basicTypes'
import type { MotionAxisProps } from './props'

/**
 * Class for managing the active element.
 *
 * Класс для управления активным элементом.
 */
export class MotionAxisSelected {
  readonly item = ref<MotionAxisSelectedValue>()

  /**
   * Constructor
   * @param props input data/ входные данные
   */
  constructor(
    protected props: MotionAxisProps
  ) {
    this.item.value = props.selected
  }

  /**
   * Checks if the current active value corresponds.
   *
   * Проверяет, соответствует ли текущее активное значение.
   * @param selected selected slide/ выбранный слайд
   */
  is(selected?: string): boolean {
    return this.item.value === selected
  }

  /**
   * Changes the active slide.
   *
   * Изменяет активный слайд.
   * @param selected selected slide/ выбранный слайд
   */
  set(selected: MotionAxisProps['selected']): this {
    this.item.value = selected
    return this
  }
}
