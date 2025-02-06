import { isFunction } from './isFunction'

import { type FunctionArgs } from '../types/basicTypes'

/**
 * The function is executed and returns its result. Or returns the input data, if it is not a function.
 *
 * Выполняется функция и возвращает ее результат. Или возвращает входные данные, если это не функция
 * @param callback function or any value/ функция или любое значение
 */
export function executeFunction<T>(callback: T): Exclude<T, FunctionArgs<any, T>> {
  return isFunction(callback) ? callback() : callback
}
