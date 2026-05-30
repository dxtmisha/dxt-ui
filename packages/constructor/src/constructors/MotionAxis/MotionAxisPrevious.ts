import { onMounted, ref, watch } from 'vue'
import { MotionAxisStyles } from './MotionAxisStyles'

import type { MotionAxisSelectedValue } from './basicTypes'

/**
 * Class for managing and tracking the previous slide.
 * It coordinates with `MotionAxisStyles` to apply or clear CSS styles on previously active slide.
 *
 * Класс для управления и отслеживания предыдущего слайда.
 * Координирует работу с `MotionAxisStyles` для применения или очистки CSS-стилей ранее активного слайда.
 */
export class MotionAxisPrevious {
  /** Identifier of the previous slide / Идентификатор предыдущего слайда */
  readonly item = ref<MotionAxisSelectedValue>()

  /**
   * Constructor for initializing previous slide trackers.
   *
   * Конструктор для инициализации средств отслеживания предыдущего слайда.
   * @param styles style management object / объект управления стилями
   */
  constructor(
    protected readonly styles: MotionAxisStyles
  ) {
    onMounted(() => {
      watch(this.item, (value) => {
        if (value) {
          this.styles.add(value)
        } else {
          this.styles.remove()
        }
      })
    })
  }

  /**
   * Checks if the value matches the previous slide.
   *
   * Проверяет, совпадает ли значение с предыдущим слайдом.
   * @param value value to check / значение для проверки
   * @returns true if matches / true если совпадает
   */
  is(value: string): boolean {
    return this.item.value === value
  }

  /**
   * Returns the previous slide's identifier.
   *
   * Возвращает предыдущий слайд.
   * @returns previous slide ID / ID предыдущего слайда
   */
  get(): MotionAxisSelectedValue | undefined {
    return this.item.value
  }

  /**
   * Changing the display status.
   *
   * Изменение статуса отображения.
   * @param value values for change / значения для изменения
   * @returns this instance / текущий экземпляр класса
   */
  set(value?: string): this {
    this.item.value = value
    return this
  }
}
