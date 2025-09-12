import { computed } from 'vue'
import { forEach, isObjectNotArray, isString } from '@dxt-ui/functional'

import {
  FieldInputCheckInclude,
  type FieldInputCheckListInclude
} from '../../classes/field/FieldInputCheckInclude'

import { MaskType } from './MaskType'
import { MaskSpecial } from './MaskSpecial'
import { MaskDate } from './MaskDate'

import type { FieldPatternItemOrFunction, FieldPatternList } from '../../types/fieldTypes'
import type { MaskProps } from './props'

/**
 * Class for producing validation pattern data per mask group.
 *
 * Класс для получения данных паттернов валидации по группам маски.
 */
export class MaskPattern {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param type mask type helper/ объект помощник типа маски
   * @param date date mask helper/ объект помощник маски даты
   * @param special special symbols helper/ объект помощник специальных символов
   */
  constructor(
    protected readonly props: MaskProps,
    protected readonly type: MaskType,
    protected readonly date: MaskDate,
    protected readonly special: MaskSpecial
  ) {
  }

  /** Validation input objects by group / Объекты проверки по названию группы */
  readonly item = computed<FieldInputCheckListInclude>(() => {
    const inputList = {} as FieldInputCheckListInclude

    forEach(this.list.value, (pattern, group) => {
      inputList[group] = new FieldInputCheckInclude(pattern, group)
    })

    if (this.props.check) {
      inputList.check = new FieldInputCheckInclude(this.props.check)
    }

    return inputList
  })

  /** Patterns list by group / Список паттернов по группам */
  readonly list = computed<FieldPatternList>(() => {
    const patterns = this.getByType()

    for (const index in patterns) {
      const item = this.getPattern(index)

      if (isString(item)) {
        Object.assign(patterns[index], { pattern: item })
      } else if (
        isObjectNotArray(item)
        && isObjectNotArray(patterns[index])
      ) {
        Object.assign(patterns[index], item)
      }
    }

    return patterns
  })

  /**
   * Checks if there is a global check pattern.
   *
   * Проверяет, есть ли глобальный паттерн проверки.
   */
  isCheck(): boolean {
    return Boolean(this.props.check)
  }

  /**
   * Returns validation input object by group.
   *
   * Возвращает объект проверки по названию группы.
   * @param groupName group name (default: check)/ имя группы (по умолчанию: check)
   */
  getInput(groupName: string = 'check'): FieldInputCheckInclude | undefined {
    return this.item.value?.[groupName]
  }

  /**
   * Builds base patterns object depending on mask type.
   *
   * Формирует базовый объект паттернов в зависимости от типа маски.
   */
  protected getByType(): FieldPatternList {
    if (this.type.isDate()) {
      return this.date.getPattern()
    }

    const patterns: FieldPatternList = {}

    this.special.item.value.forEach((name) => {
      patterns[name] = {}
    })

    return patterns
  }

  /**
   * Returns pattern definition for group or global pattern.
   *
   * Возвращает определение паттерна для группы или глобальный паттерн.
   * @param groupName group name/ имя группы
   */
  protected getPattern(groupName?: string): FieldPatternItemOrFunction | undefined {
    return (groupName && this.special.getPattern(groupName)) ?? this.props.pattern
  }
}
