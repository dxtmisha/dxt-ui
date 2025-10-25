// export:none

import { forEach, getColumn, isObjectNotArray, toCamelCase } from '@dxtmisha/functional'

import { PropertiesItems } from './PropertiesItems'

import {
  PropertyCategory,
  type PropertyItem,
  PropertyKey,
  type PropertyPaletteList,
  type PropertyPaletteUsed,
  PropertyType
} from '../../types/propertyTypes'

/**
 * Class for working with colors.
 *
 * Класс для работы с цветами.
 */
export class PropertiesPalette {
  /**
   * Constructor
   * @param items
   */

  constructor(private items: PropertiesItems) {
  }

  /**
   * Returns a list of available saturation levels.
   *
   * Возвращает список доступных уровней насыщенности.
   */
  getShade(): PropertyPaletteList {
    return forEach(this.items.findCategory(PropertyCategory.shade), ({
      design,
      value
    }) => {
      if (isObjectNotArray(value)) {
        return {
          design,
          value: getColumn(value, 'value')
        }
      }

      return undefined
    }) as PropertyPaletteList
  }

  /**
   * Getting a list of used values.
   *
   * Получаем список использованных значений.
   */
  getUsed(): PropertyPaletteUsed[] {
    const list = this.getList()
    const data: PropertyPaletteUsed[] = []

    this.items.each(({
      design,
      component,
      value,
      item,
      parents
    }) => {
      if (
        component
        && typeof value === 'string'
        && item?.[PropertyKey.variable] === PropertyType.var
        && item?.[PropertyKey.category] !== PropertyCategory.color
        && item?.[PropertyKey.name]
      ) {
        const focusValue = this.getFocusUsed(list, design, component, value)

        if (focusValue) {
          const name = item[PropertyKey.name]
          const code = data.find(code => code.name === name)
          const theme = parents.find(parent => parent.item[PropertyKey.category] === 'theme')?.name || 'basic'
          const color = `--${design}-palette-${toCamelCase(`${theme}-${focusValue.match(/\.([^.{}]+)}/)?.[1]}`)}`

          if (code) {
            code.value.push(color)
          } else {
            data.push({
              name,
              value: [color]
            })
          }
        }
      }
    })

    return data
  }

  getFocusUsed(
    list: PropertyItem['value'][],
    design: string,
    component: string,
    value: string
  ): string | undefined {
    const data = this.items.getLink(
      design,
      component,
      value
    )

    if (list.indexOf(data) !== -1) {
      return value
    }

    const item = this.items.getInfo(data)

    if (
      item
      && item.design === design
      && typeof item.component === 'string'
      && typeof item.value === 'string'
    ) {
      return this.getFocusUsed(
        list,
        item.design,
        item.component,
        item.value
      )
    }

    return undefined
  }

  /**
   * Getting a list of all colors.
   *
   * Получение списка всех цветов.
   */
  private getList(): PropertyItem['value'][] {
    return forEach(
      this.items.findCategory(PropertyCategory.color),
      ({ value }) => value
    )
  }
}
