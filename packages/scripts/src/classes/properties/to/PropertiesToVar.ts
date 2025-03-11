import { isString, toCamelCase } from '@dxt-ui/functional'

import { PropertiesToAbstract } from './PropertiesToAbstract'
import { PropertiesValues } from '../PropertiesValues'

import {
  type PropertyItem,
  type PropertyItemsItem,
  type PropertyItemsParent,
  PropertyKey,
  PropertyType
} from '../../../types/propertyTypes'

const REG_VAR = /(?<!#)\{([^{}]+)}/ig

/**
 * A class for working with custom properties in CSS.
 *
 * Класс для работы с пользовательским свойством в CSS.
 */
export class PropertiesToVar extends PropertiesToAbstract {
  protected FILE_CACHE = '020-var'
  protected type = PropertyType.var

  protected init(): void {
    this.items.findVariable(this.type).forEach((property) => {
      const {
        design,
        component,
        value,
        item,
        parents
      } = property

      if (
        component
        && typeof value === 'string'
        && value !== ''
      ) {
        const fullValue = item?.[PropertyKey.css] ?? this.items.getLinkToValue(design, component, value)

        item[PropertyKey.name] = this.getName(property)

        if (this.isNone(parents)) {
          item[PropertyKey.css] = undefined
        } else {
          item[PropertyKey.css] = this.toValue(
            this.toCalculator(fullValue, item?.[PropertyKey.fullValue]), item?.[PropertyKey.default]
          )

          if (
            !(PropertyKey.cssColorOpacity in item)
            && this.isColorWithOpacity(property)
          ) {
            item[PropertyKey.cssColorOpacity] = true
          }

          if (item?.[PropertyKey.important]) {
            item[PropertyKey.css] += ' !important'
          }
        }
      }
    })
  }

  /**
   * Name transformation for the var type.
 *
   * Преобразование имени для типа var.
   * @param design design name/ название дизайна
   * @param component component name/ название компонента
   * @param name base property name/ базовое название свойства
   * @param item current element/ текущий элемент
   * @param parents array of all ancestor properties along the tree from the top level/
   * массив со всеми свойствами предков по дереву от верхнего уровня
   */
  protected getName({
    design,
    component,
    name,
    item,
    parents
  }: PropertyItemsItem): string {
    if (component && item?.[PropertyKey.fullName]) {
      return `--${this.items.getLink(design, component, item?.[PropertyKey.index] ?? name, '-')}`
    }

    return `--${this.items.getParentsName(parents, [PropertyType.var]).join('-')}-${toCamelCase(name)}`
  }

  /**
   * Checks if the value has a mathematical expression.
 *
   * Проверяет, есть ли у значения математическое выражение.
   * @param value values to process/ значения для преобразования
   * @param full the expression is complete/ выражение является полным
   */
  protected toCalculator(value: string, full?: boolean): string {
    if (
      !full
      && value.match(/([+*/]|(?<![\w-])-(?![\w-]))/ig)
      && value.match(/calc/ig) === null
    ) {
      return `calc(${value})`
    }

    return value
  }

  /**
   * Returns the transformed pointer.
 *
   * Возвращает преобразованный указатель.
   * @param {string} value values to process/ значения для преобразования
   */
  protected toLink(value: string): string {
    return this.items.getKeys(value).join('-')
  }

  /**
   * Transformation to the CSS property.
 *
   * Преобразование в свойство CSS.
   * @param value values to process/ значения для преобразования
   * @param defaultValue default values/ значения по умолчанию
   */
  protected toValue(value: string, defaultValue?: PropertyItem['_default']): string {
    if (value.match('{')) {
      return value.replace(REG_VAR, (...text) => {
        if (defaultValue && typeof defaultValue === 'string') {
          return `var(--${this.toLink(text[1])}, ${this.toValue(this.toCalculator(defaultValue))})`
        }

        return `var(--${this.toLink(text[1])})`
      })
    }

    return value
  }

  /**
   * Checks if the values are hidden.
 *
   * Проверяет, являются ли значения скрытыми.
   * @param parents list of ancestors/ список предков
   */
  private isNone(parents: PropertyItemsParent[]): boolean {
    for (const parent of parents) {
      if (parent.item?.[PropertyKey.type] === PropertyType.none) {
        return true
      }
    }

    return false
  }

  /**
   * Checks if the element has transparency.
 *
   * Проверяет, есть ли прозрачность у элемента.
   * @param property property value/ значение свойства
   */
  private isColorWithOpacity(property: PropertyItemsItem): boolean {
    const {
      design,
      component,
      value,
      item
    } = property

    if (item?.[PropertyKey.cssColorOpacity]) {
      return true
    }

    if (
      component
      && isString(value)
    ) {
      if (value.match(/^\{[^}]+}$/)) {
        const link = this.items.getLink(design, component, value)
        const data = this.items.getInfo(link)
        if (data) {
          return this.isColorWithOpacity(data)
        }
      } else {
        return PropertiesValues.isColorWithOpacity(value)
      }
    }

    return false
  }
}
