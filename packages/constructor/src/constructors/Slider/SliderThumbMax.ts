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
    return this.value.max
  }
}
