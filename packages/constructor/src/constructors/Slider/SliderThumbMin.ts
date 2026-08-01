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
    return this.value.min
  }
}
