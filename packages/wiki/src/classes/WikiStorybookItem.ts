import { Geo, isArray, isObjectNotArray } from '@dxtmisha/functional'

import {
  type StorybookArgsItem,
  type StorybookArgsItemSummary,
  type StorybookArgsToItem,
  StorybookCategory,
  StorybookControl
} from '../types/storybookTypes'

/**
 * Class representing a Storybook wiki item
 *
 * Класс, представляющий элемент wiki для Storybook
 */
export class WikiStorybookItem {
  /**
   * Constructor
   * @param name - The name of the item in the wiki/ Название элемента в wiki
   * @param item - The item to convert to a Storybook args item/
   * Элемент, который нужно преобразовать в элемент аргументов Storybook
   */
  constructor(
    private readonly name: string,
    private readonly item: StorybookArgsToItem
  ) {
  }

  /**
   * Returns the name of the item in the wiki
   *
   * Возвращает название элемента в wiki
   * @return The name of the item in the wiki/ название элемента в wiki
   */
  getName(): string {
    return this.name
  }

  /**
   * Returns the value of the item in the wiki
   *
   * Возвращает значение элемента в wiki
   * @return The value of the item in the wiki/ значение элемента в wiki
   */
  getValue(): any {
    return this.item.options.value
  }

  /**
   * Returns the order of the item in the wiki
   *
   * Возвращает порядок элемента в wiki
   * @return The order of the item in the wiki/ порядок элемента в wiki
   */
  getOrder(): number {
    if (this.item.options.order) {
      return this.item.options.order
    }

    const category = this.item.options.category

    switch (category) {
      case StorybookCategory.status:
        return 3000
      case StorybookCategory.value:
        return 5000
      case StorybookCategory.style:
        return 9000
      default:
        return 9999
    }
  }

  /**
   * Converts the Wiki item to a Storybook args item
   *
   * Преобразует элемент Wiki в элемент аргументов Storybook
   */
  to(): StorybookArgsItem {
    switch (this.item.type) {
      case StorybookControl.text:
      case StorybookControl.string:
        return this.toString()
      case StorybookControl.number:
        return this.toNumber()
      case StorybookControl.boolean:
        return this.toBoolean()
      case StorybookControl.select:
        return this.toSelect()
      case StorybookControl.object:
      case StorybookControl.array:
        return this.toObject()
    }
  }

  /**
   * Returns the category type of a property
   *
   * Возвращает тип категории у свойства
   */
  private getCategory(): { category?: StorybookCategory } {
    const category = this.item.options.category

    if (category) {
      return { category }
    }

    return {}
  }

  /**
   * Returns the default property values
   *
   * Возвращает значения свойства по умолчанию
   */
  private getDefaultValue(): { defaultValue?: StorybookArgsItemSummary } {
    const type = this.item.options.type
    const defaultValue = this.item.options.defaultValue
    let value: string | undefined = undefined

    if (defaultValue !== undefined) {
      switch (typeof defaultValue) {
        case 'boolean':
          value = defaultValue ? 'true' : 'false'
          break
        default:
          value = String(defaultValue)
          break
      }
    } else if (type === 'boolean') {
      value = 'false'
    }

    if (value) {
      return {
        defaultValue: { summary: value }
      }
    }

    return {}
  }

  /**
   * Returns a property description based on the language
   *
   * Возвращает описание свойства с учетом языка
   */
  private getDescription(): { description?: string } {
    const language = Geo.getLanguage()
    const description = this.item.options.description
    let value: string | undefined = undefined

    if (typeof description === 'string') {
      value = description
    } else if (
      isObjectNotArray(description)
      && language in description
    ) {
      value = description[language]
    }

    if (value) {
      return { description: value }
    }

    return {}
  }

  /**
   * Returns the type of property
   *
   * Возвращает тип свойства
   */
  private getType(): { type?: StorybookArgsItemSummary } {
    const type = this.item.options.type
    const options = this.item.options.options
    let value: string | undefined = undefined

    if (options) {
      if (isArray(options)) {
        value = options.join(' | ')
      } else if (isObjectNotArray(options)) {
        value = Object.keys(options).join(' | ')
      }
    } else if (type) {
      if (isArray(type)) {
        value = type.join(' | ')
      } else {
        value = type
      }
    } else {
      switch (this.item.type) {
        case StorybookControl.select:
          value = String(StorybookControl.object)
          break
        case StorybookControl.text:
          value = String(StorybookControl.string)
          break
        default:
          value = String(this.item.type)
      }
    }

    if (value) {
      return {
        type: { summary: value }
      }
    }

    return {}
  }

  /**
   * Function to create a Storybook args object with boolean type
   *
   * Функция для создания объекта аргументов Storybook с типом boolean
   */
  private toBoolean(): StorybookArgsItem {
    return {
      control: StorybookControl.boolean,
      table: {
        ...this.getCategory(),
        ...this.getDefaultValue(),
        ...this.getType()
      },
      ...this.getDescription()
    }
  }

  /**
   * Function to create a Storybook args object with number type
   *
   * Функция для создания объекта аргументов Storybook с типом number
   */
  private toNumber(): StorybookArgsItem {
    const options = this.item.options
    const control: StorybookArgsItem['control'] = { type: StorybookControl.number }
    const table: StorybookArgsItem['table'] = {
      ...this.getCategory(),
      ...this.getDefaultValue(),
      ...this.getType()
    }

    if ('min' in options) {
      control.min = options.min
    }

    if ('max' in options) {
      control.min = options.max
    }

    return {
      control,
      table,
      ...this.getDescription()
    }
  }

  /**
   * Function to create a Storybook args object with object type
   *
   * Функция для создания объекта аргументов Storybook с типом object
   */
  private toObject(): StorybookArgsItem {
    return {
      control: StorybookControl.object,
      table: {
        ...this.getCategory(),
        ...this.getType()
      },
      ...this.getDescription()
    }
  }

  /**
   * Function to create a Storybook args object with select type
   *
   * Функция для создания объекта аргументов Storybook с типом select
   */
  private toSelect(): StorybookArgsItem {
    return {
      control: StorybookControl.select,
      options: this.item.options.options,
      table: {
        ...this.getCategory(),
        ...this.getDefaultValue(),
        ...this.getType()
      },
      ...this.getDescription()
    }
  }

  /**
   * Function to create a Storybook args object with string type
   *
   * Функция для создания объекта аргументов Storybook с типом string
   */
  private toString(): StorybookArgsItem {
    return {
      control: StorybookControl.text,
      table: {
        ...this.getCategory(),
        ...this.getDefaultValue(),
        ...this.getType()
      },
      ...this.getDescription()
    }
  }
}
