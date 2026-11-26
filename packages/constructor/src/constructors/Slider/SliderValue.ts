// ai-none

import { isArray } from '@dxtmisha/functional'

import type { ModelValueInclude } from '../../classes/ModelValueInclude'

import type { SliderFocus } from './SliderFocus'
import type { SliderMarks } from './SliderMarks'
import type { SliderMarksData } from './SliderMarksData'

import { SliderFocusType, type SliderValueType } from './basicTypes'
import type { SliderProps } from './props'

/**
 * Class for calculating slider min and max value bounds.
 *
 * Класс для вычисления минимального и максимального значения слайдера.
 */
export class SliderValue {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input properties / входящие свойства
   * @param focus getter returning focus handle manager / функция, возвращающая менеджер фокуса ползунка
   * @param marks getter returning marks manager / функция, возвращающая менеджер меток
   * @param marksData getter returning marks data manager / функция, возвращающая менеджер данных меток
   * @param model getter returning model value helper / функция, возвращающая помощник значения модели
   */
  constructor(
    protected readonly props: Readonly<SliderProps>,
    protected readonly focus: () => SliderFocus,
    protected readonly marks: () => SliderMarks,
    protected readonly marksData: () => SliderMarksData,
    protected readonly model: () => ModelValueInclude<SliderValueType>
  ) { }

  /**
   * Returns current numeric min value in pair or minimum range bound.
   *
   * Возвращает текущее числовое минимальное значение в паре или минимальную границу диапазона.
   * @returns mark min / минимальное значение
   */
  get min(): number {
    const currentValue = this.get()

    if (
      this.props.multiple
      && isArray(currentValue)
    ) {
      return this.toNumericValue(currentValue[0]) ?? this.marksData().minNumber
    }

    return this.marksData().minNumber
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
      return this.toNumericValue(currentValue[1])
        ?? this.toNumericValue(currentValue[0])
        ?? this.marksData().maxNumber
    }

    const numericValue = this.toNumericValue(currentValue)

    if (numericValue !== undefined) {
      return numericValue
    }

    if (this.props.multiple) {
      return this.marksData().maxNumber
    }

    return this.marksData().minNumber
  }

  /**
   * Returns current model value.
   *
   * Возвращает текущее значение модели.
   * @returns current model value / текущее значение модели
   */
  get(): SliderValueType | undefined {
    return this.model().get()
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
    this.focus().set(focusType)

    if (
      this.props.multiple
      && isArray(targetValue)
    ) {
      const rawMin = this.toNumericValue(targetValue[0])
      const rawMax = this.toNumericValue(targetValue[1])

      if (
        rawMin !== undefined
        && rawMax !== undefined
      ) {
        const marksData = this.marksData()
        const marks = this.marks()
        const minBound = marksData.minNumber
        const maxBound = marksData.maxNumber
        const boundedMax = marks.checkValue(rawMax, minBound, maxBound, SliderFocusType.max)
        const checkedMin = marks.checkValue(rawMin, minBound, boundedMax, SliderFocusType.min)
        const checkedMax = marks.checkValue(rawMax, checkedMin, maxBound, SliderFocusType.max)

        this.model().set([checkedMin, checkedMax])
      }
    } else if (
      typeof targetValue === 'number'
      && Number.isFinite(targetValue)
    ) {
      const checkedValue = this.marks().checkValue(targetValue, this.min, this.max, focusType)

      if (this.props.multiple) {
        if (focusType === SliderFocusType.min) {
          this.model().set([checkedValue, this.max])
        } else {
          this.model().set([this.min, checkedValue])
        }
      } else {
        this.model().set(checkedValue)
      }
    }
  }

  /**
   * Safely parses numeric or numeric-string value into a finite number.
   *
   * Безопасно преобразует числовое или строковое числовое значение в конечное число.
   * @param value candidate value / проверяемое значение
   * @returns finite number or undefined / конечное число или undefined
   */
  protected toNumericValue(value: unknown): number | undefined {
    if (typeof value === 'number') {
      return Number.isFinite(value) ? value : undefined
    }

    if (
      typeof value === 'string'
      && value.trim() !== ''
    ) {
      const parsed = Number(value)
      return Number.isFinite(parsed) ? parsed : undefined
    }

    return undefined
  }
}
