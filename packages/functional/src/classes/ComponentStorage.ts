import type { Component } from 'vue'
import type { ItemList } from '@dxtmisha/functional-basic'

import { ComponentStorageInstance } from './ComponentStorageInstance'

import type {
  ComponentStorageList,
  ComponentStorageReturn
} from '../types/componentStorageTypes'

/**
 * Static facade for storing and resolving Vue components with default properties.
 * Uses a single shared `ComponentStorageInstance` across the entire runtime (including SSR).
 *
 * Статический фасад для хранения и получения Vue компонентов со свойствами по умолчанию.
 * Использует единый общий экземпляр `ComponentStorageInstance` для всего процесса (включая SSR).
 */
export class ComponentStorage {
  /** Shared component storage instance across the runtime / Общий экземпляр хранилища компонентов для всего процесса */
  protected static item?: ComponentStorageInstance

  /**
   * Retrieves a registered component by name and merges its default properties with the passed properties.
   *
   * Получает зарегистрированный компонент по имени и объединяет его свойства по умолчанию с переданными свойствами.
   * @param name component name / название компонента
   * @param props additional properties to merge with defaults / дополнительные свойства для объединения со свойствами по умолчанию
   * @returns component with merged properties or undefined if not found / компонент с объединёнными свойствами или undefined, если не найден
   */
  static get<
    C extends Component = Component,
    P extends ItemList = ItemList
  >(
    name: string,
    props?: P
  ): ComponentStorageReturn<C, P> | undefined {
    return this.getItem().get<C, P>(name, props)
  }

  /**
   * Checks if a component with the specified name is registered in the storage.
   *
   * Проверяет, зарегистрирован ли в хранилище компонент с указанным именем.
   * @param name component name / название компонента
   * @returns true if the component exists / true, если компонент существует
   */
  static has(name: string): boolean {
    return this.getItem().has(name)
  }

  /**
   * Returns the shared `ComponentStorageInstance` instance.
   *
   * Возвращает общий экземпляр `ComponentStorageInstance`.
   * @returns shared ComponentStorageInstance / общий экземпляр ComponentStorageInstance
   */
  static getItem(): ComponentStorageInstance {
    if (!this.item) {
      this.item = new ComponentStorageInstance()
    }

    return this.item
  }

  /**
   * Registers a Vue component with optional default properties in the storage.
   *
   * Регистрирует Vue компонент с необязательными свойствами по умолчанию в хранилище.
   * @param name component name / название компонента
   * @param component Vue component / Vue компонент
   * @param props default properties for the component / свойства по умолчанию для компонента
   */
  static add<
    C extends Component = Component,
    P extends ItemList = ItemList
  >(
    name: string,
    component: C,
    props?: P
  ): void {
    this.getItem().add(name, component, props)
  }

  /**
   * Registers a list of Vue components with their default properties in the storage.
   *
   * Регистрирует список Vue компонентов с их свойствами по умолчанию в хранилище.
   * @param list list of component registration items / список элементов регистрации компонентов
   */
  static addList(list: ComponentStorageList): void {
    this.getItem().addList(list)
  }
}
