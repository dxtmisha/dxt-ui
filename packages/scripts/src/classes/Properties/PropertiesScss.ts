// export:none

import { forEach, isObjectNotArray } from '@dxt-ui/functional'

import { PropertiesItems } from './PropertiesItems'
import { PropertiesPalette } from './PropertiesPalette'

import {
  PropertyCategory,
  type PropertyItem,
  PropertyKey
} from '../../types/propertyTypes'

const NAME_DESIGNS = '$designsDesigns'
const NAME_ROOT = '$designsRoot'
const NAME_MEDIA = '$designsMedia'
const NAME_PALETTE = '$designsPalette'
const NAME_SHADE = '$designsShade'
const NAME_PROPERTIES = '$designsProperties'

/**
 * Class for working with SCSS.
 *
 * Класс для работы с SCSS.
 */
export class PropertiesScss {
  /**
   * Constructor
   * @param items
   */
  constructor(private items: PropertiesItems) {
  }

  /**
   * Returns a formatted string for SCSS.
   *
   * Возвращает отформатированную строку для SCSS.
   */
  get() {
    let data = ''

    data += `${this.getDesigns()}\r\n`
    data += `${this.getRoot()}\r\n`
    data += `${this.getMedia()}\r\n`
    data += `${this.getClasses()}\r\n`
    data += `${this.getPalette()}\r\n`
    data += `${this.getShade()}\r\n`
    data += `${this.getProperties()}\r\n`

    return data
  }

  /**
   * Returns a list of connected designs.
   *
   * Возвращает список подключенных дизайнов.
   */
  protected getDesigns(): string {
    const designs = forEach(this.items.getDesigns(), design => `\r\n  '${design}',`)
    return `${NAME_DESIGNS}: (${designs.join('')});`
  }

  /**
   * Returns a list of properties for the root.
   *
   * Возвращает список свойств для root.
   */
  protected getRoot(): string {
    return `${NAME_ROOT}: (${this.getByCategory(PropertyCategory.root)});`
  }

  /**
   * Returns a list of device sizes.
   *
   * Возвращает список размеров устройства.
   */
  protected getMedia(): string {
    let data = ''

    forEach(this.items.getMedia(), (
      values,
      design
    ) => {
      if (isObjectNotArray(values)) {
        forEach(values, (
          item,
          name
        ) => {
          data += `\r\n  '${design}-${name}': ${this.getValueItem(item)},`
        })
      }
    })

    return `${NAME_MEDIA}: (${data});`
  }

  /**
   * Returns a list of all classes for generation.
   *
   * Возвращает список всех классов для генерации.
   */
  protected getClasses(): string {
    return `$designsClasses: (${this.getByCategory(['class', 'theme'])});`
  }

  /**
   * Returns a list of colors.
   *
   * Возвращает список цветов.
   */
  protected getPalette(): string {
    let data = ''

    new PropertiesPalette(this.items)
      .getUsed()
      .forEach(({
        name,
        value
      }) => {
        data += `\r\n  '${name}': ('${value.join('\', \'')}'),`
      })

    return `${NAME_PALETTE}: (${data});`
  }

  /**
   * Returns a list of color saturation codes.
   *
   * Возвращает список кодов насыщенности цветов.
   */
  protected getShade(): string {
    let data = ''

    new PropertiesPalette(this.items)
      .getShade()
      .forEach(({
        design,
        value
      }) => {
        data += `\r\n  '${design}': (${value.join(',')}),`
      })

    return `${NAME_SHADE}: (${data});`
  }

  /**
   * Returns a list of properties.
   *
   * Возвращает список свойств.
   */
  getProperties(): string {
    return `${NAME_PROPERTIES}: (${this.to()});`
  }

  /**
   * Returns a list of all records with the selected type.
   *
   * Возвращает список всех записей с выбранным типом.
   * @param category category names/ названия категорий
   */
  private getByCategory(category: string | string[]): string {
    const data: string[] = []

    this.items.findCategory(category)
      .forEach(property => data.push(`\r\n  '${property.index}',`))

    return data.join('')
  }

  /**
   * Returns the property value.
   *
   * Возвращает значение свойства.
   * @param property property value/ значение свойства
   * @param space пробелы
   */
  private getValue(property: PropertyItem, space: string) {
    if (isObjectNotArray(property.value)) {
      return `value: (${this.to(property.value, `${space}    `)}\r\n${space}  ),`
    } else if (Array.isArray(property.value)) {
      return `value: (${property.value.join(', ')}),`
    }

    return `value: ${this.getValueItem(property)},`
  }

  /**
   * Returns the value of a property.
   *
   * Возвращает значение свойства.
   * @param item property value/ значение свойства
   */
  private getValueItem(item: PropertyItem): string {
    const value = item?.[PropertyKey.css] || item.value

    if (typeof value === 'string') {
      if (
        value.match(/^#[a-zA-Z0-9]+$/)
        || value.match(/^([0-9]+|([0-9]+\.[0-9]+))(px|em|rem|vw|vh|%|)$/)
      ) {
        return `${value}`
      }

      return `'${value}'`
    }

    return ''
  }

  /**
   * Method for iterating over all properties and converting them to a SCSS structure.
   *
   * Метод для обхода всех свойств и преобразования их в структуру SCSS.
   * @param properties list of properties/ свойств
   * @param space пробелы
   */
  private to(
    properties = this.items.get(),
    space = '  '
  ) {
    let data = ''

    forEach(properties, (property, name) => {
      if (
        property?.value
        && property?.[PropertyKey.variable] !== 'none'
      ) {
        data += `\r\n${space}'${name}':(`
        data += `\r\n${space}  index: '${name}',`
        data += `\r\n${space}  name: '${property?.[PropertyKey.name] || name}',`
        data += `\r\n${space}  type: '${property?.[PropertyKey.variable]}',`
        data += `\r\n${space}  ${this.getValue(property, space)}`

        if (property?.[PropertyKey.modification] === false) {
          data += `\r\n${space}  modification: false,`
        }

        if (property?.[PropertyKey.varKey] === true) {
          data += `\r\n${space}  var: true,`
        }

        data += `\r\n${space}),`
      }
    })

    return data
  }
}
