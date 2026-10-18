import { isArray } from './isArray'
import { isObject } from './isObject'

/** Type of collection supported for iteration / Тип коллекции, поддерживаемой для перебора */
export type ForEachData<T> = readonly T[] | Record<string, T> | Map<any, T> | Set<T>

/** Type of key based on the collection structure / Тип ключа в зависимости от структуры коллекции */
export type ForEachKey<D> = D extends readonly unknown[]
  ? number
  : D extends Set<infer S>
    ? S
    : D extends Map<infer K, unknown>
      ? K
      : string

export function forEach<T, R>(
  data: readonly T[],
  callback: (item: T, index: number, collection: readonly T[]) => R,
  saveUndefined?: boolean
): R[]

export function forEach<T, R>(
  data: Set<T>,
  callback: (item: T, key: T, collection: Set<T>) => R,
  saveUndefined?: boolean
): R[]

export function forEach<K, V, R>(
  data: Map<K, V>,
  callback: (item: V, key: K, collection: Map<K, V>) => R,
  saveUndefined?: boolean
): R[]

export function forEach<T, R, D extends Record<string, any> = Record<string, T>>(
  data: D & Record<string, T>,
  callback: (item: T, key: string, collection: D) => R,
  saveUndefined?: boolean
): R[]

export function forEach<
  T,
  R,
  D extends ForEachData<T> = ForEachData<T>,
  K = ForEachKey<D>
>(
  data: D & ForEachData<T>,
  callback: (item: T, key: K, collection: D) => R,
  saveUndefined?: boolean
): R[]

/**
 * The function performs the specified function once for each element in the collection (Array, Object, Map, Set)
 * and returns an array with the results of executing the function (omitting undefined values unless saveUndefined is true).
 *
 * Функция выполняет указанную функцию один раз для каждого элемента в коллекции (Array, Object, Map, Set)
 * и возвращает массив с результатами выполнения функции (пропуская значения undefined, если saveUndefined не равен true).
 * @param data object or collection for iteration / объект или коллекция для перебора
 * @param callback a function to execute for each element / функция, которая будет вызвана для каждого элемента
 * @param saveUndefined if true, the function will preserve undefined return values / если true, функция сохранит значения undefined
 * @returns returns an array with the results of executing the function / возвращает массив с результатами выполнения функции
 */
export function forEach<
  T,
  R,
  D extends ForEachData<T> = ForEachData<T>,
  K = ForEachKey<D>
>(
  data: D & ForEachData<T>,
  callback: (item: T, key: K, collection: D) => R,
  saveUndefined?: boolean
): R[] {
  if (isArray(data) && data.length === 0) {
    return []
  }

  if (isObject(data)) {
    const returnData: R[] = []

    /**
     * Adds a value to the return array if defined or saveUndefined is enabled.
     *
     * Добавляет значение в возвращаемый массив, если оно определено или включен saveUndefined.
     * @param value callback execution result / результат выполнения функции обратного вызова
     */
    const push = (value: R) => {
      if (
        saveUndefined
        || value !== undefined
      ) {
        returnData.push(value)
      }
    }

    if (isArray(data)) {
      for (let index = 0; index < data.length; index++) {
        push(callback(data[index] as T, index as unknown as K, data))
      }
    } else if (data instanceof Map) {
      for (const [key, item] of data as Map<unknown, T>) {
        push(callback(item, key as K, data))
      }
    } else if (data instanceof Set) {
      for (const item of data as Set<T>) {
        push(callback(item, item as unknown as K, data))
      }
    } else {
      const keys = Object.keys(data)

      for (let index = 0; index < keys.length; index++) {
        const key = keys[index]
        push(callback((data as Record<string, T>)[key], key as unknown as K, data))
      }
    }

    return returnData
  }

  return []
}
