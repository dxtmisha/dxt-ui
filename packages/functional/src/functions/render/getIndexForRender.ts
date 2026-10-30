import { isString, type ItemList } from '@dxtmisha/functional-basic'

/**
 * Builds a render key by concatenating a string component name, the external index,
 * a string props.index and a truthy props.id in that order.
 * Presentation properties such as class are ignored.
 *
 * Формирует ключ рендеринга, последовательно объединяя строковое имя компонента,
 * внешний индекс, строковый props.index и истинный props.id.
 * Свойства оформления, например class, игнорируются.
 * @template T component properties containing optional identity fields / свойства компонента с необязательными полями идентичности
 * @param name component name or definition; only string names contribute to the key / имя или определение компонента; в ключ включаются только строковые имена
 * @param props component properties containing optional index and id / свойства компонента с необязательными index и id
 * @param index external identifier added before identifiers from props / внешний идентификатор, добавляемый перед идентификаторами из props
 * @returns generated key, or undefined when every contributing identifier is absent / сформированный ключ либо undefined при отсутствии всех участвующих идентификаторов
 */
export function getIndexForRender<T extends ItemList = ItemList>(
  name?: unknown,
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

  return result || undefined
}
