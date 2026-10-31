import { normalizeClass } from 'vue'
import { isObject, type ItemList } from '@dxtmisha/functional-basic'

/**
 * Returns the normalized name of the class from the property.
 *
 * Возвращает нормализованное название класса из свойства.
 * @template T component properties object type / тип объекта свойств компонента
 * @param props property of the component / свойство компонента
 * @returns normalized class name if present, otherwise undefined / нормализованное название класса, если присутствует, иначе undefined
 */
export function getClassName<T extends ItemList = ItemList>(props?: T | unknown): string | undefined {
  if (isObject(props) && 'class' in props) {
    const className = normalizeClass(props.class)

    if (className) {
      return className
    }
  }

  return undefined
}
