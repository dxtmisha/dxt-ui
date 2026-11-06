import { type FunctionAnyType } from '../types/basicTypes'

/**
 * Checks whether the value is a function object, including a class constructor.
 *
 * Проверяет, является ли значение объектом-функцией, включая конструкторы классов.
 * @param callback the value being checked / проверяемое значение
 * @returns true for function objects / true для объектов-функций
 */
export function isFunction<T>(
  callback: T
): callback is 0 extends 1 & T
  ? Extract<FunctionAnyType, T>
  : [Extract<T, FunctionAnyType | NewableFunction>] extends [never]
      ? Extract<FunctionAnyType, T>
      : Extract<T, FunctionAnyType | NewableFunction> {
  return typeof callback === 'function'
}
