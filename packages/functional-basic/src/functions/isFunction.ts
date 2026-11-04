/**
 * Checks whether the value is a function object, including a class constructor.
 *
 * Проверяет, является ли значение объектом-функцией, включая конструкторы классов.
 * @param callback the value being checked / проверяемое значение
 * @returns true for function objects / true для объектов-функций
 */
export function isFunction(callback: unknown): callback is CallableFunction | NewableFunction {
  return typeof callback === 'function'
}
