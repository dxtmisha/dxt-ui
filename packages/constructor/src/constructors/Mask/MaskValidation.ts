import { computed } from 'vue'

import { FieldInputCheckInclude } from '../../classes/field/FieldInputCheckInclude'
import { MaskPattern } from './MaskPattern'
import { MaskValue } from './MaskValue'

import type { FieldValidationItem } from '../../types/fieldTypes'

/**
 * Class for working with the validity of entered data.
 *
 * Класс для работы с валидностью введённых данных.
 */
export class MaskValidation {
  /**
   * Constructor
   * @param pattern object for working with input data validation/ объект для работы с проверкой введённых данных
   * @param value object for working with entered data/ объект для работы с введёнными данными
   */
  constructor(
    protected readonly pattern: MaskPattern,
    protected readonly value: MaskValue
  ) {
  }

  /** Validation error info or undefined/ Информация об ошибке или undefined */
  readonly item = computed(() => {
    for (const input of Object.values(this.pattern.item.value)) {
      const item = this.value.getInfoItem(input.group)

      if (item && item.full) {
        const check = input.check(item.value)

        if (check && !check.status) {
          return {
            ...check,
            value: this.value.item.value
          }
        }
      }
    }

    return this.getValidationCheck()
  })

  /**
   * Checks if the current group has an error.
   *
   * Проверяет, есть ли ошибка у текущей группы.
   * @param groupName group name/ название группы
   */
  isError(groupName: string): boolean {
    const groupError = this.item.value?.group

    return Boolean(
      groupError && (
        groupError === groupName
        || groupError === FieldInputCheckInclude.getGroupDefault()
      )
    )
  }

  /**
   * Checks the correctness of filling in the values.
   *
   * Проверяет корректность заполнения значений.
   */
  checkValidity(): boolean {
    return this.item.value === undefined
  }

  /**
   * Getting global check data.
   *
   * Получение данных глобальной проверки.
   */
  protected getValidationCheck(): FieldValidationItem {
    if (this.value.isFull.value) {
      const item = this.value.getForCheck()

      if (this.pattern.isCheck()) {
        const check = this.pattern.getInput(item.group)?.check(item.value)

        if (check && !check.status) {
          return check
        }
      }

      return {
        group: FieldInputCheckInclude.getGroupDefault(),
        status: true,
        value: item.value,
        isFull: true
      }
    }

    return {
      group: FieldInputCheckInclude.getGroupDefault(),
      status: true,
      value: this.value.item.value,
      isFull: false
    }
  }
}
