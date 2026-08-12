import { toNumber } from '@dxtmisha/functional'

import type { FieldValueInclude } from '../../classes/Field/FieldValueInclude'
import type { SliderValueType } from '../Slider'
import type { SliderFieldProps } from './props'

/**
 * Class for calculating minimum and maximum values of SliderField.
 *
 * Класс для вычисления минимального и максимального значений SliderField.
 */
export class SliderFieldValue {
  /**
   * Constructor
   * @param props input properties / входящие свойства
   * @param value field value include instance / экземпляр значения поля
   */
  constructor(
    protected readonly props: SliderFieldProps,
    protected readonly value: FieldValueInclude<SliderValueType>
  ) { }

  /**
   * Minimum numeric value / Минимальное числовое значение
   * @returns min value / минимальное значение
   */
  get min(): number {
    const itemValue = this.value.item.value

    if (Array.isArray(itemValue)) {
      return toNumber(itemValue[0])
    }

    return toNumber(this.props.min ?? 0)
  }

  /**
   * Maximum numeric value / Максимальное числовое значение
   * @returns max value / максимальное значение
   */
  get max(): number {
    const itemValue = this.value.item.value

    if (Array.isArray(itemValue)) {
      return toNumber(itemValue[1])
    }

    if (itemValue) {
      return toNumber(itemValue)
    }

    if (this.props.multiple) {
      return toNumber(this.props.max ?? 100)
    }

    return toNumber(this.props.min ?? 0)
  }

  /**
   * Sets slider field value.
   *
   * Устанавливает значение поля слайдера.
   * @param value new value / новое значение
   */
  set(value: SliderValueType): void {
    this.value.set(value)
  }
}
