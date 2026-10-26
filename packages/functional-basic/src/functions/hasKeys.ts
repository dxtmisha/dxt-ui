/**
 * Checks if the object has any own properties.
 *
 * Проверяет, есть ли у объекта хотя бы одно собственное свойство.
 * @param object object to check / объект для проверки
 * @returns true if the object has own properties / true, если у объекта есть собственные свойства
 */
export function hasKeys<T extends object = Record<PropertyKey, unknown>>(
  object: unknown
): object is T {
  if (
    object !== null
    && (typeof object === 'object' || typeof object === 'function')
  ) {
    for (const key in object) {
      if (Object.hasOwn(object, key)) {
        return true
      }
    }
  }

  return false
}
