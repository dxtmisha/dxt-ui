// export:none

import { PropertiesToAbstract } from './PropertiesToAbstract'

import {
  type PropertyItem,
  type PropertyItemsItem,
  PropertyKey,
  PropertyType
} from '../../../types/propertyTypes'

/**
 * A class for transforming components.
 *
 * Класс для преобразования компонент.
 */
export class PropertiesToComponent extends PropertiesToAbstract {
  protected readonly FILE_CACHE = '028-component'

  protected init(): void {
    this.items.findVariable([PropertyType.component, PropertyType.theme]).forEach(({
      name,
      item,
      parents
    }) => {
      item[PropertyKey.name] = this.getName(this.items.getReName(name, item), item, parents)
    })
  }

  /**
   * Name transformation for the component type.
   *
   * Преобразование имени для типа component.
   * @param name base property name/ базовое название свойства
   * @param item current element/ текущий элемент
   * @param parents array of all ancestor properties along the tree from the top level/
   * массив со всеми свойствами предков по дереву от верхнего уровня
   */
  private getName(
    name: string,
    item: PropertyItem,
    parents: PropertyItemsItem['parents']
  ): string {
    const newName = this.items.getReName(name, item)

    if (item?.[PropertyKey.fullName]) {
      return `${newName}`
    }

    return `${this.items.getParentsName(parents).join('-')}-${newName}`
  }
}
