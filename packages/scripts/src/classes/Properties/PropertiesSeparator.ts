// export:none

import { forEach, isObjectNotArray, replaceRecursive } from '@dxtmisha/functional-basic'

import { PropertiesConfig } from './PropertiesConfig'
import { PropertiesKeys } from './PropertiesKeys'

import {
  type PropertyItem,
  PropertyKey,
  type PropertyList
} from '../../types/propertyTypes'

/**
 * Class for handling the splitting of property names with separators into nested sub-properties.
 *
 * Класс для работы с разделением названий свойств с разделителями на вложенные под-свойства.
 */
export class PropertiesSeparator {
  /**
   * Checks if the property list contains any keys that require splitting (contain separators).
   *
   * Проверяет, содержит ли список свойств ключи, требующие разделения (содержащие разделители).
   * @param properties list of properties to check / список свойств для проверки
   * @param limit maximum recursion depth for verification / максимальная глубина рекурсии для проверки
   */
  static is(
    properties: PropertyList,
    limit = PropertiesConfig.getSeparatorLimit()
  ): boolean {
    if (limit > 0) {
      for (const index in properties) {
        if (PropertiesKeys.isSeparator(index)) {
          return true
        }

        const value = properties?.[index]?.value

        if (
          value
          && isObjectNotArray(value)
          && this.is(value, limit - 1)
        ) {
          return true
        }
      }
    }

    return false
  }

  /**
   * Transforms properties with separator-containing keys into a nested object structure.
   *
   * Преобразует свойства с ключами, содержащими разделители, во вложенную структуру объектов.
   * @param properties the property list to transform / список свойств для преобразования
   */
  static to(properties: PropertyList): PropertyList {
    let data: PropertyList = {}

    forEach(properties, (item, name) => {
      const newItem: PropertyItem = {
        ...item,
        value: isObjectNotArray(item.value) ? this.to(item.value) : item.value
      }

      if (PropertiesKeys.isSeparator(name)) {
        data = replaceRecursive(data, this.wrap(newItem, this.removeBasicName(name)))
      } else {
        data = replaceRecursive(data, { [name]: newItem })
      }
    })

    return data
  }

  /**
   * Removing unnecessary characters from the name.
   *
   * Удаление лишних символов из названия.
   * @param name property names/ названия свойств
   */
  private static removeBasicName(name: string): string[] {
    const separator = PropertiesConfig.getSeparator()
    const basicName = PropertiesConfig.getSeparatorBasicName()

    return name
      .replace(new RegExp(`${separator}${basicName}`, 'g'), '')
      .replace(new RegExp(`${separator}$`), '')
      .split(separator)
  }

  /**
   * Packs a property into objects by an array of titles.
   *
   * Упаковывает свойство в объекты по массиву названий.
   * @param item property values/ значения свойств
   * @param list array of titles/ массив названий
   */
  private static wrap(item: PropertyItem, list: string[]): PropertyList {
    let data = item;

    [...list]
      .reverse()
      .forEach((name) => {
        data = {
          value: {
            [name]: {
              ...data,
              [PropertyKey.wrap]: true
            }
          }
        }
      })

    return data.value as PropertyList
  }
}
