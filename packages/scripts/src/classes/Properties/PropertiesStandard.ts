// export:none

import { forEach, isFilled, isObjectNotArray, replaceRecursive } from '@dxtmisha/functional-basic'

import { PropertiesKeys } from './PropertiesKeys'
import { PropertiesTypes } from './PropertiesTypes'
import { PropertiesValues } from './PropertiesValues'

import {
  type PropertyItem,
  type PropertyItemInput,
  type PropertyItemPartial,
  PropertyKey,
  type PropertyList,
  type PropertyListOrData
} from '../../types/propertyTypes'

/**
 * Class for transforming raw property data into a standardized structure for internal processing.
 *
 * Класс для преобразования сырых данных свойств в стандартизированную структуру для внутренней обработки.
 */
export class PropertiesStandard {
  /**
   * Transforms a property list or raw data into a standardized PropertyList structure.
   *
   * Преобразует список свойств или сырые данные в стандартизированную структуру PropertyList.
   * @param properties the property list or data to transform / список свойств или данные для преобразования
   */
  static to(properties: PropertyListOrData): PropertyList {
    const data: PropertyList = {}

    forEach(properties, (item, index) => {
      const newItem = this.getItem(index, item)
      const key = PropertiesKeys.reKey(index, newItem?.[PropertyKey.type])

      if (isObjectNotArray(newItem.value)) {
        newItem.value = this.to(newItem.value)
      }

      this.addValue(newItem)

      newItem[PropertyKey.index] = index.replace(/^=/, '')

      if (key in newItem) {
        data[key] = replaceRecursive(data[key] ?? {}, newItem) as PropertyItem
      } else {
        data[key] = newItem
      }
    })

    return data
  }

  /**
   * We get the values that have been updated.
   *
   * Получаем доработанные значения.
   * @param name key name/ название ключа
   * @param item values for conversion/ значения для преобразования
   */
  private static getItem(
    name: string,
    item: PropertyItemInput
  ): PropertyItem {
    const newItem = this.toItem(item)

    this.addType(name, newItem)
    this.addFull(name, newItem)

    return newItem as PropertyItem
  }

  /**
   * Separate a special property from regular values.
   *
   * Разделить специальное свойство от обычных значений.
   * @param property an array that needs to be transformed/
   * массив, который нужно преобразовать
   */
  private static getValueAndSpecial(property: PropertyItemInput): PropertyItemPartial {
    const data: Record<string, any> = {
      value: property?.value || {}
    }

    forEach(property, (item, name) => {
      if (PropertiesKeys.isSpecialKey(name)) {
        data[name] = item
      } else {
        data.value[name] = item as PropertyItemPartial['value']
      }
    })

    return data
  }

  /**
   * Adds the type if it exists.
   *
   * Добавляет тип, если есть.
   * @param name key name/ название ключа
   * @param item values for conversion/ значения для преобразования
   */
  private static addType(
    name: string,
    item: PropertyItemPartial
  ): void {
    if (!(PropertyKey.type in item)) {
      const type = PropertiesTypes.getTypeInName(name)

      if (type) {
        item[PropertyKey.type] = type
      }
    }
  }

  /**
   * Adds a label that the property name is the final version and does not require additional processing.
   *
   * Добавляет метку, что имя свойства является финальной версией и не требует дополнительной обработки.
   * @param name key name/ название ключа
   * @param item values for conversion/ значения для преобразования
   */
  private static addFull(
    name: string,
    item: PropertyItemPartial
  ): void {
    if (PropertiesKeys.isFull(name)) {
      item[PropertyKey.fullName] = true
    }

    if (
      typeof item.value === 'string' && (
        PropertiesValues.isFull(item.value)
        || name.match(/aspect/i)
      )
    ) {
      item[PropertyKey.fullValue] = true
    }
  }

  /**
   * Converts values to string, if they are of type number.
   *
   * Преобразовывает значения в строку, если являются типом число.
   * @param item values for conversion/ значения для преобразования
   * @private
   */
  private static addValue(item: PropertyItemPartial): void {
    item.value = PropertiesValues.reValue(item.value)
  }

  /**
   * Transform the property value into the required format.
   *
   * Преобразовать значение свойства в необходимый формат.
   * @param value values for conversion/ значения для преобразования
   */
  private static toItem(value: PropertyItemPartial['value']): PropertyItemPartial {
    if (
      typeof value !== 'object'
      || Array.isArray(value)
    ) {
      return { value } as PropertyItemPartial
    }

    if (isFilled(value)) {
      if (
        !('value' in value)
        || isObjectNotArray(value.value)
      ) {
        return this.getValueAndSpecial(value)
      }

      return value
    }

    return { value: {} }
  }
}
