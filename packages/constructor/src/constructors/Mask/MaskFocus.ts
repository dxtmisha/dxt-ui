import { MaskBuffer } from './MaskBuffer'

/**
 * Class for storing element focus state.
 *
 * Класс для хранения состояния фокуса элемента.
 */
export class MaskFocus {
  /** Focus state flag/ Флаг состояния фокуса */
  protected value: boolean = false

  /**
   * Constructor
   * @param buffer buffer helper object/ объект помощник буфера
   */
  constructor(
    protected readonly buffer: MaskBuffer
  ) {
  }

  /**
   * Returns current focus state.
   *
   * Возвращает текущее состояние фокуса.
   */
  is(): boolean {
    return this.value
  }

  /**
   * Sets focus state to active and resets buffer.
   *
   * Устанавливает состояние фокуса активным и сбрасывает буфер.
   */
  in(): void {
    this.value = true
    this.buffer.reset()
  }

  /**
   * Removes focus state and resets buffer.
   *
   * Снимает состояние фокуса и сбрасывает буфер.
   */
  out(): void {
    this.value = false
    this.buffer.reset()
  }
}
