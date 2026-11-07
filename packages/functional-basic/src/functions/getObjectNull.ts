import { isObjectNotArray } from './isObjectNotArray'

/**
 * Creates an object without a prototype (Object.create(null)).
 * Optionally copies the source object's own enumerable properties.
 *
 * Создает объект без прототипа (Object.create(null)).
 * При необходимости копирует собственные перечисляемые свойства исходного объекта.
 * @param data optional initial object data / необязательные начальные данные объекта
 * @returns prototype-less object / объект без прототипа
 */
export function getObjectNull<T = unknown>(
  data?: Record<string, T> | null
): Record<string, T> {
  const item: Record<string, T> = Object.create(null)

  if (isObjectNotArray(data)) {
    return Object.assign(item, data)
  }

  return item
}
