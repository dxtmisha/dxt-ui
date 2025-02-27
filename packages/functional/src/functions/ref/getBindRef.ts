import { computed, type ComputedRef } from 'vue'

import { getBind } from '../render/getBind'
import { getRef } from './getRef'

import type { ItemList } from '../../types/basicTypes'
import type { RefOrNormal } from '../../types/refTypes'

/**
 * A method for generating properties for a subcomponent.
 *
 * Метод для генерации свойств для под компонента.
 * @param value input value. Can be an object if you need to pass multiple properties/
 * входное значение. Может быть объектом, если надо передать несколько свойств
 * @param nameExtra additional parameter or property name/ дополнительный параметр или имя свойства
 * @param name property name/ имя свойства
 */
export function getBindRef<T, R extends ItemList>(
  value: RefOrNormal<T | R> | undefined,
  nameExtra: RefOrNormal<ItemList> | string = {},
  name = 'value'
): ComputedRef<R> {
  return computed(() => getBind<T, R>(getRef(value), getRef(nameExtra), name))
}
