// ai-none

import { computed } from 'vue'
import { getColumn, isArray, isSelected, isString, replaceRecursive } from '@dxtmisha/functional'

import type { MaskFormat } from './MaskFormat'
import type { MaskMatch } from './MaskMatch'
import type { MaskRubberItem } from './MaskRubberItem'
import type { MaskRubberTransition } from './MaskRubberTransition'
import type { MaskSpecial } from './MaskSpecial'
import type { MaskType } from './MaskType'

import type { FieldMasks } from '../../types/fieldTypes'
import type {
  MaskSpecialItem,
  MaskSpecialList
} from './basicTypes'

/**
 * Class for working with the rubber type.
 *
 * Класс для работы с резиновым типом.
 */
export class MaskRubber {
  /**
   * Constructor
   * @param format object for managing numeric mask types/ объект для управления числовыми типами масок
   * @param match object for managing the input character/ объект для управления символом ввода
   * @param rubberItem object for working with rubber elements/ объект для работы с резиновыми элементами
   * @param rubberTransition object for managing the transition character/ объект для управления символом перехода
   * @param special object for working with special characters/ объект для работы со специальными символами
   * @param type object for working with the mask type/ объект для работы с типом маски
   */
  constructor(
    protected readonly format: () => MaskFormat,
    protected readonly match: () => MaskMatch,
    protected readonly rubberItem: () => MaskRubberItem,
    protected readonly rubberTransition: () => MaskRubberTransition,
    protected readonly special: () => MaskSpecial,
    protected readonly type: () => MaskType
  ) {
  }

  /** List of rubber groups/ Список резиновых групп */
  protected readonly list = computed<MaskSpecialList>(() => {
    const special = this.special().rubberList

    if (this.type().isCurrencyOrNumber()) {
      return replaceRecursive(
        this.format().rubber,
        special
      )
    }

    return special
  })

  /** List of transition symbols/ Список символов перехода */
  protected readonly transition = computed<string[]>(() => {
    return getColumn(
      Object.values(this.list.value).filter(
        item => 'transitionChar' in item && (
          isString(item.transitionChar)
          || isArray(item.transitionChar)
        )
      ),
      'transitionChar'
    ).flat() as string[]
  })

  /**
   * Checks if the symbol is a transition.
   *
   * Проверяет, является ли символ перехода.
   * @param char checkable symbol/ проверяемый символ
   * @returns true if symbol is a transition char / true, если символ является символом перехода
   */
  isTransition(char: string): boolean {
    return this.transition.value.indexOf(char) >= 0
  }

  /**
   * Getting properties for the rubber group.
   *
   * Получение свойства для резиновой группы.
   * @param groupName group name/ название группы
   * @returns rubber group settings or undefined / настройки резиновой группы или undefined
   */
  get(groupName: string): MaskSpecialItem | undefined {
    return this.list.value?.[groupName]
  }

  /**
   * Updates the group of rubber symbols if all conditions are met and returns true.
   *
   * Обновляет группу резиновых символов, если все условия подходят, и возвращает true.
   * @param data values for verification/ значения для проверки
   * @param groupName group name/ название группы
   * @param char symbol for checking/ символ для проверки
   * @returns true if character fits rubber group / true, если символ подходит для резиновой группы
   */
  update(
    data: FieldMasks,
    groupName: string,
    char: string
  ): boolean {
    const item = this.get(groupName)
    const value = data?.[groupName]

    if (item && value) {
      if (
        isSelected(char, item?.transitionChar) || (
          item?.maxLength
          && item?.maxLength <= value?.chars.length
        )
      ) {
        this.rubberTransition().set(groupName)
        return false
      }

      if (
        value.end
        && this.match().is(char, groupName)
        && !this.rubberTransition().isChar(groupName)
      ) {
        this.rubberItem().add(groupName)
        this.rubberTransition().reset()
      }

      return true
    }

    return false
  }

  /**
   * Resets all states of all groups to the initial one.
   *
   * Сбрасывает все состояния всех групп до начального.
   * @returns current instance / текущий экземпляр
   */
  reset(): this {
    this.rubberItem().reset()
    this.rubberTransition().reset()

    return this
  }

  /**
   * Reduces the length of the entered symbol by its group.
   *
   * Уменьшает длину вводимого символа по его группе.
   * @param groupName group name/ название группы
   * @returns true if decreased / true, если длина уменьшена
   */
  pop(groupName: string): boolean {
    return this.rubberItem().pop(groupName)
  }
}
