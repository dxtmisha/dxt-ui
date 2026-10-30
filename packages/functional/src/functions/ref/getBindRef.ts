import { computed, type ComputedRef } from 'vue'

import { getBind } from '../render/getBind'
import { getRef } from './getRef'

import type { ItemList } from '@dxtmisha/functional-basic'
import type { ConstrBind } from '../../types/constructorTypes'
import type { RefOrNormal } from '../../types/refTypes'

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
 * @returns computed reference to generated properties / вычисляемая ссылка на сгенерированные свойства
 */
export function getBindRef<T = unknown, R extends ItemList = ItemList>(
  value: RefOrNormal<T | R> | undefined,
  nameExtra: RefOrNormal<ItemList> | string = {},
  name = 'value',
  except = false
): ComputedRef<ConstrBind<R>> {
  return computed(() => getBind<T, R>(getRef(value), getRef(nameExtra), name, except))
}
