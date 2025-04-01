import { forEach, isFilled, isObjectNotArray, toCamelCase, uniqueArray } from '@dxt-ui/functional'

import { DesignStructureItemAbstract } from './DesignStructureItemAbstract'

import {
  type PropertyItem,
  PropertyKey,
  PropertyType
} from '../../types/propertyTypes'
import type {
  DesignStructureItem,
  DesignStructureItemSub,
  DesignStructureList,
  DesignStructureStateList
} from '../../types/designTypes'

import { DESIGN_PROPERTY_TO_PROPS } from '../../config'

/**
 * Class for processing dependency properties of the component.
 *
 * Класс для обработки зависимости свойств у компонента.
 */
export class DesignStructureRead extends DesignStructureItemAbstract<DesignStructureList> {
  protected states: DesignStructureStateList

  protected data: DesignStructureList = {}

  /**
   * Constructor
   * @param component component name/ название компонента
   */
  constructor(
    component: string
  ) {
    super(component)
    this.states = this.makeState(this.items?.value)

    this.makeMain()
    this.makeValue()
    this.makeValueAll()
    this.makeValueUnique()
    // this.makeValueState()
  }

  /**
   * Getting all dependencies of the component.
   *
   * Получение всех зависимостей у компонента.
   */
  getStates(): DesignStructureStateList {
    return this.states
  }

  /**
   * Checks if the property is available for addition to props.
   *
   * Проверяет, доступно ли свойство для добавления в props.
   * @param item object for checking/ объект для проверки
   */
  protected isProps(item: PropertyItem): boolean {
    const is = item?.[PropertyKey.prop]

    return is !== false && (
      isFilled(is)
      || item?.[PropertyKey.variable] === PropertyType.state
      || DESIGN_PROPERTY_TO_PROPS.indexOf(item?.[PropertyKey.name] as string) !== -1
    )
  }

  /**
   * Checks whether the property is a reference to a class.
   *
   * Проверяет, является ли свойство ссылкой на класс.
   * @param item object for checking/ объект для проверки
   */
  protected isLinkClass(item: PropertyItem): boolean {
    return typeof item.value === 'string'
      && item?.[PropertyKey.variable] === PropertyType.linkClass
  }

  /**
   * Transformations to a class name.
   *
   * Преобразование в имя класса.
   * @param value values of properties from the value field/ значения свойств из поля value
   */
  protected getClass(value: string): string {
    return this.properties.get()
      .getKeys(value)
      .join('.')
      .replace('.', '-')
      .replace(/\./g, '--')
  }

  /**
   * Returns all properties of a component by its reference.
   *
   * Возвращает все свойства компонента по его reference.
   * @param index link to a property/ ссылка на свойство
   */
  protected getClassState(index: string): PropertyItem | undefined {
    return this.properties.get().getItem(index)
  }

  /**
   * Returns records that meet state conditions.
   *
   * Возвращает записи, удовлетворяющие условиям состояния.
   * @param properties input data/ входной данный
   */
  protected makeState(properties?: PropertyItem['value']): DesignStructureStateList {
    const state: DesignStructureStateList = []

    if (
      isFilled(properties)
      && isObjectNotArray(properties)
    ) {
      forEach(properties, (item, index) => {
        if (this.isProps(item)) {
          state.push({
            index,
            type: PropertyType.property,
            item,
            className: undefined,
            state: this.makeState(item.value)
          })
        }

        if (this.isLinkClass(item)) {
          const value = item?.[PropertyKey.css] || item.value

          if (typeof value === 'string') {
            const link = this.getClassState(value)

            if (link) {
              state.push({
                index,
                type: PropertyType.linkClass,
                item: link,
                className: this.getClass(value),
                state: this.makeState(link.value)
              })
            }
          }
        }
      })
    }

    return state
  }

  /**
   * Retrieves all properties for preparing data filling.
   *
   * Получает все свойства для подготовки заполнения данными.
   */
  protected makeMain(): this {
    this.states?.forEach(({
      index,
      type,
      item,
      className
    }) => {
      this.data[index] = {
        name: this.toName(item, index),
        index,
        type,
        className,
        value: [],
        valueAll: [],
        state: [],
        style: Boolean(item?.[PropertyKey.style]),
        default: item?.[PropertyKey.default],
        category: item?.[PropertyKey.category]
      }
    })

    return this
  }

  /**
   * Receives the default values.
   *
   * Получает базовые значения.
   */
  protected makeValue(): this {
    this.states?.forEach(({
      index,
      item
    }) => {
      this.data[index].value.push(...this.toValue(item?.value))
    })

    return this
  }

  /**
   * Gets all possible values.
   *
   * Получает всех возможных значения.
   * @param state basic values/ базовые значения
   */
  protected makeValueAll(state = this.states): this {
    state?.forEach(({
      index,
      item,
      state
    }) => {
      if (index in this.data) {
        const value = this.toValue(item?.value)
        this.data[index].valueAll.push(...value)

        if (state && value.indexOf(true) !== -1) {
          this.makeValueAll(state)
        }
      }
    })

    return this
  }

  /**
   * Updates values by removing duplicates and updating the style property value.
   *
   * Обновляет значения, удаляя все повторы и обновляя значения свойства style.
   */
  protected makeValueUnique(): this {
    forEach(this.data, (property) => {
      property.valueAll = uniqueArray(property.valueAll)

      if (!isFilled(property.value)) {
        property.value = [true]
      }

      if (!isFilled(property.valueAll)) {
        property.valueAll = [true]
      }
    })

    return this
  }

  /**
   * Updates values in a map.
   *
   * Обновляет значения в карте.
   * @param states basic values/ базовые значения
   * @param parent
   */
  protected makeValueState(
    states = this.states,
    parent?: DesignStructureItem['state']
  ): this {
    states?.forEach(({
      index,
      item,
      state
    }) => {
      const structure = this.data[index]

      if (structure) {
        if (parent) {
          const value: DesignStructureItemSub = {
            name: structure.name,
            index,
            value: this.toValue(item.value),
            state: []
          }

          parent.push(value)
          this.makeValueState(state, value.state)

          if (
            value.state.length > 0
            && value.value.length === 0
          ) {
            value.value.push(true)
          }
        } else {
          this.makeValueState(state, this.data[index]?.state)
        }
      }
    })

    return this
  }

  /**
   * Returns a formatted string with the property name.
   *
   * Возвращает отформатированную строку с названием свойства.
   * @param item object for checking/ объект для проверки
   * @param index property identifier/ идентификатор свойства
   */
  protected toName(item: PropertyItem, index: string): string {
    const prop = item?.[PropertyKey.prop]

    return toCamelCase(
      (typeof prop === 'string' && prop)
      || item?.[PropertyKey.rename]
      || item?.[PropertyKey.index]
      || index
    )
  }

  /**
   * Returns all available values.
   *
   * Возвращает все доступные значения.
   * @param properties array with all property records/ массив со всеми записями свойств
   */
  protected toValue(properties?: PropertyItem['value']): DesignStructureItem['value'] {
    if (
      isFilled(properties)
      && isObjectNotArray(properties)
    ) {
      const value: DesignStructureItem['value'] = []
      let isTrue = false

      forEach(properties, (item, name) => {
        if (
          !(name in this.data)
          || item?.[PropertyKey.prop]
        ) {
          if (item?.[PropertyKey.variable] === PropertyType.state) {
            value.push(name)
          } else {
            isTrue = true
          }
        }
      })

      if (isTrue) {
        value.push(true)
      }

      return value
    }

    return [true]
  }
}
