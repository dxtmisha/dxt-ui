import { type FunctionArgs } from '../types/basicTypes'

/**
 * Checks if the function is a callback function.
 *
 * Проверяет, является ли функция обратного вызова.
 * @param callback the value being checked/ проверяемое значение
 */
export function isFunction<T>(callback: T): callback is Extract<T, FunctionArgs<any, any>> {
  return callback instanceof Function || typeof callback === 'function'
}
