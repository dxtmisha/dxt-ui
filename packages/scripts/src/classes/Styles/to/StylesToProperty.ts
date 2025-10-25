// export:none

import { isObjectNotArray, toCamelCase } from '@dxtmisha/functional'

import { PropertiesTool } from '../../Properties/PropertiesTool'

import { StylesTool } from '../StylesTool'
import { StylesToAbstract } from './StylesToAbstract'

import { PropertyKey } from '../../../types/propertyTypes'

import { styleTypes } from '../../../media/properties/style'

/**
 * CSS class for converting to CSS property.
 *
 * Класс для преобразования в свойство CSS.
 */
export class StylesToProperty extends StylesToAbstract {
  /**
   * Acquiring full ownership.
   *
   * Получения полного свойства.
   */
  protected treatment(): string[] {
    const data: string[] = []

    if (
      this.property?.previous
      && this.property.previous?.[PropertyKey.sort] !== this.item?.[PropertyKey.sort]
    ) {
      data.push('')
    }

    if (this.item?.[PropertyKey.varKey]) {
      data.push(this.getVar())
    }

    data.push(this.getPropertyValue())

    return data
  }

  /**
   * Generating values for variables.
   * Генерация значений для переменных.
   */
  private getVar() {
    const {
      design,
      component
    } = this.property
    const name = this.getName()
    const value = this.getValue()

    return `--${PropertiesTool.getComponentName(design, component)}-${name}: ${value};`
  }

  /**
   * Generating value for property.
   *
   * Генерация значения для свойства.
   */
  private getPropertyValue(): string {
    const name = this.getName()
    const value = this.getValue() ?? 'unset'

    if (
      this.item?.[PropertyKey.modification] !== false
      && styleTypes.indexOf(name) !== -1
    ) {
      return `@include ui.${toCamelCase(name)}(#{${value}});${this.initAuxiliaryValue()}`
    }

    const property = `${name}: ${StylesTool.toFunctionCss(value)}`

    if (name === 'font-family') {
      return `${property}, sans-serif;`
    }

    return `${property};`
  }

  /**
   * Initialization of auxiliary values.
   *
   * Инициализация вспомогательных значений.
   */
  private initAuxiliaryValue(): string {
    const name = this.getName()
    const properties = this.property.parent?.value

    if (isObjectNotArray(properties)) {
      switch (name) {
        case 'color-opacity':
          if (!('color' in properties)) {
            return ` @include ui.color('init');`
          }
          break

        case 'background-opacity':
          if (!('backgroundColor' in properties)) {
            return ` @include ui.backgroundColor('init');`
          }
          break

        case 'gradient-opacity':
          if (!('gradient' in properties)) {
            return ` @include ui.gradient('init');`
          }
          break

        case 'border-opacity':
          if (!('borderColor' in properties)) {
            return ` @include ui.borderColor('init');`
          }
          break
      }
    }

    return ''
  }
}
