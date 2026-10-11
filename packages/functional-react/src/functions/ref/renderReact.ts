import {
  createElement,
  type ElementType,
  type ReactElement,
  type ReactNode
} from 'react'
import type { ItemList } from '@dxtmisha/functional-basic'

import { getIndexForRender } from '../render/getIndexForRender'

/**
 * Creates a React element and assigns it a stable key if the key is not passed in the properties.
 * Children are passed only when defined, so `children` from the properties is not overwritten.
 *
 * Создаёт React-элемент и назначает ему стабильный ключ, если ключ не передан в свойствах.
 * Дочерние элементы передаются только при наличии, чтобы не перезаписать `children` из свойств.
 * @param name name of the component / названия компонента
 * @param props property of the component / свойство компонента
 * @param children sub-elements of the component / под элементы компонента
 * @param index the name of the key / названия ключа
 * @returns React element / React-элемент
 */
export function renderReact<T extends ItemList>(
  name: ElementType,
  props?: T,
  children?: ReactNode,
  index?: string
): ReactElement {
  const data: ItemList = props && 'key' in props
    ? props
    : {
        ...props,
        key: getIndexForRender(name, props, index)
      }

  if (children === undefined) {
    return createElement(name, data)
  }

  return createElement(name, data, children)
}
