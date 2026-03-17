// export:none

import { toCamelCase } from '@dxtmisha/functional-basic'

import { PropertiesConfig } from './PropertiesConfig'
import { PropertiesTypes } from './PropertiesTypes'

import { type PropertyItem } from '../../types/propertyTypes'

/**
 * Parser and transformer for property key semantics.
 * This static utility class handles the identification of special system keys (like metadata or internal references) and orchestrates the transformation of raw key names into normalized, context-aware tokens (e.g., prepending media types or converting to camelCase).
 *
 * Парсер и трансформер семантики ключей свойств.
 * Этот статический вспомогательный класс обрабатывает идентификацию специальных системных ключей (таких как метаданные или внутренние ссылки) и координирует преобразование необработанных имен ключей в нормализованные токены с учетом контекста (например, добавление типов медиа или преобразование в camelCase).
 */
export class PropertiesKeys {
  /**
   * Identifies if a key is a protected system metadata key or an internal reference.
   * Special keys include 'value', 'type', 'description', and any key starting with an underscore (internal engine states).
   *
   * Определяет, является ли ключ защищенным системным ключом метаданных или внутренней ссылкой.
   * Специальные ключи включают 'value', 'type', 'description' и любой ключ, начинающийся с подчеркивания (внутренние состояния движка).
   * @param key the key name to verify / название ключа для проверки
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
   * Normalizes a raw key name by removing metadata prefixes and applying casing rules.
   * Strips internal type symbols and leading pipes, then optionally converts the result to camelCase (unless the name is a path separator).
   *
   * Нормализует необработанное имя ключа, удаляя префиксы метаданных и применяя правила регистра.
   * Очищает внутренние символы типов и ведущие вертикальные черты, затем опционально преобразует результат в camelCase (если имя не является разделителем пути).
   * @param name the raw key name / необработанное имя ключа
   * @param camelCase whether to apply camelCase transformation / нужно ли применять преобразование в camelCase
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
