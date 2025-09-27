import * as sass from 'sass'

import { PropertiesItems } from '../Properties/PropertiesItems'

import { StylesTool } from './StylesTool'
import { StylesToVar } from './to/StylesToVar'

import {
  PropertyCategory,
  type PropertyItemsItem
} from '../../types/propertyTypes'

/**
 * Class for generating base properties from tokens.
 *
 * Класс для генерации базовых свойств из токенов.
 */
export class StylesRoot {
  /**
   * Constructor
   * @param items
   */

  constructor(
    private items: PropertiesItems
  ) {
  }

  /**
   * Generating all basic token values.
   *
   * Генерация всех базовых значений токенов.
   */
  init(): string[] {
    const space = StylesTool.addSpace(1)
    const data: string[] = [
      ':root {'
    ]

    this.getList().forEach(
      property => data.push(...(new StylesToVar(property, space).make()))
    )

    data.push('}')

    return [
      StylesTool.addImportProperties(),
      '',
      this.initCalc(data.join('\r\n'))
    ]
  }

  /**
   * Getting all properties from base variables.
   *
   * Получение всех свойств из базовых переменных.
   */
  private getList(): PropertyItemsItem[] {
    return this.items.findCategory(PropertyCategory.root)
  }

  private getValue(value: string): string {
    if (value.match(/calc\(/) && !value.match(/var\(/)) {
      const result = sass.compileString(`a{height: ${value};}`)
      const read = result.css?.match(/height: ([^;]+);/)?.[1]

      if (read) {
        return read
      }
    }

    return value
  }

  private initCalc(data: string): string {
    let update = false

    const list = data.replace(
      /(?<=calc\(.*?)var\(([^)]+)\)/img,
      (_: string, value: string) => {
        const newValue = data.match(new RegExp(`(?<=${value}:)[^;\r\n]+`, 'im'))?.[0].trim()

        if (newValue) {
          update = true
          return this.getValue(newValue)
        }

        return value
      }
    )

    if (update) {
      return this.initCalc(list)
    }

    return list.replace(
      /calc\([^;\r\n]+/ig,
      value => this.getValue(value)
    )
  }
}
