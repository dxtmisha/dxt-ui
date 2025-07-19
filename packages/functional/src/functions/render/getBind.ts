import { isObjectNotArray } from '../isObjectNotArray'
import { toBind } from '../toBind'

import { type ItemList } from '../../types/basicTypes'
import type { ConstrBind } from '../../types/constructorTypes'

/**
 * A method for generating properties for a subcomponent.
 *
 * Метод для генерации свойств для под компонента.
 * @param value input value. Can be an object if you need to pass multiple properties/
 * входное значение. Может быть объектом, если надо передать несколько свойств
 * @param nameExtra additional parameter or property name/ дополнительный параметр или имя свойства
 * @param name property name/ имя свойства
 * @param except exclude the rule requiring the presence of a primary key/
 * исключить правило обязательности наличия главного ключа
 */
export function getBind<T, R extends ItemList>(
  value: T | R | undefined,
  nameExtra: ItemList | string = {},
  name = 'value',
  except: boolean = false
): ConstrBind<R> {
  const isName = typeof nameExtra === 'string'
  const index = isName ? nameExtra : name
  const extra = isName ? {} : nameExtra

  if (value) {
    if (
      value
      && isObjectNotArray(value)
      && (index in value || except)
    ) {
      return toBind<R>(extra, value)
    }
    console.log('extra', extra)
    return toBind<R>(extra, { [index]: value })
  }

  if (!isName) {
    return { ...extra } as R
  }

  return {} as R
}
