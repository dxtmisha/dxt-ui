// ai-none

import { computed, ref } from 'vue'
import { DesignLifecycleAbstract, forEach, isObjectNotArray, isString } from '@dxtmisha/functional'

import {
  FieldInputCheckInclude,
  type FieldInputCheckListInclude
} from '../../classes/Field/FieldInputCheckInclude'

import type { MaskDate } from './MaskDate'
import type { MaskSpecial } from './MaskSpecial'
import type { MaskType } from './MaskType'

import type { FieldPatternItemOrFunction, FieldPatternList } from '../../types/fieldTypes'
import type { MaskProps } from './props'

/**
 * Class for producing validation pattern data per mask group.
 *
 * Класс для получения данных паттернов валидации по группам маски.
 */
export class MaskPattern extends DesignLifecycleAbstract {
  /** Whether component is mounted on client / Смонтирован ли компонент на клиенте */
  protected readonly mounted = ref<boolean>(false)

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param date date mask helper/ объект помощник маски даты
   * @param special special symbols helper/ объект помощник специальных символов
   * @param type mask type helper/ объект помощник типа маски
   */
  constructor(
    protected readonly props: Readonly<MaskProps>,
    protected readonly date: () => MaskDate,
    protected readonly special: () => MaskSpecial,
    protected readonly type: () => MaskType
  ) {
    super()
  }

  /**
   * Enables DOM-backed validation inputs after mount to avoid SSR hydration mismatches.
   *
   * Включает DOM-валидацию после монтирования во избежание расхождений гидратации SSR.
   */
  override readonly onMounted = (): void => {
    this.mounted.value = true
  }

  /**
   * Resets mounted state on unmount.
   *
   * Сбрасывает состояние монтирования при размонтировании.
   */
  override readonly onUnmounted = (): void => {
    this.mounted.value = false
  }

  /** Validation input objects by group / Объекты проверки по названию группы */
  readonly item = computed<FieldInputCheckListInclude>(() => {
    if (!this.mounted.value) {
      return {}
    }

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

      if (patterns[index]) {
        if (isString(item)) {
          Object.assign(patterns[index], { pattern: item })
        } else if (
          isObjectNotArray(item)
          && isObjectNotArray(patterns[index])
        ) {
          Object.assign(patterns[index], item)
        }
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
  getInput(
    groupName: string = FieldInputCheckInclude.getGroupDefault()
  ): FieldInputCheckInclude | undefined {
    return this.item.value?.[groupName]
  }

  /**
   * Builds base patterns object depending on mask type.
   *
   * Формирует базовый объект паттернов в зависимости от типа маски.
   */
  protected getByType(): FieldPatternList {
    if (this.type().isDate()) {
      return this.date().getPattern()
    }

    const patterns: FieldPatternList = {}

    this.special().item.value.forEach((name) => {
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
    return (groupName && this.special().getPattern(groupName)) ?? this.props.pattern
  }
}
