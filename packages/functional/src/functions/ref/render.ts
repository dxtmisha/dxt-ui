import { h, type VNode } from 'vue'
import { getIndexForRender } from '../render/getIndexForRender'

import { type ItemList } from '../../types/basicTypes'
import { type RawChildren, type RawSlots } from '../../types/refTypes'

/**
 * Getting cached, immutable data.
 *
 * Получение кешированных, неизменяемых данных.
 * @param name name of the component/ названия компонента
 * @param props property of the component/ свойство компонента
 * @param children sub-elements of the component/ под элементы компонента
 * @param index the name of the key/ названия ключа
 */
export function render<T extends ItemList>(
  name: string,
  props?: T,
  children?: RawChildren | RawSlots,
  index?: string
): VNode {
  const code = getIndexForRender(name, props, index)

  return h(name, { key: code, ...props }, children)
}
