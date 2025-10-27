import type { ItemList } from '@dxtmisha/functional-basic'

/**
 * Returns the name of the class from the property.
 *
 * Возвращает название класса из свойства.
 * @param props property of the component/ свойство компонента
 */
export function getClassName<T extends ItemList>(props?: T): string | undefined {
  return props && 'class' in props && typeof props.class === 'string' ? props.class : undefined
}
