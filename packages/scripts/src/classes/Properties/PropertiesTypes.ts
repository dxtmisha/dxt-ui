// export:none

import { isFilled, isSelected, toKebabCase } from '@dxtmisha/functional'

import {
  type PropertyItem,
  PropertyType
} from '../../types/propertyTypes'

/**
 * Class with a list of available types.
 *
 * Класс со списком доступных типов.
 */
export class PropertiesTypes {
  private static readonly SYMBOLS: Record<string, string> = {
    '$': PropertyType.var,
    '::': PropertyType.virtual,
    ':': PropertyType.selector,
    '~': PropertyType.state,
    '#': PropertyType.subclass,
    '@@': PropertyType.linkClass,
    '@': PropertyType.link,
    '&&': PropertyType.root,
    '&': PropertyType.scss,
    '--': PropertyType.none
  }

  /**
   * Checks if the list contains such a type.
   *
   * Проверяет, входит ли в список такой тип.
   * @param type property type/ тип свойства
   * @param name key name/ название ключа
   */
  static isInType(
    type?: PropertyItem['_type'],
    name?: PropertyType[]
  ): boolean {
    if (
      isFilled(type)
      && isFilled(name)
    ) {
      return Boolean(isSelected(type, name))
    }

    return false
  }

  /**
   * Checks if there is a type in the name of the property.
   *
   * Проверяет, если есть тип в названии свойства.
   * @param name key name/ название ключа
   */
  static isTypeInName(name: string): boolean {
    return Boolean(name.match(this.getExpSymbols()))
  }

  /**
   * Checks if it is a media type.
   *
   * Проверяет, если в тип медиа.
   * @param type list of types/ список типы
   */
  static isMedia(type: PropertyItem['_type']): boolean {
    return this.isInType(type, [PropertyType.media, PropertyType.mediaMax])
  }

  /**
   * Checks if it is a container type.
   *
   * Проверяет, если в тип контейнера.
   * @param type list of types/ список типы
   */
  static isContainer(type: PropertyItem['_type']): boolean {
    return this.isInType(type, [PropertyType.container, PropertyType.containerMax])
  }

  /**
   * Is the property a SCSS selector.
   *
   * Является ли свойство выборки SCSS.
   * @param name key name/ название ключа
   */
  static isScss(name: string): boolean {
    return name === PropertyType.scss || Boolean(name.match(/^&(?!&)/))
  }

  /**
   * Is the property extraction SCSS for @at-root.
   *
   * Является ли свойство выборки SCSS для @at-root.
   * @param name key name/ название ключа
   */
  static isRoot(name: string): boolean {
    return name === PropertyType.root || Boolean(name.match(/^&&/))
  }

  /**
   * Returns the variable type name from the property name.
   *
   * Возвращает название типа переменной из названия свойства.
   * @param name key name/ название ключа
   */
  static getTypeInName(name: string): PropertyItem['_type'] {
    if (this.isTypeInName(name)) {
      const type = name.replace(this.getExpSymbols(), '$1')

      if (type in this.SYMBOLS) {
        return this.SYMBOLS[type] as PropertyType
      }

      return toKebabCase(type) as PropertyType
    }

    return null
  }

  /**
   * Returns the name of the property by its symbol.
   *
   * Возвращает название свойства по его символу.
   * @param name type names/ названия типа
   */
  static getBySymbol(name: string): string | undefined {
    return this.SYMBOLS?.[name]
  }

  /**
   * Returns a regular expression for searching symbols in names.
   *
   * Возвращает регулярное выражение для поиска символов в названиях.
   */
  static getExpSymbols(): RegExp {
    return new RegExp(`^(${this.symbolsToString()}|[\\w-]+(?=[|]))(.*?)$`)
  }

  /**
   * Converting symbol keys to strings.
   *
   * Преобразование ключей-символов в строки.
   */
  private static symbolsToString(): string {
    return Object.keys(this.SYMBOLS).join('|')
  }
}
