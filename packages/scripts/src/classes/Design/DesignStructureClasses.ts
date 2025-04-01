import { forEach, isFilled, isObjectNotArray, toCamelCase } from '@dxt-ui/functional'

import { DesignStructureItemAbstract } from './DesignStructureItemAbstract'

import {
  type PropertyItem,
  PropertyKey,
  PropertyType
} from '../../types/propertyTypes'
import {
  type DesignStructureClassesList
} from '../../types/designTypes'

/**
 * A class for getting a list of classes of components.
 *
 * Класс для получения списка классов компонентов.
 */
export class DesignStructureClasses extends DesignStructureItemAbstract<DesignStructureClassesList> {
  protected data: DesignStructureClassesList = []

  /**
   * Constructor
   * @param component component name/ название компонента
   */
  constructor(
    component: string
  ) {
    super(component)
    this.data = this.make(this.items?.value)
  }

  /**
   * Returns records that meet state conditions.
   *
   * Возвращает записи, удовлетворяющие условиям состояния.
   * @param properties input data/ входной данный
   * @param parent ancestor name/ название предка
   */
  protected make(
    properties?: PropertyItem['value'],
    parent: string[] = []
  ): DesignStructureClassesList {
    const list: DesignStructureClassesList = []
    if (
      isFilled(properties)
      && isObjectNotArray(properties)
    ) {
      forEach(properties, (item) => {
        if (this.isClasses(item)) {
          const names = this.getNames(item, parent)

          list.push(
            {
              index: toCamelCase(names.join('-')),
              full: item?.[PropertyKey.fullName] ?? false,
              className: names.join('__')
            },
            ...this.make(item?.value, names)
          )
        }
      })
    }

    return list
  }

  /**
   * Does this property belong to the class.
   *
   * Является ли это свойство частью класса.
   * @param item object for checking/ объект для проверки
   */
  protected isClasses(item: PropertyItem): boolean {
    return Boolean(
      item?.[PropertyKey.variable] === PropertyType.subclass || item?.[PropertyKey.subclass]
    )
  }

  /**
   * Obtaining the name of the class.
   *
   * Получение имени класса.
   * @param item object for checking/ объект для проверки
   * @param parent list of names of ancestors/ список имен предков
   */
  protected getNames(
    item: PropertyItem,
    parent: string[]
  ): string[] {
    const name = item?.[PropertyKey.nameIndex] ?? item?.[PropertyKey.index] ?? ''

    if (item?.[PropertyKey.fullName]) {
      return [name]
    }

    return [...parent, name]
  }
}
