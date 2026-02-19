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
   * Checks if the value matches the previous slide.
   *
   * Проверяет, совпадает ли значение с предыдущим слайдом.
   * @param value value to check / значение для проверки
   */
  is(value: string): boolean {
    return this.item.value === value
  }

  /**
   * Returns the previous slide.
   *
   * Возвращает предыдущий слайд.
   */
  get(): MotionAxisSelectedValue | undefined {
    return this.item.value
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
