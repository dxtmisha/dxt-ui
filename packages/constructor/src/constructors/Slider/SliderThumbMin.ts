import { SliderThumb } from './SliderThumb'

/**
 * Class representing minimum slider thumb handle.
 *
 * Класс, представляющий минимальный ползунок слайдера.
 */
export class SliderThumbMin extends SliderThumb {
  /**
   * Returns current numeric mark/value for minimum thumb.
   *
   * Возвращает текущее числовое значение метки для минимального ползунка.
   * @returns numeric value / числовое значение
   */
  get mark(): number {
    return this.valueItem.min
  }

  /**
   * Returns current numeric value for minimum thumb.
   *
   * Возвращает текущее числовое значение для минимального ползунка.
   * @returns numeric value / числовое значение
   */
  get value(): number {
    return this.valueItem.min
  }

  /**
   * Returns minimum allowed value for ARIA attributes on minimum thumb.
   *
   * Возвращает минимально допустимое значение для ARIA-атрибутов на минимальном ползунке.
   * @returns minimum numeric value / минимальное числовое значение
   */
  get valuemin(): number {
    return this.marksData.minNumber
  }

  /**
   * Returns maximum allowed value for ARIA attributes on minimum thumb.
   *
   * Возвращает максимально допустимое значение для ARIA-атрибутов на минимальном ползунке.
   * @returns maximum numeric value / максимальное числовое значение
   */
  get valuemax(): number {
    return this.valueItem.max
  }
}
