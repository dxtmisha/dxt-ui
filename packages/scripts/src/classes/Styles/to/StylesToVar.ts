// export:none

import { isObjectNotArray } from '@dxtmisha/functional-basic'

import { PropertiesItems } from '../../Properties/PropertiesItems'
import { PropertiesValues } from '../../Properties/PropertiesValues'

import { StylesTool } from '../StylesTool'
import { StylesToAbstract } from './StylesToAbstract'

import {
  type PropertyItem,
  PropertyKey,
  PropertyType
} from '../../../types/propertyTypes'

/**
 * Class for converting design tokens into CSS custom property variables and optional color opacity variables.
 *
 * Класс для преобразования дизайн-токенов в переменные пользовательских свойств CSS и опциональные переменные прозрачности цвета.
 */
export class StylesToVar extends StylesToAbstract {
  /**
   * Extracts and formats all CSS variable declarations for the current branch.
   *
   * Извлекает и форматирует все объявления CSS-переменных для текущей ветки.
   * @returns array of CSS variable declarations / массив объявлений CSS-переменных
   */
  protected treatment(): string[] {
    const { value } = this.property

    if (isObjectNotArray(value)) {
      const data: string[] = []

      new PropertiesItems(value).each(({ item }) => {
        if (
          item?.[PropertyKey.variable] === PropertyType.var
          && item?.[PropertyKey.css]
        ) {
          data.push(this.getCode(item))

          if (item?.[PropertyKey.cssColorOpacity]) {
            data.push(this.getCodeColorOpacity(item))
          }
        }
      })

      return data
    }

    const { item } = this.property

    if (item?.[PropertyKey.cssColorOpacity]) {
      return [
        this.getCode(),
        this.getCodeColorOpacity()
      ]
    }

    return [this.getCode()]
  }

  /**
   * Formats a single property item into a CSS variable declaration string.
   *
   * Форматирует отдельный элемент свойства в строку объявления CSS-переменной.
   * @param item property item to format / элемент свойства для форматирования
   * @returns formatted CSS variable declaration line / форматированная строка объявления CSS-переменной
   */
  private getCode(
    item: PropertyItem = this.item
  ): string {
    let value = item?.[PropertyKey.css]

    if (typeof value !== 'string' || value === '') {
      value = 'unset'
    } else if (PropertiesValues.isColor(value)) {
      value = `#{ui.toColorRbg(${value})}`
    } else {
      value = value.replace(/\\#/g, '#')
    }

    return `${item?.[PropertyKey.name]}: ${StylesTool.toFunctionCss(value)};`
  }

  /**
   * Generates a companion opacity variable for color tokens if configured.
   *
   * Генерирует сопутствующую переменную прозрачности для цветовых токенов, если она настроена.
   * @param item property item to format / элемент свойства для форматирования
   * @returns formatted opacity variable declaration line / форматированная строка объявления переменной прозрачности
   */
  private getCodeColorOpacity(
    item: PropertyItem = this.item
  ): string {
    const value = item?.[PropertyKey.css]
    const opacity = item?.[PropertyKey.cssColorOpacity]

    if (
      opacity
      && typeof opacity !== 'boolean'
    ) {
      return `${item?.[PropertyKey.name]}-opacity: ${opacity};`
    }

    return `${item?.[PropertyKey.name]}-opacity: #{ui.toColorOpacity(${value})};`
  }
}
