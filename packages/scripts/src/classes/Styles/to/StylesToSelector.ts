// export:none

import { toKebabCase } from '@dxtmisha/functional-basic'

import { PropertiesTool } from '../../Properties/PropertiesTool'
import { StylesToAbstract } from './StylesToAbstract'

import { PropertyKey } from '../../../types/propertyTypes'

/**
 * Class for generating state selector rules and pseudo-class mixins (hover, active, focus, disabled, readonly).
 *
 * Класс для генерации правил селекторов состояний и миксинов псевдоклассов (hover, active, focus, disabled, readonly).
 */
export class StylesToSelector extends StylesToAbstract {
  /**
   * Generates selector block wrapping nested state styles.
   *
   * Генерирует блок селектора, оборачивающий вложенные стили состояния.
   * @returns array of SCSS selector rule lines / массив строк правил SCSS-селектора
   */
  protected treatment(): string[] {
    const content = this.content()

    if (content.length > 0) {
      return [
        ...this.addEmptyString(),
        `${this.getSelector()} {`,
        ...this.content(),
        '}'
      ]
    }

    return []
  }

  /**
   * Retrieves the full CSS class name string for the component.
   *
   * Получение полной строки имени CSS-класса для компонента.
   * @returns quoted class name string / строка имени класса в кавычках
   */
  private getClassName(): string {
    const {
      design,
      component
    } = this.property

    return `'${PropertiesTool.getClassName(design, component)}'`
  }

  /**
   * Resolves the appropriate SCSS mixin or pseudo-class selector string based on state name.
   *
   * Определяет подходящую строку SCSS-миксина или селектора псевдокласса на основе имени состояния.
   * @returns selector or mixin inclusion declaration / объявление селектора или вызова миксина
   */
  private getSelector(): string {
    const name = this.getName()
    const className = this.getClassName()
    const isClassMain = className === `'.${this.property.parent?.[PropertyKey.name]}'`

    switch (name) {
      case 'hover':
      case 'active':
      case 'focus':
      case 'disabled':
      case 'readonly':
        return `@include ui.${name}${isClassMain ? '' : `(${className})`}`
      default:
        return `&:${toKebabCase(name)}`
    }
  }
}
