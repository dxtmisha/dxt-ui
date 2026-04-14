import { isFunction } from './isFunction'

import { type FunctionArgs } from '../types/basicTypes'

/**
 * Flexible utility that executes the provided argument if it is a function, otherwise returns it as is.
 * Supports passing arbitrary arguments to the callback.
 *
 * Универсальная утилита, которая выполняет переданный аргумент, если он является функцией, иначе возвращает его без изменений.
 * Поддерживает передачу произвольных аргументов в функцию обратного вызова.
 * @param callback function or any value / функция или любое значение
 * @param args arguments of the function / аргументы функции
 * @returns result of the execution or the value itself / результат выполения или само значение
 */
export function executeFunction<T>(
  callback: T | FunctionArgs<any, T>,
  ...args: any[]
): T {
  return isFunction(callback) ? callback(...args) : callback
}
