import { ref, watch } from 'vue'
import { MotionAxisStyles } from './MotionAxisStyles'

import type { MotionAxisSelectedValue } from './basicTypes'

/**
 * Class for managing the previous slide.
 *
 * Класс для управления предыдущим слайдом.
 */
export class MotionAxisPrevious {
  /**
   * Identifier of the previous slide.
   *
   * Идентификатор предыдущего слайда.
   */
  readonly item = ref<MotionAxisSelectedValue>()

  /**
   * Constructor
   * @param styles style management object / объект управления стилями
   */
  constructor(
    protected readonly styles: MotionAxisStyles
  ) {
    watch(this.item, (value) => {
      if (value) {
        this.styles.add(value)
      } else {
        this.styles.remove()
      }
    })
  }

  /**
   * Changing the display status.
   *
   * Изменение статуса отображения.
   * @param value values for change / значения для изменения
   */
  set(value?: string): this {
    this.item.value = value
    return this
  }
}
