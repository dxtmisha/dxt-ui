/**
 * Conversion to array.<br>
 * Преобразование в массив.
 * @param value input value /<br>входное значение
 */
export function toArray<T>(value: T): T extends any[] ? T : [T] {
  return (Array.isArray(value) ? value : [value]) as T extends any[] ? T : [T]
}
