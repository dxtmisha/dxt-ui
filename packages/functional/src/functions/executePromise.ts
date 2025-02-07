import { executeFunction } from './executeFunction'

/**
 * Returns the execution result of an asynchronous function.
 *
 * Возвращает выполнение асинхронной функции.
 * @param callback function or any value/ функция или любое значение
 */
export async function executePromise<T>(
  callback: (() => Promise<T>) | (() => T) | T
): Promise<T> {
  const data = executeFunction(callback)

  if (data instanceof Promise) {
    return (await data)
  }

  return data as T
}
