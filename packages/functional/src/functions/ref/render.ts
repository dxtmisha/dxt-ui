import { h, type VNode } from 'vue'
import { getIndexForRender } from '../render/getIndexForRender'

import type { ItemList } from '@dxtmisha/functional-basic'
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
  let data: any = props

  if (
    !props
    || ('key' in props)
  ) {
    data = {
      key: getIndexForRender(name, props, index),
      ...props
    }
  }

  return h(name, data, children)
}
