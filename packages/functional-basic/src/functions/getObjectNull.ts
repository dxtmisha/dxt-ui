import { isObjectNotArray } from './isObjectNotArray'

/**
 * Creates an object without a prototype (Object.create(null)).
 * Optionally copies properties from the provided data object into the new prototype-less object.
 *
 * Создает объект без прототипа (Object.create(null)).
 * При необходимости копирует свойства из переданного объекта данных в новый объект без прототипа.
 * @param data optional initial object data / необязательные начальные данные объекта
 * @returns prototype-less object / объект без прототипа
 */
export function getObjectNull<T = unknown>(
  data?: Record<string, T>
): Record<string, T> {
  const item: Record<string, T> = Object.create(null)

  if (isObjectNotArray(data)) {
    return Object.assign(item, data)
  }

  return item
}
