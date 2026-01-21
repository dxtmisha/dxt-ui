import { computed, watch } from 'vue'

import { FieldInputCheckInclude } from '../../classes/Field/FieldInputCheckInclude'
import { MaskType } from './MaskType'
import { MaskDate } from './MaskDate'
import { MaskFormat } from './MaskFormat'
import { MaskItem } from './MaskItem'
import { MaskSpecial } from './MaskSpecial'
import { MaskValueBasic } from './MaskValueBasic'

import type { FieldMaskItem, FieldMasks } from '../../types/fieldTypes'
import { MASK_CHAR_DELETE } from './basicTypes'
import type { MaskProps } from './props'

/**
 * Class for transforming the entered data into the final result.
 *
 * Класс для преобразования введенных данных в конечный результат.
 */
export class MaskValue {
  protected infoCache?: FieldMasks

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param type object for working with the mask type/ объект для работы с типом маски
   * @param date object for working with date types/ объект для работы с типом даты
   * @param format object for managing numeric mask types/ объект для управления числовыми типами масок
   * @param mask object for managing masks/ объект управления маской
   * @param special object for working with special characters/ объект для работы со специальными символами
   * @param valueBasic object for working with base values/ объект для работы с базовыми значениями
   */
  constructor(
    protected readonly props: MaskProps,
    protected readonly type: MaskType,
    protected readonly date: MaskDate,
    protected readonly format: MaskFormat,
    protected readonly mask: MaskItem,
    protected readonly special: MaskSpecial,
    protected readonly valueBasic: MaskValueBasic
  ) {
    watch(this.info, (_, old) => {
      if (this.type.isDate()) {
        this.infoCache = old
      }
    })
  }

  /**
   * Receiving a list with information about standard values/
   * Получение списка с информацией о стандартных значениях
   */
  readonly info = computed<FieldMasks>(() => {
    const standard = this.valueBasic.item.value
    const data: FieldMasks = {}

    this.mask.item.value.forEach((char, index) => {
      if (this.special.isSpecial(char)) {
        const value = this.add(data, char)

        if (
          this.isStandard(index)
          && standard[index] !== MASK_CHAR_DELETE
        ) {
          value.chars.push(String(standard[index]))
        }

        value.maxLength++
        value.end = value.maxLength === value.chars.length
        value.full = this.special.isDefault(char) || value.end
        value.value = value.full ? value.chars.join('') : ''
      }
    })

    return data
  })

  /** Final value (shortcut)/ Финальное значение (ярлык) */
  readonly item = computed(() => this.getValue(this.info.value))

  /** Checks if the mask is fully filled/ Проверяет, полностью ли заполнена маска */
  readonly isFull = computed<boolean>(() => {
    for (const item of Object.values(this.info.value)) {
      if (!item.full) {
        return false
      }
    }

    return true
  })

  /** Checks if the mask is fully filled by length/ Проверяет, полностью ли заполнена маска по длине */
  readonly isEnd = computed<boolean>(() => {
    for (const item of Object.values(this.info.value)) {
      if (!item.end) {
        return false
      }
    }

    return true
  })

  /**
   * Returns old values.
   *
   * Возвращает старые значения.
   */
  getValueCache(): string {
    if (this.infoCache) {
      return this.getValue(this.infoCache)
    }

    return this.item.value
  }

  /**
   * Getting full information for global verification.
   *
   * Получение полной информации для глобальной проверки.
   */
  getForCheck(): FieldMaskItem {
    const value = this.item.value

    return {
      group: FieldInputCheckInclude.getGroupDefault(),
      value,
      maxLength: value.length,
      full: this.isFull.value,
      end: this.isEnd.value,
      chars: value.split('')
    }
  }

  /**
   * Getting information for a specific group.
   *
   * Получение информации для конкретной группы.
   * @param groupName group name/ название группы
   */
  getInfoItem(groupName: string): FieldMaskItem | undefined {
    return this.info.value?.[groupName]
  }

  /** Returns the final form of the value/ Возвращает финальный вид значения */
  protected readonly valueFinal = computed(() => {
    const basic = this.valueBasic.item.value.split('')
    const mask = this.mask.item.value
    let data: string = ''

    for (const index in mask) {
      if (index in basic) {
        data += basic[index]
      } else if (mask[index]) {
        const defaultValue = this.special.getDefault(mask[index])

        if (defaultValue) {
          data += defaultValue
        }
      }
    }

    return data
  })

  /**
   * Checks if there is a value by the key number in the basic values.
   *
   * Проверяет, есть ли значение по номеру ключа в базовых значениях.
   * @param index key number/ номер ключа
   */
  protected isStandard(index: number): boolean {
    return Boolean(this.valueBasic.getChar(index))
  }

  /**
   * Returns values based on the specified data information structure.
   *
   * Возвращает значения по указанной структуре информации о данных.
   * @param info data information/ информация о данных
   */
  protected getValue(info: FieldMasks) {
    if (this.type.isCurrencyOrNumber()) {
      return this.format.getValueStandard(info)
    }

    if (this.type.isDate()) {
      if (this.isFull.value) {
        return this.date.getValueStandard(info)
      }

      return ''
    }

    if (
      this.props.fullOnly
      && !this.isFull.value
    ) {
      return ''
    }

    return this.valueFinal.value
  }

  /**
   * Adding a new character to the list divided by groups if it is not there and returning the property of the given group.
   *
   * Добавление нового символа в список, разделенный по группам, если его там нет, и возвращение свойства данной группы.
   * @param data data for verification/ данные для проверки
   * @param groupName group name/ название группы
   */
  protected add(data: FieldMasks, groupName: string): FieldMaskItem {
    if (!(groupName in data)) {
      data[groupName] = {
        group: groupName,
        value: '',
        maxLength: 0,
        full: false,
        end: false,
        chars: []
      }
    }

    return data[groupName] as FieldMaskItem
  }
}
