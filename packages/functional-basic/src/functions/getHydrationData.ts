/**
 * Retrieves and parses JSON data from a script tag in the DOM.
 *
 * Извлекает и парсит JSON данные из тега скрипта в DOM.
 * @param id script tag ID / ID тега скрипта
 * @param defaultValue default value if not found or invalid / значение по умолчанию, если не найдено или невалидно
 */
export function getHydrationData<T>(id: string, defaultValue: T): T {
  if (typeof document !== 'undefined') {
    const script = document.getElementById(id)

    if (script) {
      try {
        return JSON.parse(script.textContent || '') as T
      } catch (error) {
        console.error(`[Hydration] Failed to parse data for ID "${id}":`, error)
      }
    }
  }

  return defaultValue
}
