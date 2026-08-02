import { SliderThumb } from './SliderThumb'

/**
 * Class representing maximum slider thumb handle.
 *
 * Класс, представляющий максимальный ползунок слайдера.
 */
export class SliderThumbMax extends SliderThumb {
  /**
   * Returns current numeric mark/value for maximum thumb.
   *
   * Возвращает текущее числовое значение метки для максимального ползунка.
   * @returns numeric value / числовое значение
   */
  get mark(): number {
    return this.valueItem.max
  }

  /**
   * Returns current numeric value for maximum thumb.
   *
   * Возвращает текущее числовое значение для максимального ползунка.
   * @returns numeric value / числовое значение
   */
  get value(): number {
    return this.valueItem.max
  }

  /**
   * Returns minimum allowed value for ARIA attributes on maximum thumb.
   *
   * Возвращает минимально допустимое значение для ARIA-атрибутов на максимальном ползунке.
   * @returns minimum numeric value / минимальное числовое значение
   */
  get valuemin(): number {
    return this.props.multiple ? this.valueItem.min : this.marksData.minNumber
  }

  /**
   * Returns maximum allowed value for ARIA attributes on maximum thumb.
   *
   * Возвращает максимально допустимое значение для ARIA-атрибутов на максимальном ползунке.
   * @returns maximum numeric value / максимальное числовое значение
   */
  get valuemax(): number {
    return this.marksData.maxNumber
  }
}
