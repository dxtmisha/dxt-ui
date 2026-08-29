// export:none

import { isObjectNotArray, toCamelCase } from '@dxtmisha/functional-basic'

import { PropertiesTool } from '../../Properties/PropertiesTool'

import { StylesTool } from '../StylesTool'
import { StylesToAbstract } from './StylesToAbstract'

import { PropertyKey } from '../../../types/propertyTypes'

import { styleTypes } from '../../../media/properties/style'

/**
 * Class for converting design token property entries into standard CSS properties, component variables, or SCSS mixin calls.
 *
 * Класс для преобразования записей свойств дизайн-токенов в стандартные свойства CSS, переменные компонента или вызовы SCSS-миксинов.
 */
export class StylesToProperty extends StylesToAbstract {
  /**
   * Transforms property item into SCSS declarations, variables, and optional mixins.
   *
   * Преобразует элемент свойства в объявления SCSS, переменные и опциональные миксины.
   * @returns array of generated SCSS code lines / массив сгенерированных строк кода SCSS
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
   * Generates component CSS custom property variable definition line.
   *
   * Генерация строки определения пользовательского CSS-свойства (переменной) компонента.
   * @returns component variable definition string / строка определения переменной компонента
   */
  private getVar(): string {
    const {
      design,
      component
    } = this.property
    const name = this.getName()
    const value = this.getValue()

    return `--${PropertiesTool.getComponentName(design, component)}-${name}: ${value};`
  }

  /**
   * Generates formatted CSS property declaration or SCSS mixin invocation.
   *
   * Генерация форматированного объявления CSS-свойства или вызова SCSS-миксина.
   * @returns formatted CSS declaration or mixin string / форматированная строка объявления CSS или миксина
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
   * Initializes auxiliary base mixin invocations (such as color or background init) for standalone opacity tokens.
   *
   * Инициализация вспомогательных вызовов базовых миксинов (таких как init для цвета или фона) для изолированных токенов прозрачности.
   * @returns auxiliary mixin call string or empty string / строка вызова вспомогательного миксина или пустая строка
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
