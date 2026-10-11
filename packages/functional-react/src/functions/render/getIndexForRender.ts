import type { ElementType } from 'react'
import { isString, type ItemList } from '@dxtmisha/functional-basic'

/**
 * Returns or generates a key for the rendered element.
 *
 * Возвращает или генерирует ключ для отрисовываемого элемента.
 * @param name name of the component / названия компонента
 * @param props property of the component / свойство компонента
 * @param index the name of the key / названия ключа
 * @returns element key / ключ элемента
 */
export function getIndexForRender<T extends ItemList>(
  name: ElementType,
  props?: T,
  index?: string
): string | undefined {
  const id = props?.id
  const indexProp = props?.index
  const className = props?.className
  let result = ''

  if (isString(name)) {
    result += name
  }

  if (index) {
    result += `.${index}`
  }

  if (indexProp && isString(indexProp)) {
    result += `.${indexProp}`
  }

  if (className && isString(className)) {
    result += `.${className}`
  }

  if (id) {
    result += `.${id}`
  }

  if (result !== '') {
    return result
  }

  return undefined
}
