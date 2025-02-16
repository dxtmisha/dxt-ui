import { getClassName } from './getClassName'
import { type ItemList } from '../../types/basicTypes'

/**
 * Returns or generates a new element.
 *
 * Возвращает или генерирует новый элемент.
 * @param name name of the component/ названия компонента
 * @param props property of the component/ свойство компонента
 * @param index the name of the key/ названия ключа
 */
export function getIndexForRender<T extends ItemList>(
  name: string,
  props?: T,
  index?: string
): string {
  const className = getClassName(props)

  if (index && className) {
    return `${index}.${className}`
  }

  if (index) {
    return index
  }

  if (className) {
    return className
  }

  return name
}
