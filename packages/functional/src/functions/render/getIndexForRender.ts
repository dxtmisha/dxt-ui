import { isString, type ItemList } from '@dxtmisha/functional-basic'
import { getClassName } from './getClassName'

/**
 * Returns or generates a new element.
 *
 * Возвращает или генерирует новый элемент.
 * @param name name of the component/ названия компонента
 * @param props property of the component/ свойство компонента
 * @param index the name of the key/ названия ключа
 */
export function getIndexForRender<T extends ItemList>(
  name: string | any,
  props?: T,
  index?: string
): string | undefined {
  const id = props?.id
  const indexProp = props?.index
  const className = getClassName(props)
  let result = ''

  if (isString(name)) {
    result += `.${name}`
  }

  if (index) {
    result += `.${index}`
  }

  if (indexProp && isString(indexProp)) {
    result += `.${indexProp}`
  }

  if (className) {
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
