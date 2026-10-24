import { isString, type ItemList } from '@dxtmisha/functional-basic'

/**
 * Builds a render key from the component name, indexes and id, ignoring presentation properties.
 *
 * Формирует ключ рендеринга из имени компонента, индексов и id, игнорируя свойства оформления.
 * @param name name of the component/ названия компонента
 * @param props property of the component/ свойство компонента
 * @param index the name of the key/ названия ключа
 * @returns generated key or undefined when identifiers are absent / ключ или undefined при отсутствии идентификаторов
 */
export function getIndexForRender<T extends ItemList>(
  name: string | any,
  props?: T,
  index?: string
): string | undefined {
  const id = props?.id
  const indexProp = props?.index
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

  if (id) {
    result += `.${id}`
  }

  if (result !== '') {
    return result
  }

  return undefined
}
