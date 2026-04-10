/**
 * Returns the key with a prefix.
 *
 * Возвращает ключ с префиксом.
 * @param key key name / название ключа
 * @returns key with prefix / ключ с префиксом
 */
export function getKey(key: string) {
  return `translate:${key}`
}
