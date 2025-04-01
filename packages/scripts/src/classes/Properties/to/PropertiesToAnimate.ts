// export:none

import { forEach, isObjectNotArray } from '@dxt-ui/functional'

import { PropertiesToAbstract } from './PropertiesToAbstract'

import {
  type PropertyItem,
  type PropertyItemsItem,
  PropertyKey,
  PropertyType
} from '../../../types/propertyTypes'

/**
 * A class for transforming animate.
 *
 * Класс для преобразования animate.
 */
export class PropertiesToAnimate extends PropertiesToAbstract {
  protected readonly FILE_CACHE = '044-animate'

  protected init(): void {
    this.items
      .findVariable(PropertyType.animate)
      .forEach(({
        name,
        value,
        item,
        parents
      }) => {
        item[PropertyKey.name] = this.getName(this.items.getReName(name, item), item, parents)

        if (isObjectNotArray(value)) {
          forEach(value, (frame, code) => {
            frame[PropertyKey.variable] = PropertyType.animateFrame
            frame[PropertyKey.name] = frame?.[PropertyKey.index] ?? code
          })
        }
      })
  }

  /**
   * @param name base property name/ базовое название свойства
   * @param item current element/ текущий элемент
   * @param parents array of all ancestor properties along the tree from the top level/
   * массив со всеми свойствами предков по дереву от верхнего уровня
   */
  private getName(
    name: string,
    item: PropertyItem,
    parents: PropertyItemsItem['parents']
  ) {
    if (item?.[PropertyKey.fullName]) {
      return name
    } else {
      return `${this.items.getParentsName(parents).join('-')}-${name}`
    }
  }
}
