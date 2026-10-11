import type { ItemList } from '@dxtmisha/functional-basic'

import { toBindReact } from './toBindReact'

import type { ConstrBindReact } from '../types/constructorTypes'

/**
 * Merges multiple objects with properties, taking into account their `className` and `style`.
 *
 * Объединяет несколько объектов со свойствами с учётом `className` и `style` в них.
 * @param values list of input values / список входных значений
 * @returns merged properties / объединённые свойства
 */
export function toBindsReact<R extends ItemList = ItemList>(
  ...values: (ItemList | undefined)[]
): ConstrBindReact<R> {
  let data = {} as ConstrBindReact<R>

  values.forEach((value) => {
    if (value) {
      data = toBindReact<R>(data, value)
    }
  })

  return data
}
