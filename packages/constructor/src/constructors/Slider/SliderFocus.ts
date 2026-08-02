import { ref } from 'vue'

import { SliderFocusType } from './basicTypes'

/**
 * Class for managing active slider handle focus state ('min' or 'max').
 *
 * Класс для управления состоянием фокуса активного ползунка слайдера ('min' или 'max').
 */
export class SliderFocus {
  /** Active handle focus reference ('min' or 'max') / Ссылка на фокус активного ползунка ('min' или 'max') */
  readonly value = ref<SliderFocusType>(SliderFocusType.max)

  /**
   * Checks if max handle is focused.
   *
   * Проверяет, сфокусирован ли максимальный ползунок.
   * @returns true if max is focused / true, если сфокусирован max
   */
  isMax(): boolean {
    return this.value.value === SliderFocusType.max
  }

  /**
   * Checks if min handle is focused.
   *
   * Проверяет, сфокусирован ли минимальный ползунок.
   * @returns true if min is focused / true, если сфокусирован min
   */
  isMin(): boolean {
    return this.value.value === SliderFocusType.min
  }

  /**
   * Returns current focus type.
   *
   * Возвращает текущий тип фокуса.
   * @returns focus type ('min' | 'max') / тип фокуса ('min' | 'max')
   */
  get(): SliderFocusType {
    return this.value.value
  }

  /**
   * Sets focus type.
   *
   * Устанавливает тип фокуса.
   * @param focusType new focus type / новый тип фокуса
   */
  set(focusType: SliderFocusType): void {
    this.value.value = focusType
  }
}
