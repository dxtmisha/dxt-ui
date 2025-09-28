import { computed } from 'vue'
import { forEach, isArray, isObject, isObjectNotArray } from '@dxtmisha/functional'

import { MaskType } from './MaskType'
import { MaskDate } from './MaskDate'
import { MaskFormat } from './MaskFormat'

import type { FieldPatternItemOrFunction } from '../../types/fieldTypes'
import type {
  MaskMatchItem,
  MaskSpecialItem,
  MaskSpecialList,
  MaskSpecialProp
} from './basicTypes'
import type { MaskProps } from './props'

/**
 * Class for working with groups defined by special symbols.
 *
 * Класс для работы с группами, определёнными специальными символами.
 */
export class MaskSpecial {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param type mask type helper/ объект помощник типа маски
   * @param date date mask helper/ объект помощник маски даты
   * @param format numeric/currency mask helper/ объект помощник числовых масок
   */
  constructor(
    protected readonly props: MaskProps,
    protected readonly type: MaskType,
    protected readonly date: MaskDate,
    protected readonly format: MaskFormat
  ) {
  }

  /**
   * Returns list of special symbols.
   *
   * Возвращает список специальных символов.
   */
  readonly item = computed<string[]>(() => {
    if (this.type.isCurrencyOrNumber()) {
      return this.format.getSpecial()
    }

    if (this.type.isTime()) {
      return this.date.getSpecialFull()
    }

    if (this.type.isDate()) {
      return this.date.getSpecialDate()
    }

    const special = this.special.value

    if (isArray(special)) {
      return special
    }

    if (isObject(special)) {
      return Object.keys(special)
    }

    return [special]
  })

  /**
   * Returns map of only rubber-enabled groups.
   *
   * Возвращает карту только резиновых групп.
   */
  readonly rubberList = computed<MaskSpecialList>(() => {
    const data: MaskSpecialList = {}

    if (isObjectNotArray(this.special.value)) {
      forEach(this.special.value, (item, index) => {
        if (item?.rubber) {
          data[index] = item
        }
      })
    }

    return data
  })

  /**
   * Checks if symbol is special.
   *
   * Проверяет, является ли символ специальным.
   * @param char symbol to check/ символ для проверки
   */
  isSpecial(char: string): boolean {
    return this.item.value.indexOf(char) !== -1
  }

  /**
   * Checks if group has default value.
   *
   * Проверяет, имеет ли группа значение по умолчанию.
   * @param groupName group name/ название группы
   */
  isDefault(groupName: string): boolean {
    return Boolean(this.getDefault(groupName))
  }

  /**
   * Returns default value for group.
   *
   * Возвращает значение по умолчанию для группы.
   * @param groupName group name/ название группы
   */
  getDefault(groupName: string): MaskMatchItem | undefined {
    return this.getSpecialItem(groupName)?.defaultValue
  }

  /**
   * Returns matcher (regexp/string) for group.
   *
   * Возвращает выражение для проверки группы.
   * @param groupName group name/ название группы
   */
  getMatch(groupName: string): MaskMatchItem | undefined {
    return this.getSpecialItem(groupName)?.match
  }

  /**
   * Returns pattern definition for group.
   *
   * Возвращает pattern для группы.
   * @param groupName group name/ название группы
   */
  getPattern(groupName: string): FieldPatternItemOrFunction | undefined {
    return this.getSpecialItem(groupName)?.pattern
  }

  /**
   * Returns view (display character) for group.
   *
   * Возвращает отображаемый символ для группы.
   * @param groupName group name/ название группы
   */
  getView(groupName: string): string | undefined {
    return this.getSpecialItem(groupName)?.view
  }

  /**
   * Returns special property (original definition).
   *
   * Возвращает свойство special (оригинальное определение).
   */
  protected readonly special = computed<MaskSpecialProp>(() => {
    if (this.type.isCurrencyOrNumber()) {
      return this.format.special
    }

    return this.props.special ?? '*'
  })

  /**
   * Returns special group item data by name.
   *
   * Возвращает данные группы special по имени.
   * @param groupName group name/ название группы
   */
  protected getSpecialItem(groupName: string): MaskSpecialItem | undefined {
    const special = this.special.value

    if (
      isObjectNotArray(special)
      && groupName in special
    ) {
      return special[groupName]
    }

    return undefined
  }
}
