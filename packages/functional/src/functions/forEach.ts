import { isObject } from './isObject'

/**
 * The function performs the specified function once for each element in the object.
 * And returns an array with the results of executing the function.<br>
 * Функция выполняет указанную функцию один раз для каждого элемента в объекте.
 * И возвращает массив с результатами выполнения функции.
 * @param data object for iteration /<br>объект для перебора
 * @param callback a function to execute for each element in the array /<br>
 * функция, которая будет вызвана для каждого элемента
 */
export function forEach<
  T,
  R,
  D extends T[] | Record<string, T> | Map<string, T> = T[] | Record<string, T> | Map<string, T>,
  K = D extends T[] ? number : string
>(
  data: D & (T[] | Record<string, T> | Map<string, T>),
  callback: (item: T, key: K, dataMain: typeof data) => R
): R[] {
  if (isObject(data)) {
    const returnData: R[] = []

    if (data instanceof Map) {
      data.forEach((item: T, key) => returnData.push(callback(item, key as K, data)))
    } else if (Array.isArray(data)) {
      data.forEach((item: T, key) => returnData.push(callback(item, key as K, data)))
    } else {
      Object.entries(data).forEach(
        ([key, item]) => returnData.push(callback(item, key as K, data))
      )
    }

    return returnData.filter((item: R | undefined) => item !== undefined)
  }

  return []
}
