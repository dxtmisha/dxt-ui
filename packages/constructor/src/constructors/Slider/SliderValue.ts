import { isArray } from '@dxtmisha/functional'

import type { ModelValueInclude } from '../../classes/ModelValueInclude'

import type { SliderFocus } from './SliderFocus'
import type { SliderMarks } from './SliderMarks'

import { SliderFocusType, type SliderValueType } from './basicTypes'
import type { SliderProps } from './props'

/**
 * Class for calculating slider min and max value bounds.
 *
 * Класс для вычисления минимального и максимального значения слайдера.
 */
export class SliderValue {
  /**
   * Constructor
   * @param focus focus handle manager / менеджер фокуса ползунка
   * @param marks marks manager / менеджер меток
   * @param model model value helper / помощник значения модели
   * @param props input properties / входящие свойства
   */
  constructor(
    protected readonly focus: SliderFocus,
    protected readonly marks: SliderMarks,
    protected readonly model: ModelValueInclude<SliderValueType>,
    protected readonly props: SliderProps
  ) { }

  /**
   * Returns current numeric min value in pair or 0.
   *
   * Возвращает текущее числовое минимальное значение в паре или 0.
   * @returns mark min / минимальное значение
   */
  get min(): number {
    const currentValue = this.get()

    if (
      this.props.multiple
      && isArray(currentValue)
    ) {
      return currentValue[0] ?? this.marks.getData().minNumber
    }

    return this.marks.getData().minNumber
  }

  /**
   * Returns current numeric max value in pair or single value.
   *
   * Возвращает текущее числовое максимальное значение в паре или одиночное значение.
   * @returns mark max / максимальное значение
   */
  get max(): number {
    const currentValue = this.get()

    if (isArray(currentValue)) {
      return currentValue[1] ?? currentValue[0] ?? this.marks.getData().maxNumber
    }

    return typeof currentValue === 'number' ? currentValue : this.marks.getData().maxNumber
  }

  /**
   * Returns current model value.
   *
   * Возвращает текущее значение модели.
   * @returns current model value / текущее значение модели
   */
  get(): SliderValueType | undefined {
    return this.model.getValue()
  }

  /**
   * Sets slider value and updates handle focus.
   *
   * Устанавливает значение слайдера и обновляет фокус ползунка.
   * @param targetValue new slider value / новое значение слайдера
   * @param focusType handle focus / фокус ползунка
   */
  set(
    targetValue: SliderValueType,
    focusType: SliderFocusType = SliderFocusType.max
  ): void {
    this.focus.set(focusType)

    if (
      this.props.multiple
      && isArray(targetValue)
    ) {
      const checkedMin = this.marks.checkValue(targetValue[0], this.min, this.max, SliderFocusType.min)
      const checkedMax = this.marks.checkValue(targetValue[1], checkedMin, this.max, SliderFocusType.max)

      this.model.set([checkedMin, checkedMax])
    } else if (typeof targetValue === 'number') {
      const checkedValue = this.marks.checkValue(targetValue, this.min, this.max, focusType)

      if (this.props.multiple) {
        if (focusType === SliderFocusType.min) {
          this.model.set([checkedValue, this.max])
        } else {
          this.model.set([this.min, checkedValue])
        }
      } else {
        this.model.set(checkedValue)
      }
    }
  }
}
