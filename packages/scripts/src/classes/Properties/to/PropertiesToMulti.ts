// export:none

import { forEach, isFilled, isObjectNotArray } from '@dxt-ui/functional'

import { PropertiesToAbstract } from './PropertiesToAbstract'

import {
  type PropertyItem,
  type PropertyItemsItem,
  PropertyKey,
  type PropertyList,
  PropertyType
} from '../../../types/propertyTypes'

const TYPE = [
  PropertyType.var,
  PropertyType.state
]

/**
 * Class for converting properties with multiple values.
 *
 * Класс для преобразования свойств с множеством значений.
 */
export class PropertiesToMulti extends PropertiesToAbstract {
  protected readonly FILE_CACHE = '012-multi'

  /**
   * Converts property records with multiple types.
   *
   * Преобразует записи свойств со множеством типов.
   */
  protected init(): void {
    this.getList().forEach(({
      item,
      name,
      value
    }) => {
      this.read(
        this.items.getReName(name, item),
        value as PropertyList,
        item?.[PropertyKey.varKey] ?? false
      )

      item[PropertyKey.variable] = PropertyType.state
    })
  }

  /**
   * Returns a list of properties with multiple values.
   *
   * Возвращает список свойств с множеством значений.
   */
  private getList(): PropertyItemsItem[] {
    return this.items.each((property) => {
      const {
        item,
        value
      } = property

      if (
        item?.[PropertyKey.variable] === PropertyType.property
        && isFilled(value)
        && isObjectNotArray(value)
      ) {
        return property
      }
    }) as PropertyItemsItem[]
  }

  /**
   * Transformation for the element.
   *
   * Преобразование для элемента.
   * @param name property name/ название свойства transformed/
   * массив, который нужно преобразовать
   * @param properties array with all property records/ массив со всеми записями свойств
   * @param isVar should i convert the type to var/ надо ли преобразовывать тип в var
   */
  private read(
    name: string,
    properties: PropertyList,
    isVar: boolean
  ) {
    forEach(properties, (item) => {
      if (
        typeof item.value === 'string'
        && item?.[PropertyKey.variable]
        && TYPE.indexOf(item[PropertyKey.variable]) !== -1
      ) {
        item[PropertyKey.variable] = PropertyType.state
        item.value = {
          [name]: {
            value: item.value,
            [PropertyKey.variable]: isVar ? PropertyType.var : PropertyType.property
          }
        } as PropertyItem['value']
      }
    })
  }
}
