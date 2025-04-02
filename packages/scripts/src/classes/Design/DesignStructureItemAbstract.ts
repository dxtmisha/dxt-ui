// export:none

import { Properties } from '../Properties/Properties'
import { PropertiesConfig } from '../Properties/PropertiesConfig'

import type { PropertyItemsItem } from '../../types/propertyTypes'

export abstract class DesignStructureItemAbstract<D> {
  protected properties: Properties
  protected items?: PropertyItemsItem

  protected abstract data: D

  /**
   * Constructor
   * @param component component name/ название компонента
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
   */
  get(): D {
    return this.data
  }

  /**
   * Returns a reference to the component.
   *
   * Возвращает ссылку на компонент.
   * Это полный массив со всеми обработанными свойствами.
   */
  protected getLink(): string {
    return `{${PropertiesConfig.getDesignName()}.${this.component}}`
  }
}
