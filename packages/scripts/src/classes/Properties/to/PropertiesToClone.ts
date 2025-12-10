// export:none

import { forEach, isObjectNotArray } from '@dxtmisha/functional-basic'

import { PropertiesToAbstract } from './PropertiesToAbstract'

import {
  type PropertyItem,
  PropertyKey,
  PropertyType
} from '../../../types/propertyTypes'

const IGNORES: string[] = [
  PropertyKey.value,
  PropertyKey.settingClone
]

const IGNORES_TYPE: string[] = [
  PropertyType.var,
  PropertyType.property
]

/**
 * Class for duplicating configuration parameters to child elements.
 *
 * Класс для дублирования параметров настройки к дочерним элементам.
 */
export class PropertiesToClone extends PropertiesToAbstract {
  protected readonly FILE_CACHE = '007-01-clone'

  protected init(): void {
    this.items.each(({
      name,
      item,
      parent
    }) => {
      if (
        parent
        && item?.[PropertyKey.settingClone]
      ) {
        this.update(
          item,
          this.findItem(parent, name)
        )
      }
    })
  }

  /**
   * Search in child elements for similar properties.
   *
   * Поиск в дочерних элементах похожих свойств.
   * @param parent starting element for search/ начальный элемент для поиска
   * @param name property name/ название свойства
   */
  protected findItem(
    parent: PropertyItem,
    name: string
  ): PropertyItem[] {
    const data: PropertyItem[] = []

    if (isObjectNotArray(parent.value)) {
      forEach(parent.value, (item, itemName) => {
        if (
          itemName === name
          && IGNORES_TYPE.indexOf(item?.type ?? '') < 0
        ) {
          data.push(item)
        }

        data.push(...this.findItem(item, name))
      })
    }

    return data
  }

  /**
   * Data update for selected elements.
   *
   * Обновление данных для выбранных элементов.
   * @param original original element/ оригинальный элемент
   * @param properties element for update/ элемент для обновления
   */
  protected update(
    original: PropertyItem,
    properties: PropertyItem[]
  ) {
    const originalValue = original.value

    properties.forEach((property) => {
      forEach(original, (value, index: keyof PropertyItem) => {
        if (
          index
          && !(index in property)
          && IGNORES.indexOf(index) < 0
        ) {
          property[index] = value as never
        }
      })

      if (
        isObjectNotArray(originalValue)
        && isObjectNotArray(property.value)
      ) {
        forEach(property.value, (item, index) => {
          if (originalValue?.[index]) {
            this.update(originalValue[index], [item])
          }
        })
      }
    })
  }
}
