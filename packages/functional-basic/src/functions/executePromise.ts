import { executeFunction } from './executeFunction'

/**
 * Returns the execution result of an asynchronous function.
 *
 * Возвращает выполнение асинхронной функции.
 * @param callback function or any value/ функция или любое значение
 * @param args arguments of the function/ аргументы функции
 */
export async function executePromise<T>(
  callback: ((...args: any[]) => Promise<T>) | ((...args: any[]) => T) | T,
  ...args: any[]
): Promise<T> {
  const data = executeFunction<Promise<T> | T>(callback, ...args)

  if (data instanceof Promise) {
    return (await data)
  }

  return data as T
}
