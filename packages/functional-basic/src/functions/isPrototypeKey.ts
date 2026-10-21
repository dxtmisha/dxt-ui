/**
 * Checks if a property key belongs to prototype pollution keys (__proto__, constructor, prototype).
 *
 * Проверяет, относится ли ключ свойства к ключам загрязнения прототипа (__proto__, constructor, prototype).
 * @param key property key to check / ключ свойства для проверки
 * @returns true if key is a prototype pollution key / true, если ключ относится к загрязнению прототипа
 */
export function isPrototypeKey(key: unknown): boolean {
  return key === '__proto__' || key === 'constructor' || key === 'prototype'
}
