// export:none

import * as sass from 'sass'

import { PropertiesItems } from '../Properties/PropertiesItems'

import { StylesTool } from './StylesTool'
import { StylesToVar } from './to/StylesToVar'

import {
  PropertyCategory,
  type PropertyItemsItem
} from '../../types/propertyTypes'

/**
 * Class for generating `:root` CSS custom properties from design tokens and evaluating static calculations.
 *
 * Класс для генерации пользовательских CSS-свойств `:root` из дизайн-токенов и вычисления статических выражений.
 */
export class StylesRoot {
  /**
   * Constructor for StylesRoot.
   *
   * Конструктор для StylesRoot.
   * @param items properties collection instance / экземпляр коллекции свойств
   */
  constructor(
    private items: PropertiesItems
  ) {
  }

  /**
   * Generates all basic token values inside a `:root` block with evaluated calc expressions.
   *
   * Генерация всех базовых значений токенов внутри блока `:root` с вычисленными выражениями calc.
   * @returns array of generated SCSS lines / массив сгенерированных строк SCSS
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
   * Retrieves all property items categorized as root.
   *
   * Получение всех элементов свойств, относящихся к категории root.
   * @returns array of root property items / массив элементов свойств root
   */
  private getList(): PropertyItemsItem[] {
    return this.items.findCategory(PropertyCategory.root)
  }

  /**
   * Compiles and resolves static SCSS calculation expressions if no runtime CSS variables are present.
   *
   * Компилирует и разрешает статические выражения SCSS calc, если отсутствуют runtime CSS-переменные.
   * @param value raw CSS/SCSS value expression / сырое выражение значения CSS/SCSS
   * @returns resolved CSS value string / вычисленная строка значения CSS
   */
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

  /**
   * Recursively substitutes variable definitions and resolves nested calc expressions.
   *
   * Рекурсивно подставляет определения переменных и вычисляет вложенные выражения calc.
   * @param data SCSS data string / строка данных SCSS
   * @returns formatted SCSS data string with evaluated calculations / форматированная строка SCSS с вычисленными выражениями
   */
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
