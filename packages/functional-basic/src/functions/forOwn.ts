import { isObject } from './isObject'
import { isPrototypeKey } from './isPrototypeKey'

/**
 * Iterates over own enumerable properties of an object, safely skipping prototype pollution keys (__proto__, constructor, prototype).
 * Supports early termination when the callback returns false.
 *
 * Перебирает собственные перечисляемые свойства объекта, безопасно пропуская ключи загрязнения прототипа (__proto__, constructor, prototype).
 * Поддерживает досрочное прерывание, если функция обратного вызова возвращает false.
 * @param data object for iteration / объект для перебора
 * @param callback a function executed for each property / функция, выполняемая для каждого свойства
 */
export function forOwn<
  T extends object = Record<string, unknown>,
  K extends Extract<keyof T, string> = Extract<keyof T, string>
>(
  data?: T,
  callback?: (value: T[K], key: K, collection: T) => void | boolean
): void {
  if (!isObject(data) || !callback) {
    return
  }

  for (const key in data) {
    if (
      Object.hasOwn(data, key)
      && !isPrototypeKey(key)
      && callback((data as Record<string, unknown>)[key] as T[K], key as K, data) === false
    ) {
      break
    }
  }
}
