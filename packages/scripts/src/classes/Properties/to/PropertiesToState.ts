import { isObjectNotArray } from '@dxtmisha/functional'

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
 * Класс для преобразования состояния.
 */
export class PropertiesToState extends PropertiesToAbstract {
  protected readonly FILE_CACHE = '032-state'

  protected init(): void {
    this.items.findVariable([PropertyType.state]).forEach(({
      name,
      item,
      parents
    }) => {
      item[PropertyKey.name] = this.getName(name, item, parents)
    })
  }

  /**
   * Name transformation for the state type.
   *
   * Преобразование имени для типа state.
   * @param name base property name/ базовое название свойства
   * @param item current element/ текущий элемент
   * @param parents current element/ текущий элемент
   */
  private getName(
    name: string,
    item: PropertyItem,
    parents: PropertyItemsItem['parents']
  ): string {
    const newName = this.items.getReName(name, item)

    if (item?.[PropertyKey.fullName]) {
      return `&.${newName}`
    }

    const value = parents?.[1]?.item.value

    if (
      !item?.[PropertyKey.state]
      && parents.length > 2
      && isObjectNotArray(value)
      && value?.[name]
      && value[name][PropertyKey.variable] === PropertyType.state
    ) {
      return `&.${parents?.[1]?.item[PropertyKey.name]}--${newName}`
    }

    return `&--${newName}`
  }
}
