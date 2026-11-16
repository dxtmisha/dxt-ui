// ai-none

import { ref } from 'vue'

import type { MaskCharacterLength } from './MaskCharacterLength'
import type { MaskItem } from './MaskItem'
import type { MaskRubberItem } from './MaskRubberItem'
import type { MaskSelection } from './MaskSelection'
import type { MaskSpecial } from './MaskSpecial'

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
   * @param characterLength object for managing input length/ объект управления длиной ввода
   * @param mask object for managing masks/ объект управления маской
   * @param rubberItem object for working with rubber elements/ объект для работы с резиновыми элементами
   * @param selection object for managing cursor position/ объект для управления положением курсора
   * @param special object for working with special characters/ объект для работы со специальными символами
   */
  constructor(
    protected readonly props: Readonly<MaskProps>,
    protected readonly characterLength: () => MaskCharacterLength,
    protected readonly mask: () => MaskItem,
    protected readonly rubberItem: () => MaskRubberItem,
    protected readonly selection: () => MaskSelection,
    protected readonly special: () => MaskSpecial
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
    const key = this.selection().get()

    return key in this.item.value
      && this.item.value[key] === MASK_CHAR_DELETE
  }

  /**
   * Getting the selected mask character.
   *
   * Получение выбранного символа маски.
   */
  getFocus(): string {
    return this.mask().get(this.selection().getFocus())
  }

  /**
   * Getting the mask character by the key number of the nearest special character.
   *
   * Получение символа маски по номеру ключа ближайшего специального символа.
   */
  getImmediate(): string {
    return this.mask().get(this.selection().getImmediate())
  }

  /**
   * Getting the next mask character.
   *
   * Получение следующего символа маски.
   */
  getNext(): string {
    return this.mask().get(this.selection().getNext())
  }

  /**
   * Adding 1 entered character at its selection location.
   *
   * Добавление 1 введённого символа по месту его выделения.
   * @param char entered character/ введённый символ
   */
  add(char: string): this {
    this.item.value.splice(this.selection().get(), this.isCharDelete() ? 1 : 0, char)
    this.selection().goNext().resetImmediate()
    this.updateLength()

    return this
  }

  /**
   * Resets the values to the initial values.
   *
   * Сбрасывает значения до начальных.
   * @returns current instance / текущий экземпляр
   */
  reset(): this {
    this.item.value = []
    this.selection().set(0).resetImmediate()
    this.updateLength()

    return this
  }

  /**
   * Deleting 1 entered character at its selection location.
   *
   * Удаление 1 введённого символа по месту его выделения.
   * @returns current instance / текущий экземпляр
   */
  pop(): this {
    const key = this.selection().get() - 1

    if (this.isSpecialNextAnother()) {
      this.item.value[key] = MASK_CHAR_DELETE
    } else {
      this.item.value.splice(key, 1)
      this.updateLength()
    }

    this.selection().goBack().resetImmediate()

    return this
  }

  /**
   * Shifts by 1 value depending on the direction of selection change.
   *
   * Сдвигает на 1 значение в зависимости от направления изменения выделения.
   * @param status shift status/ статус сдвига
   * @returns current instance / текущий экземпляр
   */
  shift(status: number = 1): this {
    this.characterLength().set(this.item.value.length + status)
    return this
  }

  /**
   * Checks if there is another group of special characters ahead.
   *
   * Проверяет, есть ли впереди другая группа специальных символов.
   */
  protected isSpecialNextAnother(): boolean {
    const selection = this.selection().get() - 1
    const length = this.item.value.length

    if (
      this.props.groupSave
      && selection >= 0
      && selection <= length
    ) {
      const info = this.mask().info.value
      const char = info?.[selection]?.char

      if (char && !this.rubberItem().is(char)) {
        for (let index: number = selection; index < length; index++) {
          if (info?.[index]) {
            const charNext = info[index]?.char

            if (
              charNext
              && this.special().isSpecial(charNext)
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
    this.characterLength().set(this.item.value.length)
    return this
  }
}
