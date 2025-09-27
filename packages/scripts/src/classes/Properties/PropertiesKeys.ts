import { toCamelCase } from '@dxtmisha/functional'

import { PropertiesConfig } from './PropertiesConfig'
import { PropertiesTypes } from './PropertiesTypes'

import { type PropertyItem } from '../../types/propertyTypes'

/**
 * Key with all special keys for token processing.
 *
 * Ключ со всеми специальными ключами для обработки токенов.
 */
export class PropertiesKeys {
  /**
   * Checks if the variable is a special value.
   *
   * Проверяет, является ли переменная специальным значением.
   * @param key key name/ название ключа
   */
  static isSpecialKey(key: string | number): key is keyof PropertyItem {
    return typeof key === 'string' && (
      ['value', 'type', 'description'].indexOf(key) !== -1
      || Boolean(key.match(/^_/))
    )
  }

  /**
   * Checks whether the name is complete.
   *
   * Проверяет, является ли название полным.
   * @param name key name/ название ключа
   */
  static isFull(name: string): boolean {
    return Boolean(name.match(/^=|\|=/))
  }

  /**
   * Checks if the property is suitable for splitting.
   *
   * Проверяет, подходит ли свойство для разделения.
   * @param name property names/ названия свойств
   * @private
   */
  static isSeparator(name: string): boolean {
    return Boolean(name.match(PropertiesConfig.getSeparator()))
  }

  /**
   * Returns the property name, discarding its prefix.
   *
   * Возвращает имя свойства, отбрасывая его префикс.
   * @param name key name/ название ключа
   * @param camelCase to convert case/ преобразуйте этот текст в верхний регистр
   */
  static getName(name: string, camelCase = true): string {
    const newName = name
      .replace(PropertiesTypes.getExpSymbols(), '$2')
      .replace(/^[|]/, '')

    if (
      this.isSeparator(newName)
      || !camelCase
    ) {
      return newName
    }

    return toCamelCase(newName)
  }

  /**
   * Transformed key name by its type.
   *
   * Преобразованное название ключа по его типу.
   * @param key property name/ название свойства
   * @param type property type/ тип свойства
   */
  static reKey(
    key: string,
    type?: PropertyItem['_type']
  ): string {
    const name = this.getName(key)

    if (type) {
      if (
        PropertiesTypes.isMedia(type)
        && !name.match(/^media[A-Z]/)
      ) {
        return toCamelCase(`${type}-${name}`)
      }

      if (
        PropertiesTypes.isContainer(type)
        && !name.match(/^container[A-Z]/)
      ) {
        return toCamelCase(`${type}-${name}`)
      }

      if (
        PropertiesTypes.isScss(type)
      ) {
        return `&${this.getName(key, false)}`
      }

      if (
        PropertiesTypes.isRoot(type)
      ) {
        return this.getName(key, false)
      }
    }

    return name
  }
}
