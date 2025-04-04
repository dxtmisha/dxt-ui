// export:none

import { type PropertyItemPartial } from '../../types/propertyTypes'

/**
 * Class for working with the values.
 *
 * Класс для работы со значениями.
 */
export class PropertiesValues {
  /**
   * Checks if the values are complete.
   *
   * Проверяет, является ли значение полным.
   * @param value property value/ значение свойства
   */
  static isFull(value: PropertyItemPartial['value']): value is string {
    return typeof value === 'string' && Boolean(value.match(this.getExpFull()))
  }

  /**
   * Checks if the value is a color value.
   *
   * Проверяет, является ли значение цветом.
   * @param value property value/ значение свойства
   */
  static isColor(value: PropertyItemPartial['__c']): boolean {
    return Boolean(
      typeof value === 'string' && (
        value.match(/^#/i)
      )
    )
  }

  /**
   * Checks if the value is a color with transparency.
   *
   * Проверяет, является ли значение цветом с прозрачности.
   * @param value property value/ значение свойства
   */
  static isColorWithOpacity(value: PropertyItemPartial['__c']): boolean {
    return Boolean(
      typeof value === 'string' && (
        value.match(/^#[a-z0-9]{8}/i)
      )
    )
  }

  /**
   * Removes unnecessary values from the values.
   *
   * Убирает лишние значения из значений.
   * @param value property value/ значение свойства
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
