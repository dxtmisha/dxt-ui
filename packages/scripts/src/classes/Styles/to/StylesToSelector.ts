import { toKebabCase } from '@dxt-ui/functional'

import { PropertiesTool } from '../../Properties/PropertiesTool'
import { StylesToAbstract } from './StylesToAbstract'

import { PropertyKey } from '../../../types/propertyTypes'

/**
 * Class for generating data for sub property styles.
 *
 * Класс для генерация данный для под свойство стили.
 */
export class StylesToSelector extends StylesToAbstract {
  /**
   * Method for converting data into a style structure.
   *
   * Метод преобразования данных в структуру стиля.
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
   * Getting the name of the class of a component.
   *
   * Получение названия класса у компонента.
   */
  private getClassName(): string {
    const {
      design,
      component
    } = this.property

    return `'${PropertiesTool.getClassName(design, component)}'`
  }

  /**
   * Returns a string for a selector.
   *
   * Возвращает строку для селектора.
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
        return `@include ${name}${isClassMain ? '' : `(${className})`}`
      default:
        return `&:${toKebabCase(name)}`
    }
  }
}
