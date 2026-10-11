import type { ItemList } from '@dxtmisha/functional-basic'

import { toClassString } from './toClassString'
import { toCssProperties } from './toCssProperties'

import type { ConstrBindReact } from '../types/constructorTypes'

/**
 * Merges two objects with properties, taking into account their `className` and `style`.
 * Classes are combined into a single string, styles are combined into a single object.
 *
 * Объединяет два объекта со свойствами с учётом `className` и `style` в них.
 * Классы объединяются в одну строку, стили объединяются в один объект.
 * @param extra additional property / дополнительное свойство
 * @param value input value / входное значение
 * @returns merged properties / объединённые свойства
 */
export function toBindReact<R extends ItemList = ItemList>(
  extra: ItemList,
  value: ItemList
): ConstrBindReact<R> {
  const extraClass = extra?.className
  const valueClass = value?.className

  const extraStyle = extra?.style
  const valueStyle = value?.style

  const data: ConstrBindReact<R> = {
    ...extra,
    ...value
  } as ConstrBindReact<R>

  if (extraClass || valueClass) {
    data.className = toClassString([extraClass, valueClass])
  }

  if (extraStyle || valueStyle) {
    data.style = toCssProperties([extraStyle ?? {}, valueStyle ?? {}])
  }

  return data
}
