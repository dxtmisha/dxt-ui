import { ref } from 'vue'

/**
 * Class for storing the length of entered characters.
 *
 * Класс для хранения длины введённых символов.
 */
export class MaskCharacterLength {
  /** Current length value/ Текущее значение длины */
  protected length = ref<number>(0)

  /**
   * Checks if there is at least one entered character.
   *
   * Проверяет, есть ли хотя бы один введённый символ.
   */
  is(): boolean {
    return this.length.value > 0
  }

  /**
   * Returns current length.
   *
   * Возвращает текущую длину.
   */
  get(): number {
    return this.length.value
  }

  /**
   * Sets new length value.
   *
   * Устанавливает новое значение длины.
   * @param length new length value / новое значение длины
   */
  set(length: number): this {
    this.length.value = length
    return this
  }
}
