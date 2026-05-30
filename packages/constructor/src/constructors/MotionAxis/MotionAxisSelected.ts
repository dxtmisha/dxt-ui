import { ref } from 'vue'

import type { MotionAxisSelectedValue } from './basicTypes'
import type { MotionAxisProps } from './props'

/**
 * Class for managing and tracking the selected (active) slide identifier.
 * It encapsulates the reactive selected slide state and provides helper methods.
 *
 * Класс для управления и отслеживания идентификатора выбранного (активного) слайда.
 * Инкапсулирует реактивное состояние выбранного слайда и предоставляет вспомогательные методы.
 */
export class MotionAxisSelected {
  /** Reactive reference to currently selected slide ID / Реактивная ссылка на ID текущего выбранного слайда */
  readonly item = ref<MotionAxisSelectedValue>()

  /**
   * Constructor for initializing selection managers.
   *
   * Конструктор для инициализации менеджеров выбора.
   * @param props input data / входные данные
   */
  constructor(
    protected props: MotionAxisProps
  ) {
    this.item.value = props.selected
  }

  /**
   * Checks if the current active value corresponds to the provided slide.
   *
   * Проверяет, соответствует ли текущее активное значение переданному слайду.
   * @param selected selected slide / выбранный слайд
   * @returns true if slide matches selected / true если слайд совпадает с выбранным
   */
  is(selected?: string): boolean {
    return this.item.value === selected
  }

  /**
   * Changes the active slide identifier.
   *
   * Изменяет активный слайд.
   * @param selected selected slide / выбранный слайд
   * @returns this instance / текущий экземпляр класса
   */
  set(selected: MotionAxisProps['selected']): this {
    this.item.value = selected
    return this
  }
}
