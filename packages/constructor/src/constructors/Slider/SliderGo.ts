// ai-none

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
   * Constructor.
   *
   * Конструктор.
   * @param emitsItem getter returning event emission manager / функция, возвращающая менеджер эмита событий
   * @param enabled getter returning enabled state manager / функция, возвращающая менеджер активности
   * @param focus getter returning handle focus manager / функция, возвращающая менеджер фокуса ползунков
   * @param marks getter returning marks calculation manager / функция, возвращающая менеджер вычисления меток
   * @param sliderElement getter returning element layout manager / функция, возвращающая менеджер верстки и координат
   * @param value getter returning slider value bounds manager / функция, возвращающая менеджер значений слайдера
   */
  constructor(
    protected readonly emitsItem: () => SliderEmit,
    protected readonly enabled: () => EnabledInclude,
    protected readonly focus: () => SliderFocus,
    protected readonly marks: () => SliderMarks,
    protected readonly sliderElement: () => SliderElement,
    protected readonly value: () => SliderValue
  ) { }

  /**
   * Position update from pointer coordinate.
   *
   * Обновление позиции по координате указателя.
   * @param coordinate pointer coordinate / координата указателя
   */
  updateFromCoordinate(coordinate: number): void {
    if (!this.enabled().isEnabled) {
      return
    }

    const sliderElement = this.sliderElement()
    const sliderRectangle = sliderElement.rectangle

    if (sliderRectangle) {
      const percentage = sliderElement.getMovePercent(coordinate, sliderRectangle)
      const markValue = this.marks().toMark(percentage)

      this.value().set(markValue, this.focus().get())
      this.emitsItem().emit('input')
    }
  }

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
   * Navigates active thumb value by direction.
   *
   * Изменяет значение активного ползунка в указанном направлении.
   * @param isIncrease direction multiplier flag (true for next, false for previous) / флаг направления (true — вперёд, false — назад)
   */
  protected go(isIncrease: boolean): void {
    if (this.enabled().isEnabled) {
      const focus = this.focus()
      const valueItem = this.value()
      const emitsItem = this.emitsItem()
      const currentActiveValue = focus.isMin() ? valueItem.min : valueItem.max
      const targetValue = this.marks().getMarkNeighbor(currentActiveValue, isIncrease)

      valueItem.set(targetValue, focus.get())
      emitsItem.emit('input')
      emitsItem.emit('change')
    }
  }
}
