// export:none

import { forEach, isFilled, isObjectNotArray } from '@dxt-ui/functional'

import { PropertiesConfig } from '../PropertiesConfig'
import { PropertiesToAbstract } from './PropertiesToAbstract'

import {
  type PropertyItem,
  type PropertyItemsItem,
  type PropertyItemsParent,
  PropertyKey
} from '../../../types/propertyTypes'

/**
 * Class for managing the translation of a property from one branch to another.
 *
 * Класс для управления переводом свойства из одной ветки в другую.
 */
export class PropertiesToDrag extends PropertiesToAbstract {
  protected readonly FILE_CACHE = '007-03-drag'

  protected init(): void {
    this.read()
  }

  /**
   * Getting a list with basic settings.
   *
   * Получение списка с базовыми настройками.
   * @param property property value/ значение свойства
   */
  protected getDragSetting(
    property: PropertyItemsItem
  ): Record<string, PropertyItem> | undefined {
    const {
      design,
      component,
      item
    } = property

    if (
      component
      && item?.[PropertyKey.dragSetting]
    ) {
      const dragSetting = item?.[PropertyKey.dragSetting]
      const dragSettingList: Record<string, string> = typeof dragSetting === 'object' ? dragSetting : { _all: dragSetting }
      const data: Record<string, PropertyItem> = {}

      forEach(dragSettingList, (setting, name) => {
        const itemSetting = this.items.getItem(
          this.items.getLink(
            design,
            component,
            setting
          )
        )

        if (itemSetting) {
          data[name] = {
            ...itemSetting,
            value: {}
          }
        }
      })

      if (Object.keys(data).length > 0) {
        return data
      }
    }

    return undefined
  }

  /**
   * Beginning of data processing.
   *
   * Начало обработки данных.
   * @param properties values for verification/ значения для проверки
   */
  protected read(
    properties?: PropertyItemsItem
  ) {
    this.items.eachMainOnly(
      (property) => {
        const {
          name,
          item,
          parent,
          parents
        } = property

        const newParents = [
          ...parents,
          {
            name,
            item
          }
        ]

        this.read({
          ...property,
          parents: newParents
        })

        if (item?.[PropertyKey.drag]) {
          const itemDragSetting = this.getDragSetting(property)
          const itemDrag = this.drag(
            newParents,
            item,
            itemDragSetting ?? {}
          )

          if (
            parent
            && isObjectNotArray(parent.value)
            && itemDrag
            && this.toGo(item, itemDrag)
          ) {
            delete parent.value[name]
          }
        }
      },
      properties
    )
  }

  /**
   * We get an object to transfer data.
   *
   * Получаем объект для переноса данных.
   * @param parents list of ancestors/ список предков
   * @param item starting element/ начальный элемент
   * @param setting settings for new elements/ настройки для новых элементов
   */
  protected drag(
    parents: PropertyItemsParent[],
    item: PropertyItem,
    setting: Record<string, PropertyItem>
  ): PropertyItem | undefined {
    const paths = item?.[PropertyKey.drag]?.split(PropertiesConfig.getSeparator()) ?? []

    if (parents.length > 0) {
      let focusParent = parents.length - 1
      let focus: PropertyItem = parents[focusParent].item
      let blockTop = false

      paths.forEach((dir) => {
        switch (dir) {
          case '.':
            if (!blockTop) {
              focusParent = 0
              focus = parents[focusParent].item
            }
            break
          case '..':
            if (!blockTop) {
              if (--focusParent < 0) {
                focusParent = 0
              }

              focus = parents[focusParent].item
            }
            break
          default:
            if (
              focus
              && isObjectNotArray(focus.value)
            ) {
              if (!(dir in focus.value)) {
                focus.value[dir] = (setting?.[dir] ?? setting._all ?? { value: {} }) as PropertyItem
              }

              blockTop = true
              focus = focus.value[dir]
            }

            break
        }
      })

      if (focus !== item) {
        return focus
      }
    }

    return undefined
  }

  /**
   * Move elements to a new place.
   *
   * Перенести элементы на новое место.
   * @param item starting element/ начальный элемент
   * @param itemDrag place of transfer/ место переноса
   */
  protected toGo(
    item: PropertyItem,
    itemDrag: PropertyItem
  ): boolean {
    const itemDragValue = itemDrag.value

    if (
      isObjectNotArray(itemDragValue)
    ) {
      if (isObjectNotArray(item.value)) {
        forEach(item.value, (value, index) => {
          if (!(index in itemDragValue)) {
            itemDragValue[index] = value
          } else if (!isFilled(itemDragValue[index].value)) {
            itemDragValue[index].value = value.value
          }
        })
      } else {
        const index = item?.[PropertyKey.index]

        if (index) {
          if (!(index in itemDragValue)) {
            itemDragValue[index] = item
          } else if (!isFilled(itemDragValue[index].value)) {
            itemDragValue[index].value = item.value
          }
        }
      }

      return true
    }

    return false
  }
}
