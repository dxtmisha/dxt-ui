import type { ItemList } from '@dxtmisha/functional-basic'
import { toBind } from './toBind'

import type { ConstrBind } from '../types/constructorTypes'

/**
 * Merges multiple objects with properties, taking into account their classes and styles
 *
 * Объединяет несколько объектов со свойствами с учётом классов и стилей в них
 * @param values list of input values/ список входных значений
 */
export function toBinds<R extends ItemList = ItemList>(
  ...values: (ItemList | undefined)[]
): ConstrBind<R> {
  let data = {} as ConstrBind<R>

  values.forEach((value) => {
    if (value) {
      data = toBind<R>(data, value)
    }
  })

  return data
}
