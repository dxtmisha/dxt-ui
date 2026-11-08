import type { Component } from 'vue'
import { forEach, type ItemList } from '@dxtmisha/functional-basic'

import { toBind } from '../functions/toBind'

import type {
  ComponentStorageData,
  ComponentStorageList,
  ComponentStorageReturn
} from '../types/componentStorageTypes'

/**
 * Instance class for storing and resolving Vue components with default properties.
 * When retrieving a component by name, it merges the registered default properties with the passed properties using `toBind`.
 *
 * Экземплярный класс для хранения и получения Vue компонентов со свойствами по умолчанию.
 * При получении компонента по имени объединяет зарегистрированные свойства по умолчанию с переданными свойствами через `toBind`.
 */
export class ComponentStorageInstance {
  /** Map of registered components and their default properties / Карта зарегистрированных компонентов и их свойств по умолчанию */
  protected readonly items = new Map<string, ComponentStorageData>()

  /**
   * Initializes ComponentStorageInstance with an optional list of components.
   *
   * Инициализирует ComponentStorageInstance с необязательным списком компонентов.
   * @param list initial list of components to register / начальный список компонентов для регистрации
   */
  constructor(
    list?: ComponentStorageList
  ) {
    if (list) {
      this.addList(list)
    }
  }

  /**
   * Retrieves a registered component by name and merges its default properties with the passed properties.
   *
   * Получает зарегистрированный компонент по имени и объединяет его свойства по умолчанию с переданными свойствами.
   * @param name component name / название компонента
   * @param props additional properties to merge with defaults / дополнительные свойства для объединения со свойствами по умолчанию
   * @returns component with merged properties or undefined if not found / компонент с объединёнными свойствами или undefined, если не найден
   */
  get<
    C extends Component = Component,
    P extends ItemList = ItemList
  >(
    name: string,
    props?: P
  ): ComponentStorageReturn<C, P> | undefined {
    const item = this.items.get(name)

    if (item) {
      return {
        component: item.component as C,
        props: toBind<P>(item.props, props)
      }
    }

    return undefined
  }

  /**
   * Checks if a component with the specified name is registered in the storage.
   *
   * Проверяет, зарегистрирован ли в хранилище компонент с указанным именем.
   * @param name component name / название компонента
   * @returns true if the component exists / true, если компонент существует
   */
  has(name: string): boolean {
    return this.items.has(name)
  }

  /**
   * Registers a Vue component with optional default properties in the storage.
   *
   * Регистрирует Vue компонент с необязательными свойствами по умолчанию в хранилище.
   * @param name component name / название компонента
   * @param component Vue component / Vue компонент
   * @param props default properties for the component / свойства по умолчанию для компонента
   * @returns current instance / текущий экземпляр
   */
  add<
    C extends Component = Component,
    P extends ItemList = ItemList
  >(
    name: string,
    component: C,
    props?: P
  ): this {
    this.items.set(name, {
      component,
      props
    })

    return this
  }

  /**
   * Registers a list of Vue components with their default properties in the storage.
   *
   * Регистрирует список Vue компонентов с их свойствами по умолчанию в хранилище.
   * @param list list of component registration items / список элементов регистрации компонентов
   * @returns current instance / текущий экземпляр
   */
  addList(list: ComponentStorageList): this {
    forEach(list, ({ name, component, props }) => {
      this.add(name, component, props)
    })

    return this
  }
}
