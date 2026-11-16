// ai-none

import { computed } from 'vue'

import type { MaskCharacter } from './MaskCharacter'
import type { MaskItem } from './MaskItem'
import type { MaskRubberTransition } from './MaskRubberTransition'
import type { MaskSpecial } from './MaskSpecial'

/**
 * Class for getting basic input values.
 *
 * Класс для получения базовых вводимых значений.
 */
export class MaskValueBasic {
  /**
   * Constructor
   * @param character object for managing entered character/ объект для управления введённым символом
   * @param mask object for managing masks/ объект управления маской
   * @param rubberTransition object for managing the transition character/ объект для управления символом перехода
   * @param special object for working with special characters/ объект для работы со специальными символами
   */
  constructor(
    protected readonly character: () => MaskCharacter,
    protected readonly mask: () => MaskItem,
    protected readonly rubberTransition: () => MaskRubberTransition,
    protected readonly special: () => MaskSpecial
  ) {
  }

  /**
   * Receiving basic standard values.
   *
   * Получение базовых стандартных значений.
   */
  readonly item = computed(() => {
    const character = this.character().item.value
    const value: string[] = []
    let key = 0 as number

    for (const char of this.mask().item.value) {
      if (!this.special().isSpecial(char)) {
        value.push(char)
      } else if (key in character) {
        value.push(String(character[key++]))

        if (
          key > character.length
          && this.rubberTransition().is()
          && !this.rubberTransition().isChar(char)
        ) {
          break
        }
      } else {
        break
      }
    }

    return value.join('')
  })

  /**
   * Checks if the values are filled in.
   *
   * Проверяет, заполнены ли значения.
   */
  is(): boolean {
    return this.getLength() > 0
  }

  /**
   * Getting the character from the basic standard values by its key number.
   *
   * Получение символа из базовых стандартных значений по его номеру ключа.
   * @param index key number/ номер ключа
   */
  getChar(index: number): string | undefined {
    return this.item.value?.[index]
  }

  /**
   * Getting the length of basic standard values.
   *
   * Получение длины базовых стандартных значений.
   */
  getLength(): number {
    return this.item.value.length
  }
}
