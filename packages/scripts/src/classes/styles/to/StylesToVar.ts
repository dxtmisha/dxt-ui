import { isObjectNotArray } from '@dxt-ui/functional'

import { PropertiesItems } from '../../properties/PropertiesItems'
import { PropertiesValues } from '../../properties/PropertiesValues'

import { StylesTool } from '../StylesTool'
import { StylesToAbstract } from './StylesToAbstract'

import {
  type PropertyItem,
  PropertyKey,
  PropertyType
} from '../../../types/propertyTypes'

/**
 * CSS variable converter class.
 *
 * Класс для преобразования в переменные CSS.
 */
export class StylesToVar extends StylesToAbstract {
  /**
   * Getting all variables in the current branch.
   *
   * Получение всех переменных в текущей ветке.
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
   * Acquiring full ownership.
   *
   * Получения полного свойства.
   * @param item current element/ текущий элемент
   */
  private getCode(
    item: PropertyItem = this.item
  ): string {
    let value = item?.[PropertyKey.css]

    if (typeof value !== 'string' || value === '') {
      value = 'unset'
    } else if (PropertiesValues.isColor(value)) {
      value = `#{toColorRbg(${value})}`
    }

    return `${item?.[PropertyKey.name]}: ${StylesTool.toFunctionCss(value)};`
  }

  /**
   * Adds a property responsible for transparency.
   *
   * Добавляет свойство, отвечающее за прозрачность.
   * @param item current element/ текущий элемент
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

    return `${item?.[PropertyKey.name]}-opacity: #{toColorOpacity(${value})};`
  }
}
