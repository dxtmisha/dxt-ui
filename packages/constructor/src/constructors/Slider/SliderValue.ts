import { isArray } from '@dxtmisha/functional'

import type { ModelValueInclude } from '../../classes/ModelValueInclude'
import type { SliderValueType } from './basicTypes'
import type { SliderProps } from './props'
import type { SliderMarksData } from './SliderMarksData'

/**
 * Class for calculating slider min and max value bounds.
 *
 * Класс для вычисления минимального и максимального значения слайдера.
 */
export class SliderValue {
  /**
   * Constructor
   * @param model model value helper / помощник значения модели
   * @param marksData marks data manager / менеджер данных меток
   * @param props input properties / входящие свойства
   */
  constructor(
    protected readonly model: ModelValueInclude<SliderValueType>,
    protected readonly marksData: SliderMarksData,
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
      return currentValue[0] ?? this.marksData.minNumber
    }

    return this.marksData.minNumber
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
      return currentValue[1] ?? currentValue[0] ?? this.marksData.maxNumber
    }

    return typeof currentValue === 'number' ? currentValue : this.marksData.maxNumber
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
}
