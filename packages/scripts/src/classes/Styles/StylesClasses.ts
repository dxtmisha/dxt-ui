// export:none

import { isFilled, isObjectNotArray, toKebabCase } from '@dxtmisha/functional-basic'

import { PropertiesItems } from '../Properties/PropertiesItems'

import { StylesTool } from './StylesTool'
import { StylesProperties } from './StylesProperties'

import {
  PropertyCategory,
  type PropertyItemsItem,
  PropertyKey
} from '../../types/propertyTypes'

/**
 * Structure containing generated style class imports and rule contents /
 * Структура, содержащая сгенерированные импорты классов стилей и содержимое правил
 */
export type StylesClassesItem = {
  /** List of SCSS `@use` import directives / Список директив импорта SCSS `@use` */
  data: string[]

  /** Map of class names to their SCSS rule declarations / Карта имен классов и их объявлений SCSS */
  classes: Record<string, string[]>
}

/**
 * Class for generating base CSS class rules and modular SCSS class files from tokens.
 *
 * Класс для генерации базовых правил CSS-классов и модульных файлов SCSS-классов из токенов.
 */
export class StylesClasses {
  /**
   * Constructor for StylesClasses.
   *
   * Конструктор для StylesClasses.
   * @param items properties collection instance / экземпляр коллекции свойств
   */
  constructor(private items: PropertiesItems) {
  }

  /**
   * Generates all base class rules and corresponding import directives.
   *
   * Генерация всех правил базовых классов и соответствующих директив импорта.
   * @returns generated classes map and import directives / сгенерированная карта классов и директивы импорта
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

        data.push(StylesTool.addUse(`./classes/${toKebabCase(name)}`))

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
   * Retrieves all property items categorized as class or theme.
   *
   * Получение всех элементов свойств, относящихся к категориям класса или темы.
   * @returns array of matched property items / массив найденных элементов свойств
   */
  private getList(): PropertyItemsItem[] {
    return this.items.findCategory([
      PropertyCategory.class,
      PropertyCategory.theme
    ])
  }
}
