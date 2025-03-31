import { PropertiesToAbstract } from './PropertiesToAbstract'

import {
  type PropertyItem,
  type PropertyItemsItem,
  PropertyKey,
  PropertyType
} from '../../../types/propertyTypes'

/**
 * A class for transforming subclass.
 *
 * Класс для преобразования subclass.
 */
export class PropertiesToSubclass extends PropertiesToAbstract {
  protected readonly FILE_CACHE = '036-subclass'

  protected init(): void {
    this.items.findVariable(PropertyType.subclass).forEach(({
      name,
      item,
      parents
    }) => {
      const newName = this.items.getReName(name, item)

      item[PropertyKey.name] = this.getName(newName, item, parents)
      item[PropertyKey.nameIndex] = newName
    })
  }

  /**
   * Checks if the top-level type is a state.
   *
   * Проверяет, является ли тип верхнего уровня - это state.
   * @param parents array of all ancestor properties along the tree from the top level/
   * массив со всеми свойствами предков по дереву от верхнего уровня
   */
  private isParentState(parents: PropertyItemsItem['parents']): boolean {
    const type = parents[parents.length - 1].item?.[PropertyKey.variable] ?? PropertyType.subclass

    return [
      PropertyType.component,
      PropertyType.subclass,
      PropertyType.classType
    ].indexOf(type) < 0
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
    if (item?.[PropertyKey.fullName]) {
      return `& .${name}`
    } else if (this.isParentState(parents)) {
      const parentsName = this.items.getParentsName(parents, [PropertyType.subclass])
        .join('__')
        .replace('__', '-')

      return `& .${parentsName}__${name}`
    }

    return `&__${name}`
  }
}
