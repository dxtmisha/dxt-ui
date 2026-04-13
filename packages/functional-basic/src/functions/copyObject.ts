/**
 * Creates a deep copy of an object for independent data management.
 * The goal of the method is to get a completely new separate instance of the object to avoid unwanted mutations.
 *
 * Создает глубокую копию объекта для независимого управления данными.
 * Цель метода — получить полностью новый отдельный экземпляр объекта во избежание нежелательных мутаций.
 * @param value object for copying / объект для копирования
 * @returns returns a new copy of the object / возвращает новую копию объекта
 */
export function copyObject<T>(
  value: T
): T {
  return JSON.parse(JSON.stringify(value)) as T
}
