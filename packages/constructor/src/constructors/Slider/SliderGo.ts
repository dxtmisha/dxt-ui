import type { EnabledInclude } from '../../classes/EnabledInclude'

import type { SliderElement } from './SliderElement'
import type { SliderEmit } from './SliderEmit'
import type { SliderFocus } from './SliderFocus'
import type { SliderMarks } from './SliderMarks'
import type { SliderValue } from './SliderValue'

/**
 * Class for handling slider value navigation, stepping, and coordinate-based updates.
 *
 * Класс для обработки навигации по значениям слайдера, шагам и обновлениям по координатам.
 */
export class SliderGo {
  /**
   * Constructor
   * @param emitsItem event emission manager / менеджер эмита событий
   * @param enabled enabled state manager / менеджер активности
   * @param focus handle focus manager / менеджер фокуса ползунков
   * @param marks marks calculation manager / менеджер вычисления меток
   * @param sliderElement element layout manager / менеджер верстки и координат
   * @param value slider value bounds manager / менеджер значений слайдера
   */
  constructor(
    protected readonly emitsItem: SliderEmit,
    protected readonly enabled: EnabledInclude,
    protected readonly focus: SliderFocus,
    protected readonly marks: SliderMarks,
    protected readonly sliderElement: SliderElement,
    protected readonly value: SliderValue
  ) { }

  /**
   * Decreases active thumb value by step or neighbor mark.
   *
   * Уменьшает значение активного ползунка на шаг или соседнюю метку.
   */
  decrease(): void {
    this.go(false)
  }

  /**
   * Increases active thumb value by step or neighbor mark.
   *
   * Увеличивает значение активного ползунка на шаг или соседнюю метку.
   */
  increase(): void {
    this.go(true)
  }

  /**
   * Position update from pointer coordinate.
   *
   * Обновление позиции по координате указателя.
   * @param coordinate pointer coordinate / координата указателя
   */
  updateFromCoordinate(coordinate: number): void {
    const sliderRect = this.sliderElement.rectangle

    if (sliderRect) {
      const percentage = this.sliderElement.getMovePercent(coordinate, sliderRect)
      const markValue = this.marks.toMark(percentage)

      this.value.set(markValue, this.focus.get())
    }
  }

  /**
   * Navigates active thumb value by direction.
   *
   * Изменяет значение активного ползунка в указанном направлении.
   * @param isIncrease direction multiplier flag (true for next, false for previous) / флаг направления
   */
  protected go(isIncrease: boolean): void {
    if (this.enabled.isEnabled) {
      const currentActiveValue = this.focus.isMin() ? this.value.min : this.value.max
      const targetValue = this.marks.getMarkNeighbor(currentActiveValue, isIncrease)

      this.value.set(targetValue, this.focus.get())
      this.emitsItem.emit('change')
    }
  }
}
