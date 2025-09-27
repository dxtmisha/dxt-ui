import {
  forEach,
  getColumn,
  isNull,
  isObjectNotArray,
  isSelected,
  toCamelCase
} from '@dxt-ui/functional'

import { PropertiesCache } from './PropertiesCache'

import {
  type PropertyItemsCallback,
  type PropertyItemsItem,
  type PropertyItemsMedia,
  PropertyCategory,
  type PropertyItem,
  PropertyKey,
  type PropertyList,
  PropertyType
} from '../../types/propertyTypes'

import { UI_KEY_CONSTRUCTOR } from '../../config'

const SUPPORT_NAME = [
  PropertyType.design,
  PropertyType.component,
  PropertyType.classType
]

/**
 * Class for working with a list of all properties.
 *
 * Класс для работы со списком всех свойств.
 */
export class PropertiesItems {
  private focusDesign?: string

  /**
   * Constructor
   * @param properties array with all property records/ массив со всеми записями свойств
   */
  constructor(
    private readonly properties: PropertyList
  ) {
  }

  /**
   * Checks if the record complies with the design requirements.
   *
   * Проверяет, соответствует ли запись условиям дизайна.
   * @param name names of items/ названия объектов
   * @param design design name/ название дизайна
   * @private
   */
  isFocusDesign(name: string, design?: string): boolean {
    return Boolean(
      design
      || isNull(this.focusDesign)
      || name === this.focusDesign
      || name === UI_KEY_CONSTRUCTOR
    )
  }

  /**
   * Getting full structure property.
   *
   * Получение полной структуры свойства.
   */
  get(): PropertyList {
    if (this.focusDesign) {
      const data: PropertyList = {}

      forEach(this.properties, (properties, index) => {
        if (
          index === UI_KEY_CONSTRUCTOR
          || index === this.focusDesign
        ) {
          data[index] = properties
        }
      })

      return data
    }

    return this.properties
  }

  /**
   * Returns a list of design names.
   *
   * Возвращает список названий дизайнов.
   */
  getDesigns(): string[] {
    return Object.keys(this.properties)
  }

  /**
   * Returns values by index.
   *
   * Возвращает значения по индексу.
   * @param index index for splitting/ индекс для разделения
   */
  getItem(index: string): PropertyItem | undefined {
    const item = this.getInfo(index)?.item

    if (!item) {
      console.error('[Items]', `No record: ${index}`)
    }

    return item
  }

  /**
   * Returns the full information about the element by its link.
   *
   * Возвращает полную информацию об элементе по его ссылке.
   * @param index index for splitting/ индекс для разделения
   */
  getInfo(index: string): PropertyItemsItem | undefined {
    const keys = this.getKeys(index)
    const design = keys.shift() as string
    const component = keys.shift() as string
    const value = this.properties?.[design]?.value
    const parents: PropertyItemsItem['parents'] = [
      {
        name: design,
        item: this.properties?.[design] ?? { value: '' }
      }
    ]

    if (isObjectNotArray(value)) {
      let name: string = component
      let item: PropertyItem | undefined = value?.[component]
      let parent: PropertyItem | undefined = parents?.[0]?.item

      if (item) {
        for (const key of keys) {
          parents.push({
            name: key,
            item
          })

          parent = item

          name = key
          item = isObjectNotArray(item.value) ? item.value?.[key] : undefined

          if (!item) {
            break
          }
        }
      }

      if (item) {
        return {
          design,
          component,
          name,
          index: this.getIndex(parents),
          value: item.value,
          item,
          parent,
          parents
        }
      }
    }

    return undefined
  }

  /**
   * Divides an index into sections.
   *
   * Разделяет индекс на разделы.
   * @param index index for splitting/ индекс для разделения
   */
  getKeys(index: string): string[] {
    const names = index.replace(/^\{|}$/ig, '')
      .split('.')

    return forEach(names, (name) => {
      if (name.match(/^&/)) {
        return name
      }

      return toCamelCase(name)
    })
  }

  /**
   * Returns the name of the property, taking into account the parameter of changing the name.
   *
   * Возвращает название свойства, учитывая параметр изменения имени.
   * @param name name of property/ название свойства
   * @param item object of property/ объект свойства
   */
  getName(name: string, item: PropertyItem): string {
    return this.getReName(name, item).replace(/\(.*?$/, '')
  }

  /**
   * Returns the used name.
   *
   * Возвращает использованное имя.
   * @param name name of property/ название свойства
   * @param item object of property/ объект свойства
   */
  getReName(name: string, item: PropertyItem): string {
    return item?.[PropertyKey.name] ?? item?.[PropertyKey.rename] ?? name
  }

  /**
   * Returns ancestor names.
   *
   * Возвращает имена предков.
   * @param parents array of all ancestor properties along the tree from the top level/
   * массив со всеми свойствами предков по дереву от верхнего уровня
   * @param variable list of types to exclude, such types are ignored/
   * список типов для исключения, такие типы игнорируются
   */
  getParentsName(
    parents: PropertyItemsItem['parents'],
    variable?: string[]
  ): string[] {
    return forEach(parents, ({
      name,
      item
    }) => {
      if (
        !variable || (
          typeof item?.[PropertyKey.variable] === 'string' && (
            variable.indexOf(item[PropertyKey.variable]) !== -1
            || SUPPORT_NAME.indexOf(item[PropertyKey.variable]) !== -1
          )
        )
      ) {
        return toCamelCase(name)
      }

      return undefined
    }) as string[]
  }

  /**
   * Returns a list of information about a file list.
   *
   * Возвращает список информации о списках медиафайлов.
   */
  getMedia(): PropertyItemsMedia {
    const data: PropertyItemsMedia = {}

    this.findCategory(PropertyCategory.media)
      .forEach(({
        design,
        item
      }) => {
        if (isObjectNotArray(item.value)) {
          Object.assign(data, { [design]: item.value })
        }
      })

    return data
  }

  /**
   * Replaces labels with design and component names.
   *
   * Заменяет метки на названия дизайна и компонента.
   * @param design design name/ название дизайна
   * @param component component name/ название компонента
   * @param value values of properties from the value field/ значения свойств из поля value
   * @param separator разделитель
   */
  getLink(
    design: string,
    component: string,
    value: string,
    separator = '.'
  ): string {
    if (value.match(/\?/)) {
      return value
        .replace(/\?\?(?![ _-])/g, `${design}${separator}${component}${separator}`)
        .replace(/\?\?(?=[ _-])/g, `${design}${separator}${component}`)
        .replace(/\?/g, `${design}${separator}`)
    }

    return this.getLinkByDesign(design, value)
  }

  /**
   * Get values for links and convert them to accessible code.
   *
   * Получаем значения для ссылок и преобразуем их в доступный код.
   * @param design design name/ название дизайна
   * @param component component name/ название компонента
   * @param value values of properties from the value field/ значения свойств из поля value
   */
  getLinkToName(
    design: string,
    component: string,
    value: string
  ) {
    const link = this.getLink(
      design,
      component,
      value,
      '-'
    )

    return link.replace(/[a-zA-Z]+/ig, text => toCamelCase(text))
  }

  /**
   * Get values for links and convert them to accessible code.
   *
   * Получаем значения для ссылок и преобразуем их в значения для ссылки.
   * @param design design name/ название дизайна
   * @param component component name/ название компонента
   * @param value values of properties from the value field/ значения свойств из поля value
   */
  getLinkToValue(
    design: string,
    component: string,
    value: string
  ) {
    const link = this.getLink(
      design,
      component,
      value
    )

    return link.replace(/(?<=(?<!#)\{.*?)[a-zA-Z]+(?=.*?})/ig, text => toCamelCase(text))
  }

  /**
   * Replaces labels with design and component names (for the name).
   *
   * Заменяет метки на названия дизайна и компонента (для названия).
   * @param design design name/ название дизайна
   * @param component component name/ название компонента
   * @param value values of properties from the value field/ значения свойств из поля value
   */
  getLinkForName(
    design: string,
    component: string,
    value: string
  ) {
    return this.getLink(design, component, value, '-')
  }

  /**
   * Adds the name of the design at the beginning if it is missing.
   *
   * Добавляет название дизайна в начало, если его нет.
   * @param design design name/ название дизайна
   * @param value values of properties from the value field/ значения свойств из поля value
   */
  getLinkByDesign(
    design: string,
    value: string
  ): string {
    if (value.match('{')) {
      return value?.replace(/(?<=(?<!#)\{)[^.{}]+/g, (name) => {
        if (this.getDesigns().indexOf(name) === -1) {
          return `${design}.${name}`
        }

        return name
      })
    }

    return value
  }

  /**
   * Recursively applies a custom function to each element of the property.
   *
   * Рекурсивно применяет пользовательскую функцию к каждому элементу свойства.
   * @param callback the callback function is executed for each element/
   * выполняется функция обратного вызова (callback) для каждого элемента
   * @param property
   */
  each<T>(
    callback: PropertyItemsCallback<T>,
    property?: PropertyItemsItem
  ): T[] {
    if (property) {
      if (isObjectNotArray(property.item.value)) {
        return this.read(
          callback,
          true,
          property.design,
          property.component,
          property.item.value,
          property.item,
          property.parents
        )
      }

      return []
    }

    return this.read(callback)
  }

  /**
   * Applies a user function to elements on the current level.
   *
   * Применяет пользовательскую функцию к элементам на текущем уровне.
   * @param callback the callback function is executed for each element/
   * выполняется функция обратного вызова (callback) для каждого элемента
   * @param property
   */
  eachMainOnly<T>(
    callback: PropertyItemsCallback<T>,
    property?: PropertyItemsItem
  ): T[] {
    if (property) {
      if (isObjectNotArray(property.item.value)) {
        return this.read(
          callback,
          false,
          property.design,
          property.component,
          property.item.value,
          property.item,
          property.parents
        )
      }

      return []
    }

    return this.read(callback, false)
  }

  /**
   * Search for a record by selected conditions.
   *
   * Поиск записи по выбранным условиям.
   * @param callback function for checking the condition/ функция для проверки условия
   */
  find(callback: (property: PropertyItemsItem) => boolean): PropertyItemsItem[] {
    const data: PropertyItemsItem[] = []

    this.each((property) => {
      if (callback(property)) {
        data.push(property)
      }
    })

    return data
  }

  /**
   * Searching for records with selected categories.
   *
   * Поиск записей с выделенными категориями.
   * @param category names of categories/ названия категорий
   */
  findCategory(category: string | string[]): PropertyItemsItem[] {
    const data: PropertyItemsItem[] = []

    this.each((property) => {
      if (isSelected(property.item?.[PropertyKey.category], category)) {
        data.push(property)
      }
    })

    return data
  }

  /**
   * Searching for records with selected categories.
   *
   * Поиск записей с выделенными категориями.
   * @param variable names of categories/ названия категорий
   */
  findVariable(variable: string | string[]): PropertyItemsItem[] {
    const data: PropertyItemsItem[] = []

    this.each((property) => {
      if (isSelected(property.item?.[PropertyKey.variable], variable)) {
        data.push(property)
      }
    })

    return data
  }

  /**
   * Changes the focused design.
   *
   * Изменяет фокусированный дизайн.
   * @param design
   */
  setFocusDesign(design: string): this {
    this.focusDesign = design
    return this
  }

  /**
   * Saves intermediate data.
   *
   * Сохраняет промежуточные данные.
   * @param name file name/ название файла
   */
  write(name: string): void {
    PropertiesCache.write(`${this.getDesigns().join('-')}-${name}`, this.properties)
  }

  /**
   * Returns complete information about the property.
   *
   * Возвращает полную информацию о свойстве.
   * @param parents an object with information about properties/ объект с информацией о свойствах
   */
  private getIndex(parents: PropertyItemsItem['parents']): string {
    return `${getColumn(parents, 'name').join('.')}`
  }

  /**
   * Recursively applies a custom function to each element of the property.
   *
   * Рекурсивно применяет пользовательскую функцию к каждому элементу свойства.
   * @param callback the callback function is executed for each element/
   * выполняется функция обратного вызова (callback) для каждого элемента
   * @param subItem scan child elements of the current element/ сканировать дочерние элементы текущего элемента
   * @param design design name/ название дизайна
   * @param component component name/ название компонента
   * @param properties object for traversal/ объект для обхода
   * @param parent ancestor element/ элемент-предок
   * @param parents list of ancestor names/ список названий предков
   */
  private read<T>(
    callback: PropertyItemsCallback<T>,
    subItem = true,
    design?: string,
    component?: string,
    properties = this.properties,
    parent?: PropertyItem,
    parents: PropertyItemsItem['parents'] = []
  ): T[] {
    const data: T[] = []
    let previous: PropertyItem

    forEach(properties, (item, name) => {
      if (this.isFocusDesign(name, design)) {
        const newDesign = design ?? name
        const newComponent = design && (component ?? name)
        const newParents = [...parents, {
          name,
          item
        }]

        const value = callback({
          design: newDesign,
          component: newComponent,
          name,
          index: this.getIndex(newParents),
          value: item.value,
          item,
          previous,
          parent,
          parents
        })

        if (value !== undefined) {
          data.push(value)
        }

        if (
          subItem
          && isObjectNotArray(item.value)
        ) {
          data.push(
            ...this.read(
              callback,
              subItem,
              newDesign,
              newComponent,
              item.value,
              item,
              newParents
            )
          )
        }

        previous = item
      }
    })

    return data
  }
}
