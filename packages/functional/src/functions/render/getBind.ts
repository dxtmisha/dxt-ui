import { isObjectNotArray, type ItemList } from '@dxtmisha/functional-basic'
import { toBind } from '../toBind'

import type { ConstrBind } from '../../types/constructorTypes'

/**
 * A method for generating properties for a subcomponent.
 *
 * Метод для генерации свойств для подкомпонента.
 * @param value input value. Can be an object if you need to pass multiple properties /
 * входное значение. Может быть объектом, если надо передать несколько свойств
 * @param nameExtra additional parameter or property name / дополнительный параметр или имя свойства
 * @param name property name / имя свойства
 * @param except exclude the rule requiring the presence of a primary key /
 * исключить правило обязательности наличия главного ключа
 * @returns generated properties object / сгенерированный объект свойств
 */
export function getBind<T = unknown, R extends ItemList = ItemList>(
  value: T | R | undefined | null,
  nameExtra: ItemList | string = {},
  name = 'value',
  except = false
): ConstrBind<R> {
  const isName = typeof nameExtra === 'string'
  const index = isName ? nameExtra : name
  const extra = isName ? undefined : nameExtra

  if (value) {
    if (
      isObjectNotArray(value)
      && (index in value || except)
    ) {
      return toBind<R>(extra, value)
    }

    return toBind<R>(extra, { [index]: value })
  }

  return { ...extra } as ConstrBind<R>
}
