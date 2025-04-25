// export:none

import { isFilled, isObjectNotArray } from '@dxt-ui/functional'

import { PropertiesItems } from '../Properties/PropertiesItems'

import { StylesTool } from './StylesTool'
import { StylesProperties } from './StylesProperties'

import {
  PropertyCategory,
  type PropertyItemsItem,
  PropertyKey
} from '../../types/propertyTypes'

export type StylesClassesItem = {
  data: string[]
  classes: Record<string, string[]>
}

/**
 * A class for generating base classes.
 *
 * Класс для генерации базовых классов.
 */
export class StylesClasses {
  /**
   * Constructor
   * @param items
   */

  constructor(private items: PropertiesItems) {
  }

  /**
   * Generating all base classes.
   *
   * Генерация всех базовых классов.
   */
  init(): StylesClassesItem {
    const data: StylesClassesItem['data'] = []
    const classes: StylesClassesItem['classes'] = {}
    const space = StylesTool.addSpace(1)

    this.getList().forEach((property) => {
      const {
        value,
        item
      } = property

      if (
        isFilled(value)
        && isObjectNotArray(value)
      ) {
        const name = item[PropertyKey.name] as string

        data.push(StylesTool.addUse(`./classes/${name}`))

        classes[name] = [
          StylesTool.addImportProperties(),
          '',
          `.${name} {`,
          ...(new StylesProperties(space, property)).make(),
          '}'
        ]
      }
    })

    return {
      data,
      classes
    }
  }

  /**
   * Getting all properties from base variables.
   *
   * Получение всех свойств из базовых переменных.
   */
  private getList(): PropertyItemsItem[] {
    return this.items.findCategory([
      PropertyCategory.class,
      PropertyCategory.theme
    ])
  }
}
