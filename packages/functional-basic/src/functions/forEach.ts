import { isObject } from './isObject'

/**
 * The function performs the specified function once for each element in the object
 * and returns an array with the results of executing the function.
 *
 * Функция выполняет указанную функцию один раз для каждого элемента в объекте
 * и возвращает массив с результатами выполнения функции.
 * @param data object for iteration / объект для перебора
 * @param callback a function to execute for each element in the array /
 * функция, которая будет вызвана для каждого элемента
 * @param saveUndefined if true, the function will return an array with undefined values /
 * если true, функция вернет массив с undefined значениями
 * @returns returns an array with the results of executing the function / возвращает массив с результатами выполнения функции
 */
export function forEach<
  T,
  R,
  D extends T[] | Record<string, T> | Map<string, T> | Set<T> = T[] | Record<string, T> | Map<string, T> | Set<T>,
  K = D extends T[] ? number : string
>(
  data: D & (T[] | Record<string, T> | Map<string, T> | Set<T>),
  callback: (item: T, key: K, dataMain: typeof data) => R,
  saveUndefined?: boolean
): R[] {
  if (isObject(data)) {
    const returnData: R[] = []

    /**
     * Internal function for adding data to an array.
     *
     * Внутренняя функция для добавления данных в массив.
     * @param item current element/ текущий элемент
     * @param key key of the element/ ключ элемента
     * @param data object for iteration/ объект для перебора
     */
    const push = (
      item: T,
      key: K,
      data: D
    ) => {
      const value = callback(item, key, data)

      if (
        saveUndefined
        || value !== undefined
      ) {
        returnData.push(value)
      }
    }

    if (data instanceof Map) {
      data.forEach((item: T, key) => push(item, key as K, data))
    } else if (data instanceof Set) {
      data.forEach((item: T) => push(item, item as unknown as K, data))
    } else if (Array.isArray(data)) {
      data.forEach((item: T, key) => push(item, key as K, data))
    } else {
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          push(data[key] as T, key as unknown as K, data)
        }
      }
    }

    return returnData
  }

  return []
}
