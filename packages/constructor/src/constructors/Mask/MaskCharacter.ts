import { ref } from 'vue'

import { MaskRubberItem } from './MaskRubberItem'
import { MaskCharacterLength } from './MaskCharacterLength'
import { MaskSpecial } from './MaskSpecial'
import { MaskItem } from './MaskItem'
import { MaskSelection } from './MaskSelection'

import { MASK_CHAR_DELETE } from './basicTypes'
import type { MaskProps } from './props'

/**
 * Class for working with and storing input characters.
 *
 * Класс для работы и хранения вводимых символов.
 */
export class MaskCharacter {
  /** Entered characters list/ Список введённых символов */
  readonly item = ref<string[]>([])

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param rubberItem object for working with rubber elements/ объект для работы с резиновыми элементами
   * @param characterLength object for managing input length/ объект управления длиной ввода
   * @param special object for working with special characters/ объект для работы со специальными символами
   * @param mask object for managing masks/ объект управления маской
   * @param selection object for managing cursor position/ объект для управления положением курсора
   */
  constructor(
    protected readonly props: MaskProps,
    protected readonly rubberItem: MaskRubberItem,
    protected readonly characterLength: MaskCharacterLength,
    protected readonly special: MaskSpecial,
    protected readonly mask: MaskItem,
    protected readonly selection: MaskSelection
  ) {
  }

  /**
   * Checks if the value is filled.
   *
   * Проверяет, заполнено ли значение.
   */
  is(): boolean {
    return this.item.value.length > 0
  }

  /**
   * Checks if the selected character was previously deleted.
   *
   * Проверяет, является ли выделенный символ ранее удалённым.
   */
  isCharDelete(): boolean {
    const key = this.selection.get()

    return key in this.item.value
      && this.item.value[key] === MASK_CHAR_DELETE
  }

  /**
   * Getting the selected mask character.
   *
   * Получение выбранного символа маски.
   */
  getFocus(): string {
    return this.mask.get(this.selection.getFocus())
  }

  /**
   * Getting the mask character by the key number of the nearest special character.
   *
   * Получение символа маски по номеру ключа ближайшего специального символа.
   */
  getImmediate(): string {
    return this.mask.get(this.selection.getImmediate())
  }

  /**
   * Getting the next mask character.
   *
   * Получение следующего символа маски.
   */
  getNext(): string {
    return this.mask.get(this.selection.getNext())
  }

  /**
   * Adding 1 entered character at its selection location.
   *
   * Добавление 1 введённого символа по месту его выделения.
   * @param char entered character/ введённый символ
   */
  add(char: string): this {
    this.item.value.splice(this.selection.get(), this.isCharDelete() ? 1 : 0, char)
    this.selection.goNext().resetImmediate()
    this.updateLength()

    return this
  }

  /**
   * Deleting 1 entered character at its selection location.
   *
   * Удаление 1 введённого символа по месту его выделения.
   */
  pop(): this {
    const key = this.selection.get() - 1

    if (this.isSpecialNextAnother()) {
      this.item.value[key] = MASK_CHAR_DELETE
    } else {
      this.item.value.splice(key, 1)
      this.updateLength()
    }

    this.selection.goBack().resetImmediate()

    return this
  }

  /**
   * Resets the values to the initial values.
   *
   * Сбрасывает значения до начальных.
   */
  reset(): this {
    this.item.value = []
    this.selection.set(0).resetImmediate()
    this.updateLength()

    return this
  }

  /**
   * Shifts by 1 value depending on the direction of selection change.
   *
   * Сдвигает на 1 значение в зависимости от направления изменения выделения.
   * @param status shift status/ статус сдвига
   */
  shift(status: number = 1): this {
    this.characterLength.set(this.item.value.length + status)
    return this
  }

  /**
   * Checks if there is another group of special characters ahead.
   *
   * Проверяет, есть ли впереди другая группа специальных символов.
   */
  protected isSpecialNextAnother(): boolean {
    const selection = this.selection.get() - 1
    const length = this.item.value.length

    if (
      this.props.groupSave
      && selection >= 0
      && selection <= length
    ) {
      const info = this.mask.info.value
      const char = info[selection].char

      if (!this.rubberItem.is(char)) {
        for (let i: number = selection; i < length; i++) {
          if (i in info) {
            const charNext = info[i].char

            if (
              this.special.isSpecial(charNext)
              && char !== charNext
            ) {
              return true
            }
          }
        }
      }
    }

    return false
  }

  /**
   * Updates the length of entered characters.
   *
   * Обновляет длину введённых символов.
   */
  protected updateLength(): this {
    this.characterLength.set(this.item.value.length)
    return this
  }
}
