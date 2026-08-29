// export:none

import { Properties } from '../Properties/Properties'
import { PropertiesConfig } from '../Properties/PropertiesConfig'

import type { PropertyItemsItem } from '../../types/propertyTypes'

/**
 * Base abstract class for structural component items.
 * It provides the foundation for resolving component properties and metadata from the design system's central storage.
 *
 * Базовый абстрактный класс для структурных элементов компонента.
 * Предоставляет основу для разрешения свойств и метаданных компонента из центрального хранилища дизайн-системы.
 */
export abstract class DesignStructureItemAbstract<D> {
  /** Properties management instance / Экземпляр управления свойствами */
  protected properties: Properties

  /** Resolved property metadata / Разрешенные метаданные свойства */
  protected items?: PropertyItemsItem

  /** Underlying structured data / Лежащие в основе структурированные данные */
  protected abstract data: D

  /**
   * Constructor for DesignStructureItemAbstract.
   *
   * Конструктор для DesignStructureItemAbstract.
   * @param component component name for which the structure is being resolved / имя компонента, для которого разрешается структура
   */
  protected constructor(
    protected readonly component: string
  ) {
    this.properties = new Properties()
    this.items = this.properties.get().getInfo(this.getLink())
  }

  /**
   * Getting all data about dependencies of the current component.
   *
   * Получение всех данных об зависимостях у текущего компонента.
   * @returns resolved structure data / разрешенные данные структуры
   */
  get(): D {
    return this.data
  }

  /**
   * Returns a reference to the component.
   *
   * Возвращает ссылку на компонент.
   * @returns component token link string / строка ссылки на токен компонента
   */
  protected getLink(): string {
    return `{${PropertiesConfig.getDesignName()}.${this.component}}`
  }
}
