import { computed } from 'vue'
import { getMaxLengthAllArray, isArray } from '@dxt-ui/functional'

import { MaskType } from './MaskType'
import { MaskRubberItem } from './MaskRubberItem'
import { MaskDate } from './MaskDate'
import { MaskCharacterLength } from './MaskCharacterLength'
import { MaskSpecial } from './MaskSpecial'
import { MaskFormat } from './MaskFormat'

import type { MaskList, MaskSpecialInfo } from './basicTypes'
import type { MaskProps } from './props'

/**
 * Class for working with a mask.
 *
 * Класс для работы с маской.
 */
export class MaskItem {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param type object for working with the mask type/ объект для работы с типом маски
   * @param rubberItem object for working with rubber elements/ объект для работы с резиновыми элементами
   * @param characterLength object for managing input length/ объект управления длиной ввода
   * @param date object for working with date types/ объект для работы с типом даты
   * @param format object for managing numeric mask types/ объект для управления числовыми типами масок
   * @param special object for working with special characters/ объект для работы со специальными символами
   */
  constructor(
    protected readonly props: MaskProps,
    protected readonly type: MaskType,
    protected readonly rubberItem: MaskRubberItem,
    protected readonly characterLength: MaskCharacterLength,
    protected readonly date: MaskDate,
    protected readonly format: MaskFormat,
    protected readonly special: MaskSpecial
  ) {
  }

  /**
   * Returns the current mask.
   *
   * Возвращает текущую маску.
   */
  readonly item = computed<string[]>(() => {
    if (this.type.isCurrencyOrNumber()) {
      return this.format.mask.value
    }

    if (this.type.isDate()) {
      return this.date.mask.value
    }

    return this.basic.value
  })

  /**
   * Returns an array with information about the location of all special characters.
   *
   * Возвращает массив с информацией о расположении всех специальных символов.
   */
  readonly info = computed(() => {
    const data: MaskSpecialInfo[] = []
    let index = 0

    this.item.value.forEach((char, key) => {
      if (this.special.isSpecial(char)) {
        data.push({
          index,
          key,
          char
        })

        index++
      }
    })

    return data
  })

  /**
   * Returns the length of the mask or the maximum length of masks if there are several.
   *
   * Возвращает длину маски или максимальную длину масок, если их несколько.
   */
  readonly maxLength = computed<number>(() => {
    const mask = this.getMask()

    if (isArray(mask)) {
      return getMaxLengthAllArray(mask)
    } else {
      return this.item.value.length
    }
  })

  /**
   * Returns the mask symbol by its index.
   *
   * Возвращает символ маски по его индексу.
   * @param index index of the symbol's location/ индекс расположения символа
   */
  get(index: number): string {
    return this.item.value?.[index] ?? ''
  }

  /**
   * Returns the location number for replacement by its input symbol.
   *
   * Возвращает номер нахождения для замены по его символу ввода.
   * @param char input symbol/ символ ввода
   * @param selection minimum index for search/ минимальный индекс для поиска
   */
  getByChar(
    char: string,
    selection: number = -1
  ): number {
    let data = selection

    this.item.value.forEach((item, index) => {
      if (item === char && index >= selection) {
        data = index
      }
    })

    return data
  }

  /**
   * Returns the length of the active mask.
   *
   * Возвращает длину активной маски.
   */
  getLength(): number {
    return this.item.value.length
  }

  /**
   * Returns the length of only special characters.
   *
   * Возвращает длину только из специальных символов.
   */
  getLengthBySpecial(): number {
    return this.info.value.length
  }

  /**
   * Returns how many special characters were highlighted.
   *
   * Возвращает, сколько специальных символов было выделено.
   * @param start start of selection/ начало выделения
   * @param end end of selection/ конец выделения
   */
  getQuantity(
    start: number,
    end: number
  ): number {
    if (start === end) {
      return 1
    }

    let quantity = 0

    for (let i = start; i < end; i++) {
      if (this.special.isSpecial(this.get(i))) {
        quantity++
      }
    }

    return quantity
  }

  /**
   * Returns the active mask.
   *
   * Возвращает активную маску.
   */
  protected readonly maskActive = computed<string>(() => {
    const mask = this.getMask()

    if (isArray(mask)) {
      return mask.find(mask => this.getSpecialLength(mask) >= this.characterLength.get()) || mask?.[mask.length - 1] || ''
    }

    return mask
  })

  /**
   * Returns the number of special characters in the current mask.
   *
   * Возвращает количество специальных символов в текущей маске.
   */
  protected readonly basic = computed<string[]>(() => {
    return this.rubberItem.expandMask(this.maskActive.value).split('')
  })

  /**
   * Returns a list of masks.
   *
   * Возвращает список масок.
   */
  protected getMask(): MaskList {
    return this.props.mask ?? ''
  }

  /**
   * Returns the number of special characters in the current mask.
   *
   * Возвращает количество специальных символов в текущей маске.
   * @param mask selected mask/ выбранная маска
   */
  protected getSpecialLength(mask: string): number {
    return mask
      .split('')
      .filter(char => this.special.isSpecial(char))
      .length
  }
}
