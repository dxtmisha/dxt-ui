// export:none

import { type PropertyItemPartial } from '../../types/propertyTypes'

/**
 * Utility class for validating and normalizing design system property values.
 *
 * Утилитарный класс для валидации и нормализации значений свойств дизайн-системы.
 */
export class PropertiesValues {
  /**
   * Checks if the value is marked as "full" (starting with `=`), meaning it doesn't require further processing.
   *
   * Проверяет, помечено ли значение как «полное» (начинается с `=`), что означает отсутствие необходимости дальнейшей обработки.
   * @param value property value / значение свойства
   */
  static isFull(value: PropertyItemPartial['value']): value is string {
    return typeof value === 'string' && Boolean(value.match(this.getExpFull()))
  }

  /**
   * Identifies if the value is a hex color string.
   *
   * Определяет, является ли значение строкой цвета в формате HEX.
   * @param value property value / значение свойства
   */
  static isColor(value: PropertyItemPartial['__c']): boolean {
    return Boolean(
      typeof value === 'string' && (
        value.match(/^#/i)
      )
    )
  }

  /**
   * Identifies if the value is a hex color string with an alpha channel (opacity).
   *
   * Определяет, является ли значение строкой цвета HEX с альфа-каналом (прозрачностью).
   * @param value property value / значение свойства
   */
  static isColorWithOpacity(value: PropertyItemPartial['__c']): boolean {
    return Boolean(
      typeof value === 'string' && (
        value.match(/^#[a-z0-9]{8}/i)
      )
    )
  }

  /**
   * Cleans up the value by removing the "full" marker or converting numeric values to strings.
   *
   * Очищает значение, удаляя маркер «полноты» или преобразовывая числовые значения в строки.
   * @param value property value / значение свойства
   */
  static reValue(value: PropertyItemPartial['value']): PropertyItemPartial['value'] {
    if (this.isFull(value)) {
      return value.replace(this.getExpFull(), '')
    }

    if (typeof value === 'number') {
      return value.toString()
    }

    return value
  }

  /**
   * Returns a regular expression for validating the format of a value.
   *
   * Возвращает регулярное выражение для проверки полного формата значения.
   */
  static getExpFull(): RegExp {
    return /^=/
  }
}
