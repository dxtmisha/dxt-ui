import { isArray } from './isArray'
import { isObject } from './isObject'

/** Type of collection supported for iteration / Тип коллекции, поддерживаемой для перебора */
export type ForEachData<T> = readonly T[] | Record<string, T> | Map<unknown, T> | Set<T>

/** Type of key based on the collection structure / Тип ключа в зависимости от структуры коллекции */
export type ForEachKey<D> = D extends readonly unknown[]
  ? number
  : D extends Set<infer S>
    ? S
    : D extends Map<infer K, unknown>
      ? K
      : string

/** Return array type based on saveUndefined / Тип возвращаемого массива в зависимости от saveUndefined */
export type ForEachReturn<R, S extends boolean = false> = (S extends true ? R : Exclude<R, undefined>)[]

/**
 * Adds a value to the return array if defined or saveUndefined is enabled.
 *
 * Добавляет значение в возвращаемый массив, если оно определено или включен saveUndefined.
 * @param returnData array to collect results / массив для сбора результатов
 * @param value callback execution result / результат выполнения функции обратного вызова
 * @param saveUndefined if true, the function will preserve undefined return values / если true, функция сохранит значения undefined
 */
function push<R>(
  returnData: R[],
  value: R,
  saveUndefined?: boolean
): void {
  if (
    saveUndefined
    || value !== undefined
  ) {
    returnData.push(value)
  }
}

/**
 * The function performs the specified function once for each element in the collection (Array, Object, Map, Set)
 * and returns an array with the results of executing the function (omitting undefined values unless saveUndefined is true).
 *
 * Функция выполняет указанную функцию один раз для каждого элемента в коллекции (Array, Object, Map, Set)
 * и возвращает массив с результатами выполнения функции (пропуская значения undefined, если saveUndefined не равен true).
 * @param data object or collection for iteration / объект или коллекция для перебора
 * @param callback a function to execute for each element / функция, которая будет вызвана для каждого элемента
 * @param saveUndefined if true, the function will preserve undefined return values / если true, функция сохранит значения undefined
 * @returns an array with the results of executing the function / массив с результатами выполнения функции
 */
export function forEach<
  T,
  R,
  D extends ForEachData<T> = ForEachData<T>,
  K = ForEachKey<D>,
  S extends boolean = false
>(
  data: D,
  callback: (item: T, key: K, collection: D) => R,
  saveUndefined?: S
): ForEachReturn<R, S> {
  if (!isObject(data)) {
    return []
  }

  const returnData: ForEachReturn<R, S> = []

  if (isArray(data)) {
    const length = data.length

    if (length === 0) {
      return returnData
    }

    for (let index = 0; index < length; index++) {
      push(returnData, callback(data[index] as T, index as unknown as K, data), saveUndefined)
    }
  } else if (data instanceof Map) {
    if (data.size === 0) {
      return returnData
    }

    for (const [key, item] of data as Map<K, T>) {
      push(returnData, callback(item, key, data), saveUndefined)
    }
  } else if (data instanceof Set) {
    if (data.size === 0) {
      return returnData
    }

    for (const item of data) {
      push(returnData, callback(item, item, data), saveUndefined)
    }
  } else {
    for (const key in data) {
      if (Object.hasOwn(data, key)) {
        push(returnData, callback(data[key], key as unknown as K, data), saveUndefined)
      }
    }
  }

  return returnData
}
