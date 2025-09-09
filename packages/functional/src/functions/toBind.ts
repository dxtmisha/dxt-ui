import type { ItemList } from '../types/basicTypes'
import type { ConstrBind, ConstrClass, ConstrStyles } from '../types/constructorTypes'

/**
 * Merges two objects with properties, taking into account their classes and styles
 *
 * Объединяет два объекта со свойствами с учётом классов и стилей в них
 * @param extra additional property/ дополнительное свойство
 * @param value input value/ входное значение
 */
export function toBind<R extends ItemList = ItemList>(
  extra: ItemList,
  value: ItemList
): ConstrBind<R> {
  const extraClass: ConstrClass | undefined = extra?.class
  const valueClass: ConstrClass | undefined = value?.class

  const extraStyle: ConstrStyles | undefined = extra?.style
  const valueStyle: ConstrStyles | undefined = value?.style

  const data: ConstrBind<R> = {
    ...extra,
    ...value
  } as ConstrBind<R>

  if (extraClass && valueClass) {
    data.class = []

    if (extraClass) {
      data.class.push(extraClass)
    }

    if (valueClass) {
      data.class.push(valueClass)
    }
  }

  if (extraStyle && valueStyle) {
    data.style = []

    if (extraStyle) {
      data.style.push(extraStyle)
    }

    if (valueStyle) {
      data.style.push(valueStyle)
    }
  }

  return data
}
