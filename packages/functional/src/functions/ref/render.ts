import { h, type VNode } from 'vue'
import { getIndexForRender } from '../render/getIndexForRender'

import type { ItemList } from '@dxtmisha/functional-basic'
import { type RawChildren, type RawSlots } from '../../types/refTypes'

/**
 * Creates a VNode and supplies an automatic key when props do not contain a key property.
 * An explicitly provided key is preserved, including null and undefined.
 * The generated key depends on component identity rather than presentation classes.
 *
 * Создаёт VNode и добавляет автоматический ключ, если props не содержит свойства key.
 * Явно переданный ключ сохраняется, включая null и undefined.
 * Автоматический ключ зависит от идентичности компонента, а не от классов оформления.
 * @template T component properties / свойства компонента
 * @param name tag name or component definition accepted by Vue h / имя тега или определение компонента, принимаемое Vue h
 * @param props properties passed to Vue h; copied when an automatic key is added / свойства, передаваемые в Vue h; копируются при добавлении автоматического ключа
 * @param children child nodes, text or slots / дочерние узлы, текст или слоты
 * @param index external identifier used for the automatic key / внешний идентификатор для автоматического ключа
 * @returns newly created VNode / созданный VNode
 */
export function render<T extends ItemList>(
  name: string | any,
  props?: T,
  children?: RawChildren | RawSlots,
  index?: string
): VNode {
  let data: any = props
  const keyExists = props && 'key' in props

  if (!props || !keyExists) {
    data = {
      ...props,
      key: getIndexForRender(name, props, index)
    }
  }

  return h(name, data, children)
}
