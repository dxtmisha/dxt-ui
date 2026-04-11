/**
 * Creates a deep copy of an object.
 * By default, uses a lightweight JSON-based approach.
 *
 * Создает глубокую копию объекта.
 * По умолчанию использует облегченный подход на основе JSON.
 * @param value object for copying / объект для копирования
 * @param simplified if true, uses `JSON.parse` (fast, basic types); if false, uses `structuredClone` (slower, complex types) / если true, использует `JSON.parse` (быстро, базовые типы); если false, использует `structuredClone` (медленнее, сложные типы)
 * @param options options for structuredClone (transferable objects support) / опции для structuredClone (поддержка отчуждаемых объектов)
 * @returns returns a new copy of the object / возвращает новую копию объекта
 */
export function copyObject<T>(
  value: T,
  simplified: boolean = true,
  options?: StructuredSerializeOptions
): T {
  if (!simplified && typeof structuredClone !== 'undefined') {
    return structuredClone(value, options)
  }

  return JSON.parse(JSON.stringify(value)) as T
}
