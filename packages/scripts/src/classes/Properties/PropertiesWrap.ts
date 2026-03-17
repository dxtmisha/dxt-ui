// export:none

import { forEach, isObjectNotArray } from '@dxtmisha/functional-basic'

import {
  PropertyKey,
  type PropertyList,
  type PropertyWrapFocus,
  type PropertyWrapItem,
  type PropertyWrapList
} from '../../types/propertyTypes'

/**
 * Utility class for optimizing the property structure by moving duplicated data to a higher level.
 *
 * Утилитарный класс для оптимизации структуры свойств путем переноса дублирующихся данных на более высокий уровень.
 */
export class PropertiesWrap {
  /**
   * Analyzes the property list and moves duplicate properties to the parent level to reduce redundancy.
   *
   * Анализирует список свойств и переносит дублирующиеся свойства на родительский уровень для уменьшения избыточности.
   * @param properties property list to transform / список свойств для преобразования
   */
  static to(properties: PropertyList): void {
    forEach(properties, (item) => {
      if (isObjectNotArray(item.value)) {
        this.to(item.value)

        if (item?.[PropertyKey.wrap]) {
          const value = item.value
          const selectors = this.getSelectors(value)

          if (selectors.quantity > 1) {
            forEach(selectors.properties, (property, name) => {
              if (name in value) {
                const valueName = value[name]?.value

                if (typeof valueName === 'string') {
                  this.removeProperties(name, property?.values?.[valueName])
                }
              } else if (property.quantity === selectors.quantity) {
                const repeat = this.getMaxRepeat(property.values)

                if (repeat) {
                  value[name] = {
                    ...repeat.item[0]?.[name],
                    value: repeat.value
                  }

                  this.removeProperties(name, repeat.item)
                }
              }
            })
          }

          delete item[PropertyKey.wrap]
        }
      }
    })
  }

  /**
   * Adds a new property if it does not exist and returns an object to work with this property.
   *
   * Добавляет новое свойство, если его нет, и возвращает объект для работы с этим свойством.
   * @param data object with all the collected data/ объект со всеми собранными данными
   * @param name the name of the property/ название свойства
   */
  private static getSelector(
    data: PropertyWrapList['properties'],
    name: string
  ): PropertyWrapItem {
    if (!(name in data)) {
      data[name] = {
        values: {},
        quantity: 0
      }
    }

    return data[name] as PropertyWrapItem
  }

  /**
   * The method processes the properties and returns all the names of the property and its values.
   *
   * Метод обрабатывает свойства и возвращает все названия свойства и его значения.
   * @param properties an array that needs to be transformed/
   * массив, который нужно преобразовать
   */
  private static getSelectors(properties: PropertyList): PropertyWrapList {
    const data: PropertyWrapList = {
      properties: {},
      quantity: 0
    }

    forEach(properties, (item) => {
      if (isObjectNotArray(item.value)) {
        data.quantity++
        this.addItem(data.properties, item.value)
      }
    })

    return data
  }

  /**
   * Returns values with maximum repetitions.
   *
   * Возвращает значения с максимальными повторами.
   * @param properties values for verification/ значения для проверки
   */
  private static getMaxRepeat(properties: PropertyWrapItem['values']): PropertyWrapFocus | undefined {
    let max = 0
    let focus: PropertyWrapFocus | undefined

    forEach(properties, (item, value) => {
      if (
        item.length > 1 && (
          item.length > max
          || focus === undefined
        )
      ) {
        max = item.length
        focus = {
          value,
          item
        }
      }
    })

    return focus
  }

  /**
   * Adds values to the current property and returns an array for adding a data source.
   *
   * Добавляет значения к текущему свойству и возвращает массив для добавления источника данных.
   * @param selector an object to work with the current property/ объект для работы с текущим свойством
   * @param value the value of the property/ значение свойства
   */
  private static getValue(
    selector: PropertyWrapItem,
    value: string
  ): PropertyList[] {
    if (!(value in selector.values)) {
      selector.values[value] = []
    }

    return selector.values[value] as PropertyList[]
  }

  /**
   * Adding information about the property and its values.
   *
   * Добавления информация об свойство и его значения.
   * @param data object with all the collected data/ объект со всеми собранными данными
   * @param properties list of properties/ свойств
   */
  private static addItem(
    data: PropertyWrapList['properties'],
    properties: PropertyList
  ): void {
    forEach(properties, (item, name) => {
      const selector = this.getSelector(data, name)
      const values = this.getValue(selector, item.value as string)

      selector.quantity++
      values.push(properties)
    })
  }

  /**
   * Deletes all records with the property that was moved up the tree.
   *
   * Удаляет все записи с свойством, которое было перенесено выше по дереву.
   * @param name the name of the property for deletion/ название свойства для удаления
   * @param properties an array with properties by the same values/
   * массив со свойствами по одинаковым значениям
   */
  private static removeProperties(
    name: string,
    properties?: PropertyList[]
  ): void {
    properties?.forEach(item => delete item[name])
  }
}
