import { executeFunction } from './executeFunction'

/**
 * Safely executes a function and awaits its result if it returns a Promise.
 * If the provided value is a static value or a synchronous function, it returns the result immediately wrapped in a Promise.
 *
 * Безопасно выполняет функцию и ожидает её результат, если она возвращает Promise.
 * Если переданное значение является статическим или синхронной функцией, возвращает результат немедленно, обернутым в Promise.
 * @param callback function, Promise or any value / функция, Promise или любое значение
 * @param args arguments of the function / аргументы функции
 * @returns promise resolving to the execution result / промис, разрешающийся результатом выполнения
 */
export async function executePromise<T, Args extends unknown[] = unknown[]>(
  callback: ((...args: Args) => PromiseLike<T> | T) | PromiseLike<T> | T,
  ...args: Args
): Promise<Awaited<T>> {
  const data = executeFunction(callback, ...args)

  return await data as Awaited<T>
}
